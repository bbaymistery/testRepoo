export const META_CONTENT_LINKNAME = {
    "HOME": {
        en: {
            ogTitle: "Heathrow Taxi Transfers | Fixed Prices & Meet & Greet",
            ogDescription: "Fixed-price Heathrow taxis with free meet & greet, flight tracking and free cancellation. 24/7 support.",
            twitterTitle: "Heathrow Taxi Transfers | Fixed Prices & Meet & Greet",
            twitterDescription: "Premium Heathrow taxis, fixed prices, meet & greet, free cancellation.",
            imageUrl: "og-hero.jpg",
            url: "/",
            schema: [
                // main schema 
                {
                    "@context": "https://schema.org",
                    "@type": ["Organization", "LocalBusiness", "TaxiService"],
                    "name": "London Heathrow Taxi Ltd",
                    "url": "https://www.london-heathrow.taxi/",
                    "logo": "https://www.london-heathrow.taxi/images/logo.png",
                    "telephone": "+44 20 3887 3844",
                    "priceRange": "££",
                    "email": "info@london-heathrow.taxi",
                    "areaServed": [
                        "Heathrow Airport", "London", "Gatwick", "Stansted", "Luton", "London City"
                    ],
                    "sameAs": [
                        "https://x.com/Lhr_taxi"
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Orega Offices, 4 Longwalk Road",
                        "addressLocality": "Uxbridge",
                        "addressRegion": "Greater London",
                        "postalCode": "UB11 1FE",
                        "addressCountry": "GB"
                    },
                    "openingHoursSpecification": [{
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        "opens": "00:00",
                        "closes": "23:59"
                    }],
                    "contactPoint": [{
                        "@type": "ContactPoint",
                        "telephone": "+44 20 3887 3844",
                        "contactType": "customer support",
                        "areaServed": "GB",
                        "availableLanguage": ["English"]
                    },
                    {
                        "@type": "ContactPoint",
                        "telephone": "+44 73 8790 1028",
                        "contactType": "WhatsApp support",
                        "areaServed": "GB",
                        "availableLanguage": ["English"]
                    }]
                },
                // faqpage json -ld
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How much does a taxi from Heathrow to Central London cost?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Our Heathrow taxi fares start from £65 for transfers to Central London. All prices are fixed and include meet & greet, 30 minutes free waiting time, parking, and tolls with no hidden fees."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you offer free cancellation?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. You can cancel your booking free of charge up to 12 hours before pickup. Simply contact our customer service team or use the cancellation link in your confirmation email."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What happens if my flight is delayed?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We provide free flight tracking for all Heathrow pickups. Your driver will monitor your flight and adjust your collection time automatically, with no extra charge for delays."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are child seats available?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. We offer complimentary baby and child seats for all Heathrow taxi bookings. Please mention your child’s age at the time of booking so we can provide the correct seat type."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How will I find my driver at Heathrow Airport?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Your driver will be waiting inside the arrivals hall, holding a name board with your booking name. This is part of our free meet and greet service at every Heathrow terminal."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are your prices per vehicle or per person?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "All Heathrow transfer prices are per vehicle, not per passenger. The total fare covers your entire group including luggage and airport fees."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide Business Class vehicles?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. Our Business Class service features Mercedes E-Class, S-Class, and V-Class vehicles for a luxurious Heathrow transfer."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are you licensed?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "London Heathrow Taxi Ltd is a fully licensed private hire operator regulated by Transport for London (TFL). All vehicles and drivers are fully insured and compliant."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How far is Heathrow Airport from Central London?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Heathrow Airport is approximately 16–20 miles from Central London. Journey time typically takes 40–70 minutes depending on traffic."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you offer transfers to other airports?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. We also provide transfers to and from Gatwick, Stansted, Luton, and London City Airport, as well as cruise ports such as Southampton and Dover."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How can I contact my driver?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can contact your driver or our operations team 24/7 by phone on 020 3887 3844 or via WhatsApp on +44 73 8790 1028. Our team can connect you with your driver or assist with updates at any time."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide taxi service to Heathrow Airport hotels?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. We provide reliable taxi transfers between all Heathrow Airport terminals and nearby hotels, including Sofitel Heathrow, Hilton Heathrow, Radisson Blu, and Sheraton Skyline. Our drivers can meet you at arrivals or hotel reception for a smooth pickup or drop-off."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you offer transfers between Heathrow terminals?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. We offer quick and affordable transfers between Heathrow terminals, such as from Terminal 2 to Terminal 5. Our inter-terminal taxi service operates 24/7, with prices starting from £29 including meet & greet and parking."
                            }
                        }
                    ]
                },


            ]
        },

    },
    "HEATHROW-BETWEEN-TERMINALS": {
        en: {
            ogTitle: "Heathrow Between Terminals | Private Inter-Terminal Transfers from £29",
            ogDescription: "Private Heathrow inter-terminal transfers with meet & greet at the arrival gate. Book fast, direct terminal-to-terminal taxi transfers",
            twitterTitle: "Heathrow Between Terminals | Private Inter-Terminal Transfers from £29",
            twitterDescription: "Fast, direct Heathrow inter-terminal taxi transfers with meet & greet.",
            imageUrl: "destCardTerminal2.webp",
            url: "/heathrow-between-terminals",
            schema: [
                // WebPage JSON-LD
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Heathrow Between Terminals | London Heathrow Taxi",
                    "url": "https://www.london-heathrow.taxi/heathrow-between-terminals",
                    "inLanguage": "en-GB",
                    "about": { "@type": "Service", "name": "Heathrow Inter-Terminal Transfer" },
                    "primaryImageOfPage": {
                        "@type": "ImageObject",
                        "url": "https://www.london-heathrow.taxi/images/destCardTerminal2.webp"
                    },
                    "image": "https://www.london-heathrow.taxi/images/destCardTerminal2.webp",
                    "isPartOf": {
                        "@type": "Website",
                        "name": "London Heathrow Taxi",
                        "url": "https://www.london-heathrow.taxi/"
                    },
                    "potentialAction": {
                        "@type": "ReserveAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "tel:+442038873844",
                            "actionPlatform": [
                                "https://schema.org/DesktopWebPlatform",
                                "https://schema.org/MobileWebPlatform"
                            ]
                        }
                    }
                },

                // BreadcrumbList JSON-LD
                {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.london-heathrow.taxi/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Heathrow Between Terminals",
                            "item": "https://www.london-heathrow.taxi/heathrow-between-terminals"
                        }
                    ]
                },

                // Service JSON-LD
                {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Heathrow Inter-Terminal Transfer",
                    "serviceType": "Private airport transfer",
                    "provider": {
                        "@type": "Organization",
                        "name": "London Heathrow Taxi Ltd",
                        "url": "https://www.london-heathrow.taxi/",
                        "email": "info@london-heathrow.taxi",
                        "telephone": "+442038873844",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Orega Offices, 4 Longwalk Road",
                            "addressLocality": "Uxbridge",
                            "addressRegion": "London",
                            "postalCode": "UB11 1FE",
                            "addressCountry": "GB"
                        }
                    },
                    "areaServed": {
                        "@type": "Place",
                        "name": "London Heathrow Airport (LHR)"
                    },
                    "image": "https://www.london-heathrow.taxi/images/destCardTerminal2.webp",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Heathrow Inter-Terminal Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "name": "Inter-Terminal Taxi Transfer",
                                "price": "29",
                                "priceCurrency": "GBP",
                                "url": "https://www.london-heathrow.taxi/heathrow-between-terminals",
                                "availability": "https://schema.org/InStock"
                            },
                            {
                                "@type": "Offer",
                                "name": "Premium Heathrow Assistant Service",
                                "price": "79",
                                "priceCurrency": "GBP",
                                "url": "https://www.london-heathrow.taxi/heathrow-between-terminals",
                                "availability": "https://schema.org/InStock",
                                "description": "Meet and greet at arrival gate, luggage assistance, and escort to check-in at departure Heathrow terminal."
                            }
                        ]
                    },
                    "availableChannel": {
                        "@type": "ServiceChannel",
                        "servicePhone": {
                            "@type": "ContactPoint",
                            "telephone": "+442038873844",
                            "contactType": "sales",
                            "availableLanguage": ["en-GB", "en"]
                        }
                    }
                },

                // FAQPage JSON-LD
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How long does it take to transfer between Heathrow terminals by taxi?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Private taxi transfers between Heathrow terminals usually take 8–15 minutes depending on traffic and the terminals involved. For example, Terminal 2 to 3 is around 8–10 minutes, and Terminal 2/3 to Terminal 4 is around 10–12 minutes."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Where will the driver meet me for my inter-terminal transfer?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Your London Heathrow Taxi Ltd driver meets you by the arrival gate inside your terminal, holding a name board. Meet & Greet is included with all inter-terminal transfers."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What if my connection time is short?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Book a private Heathrow inter-terminal taxi for the quickest, most reliable option. Your driver will be waiting, assist with luggage, and drive you directly to your departure Heathrow terminal. A Premium Heathrow Assistant Service (£79) is available for extra help, including guidance to check-in."
                            }
                        }
                    ]
                }
            ]
        },

    },
    "HEATHROW-HOTELS-TAXI": {
        en: {
            ogTitle: "Heathrow Hotels Taxi | Private Transfers Between Heathrow Airport & Hotels",
            ogDescription: "Private Heathrow hotel transfers with meet & greet, 24/7 service, and fixed fares. Book your Heathrow hotel taxi now.",
            twitterTitle: "Heathrow Hotels Taxi | Private Transfers Between Heathrow Airport & Hotels",
            twitterDescription: "Fast, comfortable taxi transfers between Heathrow Airport and nearby hotels with free meet & greet",
            imageUrl: "dealsTr/heathrowHotelTaxi.jpg",
            url: "/heathrow-hotels-taxi",
            schema: [
                // BreadcrumbList JSON-LD
                {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.london-heathrow.taxi/" },
                        { "@type": "ListItem", "position": 2, "name": "Heathrow Hotels Taxi", "item": "https://www.london-heathrow.taxi/heathrow-hotels-taxi" }
                    ]
                },
                //   Service JSON-LD
                {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Heathrow Hotels Taxi",
                    "serviceType": "Private airport transfer",
                    "provider": {
                        "@type": "Organization",
                        "name": "London Heathrow Taxi Ltd",
                        "url": "https://www.london-heathrow.taxi/",
                        "email": "info@london-heathrow.taxi",
                        "telephone": "+442038873844",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Orega Offices, 4 Longwalk Road",
                            "addressLocality": "Uxbridge",
                            "addressRegion": "London",
                            "postalCode": "UB11 1FE",
                            "addressCountry": "GB"
                        }
                    },
                    "areaServed": { "@type": "Place", "name": "London Heathrow Airport (LHR)" },
                    "image": "https://www.london-heathrow.taxi/images/dealsTr/heathrowHotelTaxi.jpg",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Heathrow Hotel Transfer Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "name": "Heathrow to Hotel Taxi Transfer",
                                "price": "29",
                                "priceCurrency": "GBP",
                                "url": "https://www.london-heathrow.taxi/heathrow-hotels-taxi",
                                "availability": "https://schema.org/InStock"
                            },
                            {
                                "@type": "Offer",
                                "name": "Hotel to Heathrow Airport Transfer",
                                "price": "29",
                                "priceCurrency": "GBP",
                                "url": "https://www.london-heathrow.taxi/heathrow-hotels-taxi",
                                "availability": "https://schema.org/InStock",
                                "description": "Meet & Greet inside terminal, luggage assistance, and direct transfer between hotel and Heathrow terminal."
                            }
                        ]
                    },
                    "availableChannel": {
                        "@type": "ServiceChannel",
                        "servicePhone": {
                            "@type": "ContactPoint",
                            "telephone": "+442038873844",
                            "contactType": "sales",
                            "availableLanguage": ["en-GB", "en"]
                        }
                    }
                },
                //FAQ
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How far are the hotels from Heathrow Airport terminals?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Most Heathrow hotels are just a 5–15 minute drive from the terminals. Some hotels, such as Sofitel Heathrow (Terminal 5) and Hilton Garden Inn (Terminal 2), are directly connected by walkway."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you meet passengers inside the terminal?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes — our Meet & Greet service is included with every booking. Your driver will wait by the arrival gate inside the terminal holding a name board and assist with your luggage."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book a return trip from my hotel to the airport?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely. You can book hotel-to-airport transfers 24/7. We’ll collect you from your hotel lobby and drop you directly at your departure terminal entrance."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What if my flight is delayed or arrives early?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We track all flights in real time, so your driver will be there when you land — even if your flight time changes."
                            }
                        }
                    ]
                },

                //web page
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Heathrow Hotels Taxi | London Heathrow Taxi",
                    "url": "https://www.london-heathrow.taxi/heathrow-hotels-taxi",
                    "inLanguage": "en-GB",
                    "about": { "@type": "Service", "name": "Heathrow Hotels Taxi" },
                    "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.london-heathrow.taxi/images/dealsTr/heathrowHotelTaxi.jpg" },
                    "image": "https://www.london-heathrow.taxi/images/dealsTr/heathrowHotelTaxi.jpg",
                    "isPartOf": { "@type": "Website", "name": "London Heathrow Taxi", "url": "https://www.london-heathrow.taxi/" },
                    "potentialAction": {
                        "@type": "ReserveAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "tel:+442038873844",
                            "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
                        }
                    }
                }


            ]
        },

    },
    "HEATHROW-CENTRAL-LONDON": {
        en: {
            ogTitle: "Heathrow to Central London Taxi | Private Transfers from £59",
            ogDescription: "Heathrow to Central London taxi from £59. Fixed fares, meet & greet at arrivals, and 24/7 airport transfers by London Heathrow Taxi Ltd.",
            twitterTitle: "Heathrow to Central London Taxi | Private Transfers from £59",
            twitterDescription: "Book reliable Heathrow to Central London transfers from £59 — 24/7 availability, meet & greet, and flight tracking included.",
            imageUrl: "centralTr/lht1.jpg",
            url: "/heathrow-central-london",

            siteName: "London Heathrow Taxi Ltd",
            geoRegion: "GB-LND",
            geoPlacename: "Heathrow, London, United Kingdom",
            geoPosition: "51.4700;-0.4543",
            icbm: '51.4700, -0.4543',
            businessContact: {
                streetAddress: "Orega Offices, 4 Longwalk Road",
                locality: "Uxbridge",
                region: "London",
                postalCode: "UB11 1FE",
                countryName: "United Kingdom",
                phoneNumber: "+44 203 887 3844",
                website: "https://www.london-heathrow.taxi"
            },

            schema: [

                // Business Schema 
                {
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "London Heathrow Taxi Ltd",
                    "image": "https://www.london-heathrow.taxi/images/centralTr/lht1.jpg",
                    "url": "https://www.london-heathrow.taxi/",
                    "telephone": "+44 203 887 3844",
                    "priceRange": "£59-£120",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Orega Offices, 4 Longwalk Road",
                        "addressLocality": "Uxbridge",
                        "postalCode": "UB11 1FE",
                        "addressCountry": "GB"
                    },
                    "areaServed": "London, United Kingdom",
                    "openingHours": "Mo-Su 00:00-23:59",
                    "description": "Private airport transfers from Heathrow to Central London from £59 with free meet & greet, fixed fares and 24/7 service.",
                    "sameAs": [
                        "https://x.com/Lhr_taxi"
                    ],
                },
                // FAQ
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How much is a taxi from Heathrow to Central London?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Fares start from £54 for Central London and £29 for nearby areas. All prices include meet & greet, parking, and 30 minutes free waiting."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does it take from Heathrow to Central London by taxi?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "The journey takes between 40 and 70 minutes depending on traffic and destination."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Where will my driver meet me at Heathrow?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Your driver will meet you inside the arrivals hall holding a name board. Meet & greet is included."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you charge extra if my flight is delayed?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No. We monitor flights and adjust pickup times automatically."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book a return from Central London to Heathrow?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. Return transfers from Central London to Heathrow start from £54 and can be booked online or by phone."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you provide child seats?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. Complimentary baby and child seats are available on request."
                            }
                        }
                    ]
                }



            ],

        },

    },
    "HEATHROW-TRANSFER-DEALS": {
        en: {
            ogTitle: "Heathrow Transfer Deals | Fixed Fare Private Taxis from £29",
            ogDescription: "Book Heathrow transfer deals with London Heathrow Taxi Ltd. Reliable private taxis between Heathrow Airport, Central London, hotels, and terminals from £29 all-inclusive.",
            twitterTitle: "Heathrow Transfer Deals | Fixed Fare Private Taxis from £29",
            twitterDescription: "Private Heathrow transfers from £29. Meet & Greet, flight tracking, and 24/7 service from London Heathrow Taxi Ltd.",
            imageUrl: "dealsTr/heathrow-to-central.jpg",
            url: "/heathrow-transfer-deals",
            siteName: "London Heathrow Taxi Ltd",
            geoRegion: "GB-LND",
            geoPlacename: "Heathrow, London, United Kingdom",
            geoPosition: "51.4700;-0.4543",
            icbm: '51.4700, -0.4543',
            businessContact: {
                streetAddress: "Orega Offices, 4 Longwalk Road",
                locality: "Uxbridge",
                region: "London",
                postalCode: "UB11 1FE",
                countryName: "United Kingdom",
                phoneNumber: "+44 203 887 3844",
                website: "https://www.london-heathrow.taxi"
            },
            schema: [
                // Business
                {
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "London Heathrow Taxi Ltd",
                    "image": "https://www.london-heathrow.taxi/images/dealsTr/heathrow-to-central.jpg",
                    "url": "https://www.london-heathrow.taxi/",
                    "telephone": "+44 203 887 3844",
                    "priceRange": "£29-£120",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Orega Offices, 4 Longwalk Road",
                        "addressLocality": "Uxbridge",
                        "postalCode": "UB11 1FE",
                        "addressCountry": "GB"
                    },
                    "areaServed": "London, United Kingdom",
                    "openingHours": "Mo-Su 00:00-23:59",
                    "description": "Book fixed-fare Heathrow transfer deals with London Heathrow Taxi Ltd. Private taxis between Heathrow Airport, Central London, hotels, and terminals with meet & greet and 24/7 support.",
                    "sameAs": [
                        "https://x.com/Lhr_taxi"
                    ],
                }
                ,
                // Faq
                {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How much is a Heathrow transfer?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Private Heathrow transfers start from £29 for nearby hotels and £59 for Central London. All fares include meet & greet, parking, and 30 minutes of free waiting time."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you offer transfers between Heathrow terminals?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, London Heathrow Taxi Ltd provides inter-terminal transfers from £29, including meet & greet at arrivals and assistance with luggage."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Are child seats available for Heathrow transfers?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, we offer complimentary baby and child seats upon request for all Heathrow transfer bookings."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you track my flight for Heathrow pickups?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, your driver monitors your flight arrival and adjusts pickup times automatically at no extra cost."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I book a return journey to Heathrow Airport?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, return trips from Central London to Heathrow start from £54 and can be booked online or by phone 24/7."
                            }
                        }
                    ]
                }



            ]
        },

    },
    "ABOUT": {
        en: {
            ogTitle: "About London Heathrow Taxi | Reliable Airport Transfers Near Heathrow",
            ogDescription: "London Heathrow Taxi offers professional private transfers under APL and Churchill licences. Fixed fares, meet & greet, and 24/7 customer support",
            twitterTitle: "About London Heathrow Taxi | Heathrow Airport Transfers",
            twitterDescription: "Reliable, fixed-price Heathrow transfers with free meet and greet and 24/7 support. Operated under APL and Churchill licences.",
            imageUrl: "about-us.jpg",
            url: '/about',
            siteName: "London Heathrow Taxi Ltd",
            geoRegion: "GB-LND",
            geoPlacename: "Heathrow, London, United Kingdom",
            geoPosition: "51.4700;-0.4543",
            icbm: '51.4700, -0.4543',
            schema: [
                {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": [
                                "LocalBusiness",
                                "TaxiService"
                            ],
                            "@id": "https://www.london-heathrow.taxi/#organization",
                            "name": "London Heathrow Taxi Ltd",
                            "url": "https://www.london-heathrow.taxi/",
                            "image": "https://www.london-heathrow.taxi/images/about-us.jpg",
                            "logo": "https://www.london-heathrow.taxi/images/logo.png",
                            "telephone": "+44 20 3887 3844",
                            "email": "info@london-heathrow.taxi",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Orega Offices, 4 Longwalk Road",
                                "addressLocality": "Uxbridge",
                                "addressRegion": "Greater London",
                                "postalCode": "UB11 1FE",
                                "addressCountry": "GB"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "51.4700",
                                "longitude": "-0.4543"
                            },
                            "description": "London Heathrow Taxi provides private airport transfers under APL and Churchill licences. Fixed fares, free meet and greet, and 24/7 customer support.",
                            "openingHours": "Mo-Su 00:00-23:59",
                            "priceRange": "££",
                            "sameAs": [
                                "https://x.com/Lhr_taxi"
                            ]
                        },
                        {
                            "@type": "TaxiService",
                            "@id": "https://www.london-heathrow.taxi/#heathrow-taxi-service",
                            "name": "Heathrow Airport Taxi Transfers",
                            "serviceType": "Airport transfer",
                            "provider": {
                                "@id": "https://www.london-heathrow.taxi/#organization"
                            },
                            "areaServed": [
                                {
                                    "@type": "Place",
                                    "name": "Heathrow Airport"
                                },
                                {
                                    "@type": "Place",
                                    "name": "Central London"
                                }
                            ],
                            "offers": {
                                "@type": "Offer",
                                "priceCurrency": "GBP",
                                "price": "59.00",
                                "description": "Fixed fare Heathrow taxi transfers with meet and greet, 30 minutes free waiting and parking, and flight tracking.",
                                "url": "https://www.london-heathrow.taxi/"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "reviewCount": "984"
                            },
                            "review": [
                                {
                                    "@type": "Review",
                                    "reviewRating": {
                                        "@type": "Rating",
                                        "ratingValue": "5"
                                    },
                                    "author": {
                                        "@type": "Person",
                                        "name": "A. Thompson"
                                    },
                                    "datePublished": "2025-08-14",
                                    "reviewBody": "Excellent Heathrow pickup with clear meet and greet and smooth ride to Central London."
                                },
                                {
                                    "@type": "Review",
                                    "reviewRating": {
                                        "@type": "Rating",
                                        "ratingValue": "5"
                                    },
                                    "author": {
                                        "@type": "Person",
                                        "name": "M. Garcia"
                                    },
                                    "datePublished": "2025-06-02",
                                    "reviewBody": "On time, professional driver, fixed price as quoted. Will book again."
                                }
                            ]
                        }
                    ]
                },
                // Web page
                {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "@id": "https://www.london-heathrow.taxi/about",
                            "url": "https://www.london-heathrow.taxi/about",
                            "name": "About London Heathrow Taxi | Who We Are",
                            "inLanguage": "en-GB",
                            "isPartOf": {
                                "@id": "https://www.london-heathrow.taxi/#website"
                            },
                            "primaryImageOfPage": {
                                "@type": "ImageObject",
                                "url": "https://www.london-heathrow.taxi/images/about-us.jpg"
                            },
                            "image": "https://www.london-heathrow.taxi/images/about-us.jpg",
                            "about": {
                                "@id": "https://www.london-heathrow.taxi/#organization"
                            }
                        }
                    ]
                }
            ],
        },

    },
    "TERMS": {
        en: {
            ogTitle: "Booking Terms & Conditions | London Heathrow Taxi Ltd",
            ogDescription: "Official Booking Terms & Conditions for London Heathrow Taxi Ltd. Learn about our fixed fares, meet & greet, waiting time, and refund policies for Heathrow transfers.",
            twitterTitle: "Booking Terms & Conditions | London Heathrow Taxi Ltd",
            twitterDescription: "View the booking terms and conditions for London Heathrow Taxi Ltd — covering fares, meet & greet, waiting times, and cancellation policies.",
            imageUrl: "terms.jpg",
            url: '/terms',
            siteName: "London Heathrow Taxi Ltd",
            geoRegion: "GB-LND",
            geoPlacename: "Heathrow, London, United Kingdom",
            geoPosition: "51.4700;-0.4543",
            icbm: '51.4700, -0.4543',
            schema: [
                // faq
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Booking Terms & Conditions",
                    "url": "https://www.london-heathrow.taxi/terms",
                    "publisher": {
                        "@type": "Organization",
                        "name": "London Heathrow Taxi Ltd",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.london-heathrow.taxi/images/logo.png"
                        }
                    },
                    "mainEntity": {
                        "@type": "LocalBusiness",
                        "name": "London Heathrow Taxi Ltd",
                        "image": "https://www.london-heathrow.taxi/images/terms.jpg",
                        "url": "https://www.london-heathrow.taxi",
                        "telephone": "+44 203 887 3844",
                        "email": "info@london-heathrow.taxi",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Orega Offices, 4 Longwalk Road",
                            "addressLocality": "Uxbridge",
                            "postalCode": "UB11 1FE",
                            "addressCountry": "GB"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "51.4700",
                            "longitude": "-0.4543"
                        },
                        "description": "London Heathrow Taxi Ltd provides professional private transfers from Heathrow Airport and across London, with fixed fares and meet & greet included.",
                        "openingHours": "Mo-Su 00:00-23:59",
                        "priceRange": "££"
                    }
                },
                // service
                {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Heathrow Airport Taxi & Private Hire Service",
                    "serviceType": "TaxiService",
                    "url": "https://www.london-heathrow.taxi/terms",
                    "description": "Booking terms and conditions for London Heathrow Taxi Ltd, covering Heathrow airport transfers and private hire services across London and the UK.",
                    "provider": {
                        "@type": [
                            "Organization",
                            "LocalBusiness",
                            "TaxiService"
                        ],
                        "name": "London Heathrow Taxi Ltd",
                        "url": "https://www.london-heathrow.taxi/",
                        "telephone": "+44 20 3887 3844",
                        "email": "info@london-heathrow.taxi",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Orega Offices, 4 Longwalk Road",
                            "addressLocality": "Uxbridge",
                            "addressRegion": "Greater London",
                            "postalCode": "UB11 1FE",
                            "addressCountry": "GB"
                        }
                    },
                    "areaServed": [
                        {
                            "@type": "Place",
                            "name": "Heathrow Airport (LHR)"
                        },
                        {
                            "@type": "Place",
                            "name": "London"
                        },
                        {
                            "@type": "Country",
                            "name": "United Kingdom"
                        }
                    ]
                }

            ],
        },

    },
    "CONTACT": {
        en: {
            ogTitle: "Contact London Heathrow Taxi | 24/7 Heathrow Taxi Support & Bookings",
            ogDescription: "24/7 assistance for Heathrow Airport transfers. Call +44 20 3887 3844, WhatsApp +44 73 8790 1028, or email info@london-heathrow.taxi.",
            twitterTitle: "Contact London Heathrow Taxi | 24/7 Heathrow Taxi Support & Bookings",
            twitterDescription: "Heathrow Airport taxi support 24/7. Phone, WhatsApp, and email. Fixed fares with free meet & greet.",
            url: '/contact',
            imageUrl: "hero1.webp",
            schema: [
                // BreadCrumb
                {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.london-heathrow.taxi/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Contact",
                            "item": "https://www.london-heathrow.taxi/contact"
                        }
                    ]
                }
                ,
                // Service 
                {
                    "@context": "https://schema.org",
                    "@type": [
                        "Organization",
                        "TaxiService"
                    ],
                    "@id": "https://www.london-heathrow.taxi/#organization",
                    "name": "London Heathrow Taxi Ltd",
                    "url": "https://www.london-heathrow.taxi/",
                    "logo": "https://www.london-heathrow.taxi/images/logo.png",
                    "email": "info@london-heathrow.taxi",
                    "telephone": "+44 20 3887 3844",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Orega Offices, 4 Longwalk Road",
                        "addressLocality": "Uxbridge",
                        "addressRegion": "London",
                        "postalCode": "UB11 1FE",
                        "addressCountry": "GB"
                    },
                    "areaServed": {
                        "@type": "Place",
                        "name": "London Heathrow Airport (LHR)"
                    },
                    "contactPoint": [
                        {
                            "@type": "ContactPoint",
                            "contactType": "customer service",
                            "telephone": "+44 20 3887 3844",
                            "email": "info@london-heathrow.taxi",
                            "availableLanguage": [
                                "en-GB",
                                "en"
                            ],
                            "areaServed": "GB",
                            "hoursAvailable": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday"
                                ],
                                "opens": "00:00",
                                "closes": "23:59"
                            }
                        },
                        {
                            "@type": "ContactPoint",
                            "contactType": "customer service",
                            "name": "WhatsApp",
                            "telephone": "+44 73 8790 1028",
                            "availableLanguage": [
                                "en-GB",
                                "en"
                            ],
                            "areaServed": "GB"
                        }
                    ],
                    "sameAs": [
                        "https://x.com/Lhr_taxi"
                    ],
                }

                ,
                // Contact Page
                {
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "@id": "https://www.london-heathrow.taxi/contact#contactpage",
                    "name": "Contact London Heathrow Taxi",
                    "url": "https://www.london-heathrow.taxi/contact",
                    "inLanguage": "en-GB",
                    "about": {
                        "@id": "https://www.london-heathrow.taxi/#organization"
                    },
                    "mainEntity": {
                        "@id": "https://www.london-heathrow.taxi/#organization"
                    },
                    "potentialAction": [
                        {
                            "@type": "ContactAction",
                            "name": "Call 24/7 Support",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "tel:+442038873844"
                            }
                        },
                        {
                            "@type": "ContactAction",
                            "name": "WhatsApp Support",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://wa.me/447387901028"
                            }
                        },
                        {
                            "@type": "ContactAction",
                            "name": "Email Support",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "mailto:info@london-heathrow.taxi"
                            }
                        }
                    ]
                }
                ,
                // WebPage
                {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebSite",
                            "@id": "https://www.london-heathrow.taxi/#website",
                            "url": "https://www.london-heathrow.taxi/",
                            "name": "London Heathrow Taxi",
                            "inLanguage": "en-GB",
                            "publisher": {
                                "@id": "https://www.london-heathrow.taxi/#organization"
                            }
                        },
                        {
                            "@type": "WebPage",
                            "@id": "https://www.london-heathrow.taxi/contact",
                            "url": "https://www.london-heathrow.taxi/contact",
                            "name": "Contact London Heathrow Taxi | 24/7 Support",
                            "inLanguage": "en-GB",
                            "isPartOf": {
                                "@id": "https://www.london-heathrow.taxi/#website"
                            },
                            "primaryImageOfPage": {
                                "@type": "ImageObject",
                                "url": "https://www.london-heathrow.taxi/images/hero1.webp"
                            },
                            "image": "https://www.london-heathrow.taxi/images/hero1.webp",
                            "about": {
                                "@id": "https://www.london-heathrow.taxi/#organization"
                            }
                        }
                    ]
                }

            ],

        },
    },
};

