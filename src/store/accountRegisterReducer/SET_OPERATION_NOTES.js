function SET_OPERATION_NOTES(params = {}) {
    let { state, action } = params
    let { data: { name, value, } } = action

    let newState = JSON.parse(JSON.stringify(state))
    let operationNotes = newState.accountRegisterDatas.operationNotes
    newState.accountRegisterDatas.operationNotes = { ...operationNotes, [name]: value }
    return newState;
}
export default SET_OPERATION_NOTES