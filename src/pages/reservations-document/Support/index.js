// components/SupportContact.jsx
import { useState, useCallback } from "react";
import styles from "./styles.module.scss";

const SupportContact = ({ wpNumber, nnedText, strLiveChat }) => {
    // Keeps track of whether the Zendesk chat widget is currently open or closed
    const [isChatOpen, setIsChatOpen] = useState(false);

    /**
     * Dynamically loads the Zendesk Web Widget script.
     * This is used to lazy-load Zendesk only when the user interacts with Live Chat,
     * which helps improve performance and Lighthouse scores.
     */
    const loadZendeskScript = (callback) => {
        // If the script already exists in the DOM, just execute the callback
        if (document.getElementById("zendesk-widget-script")) {
            callback && callback();
            return;
        }

        // Create the Zendesk script element
        const script = document.createElement("script");
        script.id = "zendesk-widget-script";
        script.src = `https://static.zdassets.com/ekr/snippet.js?key=${process.env.zendeskKey}`;
        script.async = true;

        // Run the callback once the script has finished loading
        script.onload = () => {
            callback && callback();
        };

        // Append the script to the document body
        document.body.appendChild(script);
    };

    /**
     * Toggles the Zendesk chat widget.
     * - If the chat is closed, it will be shown and opened.
     * - If the chat is open, it will be closed.
     */
    const toggleZendeskWidget = useCallback(
        (e) => {
            // Prevent default anchor tag behavior (page jump)
            e.preventDefault();

            // Opens the Zendesk chat widget
            const openChat = () => {
                window.zE("webWidget", "show");
                window.zE("webWidget", "open");
                setIsChatOpen(true);
            };

            // Closes the Zendesk chat widget
            const closeChat = () => {
                window.zE("webWidget", "close");
                setIsChatOpen(false);
            };

            // If Zendesk is already loaded, toggle based on current state
            if (typeof window !== "undefined" && typeof window.zE !== "undefined") {
                isChatOpen ? closeChat() : openChat();
            } else {
                // If Zendesk is not loaded yet, load the script and open the chat
                loadZendeskScript(() => {
                    if (typeof window.zE !== "undefined") {
                        openChat();
                    }
                });
            }
        },
        [isChatOpen]
    );

    return (
        <div id="booking-actions-to-hide" className={styles.support}>
            <p>{nnedText}</p>

            <div className={styles.supportLinks}>
                {/* WhatsApp support link */}
                <a className={styles.supportWa} href={`https://wa.me/${wpNumber}`} target="_blank" rel="noopener noreferrer"  >
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </a>

                {/* Phone support link */}
                <a className={styles.supportCall} href="tel:+442086887744">
                    <i className="fa-solid fa-phone"></i> Call Us
                </a>

                {/* Live Chat toggle button */}
                <a className={styles.supportChat} href="#" onClick={toggleZendeskWidget}  >
                    <i className="fa-solid fa-comments"></i>{" "}
                    {isChatOpen ? "Close Chat" : strLiveChat}
                </a>
            </div>
        </div>
    );
};

export default SupportContact;
