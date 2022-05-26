import {setCreditSumCC, setCreditTermCC, setPercentageCC} from "../actions/actionTypes";

const initialState = {
    creditSum: 0,
    creditTerm: 1,
    percentage: 1,
}

export const creditReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCreditSumCC:
            return {
                ...state,
                creditSum: action.payload,
            }

        case setCreditTermCC:
            return {
                ...state,
                creditTerm: action.payload,
            }

        case setPercentageCC:
            return {
                ...state,
                percentage: action.payload,
            }
        default:
            return state;
    }
}