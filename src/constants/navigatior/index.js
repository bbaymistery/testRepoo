//for footer
export const Airports = [
    {
        innerText: "Heathrow Airport Transfer",
        path: "/heathrow-taxi-prices",
        title: "London Heathrow Transfer",
        type: "cell",
        hasTaxiDeals: "heathrow",
        id: 1,
        translateTitle: "strHeathrowTaxiPrices",

    },
    {
        innerText: "Gatwick Airport Transfer",
        path: "/gatwick-taxi-prices",
        title: "London Gatwick Transfer",
        type: "cell",
        hasTaxiDeals: "gatwick",
        id: 2,
        translateTitle: "strGatwickTaxiPrices",
    }
    ,
    {
        innerText: "City Airport Transfer",
        path: "/london-city-taxi-prices",
        title: "London City Airport Transfer",
        type: "cell",
        hasTaxiDeals: "city",
        id: 3,
        translateTitle: "strLCYTaxiPrices",

    }
    ,
    {
        innerText: "Luton Airport Transfer",
        path: "/luton-taxi-prices",
        title: "Luton Airport Transfer",
        type: "cell",
        hasTaxiDeals: "luton",
        id: 4,
        translateTitle: "strLutonTaxiPrices",
    },
    {
        innerText: "Stansted Airport Transfer",
        path: "/stansted-taxi-prices",
        title: "London Stansted Airport Transfer",
        type: "cell",
        hasTaxiDeals: "stansted",
        id: 5,
        translateTitle: "strStanstedTaxiPrices",
    }
]
export const CruisePorts = [
    {
        innerText: "Dover Cruise Port",
        path: "/dover-cruise-taxi",
        title: "Dover Cruise Terminal Transfer",
        type: "cell",
        hasTaxiDeals: "dover",
        translateTitle: "strDoverCruisePort",
        imgUrl: "/images/seaport/dover.webp",
        id: 1,
    },
    {
        innerText: "Harwich Cruise Port ",
        path: "/harwich-taxi-prices",
        title: "Harwich Cruise Port  Transfer",
        type: "cell",
        hasTaxiDeals: "harwich",
        title: "Harwich Cruise Port",
        id: 2,
        imgUrl: "/images/seaport/hcp.webp",
        translateTitle: "strHarwichCruisePort",
    },
    {
        innerText: "Portsmouth Cruise Port",
        path: "/portsmouth-taxi-prices",
        title: "Portsmouth Cruise Port Transfer",
        translateTitle: "strPortsmouthCruisePort",
        type: "cell",
        hasTaxiDeals: "portsmouth",
        imgUrl: "/images/seaport/portsmoth.webp",
        id: 3,
    },
    {
        innerText: "Southampton Cruise Port",
        path: "/southampton-cruise-taxi",
        title: "Southampton Cruise Port Transfer",
        type: "cell",
        hasTaxiDeals: "southampton",
        translateTitle: "strSouthamptonCruisePort",
        imgUrl: "/images/seaport/southmpton.webp",
        id: 4,


    },
]

