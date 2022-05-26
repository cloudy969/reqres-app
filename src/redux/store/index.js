import {combineReducers, createStore } from "redux";
import {estatePriceReducer} from "../reducers/estatePriceReducer";
import {creditReducer} from "../reducers/creditReducer";
import {paymentReducer} from "../reducers/paymentReducer";

const reducer = combineReducers({
    estatePrice: estatePriceReducer,
    creditCalculator: creditReducer,
    paymentCalculator: paymentReducer,
})

const store = createStore(reducer)

export default store;