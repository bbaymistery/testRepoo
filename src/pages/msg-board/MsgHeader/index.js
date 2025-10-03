import styles from "./styles.module.scss"
const MsgHeader = ({ query, setQuery }) => {
    return (
        <div className={styles.header} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h1 className={styles.boardTitle}>Shift Message Board</h1>
            <div className={styles.search}>
                <input id="searchheader" name="searchheader" placeholder="Search messages, authors, or status…" value={query} onChange={(e) => setQuery(e.target.value)} />
                {!!query && (
                    <button className={styles.clearBtn} onClick={() => setQuery("")} aria-label="Clear">×</button>
                )}
            </div>
        </div>

    )
}

export default MsgHeader