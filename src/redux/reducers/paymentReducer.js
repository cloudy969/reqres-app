import {setCreditTermPC, setFirstPaymentPC, setMonthlyPaymentPC, setPercentagePC} from "../actions/actionTypes";

const initialState = {
    monthlyPayment: 2000,
    firstPayment: 0,
    creditTerm: 1,
    percentage: 1,
}

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case setMonthlyPaymentPC:
            return {
                ...state,
                monthlyPayment: action.payload,
            };

        case setFirstPaymentPC:
            return {
                ...state,
                firstPayment: action.payload,
            };

        case setCreditTermPC:
            return {
                ...state,
                creditTerm: action.payload,
            };

        case setPercentagePC:
            return {
                ...state,
                percentage: action.payload,
            };

        default:
            return state;
    }
}