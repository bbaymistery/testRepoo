export const buttonLabelsNames = ['Arrival', 'Departure', 'Connecting'];
export const stepsNames = ['Passengers', 'Flight', 'Payment', 'Confirmation'];

export const dropdownAirlineLabels = [
    { id: "-- Select Airline --", value: "-- Select Airline --", },
    { id: "1", value: "1", },
    { id: "3", value: "3", },
    { id: "4", value: "4", },
    { id: "5", value: "5", }
];
export const dropdownFlightClass = [
    { id: "-- Select Flight  Class --", value: "-- Select Flight  Class --", },
    { id: "Economy", value: "Economy", },
    { id: "Business", value: "Business", },
    { id: "First", value: "First", },
];
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//FOR STEP _1
export const passengerDetailsError = (passengersForm, appData) => {
    const errors = [];
    for (const passenger of passengersForm) {
        const error = { statusCode: 200, errorMessage: "" };
        if (passenger.firstname === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        } else if (passenger.lastname === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        } else if (passenger.phone === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        } else if (passenger.email.trim() === "" || !emailRegex.test(passenger.email)) {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        }
        errors.push(error);
    }
    return errors;
};
//FOR STEP _2
export const flightDetailsError = (flightDetails, appData) => {
    const errors = {};
    console.log(flightDetails.flightClass);

    if (flightDetails.airline.includes("--")) {
        errors.airline = { statusCode: 400, errorMessage: appData?.words["strRequired"], };
    }

    if (flightDetails.flightNumber.trim() === "") {
        errors.flightNumber = { statusCode: 400, errorMessage: appData?.words["strRequired"], };
    }
    //select flight class dil seklinde eklenenen sonra
    //flightDetails.flightClass === appData.words["strflightClass"] seklinde yazaceyik
    if (flightDetails.flightClass.includes("--")) {
        errors.flightClass = { statusCode: 400, errorMessage: appData?.words["strRequired"], };
    }

    if (flightDetails.noOfLuggageBags.trim() === "") {
        errors.noOfLuggageBags = { statusCode: 400, errorMessage: appData?.words["strRequired"], };
    }

    return errors;
};

export const bookersDetailsError = (bookerDetails, appData) => {
    const errors = {};


    if (bookerDetails.firstname.trim() === "") {
        errors.firstname = { statusCode: 400, errorMessage: appData?.words["strRequired"] };
    }
    if (bookerDetails.lastname.trim() === "") {
        errors.lastname = { statusCode: 400, errorMessage: appData?.words["strRequired"] };
    }
    if (bookerDetails.mobileNumber.trim() === "") {
        errors.mobileNumber = { statusCode: 400, errorMessage: appData?.words["strRequired"] };
    }
    if (bookerDetails.email.trim() === "" || !emailRegex.test(bookerDetails.email)) {
        errors.email = { statusCode: 400, errorMessage: appData?.words["strRequired"] };
    }

    return errors;
}

// 2023-07-29=> to => Sat, Jul 29, 2023
export const formatDate = (dateString, language = "en") => {
    var date = new Date(dateString);
    var options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    var formattedDate = date.toLocaleDateString(`${language}-US`, options);
    return formattedDate;
}