// normal list
//hasTaxideals=>when we select any link we store that name of
//..hasTaxideals to redux then When we get from that redux and use it inside  Heathrow Airport Transfer|| Gatwick Airport Transfer
//+
export const navigator = [
    {
        innerText: "home",
        path: "/",
        title: "Home",
        type: "cell",
        hasTaxiDeals: "",

    },
    {
        innerText: "airports",
        path: "/",
        type: "list",
        hasTaxiDeals: "",

        list: [
            {
                innerText: "Heathrow Airport Transfer",
                path: "/heathrow-taxi-prices",
                title: "London Heathrow Transfer",
                type: "cell",
                hasTaxiDeals: "heathrow",
            },
            {
                innerText: "Gatwick Airport Transfer",
                path: "/gatwick-taxi-prices",
                title: "London Gatwick Transfer",
                type: "cell",
                hasTaxiDeals: "gatwick",

            }
            ,
            {
                innerText: "City Airport Transfer",
                path: "/london-city-taxi-prices",
                title: "London City Airport Transfer",
                type: "cell",
                hasTaxiDeals: "city airport",

            }
            ,
            {
                innerText: "Luton Airport Transfer",
                path: "/luton-taxi-prices",
                title: "Luton Airport Transfer",
                type: "cell",
                hasTaxiDeals: "luton",

            },
            {
                innerText: "Stansted Airport Transfer",
                path: "/stansted-taxi-prices",
                title: "London Stansted Airport Transfer",
                type: "cell",
                hasTaxiDeals: "stansted",

            }
        ]
    },
    {
        innerText: "Cruise Ports",
        path: "/",
        type: "list",
        hasTaxiDeals: "",

        list: [
            {
                innerText: "Southampton Cruise Port",
                path: "/southampton-cruise-taxi",
                title: "Southampton Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "southampton",
            },
            {
                innerText: "Dover Cruise Port",
                path: "/dover-cruise-taxi",
                title: "Dover Cruise Terminal Transfer",
                type: "cell",
                hasTaxiDeals: "dover",

            },
            {
                innerText: "Portsmouth Cruise Port",
                path: "/portsmouth-taxi-prices",
                title: "Portsmouth Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "portsmouth",

            },
            {
                innerText: "Harwich Cruise Port ",
                path: "/harwich-taxi-prices",
                title: "Harwich Cruise Port  Transfer",
                type: "cell",
                hasTaxiDeals: "harwich",

            },
        ]
    },
    {
        innerText: "Terms",
        path: "/terms",
        type: "cell",
        hasTaxiDeals: "",

        title: "Terms And Conditions",

    },
    {
        innerText: "Our Fleet",
        path: "/fleet",
        type: "cell",
        hasTaxiDeals: "",

        title: "Our fleet",
    },
    {
        innerText: "Contact Us ",
        path: "/contact-us",
        title: "Airport Pikcups London 24/7 telephone numbers",
        type: "cell",

        hasTaxiDeals: "",
    },

]
//+
export const navigatorMobile = [
    {
        innerText: "home",
        path: "/",
        title: "Home",
        type: "cell",
        hasTaxiDeals: "",

        firstChild: false,

    },
    {
        innerText: "airports",
        path: "/",
        type: "list",
        hasTaxiDeals: "",

        firstChild: true,
        list: [
            {
                innerText: "Heathrow Airport Transfer",
                path: "/heathrow-taxi-prices",
                title: "London Heathrow Transfer",
                type: "cell",

                hasTaxiDeals: "heathrow",

            },
            {
                innerText: "Gatwick Airport Transfer",
                path: "/gatwick-taxi-prices",
                title: "London Gatwick Transfer",
                type: "cell",
                hasTaxiDeals: "gatwick",


            }
            ,
            {
                innerText: "City Airport Transfer",
                path: "/london-city-taxi-prices",
                title: "London City Airport Transfer",
                type: "cell",
                hasTaxiDeals: "city",


            }
            ,
            {
                innerText: "Luton Airport Transfer",
                path: "/luton-taxi-prices",
                title: "Luton Airport Transfer",
                type: "cell",
                hasTaxiDeals: "luton",


            },
            {
                innerText: "Stansted Airport Transfer",
                path: "/stansted-taxi-prices",
                title: "London Stansted Airport Transfer",
                type: "cell",
                hasTaxiDeals: "stansted",

            }
        ]
    },
    {
        innerText: "Cruise Ports",
        path: "/",
        firstChild: true,
        type: "list",
        hasTaxiDeals: "",

        list: [
            {
                innerText: "Southampton Cruise Port",
                path: "/southampton-cruise-taxi",
                title: "Southampton Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "southampton",
            },
            {
                innerText: "Dover Cruise Port",
                path: "/dover-cruise-taxi",
                title: "Dover Cruise Terminal Transfer",
                type: "cell",

                hasTaxiDeals: "dover",

            },
            {
                innerText: "Portsmouth Cruise Port",
                path: "/portsmouth-taxi-prices",
                title: "Portsmouth Cruise Port Transfer",
                type: "cell",

                hasTaxiDeals: "portsmouth",

            },
            {
                innerText: "Harwich Cruise Port ",
                path: "/harwich-taxi-prices",
                title: "Harwich Cruise Port  Transfer",
                type: "cell",
                hasTaxiDeals: "harwich",


            },
        ]
    },
    {
        innerText: "Terms",
        path: "/terms",
        type: "cell",
        hasTaxiDeals: "",

        title: "Terms And Conditions",
        firstChild: false

    },
    {
        innerText: "Contact Us ",
        path: "/contact-us",
        title: "Airport Pikcups London 24/7 telephone numbers",
        type: "cell",
        hasTaxiDeals: "",

        firstChild: false
    },

    {
        innerText: "Travel Agents",
        path: "/travelAgents",
        type: "cell",
        hasTaxiDeals: "",

        title: "Travel Agents",
        firstChild: false

    },
    {
        innerText: "Our Fleet",
        path: "/fleet",
        type: "cell",
        hasTaxiDeals: "",

        title: "Our fleet",
    },
    {
        innerText: "managebooking",
        path: "/manage-booking.html",
        type: "cell",
        hasTaxiDeals: "",

        title: "Manage My Booking",
        firstChild: false

    }
]


let taxiPricesLinks = [
    "/gatwick-taxi-prices",
    "/heathrow-taxi-prices",
    "/london-city-taxi-prices",
    "/luton-taxi-prices",
    "/stansted-taxi-prices",
    "/dover-cruise-taxi",
    "/harwich-taxi-prices",
    "/portsmouth-taxi-prices",
    "/southampton-cruise-taxi",
    "/stansted-taxi-prices"
]

export let lists = {
    "strNavHome": "home",
    "strNavAirports": "airports",
    "strNavHeathrowAirportTransfer": "heathrow airport transfer",
    "strNavGatwickAirportTransfer": "gatwick airport transfer",
    "strNavCityAirportTransfer": "city airport transfer",
    "strNavLutonAirportTransfer": "luton airport transfer",
    "strNavStanstedAirportTransfer": "stansted airport transfer",
    "strNavCruisePorts": "cruise ports",
    "strNavSouthamptonCruisePort": "southampton cruise port",
    "strNavDoverCruisePort": "dover cruise port",
    "strNavPortsmouthCruisePort": "portsmouth cruise port",
    "strNavHarwichCruisePort": "harwich cruise port",
    "strNavTerms": "terms",
    "strNavContactUs": "contact us",
    "strNavManageMyBooking": "manage my booking",
    "strNavCorporate": "corporate",
}