// Geliştirilmiş versiyon
const collectPoints = (params = { "value": String(), "reducerSessionToken": String(), "language": "en", "ignoreGooglePlaces": true, "env": Object() }, callback = () => { }) => {
    const { value, reducerSessionToken, language, ignoreGooglePlaces, env ,errorMessage} = params;

    const url = `${env.apiDomain}/api/v1/suggestions`;
    const method = "POST";
    const headers = { "Content-Type": "application/json" };

    const body = JSON.stringify({ value, "session-token": reducerSessionToken, language, configuration: { ignoreGooglePlaces }, });
    const config = { method, headers, body };

    fetch(url, config)
        .then((res) => res.json())
        .then((res) => { callback(res); })
        .catch((error) => {
     ;
            window.handelErrorLogs?.(error, errorMessage, { config });
            callback({ status: 400, message: error.message });
        });
};

// Promise wrapper
export const collectPointsAsync = (params = {}) => new Promise((resolve) => collectPoints(params, (log) => resolve(log)));
