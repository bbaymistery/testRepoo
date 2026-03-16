
function SET_WHATSAP_PASSENGER_NOTIFICATION(params = {}) {
    let { state, action } = params
    let { data: { status } } = action

    let newState = JSON.parse(JSON.stringify(state))
    newState.reservations[0].passengerDetails = { ...newState.reservations[0].passengerDetails, getWhatsappNotifiations: status ? 1 : 2 }
    if (newState.reservations.length === 2) {
        newState.reservations[1].passengerDetails = { ...newState.reservations[1].passengerDetails, getWhatsappNotifiations: status ? 1 : 2 }
    }

    return newState;
}
export default SET_WHATSAP_PASSENGER_NOTIFICATION