import styles from "./styles.module.scss"
const MsgAdd = ({ newOpen, setNewOpen, shift, newAuthor, setNewAuthor, newText, setNewText, newStatus, setNewStatus, addMsg }) => {
    return newOpen === shift ? (
        <div className={styles.addPanel}>
            <input id='addAuthor' name='addAuthor' className={styles.input} placeholder="Author" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
            <textarea id='addText' name='addText' className={styles.textarea} rows={3} placeholder="Write a message…" value={newText} onChange={(e) => setNewText(e.target.value)} />
            <div className={styles.row}>
                <label className={styles.lbl}>Status</label>
                <select id='addStatus' name='addStatus' className={styles.select} value={newStatus} onChange={(e) => setNewStatus(e.target.value)}   >
                    <option value="pending">Pending</option>
                    <option value="resolved">Resolved</option>
                </select>
            </div>
            <div className={styles.row}>
                <button className={styles.postBtn} onClick={() => addMsg(shift)}>Add</button>
                <button className={styles.cancelBtn} onClick={() => { setNewOpen(null); setNewAuthor(""); setNewText(""); setNewStatus("pending"); }}>Cancel</button>
            </div>
        </div>
    ) : (
        <div className={styles.addPanel}>
            <button className={styles.addBtn} onClick={() => setNewOpen(shift)}>Add Message</button>
        </div>
    )


}

export default MsgAdd