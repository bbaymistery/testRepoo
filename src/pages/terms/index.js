

import { parse } from "url";
import { JSDOM } from "jsdom";
import { useSelector } from "react-redux";
import GlobalLayout from "../../components/layouts/GlobalLayout";
import { checkLanguageAttributeOntheUrl } from "../../helpers/checkLanguageAttributeOntheUrl";
import { fetchContent } from "../../helpers/fetchContent";
import styles from "./styles.module.scss";

/**
 * 📘 FAQ PAGE COMPONENT
 * ------------------------------------------
 * Bu sayfa dinamik olarak CMS’ten alınan "FAQ" içeriğini SSR (Server-Side Rendering) ile yükler.
 * Ayrıca CMS’ten gelen <head> tag’inin içeriği parse edilip,
 * Next.js <Head> bileşeni aracılığıyla gerçek HTML <head> kısmına yerleştirilir.
 */
const Terms = (props) => {
    // ✅ Props’tan gelen tüm içerik ve meta veriler
    const {
        pageTitle,
        keywords,
        metaDescription,
        pageContent,
        mainCanonicalUrl,
        extractedHeadTags, // → SSR aşamasında parse edilen head tag’leri
    } = props;

    // ✅ Redux store’dan “direction” (LTR / RTL) bilgisi
    const state = useSelector((state) => state.pickUpDropOffActions);
    const { params: { direction }, } = state;

    return (
        <GlobalLayout innerHeadTags={extractedHeadTags} mainCanonicalUrl={mainCanonicalUrl} keywords={keywords} title={pageTitle} description={metaDescription} footerbggray={true}  >
            <div className={`${styles.terms} ${direction} page`} >
                <div className={`${styles.terms_section} page_section`}>
                    <div className={`page_section_container`} >
                        <div  dangerouslySetInnerHTML={{ __html: pageContent }} />
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
};

export default Terms;

/**
 * ⚙️ SERVER-SIDE DATA FETCHING (getServerSideProps)
 * -------------------------------------------------
 * Sayfa istek anında SSR modunda çalışır.
 * - CMS’ten FAQ içeriği ve meta veriler alınır.
 * - Eğer gelen HTML içerisinde <head> etiketi varsa, JSDOM kullanılarak parse edilir.
 * - <head> içindeki <meta>, <title>, <link>, <script> ve <style> etiketleri JSON’a çevrilir.
 * - Bu JSON array'i React tarafına "extractedHeadTags" olarak gönderilir.
 *   (Artık client’ta yeniden inject etmeye gerek kalmaz.)
 */
export async function getServerSideProps({ req }) {
    // 🌐 URL üzerinden aktif dil tespiti yapılır
    const firstLoadLangauge = checkLanguageAttributeOntheUrl(req?.url);

    // 🍪 Kullanıcının cookie bilgileri alınır (örneğin dil/oturum için)
    const { cookie } = req.headers;

    // 📍 Şu anki path bilgisi alınır (/faq gibi)
    const { pathname } = parse(req?.url, true);

    // 📡 CMS veya backend API'den içerik çekilir
    const { metaTitle, keywords, pageContent, metaDescription, shortDescription, pageTitle, canonicalUrl: mainCanonicalUrl, } =
        await fetchContent("/terms", cookie, firstLoadLangauge, pathname, "/terms");

    // 🔍 Başlangıç değişkenleri
    let extractedHeadTags = null;
    let cleanPageContent = pageContent;

    try {
        /**
         * 🧠 HEAD PARSING (Server Tarafında)
         * --------------------------------------------
         * Eğer gelen HTML'de <head> etiketi varsa:
         *  - JSDOM kullanılarak DOM parse edilir.
         *  - <head> içindeki tüm desteklenen etiketler çıkarılır.
         *  - Her etiket, { tag, attrs, content } formatında JSON objesine dönüştürülür.
         */
        if (typeof pageContent === "string" && pageContent.includes("<head")) {
            const dom = new JSDOM(pageContent);
            const head = dom.window.document.querySelector("head");

            if (head) {
                // 🎯 Yalnızca belirli tag’leri alıyoruz
                extractedHeadTags = Array.from(head.children)
                    .map((node) => {
                        return {
                            tag: node.tagName.toLowerCase(),
                            attrs: Object.fromEntries(
                                [...node.attributes].map((a) => [a.name, a.value])
                            ),
                            content: node.textContent || null,
                        }
                    });

                // 🧹 Body içeriğinden <head> kısmı tamamen kaldırılır
                cleanPageContent = pageContent.replace(/<head[^>]*>[\s\S]*?<\/head>/i, "");

                console.log("✅ Head etiketleri parse edildi ve JSON'a çevrildi.");
            }
        }
    } catch (err) {
        console.error("❌ Head parse hatası:", err);
    }

    return {
        props: { extractedHeadTags, metaTitle, keywords, pageContent: cleanPageContent || "", metaDescription, shortDescription, pageTitle, mainCanonicalUrl, },
    };
}
