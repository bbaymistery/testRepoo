import { memo } from "react";
import qaheaderStyles from "./qaheaderStyles.module.scss"


const QaHeader = ({ setQuery, query }) => {
    return (
        <div className={qaheaderStyles.qa_header}>
            <div className={qaheaderStyles.headerRight}>
                <div className={qaheaderStyles.icon} aria-hidden><i className="fa-solid fa-car"></i></div>
                <h1 className={qaheaderStyles.title}>APL Staff Training Handbook</h1>
            </div>
            <div className={qaheaderStyles.search}>
                <input name="qa-search" id="qa-search" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search questions..." aria-label="Search" />
                {query && (
                    <button type="button" className={qaheaderStyles.clearBtn} onClick={() => setQuery("")} aria-label="Clear search" title="Clear">×</button>
                )}
            </div>
        </div>
    )
}
export default memo(QaHeader);