import { useEffect } from "react";
import Script from "next/script";
import styles from "./styles.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";

const HappyCustomer = () => {
  const router = useRouter()
  useEffect(() => {
    const initWidget = () => {
      if (typeof window !== "undefined" && window.carouselInlineWidget) {
        new window.carouselInlineWidget("reviewsio-carousel-widget", {
          // ✅ REVIEWS.io account ID
          store: "london-heathrow-taxi",
          sku: "",
          lang: "en",
          carousel_type: "default",
          styles_carousel: "CarouselWidget--sideHeader",

          // ✅ Widget settings
          options: {
            general: {
              review_type: "company, product",
              min_reviews: "1",
              max_reviews: "20",
              address_format: "CITY, COUNTRY",
              enable_auto_scroll: 10000,
              enable_pause_button: true,
            },
            header: {
              enable_overall_stars: true,
              rating_decimal_places: 2,
            },
            reviews: {
              enable_customer_name: true,
              enable_customer_location: true,
              enable_verified_badge: true,
              enable_subscriber_badge: true,
              enable_recommends_badge: true,
              enable_photos: true,
              enable_videos: true,
              enable_review_date: true,
              disable_same_customer: true,
              min_review_percent: 4,
              third_party_source: true,
              hide_empty_reviews: true,
              enable_product_name: true,
              tags: "",
              branch: "",
              enable_branch_name: false,
            },
            popups: {
              enable_review_popups: true,
              enable_helpful_buttons: true,
              enable_helpful_count: true,
              enable_share_buttons: true,
            },
          },
          translations: {
            verified_customer: "Verified Customer",
          },
          styles: {
            "--base-font-size": "16px",
            "--base-maxwidth": "98%",

            // ⭐ STAR & COLORS
            "--common-star-color": "#FFD700",
            "--common-star-disabled-color": "rgba(0,0,0,0.2)",

            // 🎀 REVIEW CARD STYLING
            "--item-background-start-color": "#ffffff",
            "--item-background-end-color": "#f9f9f9",
            "--item-gradient-direction": "180deg",
            "--item-border-width": "1px",
            "--item-border-color": "rgba(0,0,0,0.08)",
            "--item-border-radius": "10px",
            "--item-shadow-size": "8px",
            "--item-shadow-color": "rgba(0,0,0,0.08)",
            "--item-padding": "1em",
            "--item-maximum-columns": "4",

            // 🧾 HEADING & BODY TEXT
            "--heading-text-color": "#0E1311",
            "--heading-text-font-weight": "600",
            "--heading-text-font-family": "inherit",
            "--heading-text-line-height": "1.4",
            "--body-text-color": "#333",
            "--body-text-font-family": "inherit",

            // 🏷️ BADGES (verified, etc.)
            "--badge-icon-color": "#198754",
            "--badge-text-color": "#198754",

            // 👤 AUTHOR
            "--author-font-size": "14px",
            "--author-font-weight": "500",
            "--author-text-transform": "none",

            // 🧭 SCROLL BUTTONS
            "--scroll-button-icon-color": "#0E1311",
            "--scroll-button-bg-color": "#fff",
            "--scroll-button-border-width": "1px",
            "--scroll-button-border-color": "rgba(0,0,0,0.15)",
            "--scroll-button-border-radius": "50%",
            "--scroll-button-shadow-size": "3px",
            "--scroll-button-shadow-color": "rgba(0,0,0,0.1)",
            "--scroll-button-icon-size": "20px",

            // 💬 POPUP (açılır detay penceresi)
            "--popup-border-radius": "10px",
            "--popup-shadow-size": "15px",
            "--popup-shadow-color": "rgba(0,0,0,0.2)",
            "--popup-color": "#ffffff",
            "--popup-body-text-color": "#333",

            // 🧰 TOOLTIP
            "--tooltip-bg-color": "#0E1311",
            "--tooltip-text-color": "#ffffff",
          }

        });
      }
    };

    if (window.carouselInlineWidget) {
      initWidget();
    } else {
      window.addEventListener("reviewsio-widget-loaded", initWidget);
    }

    return () => {
      window.removeEventListener("reviewsio-widget-loaded", initWidget);
    };
  }, []);
  // ✅ JSON-LD schema verisini burada oluştur
  const schemaDataHappyCustomer = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Heathrow to Central London Taxi Transfer",
    "serviceType": "TaxiService",
    "provider": {
      "@type": ["Organization", "LocalBusiness", "TaxiService"],
      "name": "London Heathrow Taxi Ltd",
      "url": "https://www.london-heathrow.taxi/",
      "telephone": "+44 20 3887 3844",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Orega Offices, 4 Longwalk Road",
        "addressLocality": "Uxbridge",
        "addressRegion": "Greater London",
        "postalCode": "UB11 1FE",
        "addressCountry": "GB"
      },
      "sameAs": ["https://x.com/Lhr_taxi"]
    },
    "areaServed": ["Heathrow Airport", "Central London"],
    "offers": [
      {
        "@type": "Offer",
        "price": "59.00",
        "priceCurrency": "GBP",
        "description": "Heathrow → Central London fixed ‘from’ fare (saloon). Includes meet & greet, 30 mins free waiting & parking, flight tracking."
      },
      {
        "@type": "Offer",
        "price": "59.00",
        "priceCurrency": "GBP",
        "description": "Central London → Heathrow fixed ‘from’ fare (saloon). All fees and taxes included."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "984"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "A. Thompson" },
        "datePublished": "2025-08-14",
        "reviewBody": "Excellent Heathrow pickup with clear meet & greet and smooth ride to Central London."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "M. Garcia" },
        "datePublished": "2025-06-02",
        "reviewBody": "On time, professional driver, fixed price as quoted. Will book again."
      }
    ]
  }

  return (
    <>
      {/* ✅ JSON-LD SEO Structured Data */}
      {router.pathname !== '/about' && router.pathname !== '/terms' &&
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDataHappyCustomer, null, 2) }}
          />
        </Head>}
      <div className={styles.bg_holder}>
        <div className={styles.bg_content}>
          <div className="container">
            <div id="reviewsio-carousel-widget"></div>
          </div>
        </div>

        {/* Reviews.io Script */}
        <Script
          src="https://widget.reviews.co.uk/carousel-inline-iframeless/dist.js?_t=2025103013"
          strategy="afterInteractive"
          onLoad={() => {
            const event = new Event("reviewsio-widget-loaded");
            window.dispatchEvent(event);
          }}
        />
      </div>
    </>
  );
};

export default HappyCustomer;
