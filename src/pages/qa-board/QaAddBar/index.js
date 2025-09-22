
import qaAddBarStyles from "./qaAddBarStyles.module.scss"
const QaAddBar = ({ showNew, setShowNew, newQ, setNewQ, newA, setNewA, addNew, discardNew, items }) => {
    return (
        <div className={`${qaAddBarStyles.addBar} ${!showNew ? qaAddBarStyles.addBarActive : ""}`}>
            {!showNew ? (
                <button className={qaAddBarStyles.addBtn} onClick={() => setShowNew(true)}>Add Question</button>
            ) : (
                <div className={qaAddBarStyles.addCard}>
                    <input id={`Write Q${items.length + 1}`} name={`Write Q${items.length + 1}`} className={qaAddBarStyles.input} placeholder={`Write Q${items.length + 1}...`} value={newQ} onChange={(e) => setNewQ(e.target.value)} />
                    <textarea id={`Answer Q${items.length + 1}`} name={`Answer Q${items.length + 1}`} className={qaAddBarStyles.textarea} rows={3} placeholder={`Answer Q${items.length + 1}...`} value={newA} onChange={(e) => setNewA(e.target.value)} />
                    <div className={qaAddBarStyles.addActions}>
                        <button className={qaAddBarStyles.saveBtn} onClick={addNew}>Save</button>
                        <button className={qaAddBarStyles.deleteBtn} onClick={discardNew}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default QaAddBar