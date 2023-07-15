import { currentDate } from "../../helpers/getDates";
import SET_FORM_STATUS from "./SET_FORM_STATUS";
import SET_MEET_GREET_ACTIVE_BTN from "./SET_MEET_GREET_ACTIVE_BTN";
import SET_MEET_GREET_DATE from "./SET_MEET_GREET_DATE";
import SET_PASSENGERS_FROM from "./SET_PASSENGERS_FROM";
import SET_SEATLISTS from "./SET_SEATLISTS";
import SET_TERMINAL from "./SET_TERMINAL";

const INITIAL_STATE = {
    seatLists: [
        { name: "Adults", desc: "(above 12y.o.)", minNum: 1, maxNum: 20 },
        { name: "Children", desc: "(from 2 to  12y.o.)", minNum: 0, maxNum: 20 },
        { name: "Infants", desc: "(below 12y.o.)", minNum: 0, maxNum: 20 }
    ],
    passengersForm: [{ firstname: "", lastname: "" }],
    totalPrice: 180,
    meetgreetDate: currentDate(),
    meetgreetActiveBtn: 0,
    selectedService: 'Arrival Airport',
    terminalName: "-- Select Terminal --",
    meetGreetFormStatus: false
};

export const meetAndGreetActions = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_SEATLISTS": {
            return SET_SEATLISTS({ state, action })
        }
        case "SET_MEET_GREET_DATE": {
            return SET_MEET_GREET_DATE({ state, action })
        }
        case "SET_MEET_GREET_ACTIVE_BTN": {
            return SET_MEET_GREET_ACTIVE_BTN({ state, action })
        }
        case "SET_TERMINAL": {
            return SET_TERMINAL({ state, action })
        }
        case "SET_FORM_STATUS": {
            return SET_FORM_STATUS({ state, action })
        }
        case "SET_PASSENGERS_FROM": {
            return SET_PASSENGERS_FROM({ state, action })
        }
            
        default:
            return state;
    }
};