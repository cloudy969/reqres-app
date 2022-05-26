import {setCreditTermPC, setFirstPaymentPC, setMonthlyPaymentPC, setPercentagePC} from "./actionTypes";

export const changeMonthlyPaymentPC = (estatePrice) => ({type: setMonthlyPaymentPC, payload: estatePrice});
export const changeFirstPaymentPC = (firstPayment) => ({type: setFirstPaymentPC, payload: firstPayment});
export const changeCreditTermPC = (creditTerm) => ({type: setCreditTermPC, payload: creditTerm});
export const changePercentagePC = (percentage) => ({type: setPercentagePC, payload: percentage});