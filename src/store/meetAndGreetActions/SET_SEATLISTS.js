const updatePrice = (newSeatLists) => {
    let newTotalPrice = 180;
    const adultsNum = newSeatLists[0].minNum;
    const childrenNum = newSeatLists[1].minNum;
    const totalGuestsSelected = adultsNum + childrenNum;
    //settng total price for theright side of box
    if (totalGuestsSelected > 2) newTotalPrice += (totalGuestsSelected - 2) * 50;
    //based on totalGuestSelected i am creating new passengers which is equal to that number
    //if totalGuestSelected=2=>it means =[{name:"",lastname:""},{name:"",lastname:""}]
    const newPassengersForm = Array.from({ length: totalGuestsSelected }, () => ({ firstname: "", lastname: "" }));

    return { newTotalPrice, newPassengersForm }
};
function SET_SEATLISTS(params = {}) {
    let { state, action } = params;
    let { data: { idx, incordec } } = action;

    let newState = JSON.parse(JSON.stringify(state))
    let newSeatLists = [...newState.seatLists]

    if (incordec === 'inc') {
        newSeatLists = newSeatLists.map((item, index) => {
            if (index === idx) {
                return (item = { ...item, minNum: item.minNum + 1 });
            } else {
                return item;
            }
        });
    }

    if (incordec === 'dec') {
        newSeatLists = newSeatLists.map((item, index) => {
            if (index === idx) {
                if (idx === 0) {
                    return (item = { ...item, minNum: item.minNum === 1 ? item.minNum : item.minNum - 1 });
                } else {
                    return (item = { ...item, minNum: item.minNum === 0 ? item.minNum : item.minNum - 1 });

                }
            } else {
                return item;
            }
        });
    }
    let { newTotalPrice, newPassengersForm } = updatePrice(newSeatLists);

    newState.seatLists = newSeatLists
    newState.totalPrice = newTotalPrice
    newState.passengersForm = newPassengersForm
    return newState;
}

export default SET_SEATLISTS