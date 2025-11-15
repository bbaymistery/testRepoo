import QuestionsAccordion from "../QuestionsAccordion";
import styles from "./styles.module.scss";

/**
 * 📘 TextContentDynamic Component
 * Dinamik veri alan, ancak senin mevcut componentindeki görünümü KORUYAN versiyon.
 */
const TextContentDynamic = ({ content }) => {
    return (
        <div className={styles.text_content}>
            {content.map((section, index) => (
                <div key={index} className={`${styles.section} ${section.chainList ? styles.chainsection : ""} `} >
                    {/* H2 başlık */}
                    {section.title && <h2>{section.title}</h2>}

                    {/* Alt başlık (örneğin "Office Address") */}
                    {section.subtitle && <h3>{section.subtitle}</h3>}

                    {/* Paragraflar */}
                    {section.paragraphs &&
                        section.paragraphs.map((p, i) => (
                            <p key={i} dangerouslySetInnerHTML={{ __html: p }} style={section.paragraphStyle || {}} ></p>
                        ))}

                    {/* table render */}
                    {section.table && (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    {section.table.headers.map((h, i) => (
                                        <th key={i} style={section.table.th ? { width: section.table.th } : {}}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {section.table.rows.map((row, rIdx) => (
                                    <tr key={rIdx}>
                                        {row.map((col, cIdx) => (
                                            <td key={cIdx}>{col}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* AFTER TABLE PARAGRAPHS */}
                    {section.afterTable &&
                        section.afterTable.map((p, i) => (
                            <p
                                key={i}
                                dangerouslySetInnerHTML={{ __html: p }}
                                style={section.paragraphStyle || {}}
                            ></p>
                        ))}
                    {/* Liste */}
                    {section.list && (
                        <ul>
                            {section.list.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ul>
                    )}

                    {section.listNumbered && (
                        <ol>
                            {section.listNumbered.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ol>
                    )}
                    {/* Paragraf after listler */}
                    {section.paragraphsAfterList &&
                        section.paragraphsAfterList.map((p, i) => (
                            <p key={i} dangerouslySetInnerHTML={{ __html: p }} style={section.paragraphStyle || {}} ></p>
                        ))}
                    {/* Accordion component */}
                    {section.accordion && (<QuestionsAccordion questions={section.accordion} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default TextContentDynamic;
