import React from "react";
import { useSelector } from "react-redux";

import PaymentForm from "./PaymentForm/PaymentForm";
import ResultBlock from "../../../UI/ResultBlock/ResultBlock";

const PaymentCalculator = () => {
  const state = useSelector((state) => state.paymentCalculator);

  const requiredRevenue = (state.monthlyPayment * 1.66).toFixed();
  const total = state.monthlyPayment * (state.creditTerm * 12);
  const percentages = (state.monthlyPayment * state.percentage / 100).toFixed();
  const credit = total - percentages;
  const summary = credit + state.firstPayment;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <PaymentForm />
      <ResultBlock
        title={"Стоимость недвижимости"}
        requiredRevenue={requiredRevenue}
        total={total}
        percentages={percentages}
        credit={credit}
        summary={summary}
      />
    </div>
  );
};

export default PaymentCalculator;
