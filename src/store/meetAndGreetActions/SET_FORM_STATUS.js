function SET_FORM_STATUS(params = {}) {
    let { state, action } = params;
    let { data: { status } } = action;

    let newState = JSON.parse(JSON.stringify(state))
    newState.meetGreetFormStatus = status
    return newState;
}

export default SET_FORM_STATUS