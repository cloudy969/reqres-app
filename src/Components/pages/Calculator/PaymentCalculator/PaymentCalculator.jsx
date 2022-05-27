import React from "react";
import { useSelector } from "react-redux";

import PaymentForm from "./PaymentForm/PaymentForm";
import ResultBlock from "../../../UI/ResultBlock/ResultBlock";
import { getEstatePrice, getPercentages } from "../Calculations/calculations";

const PaymentCalculator = () => {
  const state = useSelector((state) => state.paymentCalculator);

  const requiredRevenue = (state.monthlyPayment * 1.666).toFixed();
  const total = state.monthlyPayment * (state.creditTerm * 12);
  const summary = getEstatePrice(
    state.monthlyPayment,
    state.percentage,
    state.creditTerm,
  ) + state.firstPayment;
  const percentages = getPercentages(
    summary - state.firstPayment,
    state.percentage,
    state.creditTerm,
    state.monthlyPayment
  ).toFixed();
  const credit = total - percentages;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <PaymentForm />
      <ResultBlock
        title={"Стоимость недвижимости"}
        requiredRevenue={requiredRevenue}
        total={total}
        percentages={percentages}
        credit={credit}
        summary={summary.toFixed()}
      />
    </div>
  );
};

export default PaymentCalculator;
