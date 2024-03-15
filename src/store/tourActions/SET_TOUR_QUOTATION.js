function SET_TOUR_QUOTATION(params = {}) {
    let { state, action } = params
    let { data: { quotation, selectedTour } } = action
    let newState = JSON.parse(JSON.stringify(state))
    newState.quotation = quotation
    newState.selectedTour = selectedTour
    return newState;
}
export default SET_TOUR_QUOTATION