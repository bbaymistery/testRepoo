import { useEffect, useMemo, useState } from "react";
import GlobalLayout from "../../components/layouts/GlobalLayout";
import styles from "./styles.module.scss";
import MsgHeader from "./MsgHeader";
import MsgEditBlock from "./MsgEditBlock";
import MessageForm from "./MessageForm";

const keywords = "shift message board";
const metaTitle = "Shift Message Board";
const metaDescription = "Small cards per shift with author & timestamps.";

const SHIFTS = ["morning", "evening", "night"];
const LABEL = { morning: "Morning", evening: "Evening", night: "Night" };



export default function ShiftBoard() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [editing, setEditing] = useState(null);    // {id, author, text, status} | null
    const [newOpen, setNewOpen] = useState(null);    // 'morning' | 'evening' | 'night' | null

    const filtered = useMemo(() => {
        console.log({ query });

        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter(
            (p) =>
                p.text.toLowerCase().includes(q) ||
                p.author.toLowerCase().includes(q) ||
                p.status.toLowerCase().includes(q)
        );
    }, [items, query]);

    const byShift = (shift) => filtered.filter((p) => p.shift === shift);

    // // CRUD
    // const addsMsg = (shift, vals) => {
    //     const now = Date.now();
    //     const item = {
    //         id: "p" + (now.toString(36) + Math.random().toString(36).slice(2, 6)),
    //         shift,
    //         author: vals.author,
    //         text: vals.text,
    //         status: vals.status || "pending",
    //         createdAt: now,
    //         updatedAt: now,
    //     };
    //     setItems((prev) => [item, ...prev]);
    //     setNewOpen(null);
    // };
    const addMsg = async (shift, vals) => {
        try {
            const r = await fetch("/api/shifts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // formdan gelen createdAt (London date → ms) vs. hepsini gönderiyoruz
                body: JSON.stringify({ ...vals, shift }),
            });
            if (!r.ok) {
                console.warn("POST /api/shifts failed", await r.text());
                return;
            }
            const item = await r.json();
            // API'nin döndürdüğünü listeye en üste koy
            setItems((prev) => [item, ...prev]);
            setNewOpen(null);
        } catch (e) {
            console.warn("POST /api/shifts error", e);
        }
    };
    const onStartEdit = (p) => {
        console.log(p);

        const createdDate = new Date(p.createdAt).toISOString().slice(0, 10);
        const updatedDate = new Date(p.updatedAt).toISOString().slice(0, 10);

        setEditing({
            id: p.id,
            author: p.author,
            text: p.text,
            status: p.status,
            createdDate, // "2025-09-25"
            updatedDate, // "2025-09-25",
            date: createdDate,
        });

    }

    const onCancelEdit = () => setEditing(null);

    // const onSaveEsdit = (id, vals) => {
    //     const now = Date.now();
    //     setItems((prev) =>
    //         prev.map((p) =>
    //             p.id === id
    //                 ? {
    //                     ...p,
    //                     author: vals.author,
    //                     text: vals.text,
    //                     status: vals.status,
    //                     updatedAt: now,
    //                 }
    //                 : p
    //         )
    //     );
    //     setEditing(null);
    // };
    // ShiftBoard.jsx içinde
    const onSaveEdit = async (id, vals) => {
        try {
            const r = await fetch("/api/shifts", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                // MessageForm vals: {author, text, status, createdAt}
                body: JSON.stringify({ id, ...vals }),
            });
            if (!r.ok) {
                console.warn("PUT /api/shifts failed", await r.text());
                return;
            }
            const updated = await r.json();
            setItems((prev) => prev.map((p) => (p.id === id ? updated : p)));
            setEditing(null);
        } catch (e) {
            console.warn("PUT /api/shifts error", e);
        }
    };

    const onDelete = async (id) => {

        // setItems((prev) => prev.filter((p) => p.id !== id));
        // (İsteğe bağlı) kullanıcıya onay sor
        // if (!confirm("Delete this message?")) return;

        try {
            const r = await fetch(`/api/shifts?id=${encodeURIComponent(id)}`, {
                method: "DELETE",
            });
            if (!r.ok && r.status !== 204) {
                console.warn("DELETE /api/shifts failed", r.status, await r.text());
                return;
            }
            // başarılı → state’ten düş
            setItems((prev) => prev.filter((p) => p.id !== id));
        } catch (e) {
            console.warn("DELETE /api/shifts error", e);
        }
    }
    const getMessages = async (par) => {
        try {
            const r = await fetch("/api/shifts");
            const d = await r.json();               // { messages: [...] }
            console.log(d);

            setItems(d.messages || []);
        } catch (e) {
            console.warn("GET /api/shifts failed", e);
        }
    }
    useEffect(() => {
        getMessages();
    }, []);
    return (
        <GlobalLayout keywords={keywords} title={metaTitle} description={metaDescription} footerbggray>
            <div className="page">
                <div className="page_section">
                    <div className="page_section_container">

                        <MsgHeader query={query} setQuery={setQuery} />

                        <div className={styles.columns}>
                            {SHIFTS.map((shift) => (
                                <section key={shift} className={styles.column}>
                                    <header className={styles.colHead}>
                                        <h2 className={styles.colTitle}>{LABEL[shift]}</h2>
                                    </header>

                                    <MsgEditBlock
                                        shift={shift}
                                        byShift={byShift}
                                        editing={editing}
                                        onStartEdit={onStartEdit}
                                        onCancelEdit={onCancelEdit}
                                        onSaveEdit={onSaveEdit}
                                        onDelete={onDelete}
                                        renderAddPanel={() =>
                                            newOpen === shift ? (
                                                <MessageForm
                                                    initial={{ author: "", text: "", status: "pending", date: "2025-09-25" }}
                                                    submitLabel="Add"
                                                    onSubmit={(vals) => addMsg(shift, vals)}
                                                    onCancel={() => setNewOpen(null)}
                                                    autoFocus
                                                />
                                            ) : (
                                                <div className={styles.addPanel}>
                                                    <button className={styles.addBtn} onClick={() => setNewOpen(shift)}  >
                                                        Add Message
                                                    </button>
                                                </div>
                                            )
                                        }
                                    />
                                </section>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
}
