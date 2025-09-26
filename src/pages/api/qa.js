import { promises as fs } from "fs";
import path from "path";

/**
 * DATA_DIR: Projenin kökünde (process.cwd()) /data klasörünü hedefler.
 * DATA_FILE: Q&A kayıtlarının tutulduğu JSON dosyası (data/qa.json).
 * 
 * Not: Bu dizin/dosya, uzun süre çalışan bir Node sunucusunda kalıcıdır.
 * (VPS, kendi server'ında). Serverless ortamlarda kalıcı olmaz.
 */
const DATA_DIR = path.join(process.cwd(), "qa-data");
const DATA_FILE = path.join(DATA_DIR, "qa.json");

/**
 * writeAll(data)
 * - JSON verisini diske güvenli (atomic) şekilde yazar.
 * - Önce .tmp dosyasına yazar, sonra rename ile asıl dosyanın üzerine alır.
 *   Böylece yazma sırasında elektrik kesilse bile dosya bozulma riski azalır.
 */
async function writeAll(data) {
    const tmp = DATA_FILE + ".tmp";
    await fs.writeFile(tmp, JSON.stringify(data, null, 2), "utf-8");
    await fs.rename(tmp, DATA_FILE); // atomic swap
}

/**
 * readAll()
 * - data klasörü yoksa oluşturur.
 * - qa.json dosyasını okur ve JS objesine parse eder.
 * - Dosya mevcut değilse (ENOENT), çağıran taraf try/catch ile
 *   boş veri dönebilir (aşağıdaki handler GET bloğunda yapıldığı gibi).
 */
async function readAll() {
    await fs.mkdir(DATA_DIR, { recursive: true }); // klasör yoksa oluştur
    const raw = await fs.readFile(DATA_FILE, "utf-8"); // dosyayı oku
    return JSON.parse(raw); // string → obje
}

/**
 * Next.js API route handler
 * İzin verilen metodlar: GET, POST
 *
 * GET  : Tüm Q&A verisini döndürür (threads array’i).
 * POST : Yeni bir Q&A kaydı ekler (question + answer zorunlu).
 */
export default async function handler(req, res) {
    // ----- GET: tüm kayıtları getir -----
    if (req.method === "GET") {
        try {
            const data = await readAll(); // { threads: [...] } bekliyoruz
            // console.log({ data }); // debug log
            return res.status(200).json(data);
        } catch (e) {
            // console.log({ e }); // örn. ENOENT (dosya yok) veya diğer hatalar
            if (e.code === "ENOENT") {
                // Dosya hiç oluşturulmamışsa ilk kez çalışıyor olabiliriz.
                // Boş bir liste döndürmek kullanıcı deneyimi açısından yeterli.
                return res.status(200).json({ threads: [] });
            }
            // Diğer tüm hatalarda 500
            return res.status(500).json({ error: "read_failed" });
        }
    }

    // ----- POST: yeni kayıt ekle -----
    if (req.method === "POST") {
        try {
            const { question, answer } = req.body || {};

            // Basit input doğrulaması
            if (!question?.trim() || !answer?.trim()) {
                return res.status(400).json({ error: "question & answer required" });
            }

            // Mevcut veriyi yükle
            const db = await readAll();

            // Yeni kayıt (ID: zaman + random; createdAt/updatedAt mili-saniye cinsinden)
            const item = {
                id: "q" + (Date.now().toString(36) + Math.random().toString(36).slice(2, 6)),
                question: question.trim(),
                answer: answer.trim(),
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };

            // Güvenli tarafta kalmak için threads’in array olduğundan emin ol
            db.threads = Array.isArray(db.threads) ? db.threads : [];

            // Yeni kaydı listenin başına ekle (en güncel en üstte)
            db.threads.push(item);

            // Diske yaz (atomic)
            await writeAll(db);

            // 201 Created + eklenen kaydı döndür
            return res.status(201).json(item);
        } catch (e) {
            console.log("POST /api/qa failed:", e);
            return res.status(500).json({ error: "write_failed" });
        }
    }
    if (req.method === "PUT") {
        try {
            const { id, question, answer } = req.body || {};
            if (!id) return res.status(400).json({ error: "id required" });

            const db = await readAll();
            db.threads = Array.isArray(db.threads) ? db.threads : [];

            const i = db.threads.findIndex(t => t.id === id);
            if (i === -1) return res.status(404).json({ error: "not_found" });

            if (typeof question === "string") db.threads[i].question = question.trim();
            if (typeof answer === "string") db.threads[i].answer = answer.trim();
            db.threads[i].updatedAt = Date.now();

            await writeAll(db);
            return res.status(200).json(db.threads[i]);
        } catch (e) {
            console.log("PUT /api/qa failed:", e);
            return res.status(500).json({ error: "update_failed" });
        }
    }

    // ----- DELETE: kaydı sil -----
    if (req.method === "DELETE") {
        try {
            // id'yi query'den bekliyoruz: /api/qa?id=...
            const { id } = req.query || {};
            if (!id) return res.status(400).json({ error: "id required" });

            const db = await readAll();
            db.threads = Array.isArray(db.threads) ? db.threads : [];

            const beforeLen = db.threads.length;
            db.threads = db.threads.filter(t => t.id !== id);
            if (db.threads.length === beforeLen) {
                return res.status(404).json({ error: "not_found" });
            }

            await writeAll(db);
            return res.status(204).end(); // içerik yok
        } catch (e) {
            console.log("DELETE /api/qa failed:", e);
            return res.status(500).json({ error: "delete_failed" });
        }
    }

    // En altta:
    res.setHeader("Allow", "GET,POST,PUT,DELETE");
    return res.status(405).end("Method Not Allowed");
}
