import styles from "./styles.module.scss";
import MessageForm from "../MessageForm";



/**
 * Props:
 * - shift
 * - items: mesajların hepsi (parent filtrelemiş de yollayabilir)
 * - byShift(shift): function -> o sütundaki mesajlar
 * - editing: {id, author, text, status} | null
 * - onStartEdit(item)
 * - onCancelEdit()
 * - onSaveEdit(id, values)
 * - onDelete(id)
 * - renderAddPanel(): JSX (parent add form'u buradan yollasın)
 */
export default function MsgEditBlock({ shift, byShift, editing, onStartEdit, onCancelEdit, onSaveEdit, onDelete, renderAddPanel, }) {
    const list = byShift(shift);

    return (
        <>
            <div className={styles.cards}>
                {list.length === 0 && <div className={styles.empty}>No messages.</div>}

                {list.map((p) => {
                    console.log({ p });

                    const isEditing = editing?.id === p.id;
                    return (
                        <article key={p.id} className={styles.card} >
                            {isEditing ? (
                                <MessageForm
                                    initial={{ author: p.author, text: p.text, status: p.status, date: editing.date }}
                                    submitLabel="Save"
                                    onSubmit={(vals) => onSaveEdit(p.id, vals)}
                                    onCancel={onCancelEdit} autoFocus />
                            ) : (
                                <div className={`${styles.reading_box}  ${p.status === "resolved" ? styles.reading_boxResolved : styles.reading_boxPending}`} >
                                    <div className={styles.cardText}>{p.text}</div>
                                    <div className={styles.meta}>
                                        <span className={styles.author}>{p.author}</span>
                                        <span className={styles.dot}>•</span>
                                        <time title={`Updated: ${fmt(p.createdAt)}`}>
                                            {fmt(p.createdAt)}
                                        </time>

                                        <span className={`${styles.badge} ${p.status === "resolved" ? styles.badgeResolved : styles.badgePending}`} title={`Status: ${p.status}`}  >
                                            {p.status === "resolved" ? "Resolved" : "Pending"}
                                        </span>
                                    </div>
                                    {
                                        p.updatedAt === p.createdAt ? null : <div className={`${styles.updatedAt}`}>Last updated: {fmt(p.updatedAt)}</div>
                                    }

                                    <div className={styles.actions}>
                                        <button className={styles.iconBtn} title="Edit" onClick={() => onStartEdit(p)}   >
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className={styles.iconBtn} title="Delete" onClick={() => onDelete(p.id)}     >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>

            {/* Add panel slot (parent'tan gelir) */}
            {renderAddPanel?.()}
        </>
    );
}
