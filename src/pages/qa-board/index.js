import { useEffect, useMemo, useState } from "react";
import GlobalLayout from "../../components/layouts/GlobalLayout";
import styles from "./styles.module.scss";
import QaHeader from "./QaHeader";
import QaAddBar from "./QaAddBar";

const keywords = "qa board";
const metaTitle = "Airport Pickup London QA Board";
const metaDescription = "You can find frequently asked questions and answers about our airport pickup services in London.";





const QaBoard = () => {
    const [items, setItems] = useState([]);
    const [editing, setEditing] = useState(null); // { id, question, answer }
    const [query, setQuery] = useState("");

    // add form state
    const [showNew, setShowNew] = useState(false);
    const [newQ, setNewQ] = useState("");
    const [newA, setNewA] = useState("");

    // EDIT: tek item için hem soru hem cevap editlensin
    const startEdit = (item) => setEditing({ id: item.id, question: item.question, answer: item.answer });
    const cancelEdit = () => setEditing(null);

    const saveEdit = async () => {
        if (!editing) { alert("No changes to save."); return; }
        try {
            const r = await fetch("/api/qa", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: editing.id, question: editing.question, answer: editing.answer }),
            });
            if (!r.ok) { console.warn("PUT /api/qa failed", await r.text()); return; }
            const updated = await r.json();
            setItems(prev => prev.map(it => it.id === updated.id ? updated : it));
            setEditing(null);
        } catch (e) {
            console.warn("PUT /api/qa error", e);
        }
    };
    const deleteQnA = async (id) => {
        // setItems(prev => prev.filter(it => it.id !== id));
        try {
            const r = await fetch(`/api/qa?id=${encodeURIComponent(id)}`, { method: "DELETE" });
            if (!r.ok && r.status !== 204) {
                console.warn("DELETE /api/qa failed", r.status, await r.text());
                return;
            }
            // başarılıysa state'ten düş
            setItems(prev => prev.filter(it => it.id !== id));
        } catch (e) {
            console.warn("DELETE /api/qa error", e);
        }

    }



    // add new item
    const addNew = async () => {
        const q = newQ.trim(), a = newA.trim();
        if (!q || !a) { alert("Both question and answer are required."); return; }

        try {
            const r = await fetch("/api/qa", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: q, answer: a }),
            });
            if (!r.ok) { console.warn("POST /api/qa failed", await r.text()); return; }
            const item = await r.json();
            setItems(prev => [...prev, item]);
            setNewQ(""); setNewA(""); setShowNew(false);
        } catch (e) {
            console.warn("POST /api/qa error", e);
        }
    };

    // delete (discard) the opened add box
    const discardNew = () => {
        setNewQ("");
        setNewA("");
        setShowNew(false);
    };

    // filter (question or answer)
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter(it =>
            it.question.toLowerCase().includes(q) || it.answer.toLowerCase().includes(q)
        );
    }, [items, query]);

    useEffect(() => {
        (async () => {
            try {
                const r = await fetch("/api/qa");
                const d = await r.json();
                setItems(d.threads || []);
            } catch (e) {
                console.warn("Fetch /api/qa failed", e);
            }
        })();
    }, []);

    return (
        <GlobalLayout keywords={keywords} title={metaTitle} description={metaDescription} footerbggray={true}>
            <div className={`${styles.qa} page`}>
                <div className={`page_section`}>
                    <div className={`page_section_container`}>

                        <QaHeader setQuery={setQuery} query={query} />
                        <QaAddBar
                            items={items} showNew={showNew} setShowNew={setShowNew}
                            newQ={newQ} setNewQ={setNewQ} newA={newA} setNewA={setNewA}
                            addNew={addNew} discardNew={discardNew}
                        />

                        <div className={styles.list}>
                            {filtered.length === 0 ? (
                                <div className={styles.empty}>No results found.</div>
                            ) : (
                                filtered.map((it, idx) => {
                                    const isEditing = editing?.id === it.id;
                                    const qIndex = idx + 1;

                                    return (
                                        <div key={it.id} className={styles.item}>
                                            {/* Question Row */}
                                            <div className={styles.line}>
                                                <div className={styles.qLabel}>{`Q${qIndex}.`}</div>
                                                <div className={styles.content}>
                                                    <h3 className={styles.qTitle}>
                                                        {isEditing ? (
                                                            <input
                                                                className={styles.input}
                                                                value={editing.question}
                                                                onChange={(e) => setEditing(s => ({ ...s, question: e.target.value }))}
                                                                placeholder="Question..."
                                                            />
                                                        ) : (
                                                            it.question
                                                        )}
                                                    </h3>
                                                </div>
                                                <div className={styles.actions}>
                                                    {isEditing ? (
                                                        <>
                                                            <button className={styles.saveBtn} onClick={saveEdit}>Save</button>
                                                            <button className={styles.cancelBtn} onClick={cancelEdit}>Cancel</button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <button
                                                                title="Edit this Q&A"
                                                                className={styles.editBtn}
                                                                onClick={() => startEdit(it)}
                                                            >
                                                                <i className="fas fa-edit"></i>
                                                            </button>
                                                            <button
                                                                className={styles.cancelBtn}
                                                                onClick={() => deleteQnA(it.id)}
                                                                title="Delete this Q&A"
                                                            >
                                                                <i className="fa-solid fa-trash" />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Answer Row */}
                                            <div className={`${styles.line} ${styles.answerLine}`}>
                                                <div className={styles.aLabel}>A:</div>
                                                <div className={styles.content}>
                                                    {isEditing ? (
                                                        <textarea
                                                            className={styles.textarea}
                                                            rows={3}
                                                            value={editing.answer}
                                                            onChange={(e) => setEditing(s => ({ ...s, answer: e.target.value }))}
                                                            placeholder="Answer..."
                                                        />
                                                    ) : (
                                                        <p className={styles.answer}>{it.answer}</p>
                                                    )}
                                                </div>
                                                {/* boş actions sütunu (grid yapısını bozmasın diye) */}
                                                <div className={styles.actions}></div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        <br /><br />
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
};

export default QaBoard;
