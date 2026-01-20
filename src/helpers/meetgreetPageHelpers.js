export const buttonLabelsNames = ['Arrival', 'Departure', 'Connecting'];
export const stepsNames = ['strPassengers', 'strFlight', 'strYourBookingDetails', 'strConfirmation'];

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//FOR STEP _1
export const passengerDetailsError = (passengersForm, appData) => {
    const errors = [];
    for (const passenger of passengersForm) {
        const error = { statusCode: 200, errorMessage: "" };
        if (passenger?.firstname === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        } else if (passenger?.lastname === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        } else if (passenger?.phone === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        } else if (passenger?.email?.trim() === "" || !emailRegex?.test(passenger?.email)) {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        }
        errors.push(error);
    }
    return errors;
};
export const passengerDetailsErrorAdults = (passengersForm, appData) => {
    const errors = [];
    for (const passenger of passengersForm) {
        const error = { statusCode: 200, errorMessage: "" };
        if (passenger?.firstname === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        } else if (passenger?.lastname === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        } else if (passenger?.phone === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        }
        errors.push(error);
    }
    return errors;
};
export const passengerDetailsErrorChildren = (passengersForm, appData) => {
    const errors = [];
    for (const passenger of passengersForm) {
        const error = { statusCode: 200, errorMessage: "" };
        if (passenger?.firstname === "") {
            error.statusCode = 400;
            error.errorMessage = appData?.words["strRequired"];
        } else if (passenger?.lastname === "") {
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


    if (flightDetails.airline?.trim() === "") {
        errors.airline = { statusCode: 400, errorMessage: appData?.words["strRequired"], };
    }
    if (flightDetails.flightNumber?.trim() === "") {
        errors.flightNumber = { statusCode: 400, errorMessage: appData?.words["strRequired"], };
    }
    //select flight class dil seklinde eklenenen sonra
    //flightDetails.flightClass === appData.words["strflightClass"] seklinde yazaceyik
    if (flightDetails.flightClass.includes("--")) {
        errors.flightClass = { statusCode: 400, errorMessage: appData?.words["strRequired"], };
    }

    if (flightDetails.noOfLuggageBags?.trim() === "") {
        errors.noOfLuggageBags = { statusCode: 400, errorMessage: appData?.words["strRequired"], };
    }

    return errors;
};

export const bookersDetailsError = (bookerDetails, appData) => {
    const errors = {};


    if (bookerDetails.firstname?.trim() === "") {
        errors.firstname = { statusCode: 400, errorMessage: appData?.words["strRequired"] };
    }
    if (bookerDetails.lastname?.trim() === "") {
        errors.lastname = { statusCode: 400, errorMessage: appData?.words["strRequired"] };
    }
    if (bookerDetails.mobileNumber?.trim() === "") {
        errors.mobileNumber = { statusCode: 400, errorMessage: appData?.words["strRequired"] };
    }
    if (bookerDetails.email?.trim() === "" || !emailRegex.test(bookerDetails.email)) {
        errors.email = { statusCode: 400, errorMessage: appData?.words["strRequired"] };
    }

    return errors;
}

export function formatDate(input, monthStyle = "short", language = "en", mode = "utc") {
  if (!input) return "";

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

  let year, monthIndex, day;

  // 1) String input: take the date part safely (works for "YYYY-MM-DD" and ISO strings)
  if (typeof input === "string") {
    const datePart = input.split(/[ T]/)[0];
    const parts = datePart.split("-");
    if (parts.length !== 3) return String(input);

    year = parseInt(parts[0], 10);
    monthIndex = parseInt(parts[1], 10) - 1;
    day = parseInt(parts[2], 10);
  }

  // 2) Date input: choose UTC or Local extraction explicitly
  else if (input instanceof Date) {
    if (mode === "local") {
      year = input.getFullYear();
      monthIndex = input.getMonth();
      day = input.getDate();
    } else {
      year = input.getUTCFullYear();
      monthIndex = input.getUTCMonth();
      day = input.getUTCDate();
    }
  } else {
    return String(input);
  }

  // Strict validation
  const utcMidnight = new Date(Date.UTC(year, monthIndex, day));
  if (
    Number.isNaN(utcMidnight.getTime()) ||
    utcMidnight.getUTCFullYear() !== year ||
    utcMidnight.getUTCMonth() !== monthIndex ||
    utcMidnight.getUTCDate() !== day
  ) {
    return String(input);
  }

  // Format using UTC to avoid shifting
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: monthStyle,
    year: "numeric",
    timeZone: "UTC",
  }).format(utcMidnight);
}
