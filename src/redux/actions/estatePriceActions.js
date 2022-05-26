import {setCreditTerm, setEstatePrice, setFirstPayment, setPercentage} from "./actionTypes";

export const changeEstatePrice = (estatePrice) => ({type: setEstatePrice, payload: estatePrice});
export const changeFirstPayment = (firstPayment) => ({type: setFirstPayment, payload: firstPayment});
export const changeCreditTerm = (creditTerm) => ({type: setCreditTerm, payload: creditTerm});
export const changePercentage = (percentage) => ({type: setPercentage, payload: percentage});
