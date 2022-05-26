import {
  setCreditTerm,
  setEstatePrice,
  setFirstPayment, setInitialFirstPayment,
  setPercentage,
} from "../actions/actionTypes";

const initialState = {
  estatePrice: 500000,
  firstPayment: 0,
  creditTerm: 1,
  percentage: 1,
};

export const estatePriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case setEstatePrice:
      return {
        ...state,
        estatePrice: action.payload,
      };

    case setFirstPayment:
      return {
        ...state,
        firstPayment: action.payload,
      };

    case setCreditTerm:
      return {
        ...state,
        creditTerm: action.payload,
      };

    case setPercentage:
      return {
        ...state,
        percentage: action.payload,
      };

    default:
      return state;
  }
};
