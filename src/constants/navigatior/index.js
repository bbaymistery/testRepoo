//for footer
export const Airports = [
    {
        innerText: "Heathrow Airport Transfer",
        path: "/heathrow-airport-transfer",
        title: "London Heathrow Transfer",
        type: "cell",
        hasTaxiDeals: "heathrow",
    },
    {
        innerText: "Gatwick Airport Transfer",
        path: "/gatwick-transfer",
        title: "London Gatwick Transfer",
        type: "cell",
        hasTaxiDeals: "gatwick",

    }
    ,
    {
        innerText: "City Airport Transfer",
        path: "/city-airport",
        title: "London City Airport Transfer",
        type: "cell",
        hasTaxiDeals: "city",

    }
    ,
    {
        innerText: "Luton Airport Transfer",
        path: "/luton-airport",
        title: "Luton Airport Transfer",
        type: "cell",
        hasTaxiDeals: "luton",

    },
    {
        innerText: "Stansted Airport Transfer",
        path: "/stansted-airport",
        title: "London Stansted Airport Transfer",
        type: "cell",
        hasTaxiDeals: "stansted",

    }
]
export const CruisePorts = [
    {
        innerText: "Dover Cruise Port",
        path: "/dovercruise",
        title: "Dover Cruise Terminal Transfer",
        type: "cell",
        hasTaxiDeals: "dover",

    },

    {
        innerText: "Harwich Cruise Port ",
        path: "/harwich",
        title: "Harwich Cruise Port  Transfer",
        type: "cell",
        hasTaxiDeals: "harwich",

    },
    {
        innerText: "Portsmouth Cruise Port",
        path: "/portsmouth",
        title: "Portsmouth Cruise Port Transfer",
        type: "cell",
        hasTaxiDeals: "portsmouth",

    },
    {
        innerText: "Southampton Cruise Port",
        path: "/southampton",
        title: "Southampton Cruise Port Transfer",
        type: "cell",
        hasTaxiDeals: "southampton",
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
                path: "/heathrow-airport-transfer",
                title: "London Heathrow Transfer",
                type: "cell",
                hasTaxiDeals: "heathrow",
            },
            {
                innerText: "Gatwick Airport Transfer",
                path: "/gatwick-transfer",
                title: "London Gatwick Transfer",
                type: "cell",
                hasTaxiDeals: "gatwick",

            }
            ,
            {
                innerText: "City Airport Transfer",
                path: "/city-airport",
                title: "London City Airport Transfer",
                type: "cell",
                hasTaxiDeals: "city",

            }
            ,
            {
                innerText: "Luton Airport Transfer",
                path: "/luton-airport",
                title: "Luton Airport Transfer",
                type: "cell",
                hasTaxiDeals: "luton",

            },
            {
                innerText: "Stansted Airport Transfer",
                path: "/stansted-airport",
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
                path: "/southampton",
                title: "Southampton Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "southampton",
            },
            {
                innerText: "Dover Cruise Port",
                path: "/dovercruise",
                title: "Dover Cruise Terminal Transfer",
                type: "cell",
                hasTaxiDeals: "dover",

            },
            {
                innerText: "Portsmouth Cruise Port",
                path: "/portsmouth",
                title: "Portsmouth Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "portsmouth",

            },
            {
                innerText: "Harwich Cruise Port ",
                path: "/harwich",
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
                path: "/heathrow-airport-transfer",
                title: "London Heathrow Transfer",
                type: "cell",

                hasTaxiDeals: "heathrow",

            },
            {
                innerText: "Gatwick Airport Transfer",
                path: "/gatwick-transfer",
                title: "London Gatwick Transfer",
                type: "cell",
                hasTaxiDeals: "gatwick",


            }
            ,
            {
                innerText: "City Airport Transfer",
                path: "/city-airport",
                title: "London City Airport Transfer",
                type: "cell",
                hasTaxiDeals: "city",


            }
            ,
            {
                innerText: "Luton Airport Transfer",
                path: "/luton-airport",
                title: "Luton Airport Transfer",
                type: "cell",
                hasTaxiDeals: "luton",


            },
            {
                innerText: "Stansted Airport Transfer",
                path: "/stansted-airport",
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
                path: "/southampton",
                title: "Southampton Cruise Port Transfer",
                type: "cell",
                hasTaxiDeals: "southampton",
            },
            {
                innerText: "Dover Cruise Port",
                path: "/dovercruise",
                title: "Dover Cruise Terminal Transfer",
                type: "cell",

                hasTaxiDeals: "dover",

            },
            {
                innerText: "Portsmouth Cruise Port",
                path: "/portsmouth",
                title: "Portsmouth Cruise Port Transfer",
                type: "cell",

                hasTaxiDeals: "portsmouth",

            },
            {
                innerText: "Harwich Cruise Port ",
                path: "/harwich",
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