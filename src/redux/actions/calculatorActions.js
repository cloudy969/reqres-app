import {setCreditTerm, setEstatePrice, setFirstPayment, setPercentage} from "./actionTypes";

export const changeEstatePrice = (estatePrice) => ({setEstatePrice, payload: estatePrice});
export const changeFirstPayment = (firstPayment) => ({setFirstPayment, payload: firstPayment});
export const changeCreditTerm = (creditTerm) => ({setCreditTerm, payload: creditTerm});
export const changePercentage = (percentage) => ({setPercentage, payload: percentage});
