import {setCreditSumCC, setCreditTermCC, setPercentageCC} from "./actionTypes";

export const changeCreditSumCC = (creditSum) => ({type: setCreditSumCC, payload: creditSum});
export const changeCreditTermCC = (creditTerm) => ({type: setCreditTermCC, payload: creditTerm});
export const changePercentageCC = (percentage) => ({type: setPercentageCC, payload: percentage});