// pages/api/shifts/index.js
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "msg-board-data");
const DATA_FILE = path.join(DATA_DIR, "shift.json");

// JSON oku
async function readAll() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}
// JSON yaz (atomic)
async function writeAll(data) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const tmp = DATA_FILE + ".tmp";
  await fs.writeFile(tmp, JSON.stringify(data, null, 2), "utf-8");
  await fs.rename(tmp, DATA_FILE);
}
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await readAll();            // { messages: [...] }
      return res.status(200).json(data);
    } catch (e) {
      if (e.code === "ENOENT") {
        // dosya ilk kez yoksa
        return res.status(200).json({ messages: [] });
      }
      console.error("GET /api/shifts error:", e);
      return res.status(500).json({ error: "read_failed" });
    }
  }

  if (req.method === "POST") {
    try {
      const body = req.body || {};
      const { shift, author, text, status } = body;

      // basit doğrulama
      if (!shift || !author?.trim() || !text?.trim()) {
        return res.status(400).json({ error: "shift, author, text are required" });
      }

      // dosyayı oku (ilk çalıştırmada boş oluştur)
      let db;
      try {
        db = await readAll();
      } catch (e) {
        if (e.code === "ENOENT") db = { messages: [] };
        else throw e;
      }
      db.messages = Array.isArray(db.messages) ? db.messages : [];

      const now = Date.now();
      let newId = "p" + (now.toString(36) + Math.random().toString(36).slice(2, 6));
      const item = {
        id: newId,
        shift,
        author: author.trim(),
        text: text.trim(),
        status,
        createdAt: now,
        updatedAt: now,
      };

      // en üste ekle (yeniler üstte)
      db.messages.unshift(item);
      await writeAll(db);

      return res.status(201).json(item);
    } catch (e) {
      console.error("POST /api/shifts error:", e);
      return res.status(500).json({ error: "write_failed" });
    }
  }
  if (req.method === "PUT") {
    try {
      const body = req.body || {};
      const { id, author, text, status, } = body;
      if (!id) return res.status(400).json({ error: "id required" });

      let db;
      try {
        db = await readAll();
      } catch (e) {
        if (e.code === "ENOENT") db = { messages: [] };
        else throw e;
      }
      db.messages = Array.isArray(db.messages) ? db.messages : [];

      const idx = db.messages.findIndex((m) => m.id === id);
      if (idx === -1) return res.status(404).json({ error: "not_found" });

      const now = Date.now();
      const prev = db.messages[idx];

      const next = { ...prev, author, text, status, createdAt: prev.createdAt, updatedAt: now, };

      db.messages[idx] = next;
      await writeAll(db);

      return res.status(200).json(next);
    } catch (e) {
      console.error("PUT /api/shifts error:", e);
      return res.status(500).json({ error: "update_failed" });
    }
  }
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;              // /api/shifts?id=XYZ
      if (!id) return res.status(400).json({ error: "id required" });

      let db;
      try {
        db = await readAll();
      } catch (e) {
        if (e.code === "ENOENT") db = { messages: [] };
        else throw e;
      }
      db.messages = Array.isArray(db.messages) ? db.messages : [];

      const idx = db.messages.findIndex((m) => m.id === id);
      if (idx === -1) return res.status(404).json({ error: "not_found" });

      db.messages.splice(idx, 1);
      await writeAll(db);

      // içerik yok
      return res.status(204).end();
    } catch (e) {
      console.error("DELETE /api/shifts error:", e);
      return res.status(500).json({ error: "delete_failed" });
    }
  }
  // şimdilik sadece GET
  res.setHeader("Allow", "GET", "POST", "DELETE", "PUT");
  return res.status(405).end("Method Not Allowed");
}
