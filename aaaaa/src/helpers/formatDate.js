export function formatDate(date, monthStyle = "short", language = "en") {
    if (!date) return "";

    // locale haritalaması (tarayıcı destekli ISO kodları)
    const localeMap = {
        en: "en-GB",
        tr: "tr-TR",
        es: "es-ES",
        it: "it-IT",
        ar: "ar-SA",
        ru: "ru-RU",
        zh: "zh-CN",
    };

    const locale = localeMap[language] || "en-GB";

    try {
        const dateOnly = typeof date === "string" ? date.split(" ")[0] : date;
        const d = new Date(dateOnly);
        if (isNaN(d)) return date;

        return d.toLocaleDateString(locale, {
            day: "numeric",
            month: monthStyle,
            year: "numeric",
        });
    } catch (err) {
        console.error("Date format error:", err);
        return date;
    }
}