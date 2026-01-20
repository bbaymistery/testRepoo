import { useEffect, useState, useCallback } from 'react';
import Router from 'next/router';

const usePageLeave = (config) => {
    const {
        reservations,
        tokenForArchieve,
        apiDomain,
        allowedUrls = [], // Uyarı vermeden gidilebilecek sayfalar
        confirmationMessage = "If you leave the page, all data will be deleted.",
        isEnabled = false,
        planToClose = "PLAN_TO_CLOSE_PAYMENT_PAGE",
        pageNotClosed = "PAYMENT_PAGE_NOT_CLOSED",
        pageIsClosed = "PAYMENT_PAGE_IS_CLOSED",
    } = config;

    const [confirmation, setConfirmation] = useState(isEnabled);

    // Veriyi API'ye gönderen yardımcı fonksiyon (Keepalive ile)
    const logNavigationStatus = useCallback(async (stage) => {
        if (!apiDomain || !tokenForArchieve) return;

        const url = `${apiDomain}/api/v1/sessions/add`;
        const body = JSON.stringify({
            token: tokenForArchieve,
            details: reservations,
            stage: stage
        });
        console.log(stage);

        // keepalive: true, sayfa kapansa bile isteğin tamamlanmasını sağlar
        try {
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
                keepalive: true
            });
        } catch (error) {
            console.error("Tracking Error:", error);
        }
    }, [apiDomain, tokenForArchieve, reservations]);

    useEffect(() => {
        // 1. Tarayıcı Kapatma/Yenileme (Native Browser Event)
        const beforeUnloadHandler = (e) => {
            // Stage loglama
            setTimeout(() => logNavigationStatus(planToClose), 10);

            if (window.event.cancelable) {
                setTimeout(() => logNavigationStatus(pageNotClosed), 450);
            }

            if (confirmation) {
                (e || window.event).returnValue = confirmationMessage;
                return confirmationMessage;
            }
        };

        // 2. Sayfa Kapatıldığında Son İstek (Native Unload)
        const handleUnload = () => {
            logNavigationStatus(pageIsClosed);
        };

        // 3. Next.js İçi Navigasyon (Router Event)
        const beforeRouteHandler = (url) => {
            if (confirmation) {
                // Eğer gidilecek URL izinli listesindeyse uyarma
                const isAllowed = allowedUrls.some(allowedUrl => url.includes(allowedUrl));

                if (isAllowed) {
                    setConfirmation(false);
                    return;
                }

                if (Router.pathname !== url && !confirm(confirmationMessage)) {
                    Router.events.emit("routeChangeError");
                    throw `Route change to "${url}" was aborted.`;
                }
            }
        };

        // Event Listener'ları Ekle
        window.addEventListener("beforeunload", beforeUnloadHandler);
        window.addEventListener("unload", handleUnload);
        Router.events.on("routeChangeStart", beforeRouteHandler);

        // Cleanup (Bileşen ölünce temizle)
        return () => {
            window.removeEventListener("beforeunload", beforeUnloadHandler);
            window.removeEventListener("unload", handleUnload);
            Router.events.off("routeChangeStart", beforeRouteHandler);
        };
    }, [confirmation, allowedUrls, confirmationMessage, logNavigationStatus]);

    return { setConfirmation };
};

export default usePageLeave;