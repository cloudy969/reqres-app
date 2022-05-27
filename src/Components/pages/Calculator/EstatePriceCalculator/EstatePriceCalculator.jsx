import React from "react";
import { useSelector } from "react-redux";

import EstatePriceForm from "./EstatePriceForm/EstatePriceForm";
import ResultBlock from "../../../UI/ResultBlock/ResultBlock";
import {
  getMonthlyPayment,
  getPercentages,
} from "../Calculations/calculations";

const EstatePriceCalculator = () => {
  const state = useSelector((state) => state.estatePrice);

  const credit = state.estatePrice - state.firstPayment;
  const summary = getMonthlyPayment(
    credit,
    state.percentage,
    state.creditTerm
  ).toFixed();
  const percentages = getPercentages(
    credit,
    state.percentage,
    state.creditTerm,
    summary
  ).toFixed();
  const total = parseInt(percentages) + parseInt(credit);
  const requireRevenue = (summary * 1.667).toFixed();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <EstatePriceForm />
      <ResultBlock
        title="Ваш ежемесячный платеж"
        credit={credit}
        percentages={percentages}
        total={total}
        summary={summary}
        requiredRevenue={requireRevenue}
      />
    </div>
  );
};

export default EstatePriceCalculator;
