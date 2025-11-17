

export function registerZendeskLoader() {
  const loadZendesk = () => {
    // 🔹 Eğer Zendesk snippet zaten yüklendiyse tekrar yükleme
    if (document.getElementById("ze-snippet")) return;

    // 🔹 Zendesk ana script
    const zendeskScript = document.createElement("script");
    zendeskScript.id = "ze-snippet";
    zendeskScript.src =
      "https://static.zdassets.com/ekr/snippet.js?key=473f7b02-4850-4045-8010-1fedf9752180";
    zendeskScript.async = true;
    document.body.appendChild(zendeskScript);

    // 🔹 Custom chat widget script
    const chatWidgetScript = document.createElement("script");
    chatWidgetScript.src =
      "https://www.airport-pickups-london.com/js/chat_widget.js?112";
    chatWidgetScript.async = true;
    document.body.appendChild(chatWidgetScript);

    // 🔹 Event listener'ları temizle
    window.removeEventListener("scroll", loadZendesk);
    window.removeEventListener("mousemove", loadZendesk);
    window.removeEventListener("touchstart", loadZendesk);
    window.removeEventListener("click", loadZendesk);
  };

  // 🔹 Tarayıcı ortamında (SSR hariç) tetikle
  if (typeof window !== "undefined") {
    // Kullanıcı etkileşimini bekle, sonra yükle
    window.addEventListener("scroll", loadZendesk, { once: true });
    window.addEventListener("mousemove", loadZendesk, { once: true });
    window.addEventListener("touchstart", loadZendesk, { once: true });
    window.addEventListener("click", loadZendesk, { once: true });
  }
}
