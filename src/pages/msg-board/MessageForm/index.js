import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

/**
 * Reusable form for both ADD and EDIT.
 *
 * Props:
 * - initial: { author: string, text: string, status: "pending"|"resolved" }
 * - submitLabel: string ("Add" | "Save" vs)
 * - onSubmit(values) -> void    values: {author,text,status}
 * - onCancel() -> void
 * - autoFocus?: boolean
 */
export default function MessageForm({ initial = { author: "", text: "", status: "pending", date: "" }, submitLabel = "Save", onSubmit, onCancel, autoFocus = false, }) {
    const [author, setAuthor] = useState(initial.author);
    const [text, setText] = useState(initial.text);
    const [status, setStatus] = useState(initial.status || "pending");
    const [date, setDate] = useState(initial.date || "");

    // initial değiştiğinde (ör. edit item değişti) inputları senkronla
    useEffect(() => {
        setAuthor(initial.author || "");
        setText(initial.text || "");
        setStatus(initial.status || "pending");
    }, [initial]);
    const toLondonTimestamp = (dateStr) => {
        // "2025-12-02" gibi geliyor
        const [year, month, day] = dateStr.split("-").map(Number);

        // London time zone’da 00:00:00 UTC ms değeri
        const dt = new Date(Date.UTC(year, month - 1, day));

        return dt.getTime();
    };

    const handleSubmit = () => {
        const a = author.trim();
        const t = text.trim();
        if (!a || !t) return;

        // date input’tan aldığın değer (örn. editing.createdDate veya newDate)
        const ts = toLondonTimestamp(date);

        onSubmit({
            author: a,
            text: t,
            status,
            createdAt: ts,
            updatedAt: Date.now(), // güncellenme için her zaman now
        });
    };


    return (
        <div className={styles.formWrap}>
            <input id="message-author" name="message-author" className={styles.input} placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} autoFocus={autoFocus} />
            <textarea id="message-text" name="message-text" className={styles.textarea} rows={3} placeholder="Write a message…" value={text} onChange={(e) => setText(e.target.value)} />
            <div className={styles.date_div}>
                <input className={styles.input} placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} type="date" min="2025-02-12" lang="en" id="message-date" name="message-date" />
                <i className={`fa-solid fa-calendar-days ${styles.date_picker_icon}`} ></i>
            </div>
            <div className={styles.row}>
                <label className={styles.lbl}>Status</label>
                <select className={styles.select} value={status} onChange={(e) => setStatus(e.target.value)}  >
                    <option value="pending">Pending</option>
                    <option value="resolved">Resolved</option>
                </select>
            </div>

            <div className={styles.row}>
                <button className={styles.saveBtn} onClick={handleSubmit}>
                    {submitLabel}
                </button>
                <button className={styles.cancelBtn} onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
