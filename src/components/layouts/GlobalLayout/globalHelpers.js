export function setHtmlLangAttr(language) {
    if (language) {
        document.documentElement.lang = language;
    } else {
        document.documentElement.lang = "en";

    }
}

export function registerZendeskLoader() {
    const loadZendesk = () => {
        if (document.getElementById("ze-snippet")) return;
        const script = document.createElement("script");
        script.id = "ze-snippet";
        script.src = "https://static.zdassets.com/ekr/snippet.js?key=473f7b02-4850-4045-8010-1fedf9752180";
        script.async = true;
        document.body.appendChild(script);

        // Temizleme (gerek kalmadı çünkü listener'lar once:true ile tanımlandı)
        window.removeEventListener("scroll", loadZendesk);
        window.removeEventListener("mousemove", loadZendesk);
        window.removeEventListener("touchstart", loadZendesk);
        window.removeEventListener("click", loadZendesk);
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", loadZendesk, { once: true });
        window.addEventListener("mousemove", loadZendesk, { once: true });
        window.addEventListener("touchstart", loadZendesk, { once: true });
        window.addEventListener("click", loadZendesk, { once: true });
    }
}
