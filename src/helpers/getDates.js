import moment from "moment-timezone";

// 1. SAFE DATE COMPARISON (The UTC Fix)
// This converts a date string (e.g., "2026-05-20") into a timestamp using UTC.
// This ensures that "May 20" is the same number of milliseconds 
// whether the user is in New York, London, or Tokyo.
export const convertDateToMilliSecond = (data) => {
    if (!data) return 0;
    // Split the string safely
    const [y, m, d] = data.split("-").map(Number);
    
    // Use Date.UTC to avoid local timezone offsets affecting the value
    return Date.UTC(y, m - 1, d);
};

// 2. RETURN JOURNEY DEFAULT (London Time + 30 Hours)
export const currentDateForReturnJourney = () => {
    // We use "Europe/London" so the default time is correct for the destination,
    // regardless of where the customer is browsing from.
    let time = moment.tz("Europe/London").add(30, "hours");
    
    // Reset minutes, seconds, and milliseconds for a clean default time
    time.minutes(0).seconds(0).milliseconds(0);

    const formatted = time.format("YYYY-MM-DD HH:mm");
    return formatted;
};

// 3. CURRENT DATE (London Date)
export const currentDate = () => {
    // Shows the current date in London. 
    // Prevents issues where a US user sees "yesterday's" date.
    const date = moment.tz("Europe/London").format("YYYY-MM-DD");
    return date;
};

// 4. JOURNEY DEFAULT (London Time + 6 Hours)
export const currentDateForJourney = () => {
    // Start with London time + 6 hours
    let time = moment.tz("Europe/London").add(6, "hours");

    // Round minutes to the nearest 5
    let minutes = time.minutes();
    if (minutes >= 56) {
        time.add(1, 'hour').minutes(0);
    } else {
        const remainder = minutes % 5;
        if (remainder !== 0) {
            time.minutes(minutes - remainder + 5);
        }
    }

    // Clean up seconds and milliseconds
    time.seconds(0).milliseconds(0);

    const formatted = time.format("YYYY-MM-DD HH:mm");
    return formatted;
};