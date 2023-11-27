
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from "redux-devtools-extension";
import { pickUpDropOffActions } from "./pickUpDropOffActions";
import { alertReducer } from './alertReducer'
import { meetAndGreetActions } from './meetAndGreetActions';
import GET_APP_DATA from './pickUpDropOffActions/GET_APP_DATA';
import { accountRegisterActions } from './accountRegisterReducer';
//!quotations a gelende paymentTypes sorunu yasanir onu coz
// create your reducer
const initialReducer = (state = {}, action) => {
    switch (action.type) {
        case HYDRATE: {
            if (typeof window !== 'undefined') {
                if (localStorage.getItem("appData")) {
                    action.payload.initialReducer = { ...action.payload.initialReducer, appData: { ...JSON.parse(localStorage.getItem("appData")) } }
                }
            }
            return { ...state.initialReducer, ...action.payload.initialReducer }
        }
        case 'GET_APP_DATA': return GET_APP_DATA({ state, action })//page(index.js)
        default: return state;
    }
};

const reducer = combineReducers({ pickUpDropOffActions, initialReducer, alertReducer, accountRegisterActions, meetAndGreetActions });
const store = createStore(reducer, composeWithDevTools(applyMiddleware()));
export default store;