export const STATIC_ROUTES = {
    "HOME": '/',
    "HEATHROW-BETWEEN-TERMINALS": '/heathrow-between-terminals',
    "HEATHROW-TRANSFER-DEALS": '/heathrow-transfer-deals',
    "HEATHROW-CENTRAL-LONDON": '/heathrow-central-london',
    "HEATHROW-HOTELS-TAXI": '/heathrow-hotels-taxi',
    "TERMS": '/terms',
    "CONTACT": '/contact',
    "ABOUT": '/about',
};

export const mainSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "TaxiService"],
    "name": "London Heathrow Taxi Ltd",
    "url": "https://www.london-heathrow.taxi/",
    "logo": "https://www.london-heathrow.taxi/images/logo.png",
    "telephone": "+44 20 3887 3844",
    "priceRange": "££",
    "email": "info@london-heathrow.taxi",
    "areaServed": [
        "Heathrow Airport", "London", "Gatwick", "Stansted", "Luton", "London City"
    ],
    "sameAs": [
        "https://x.com/Lhr_taxi"
    ],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Orega Offices, 4 Longwalk Road",
        "addressLocality": "Uxbridge",
        "addressRegion": "Greater London",
        "postalCode": "UB11 1FE",
        "addressCountry": "GB"
    },
    "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
    }],
    "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+44 20 3887 3844",
        "contactType": "customer support",
        "areaServed": "GB",
        "availableLanguage": ["English"]
    },
    {
        "@type": "ContactPoint",
        "telephone": "+44 73 8790 1028",
        "contactType": "WhatsApp support",
        "areaServed": "GB",
        "availableLanguage": ["English"]
    }]
}
