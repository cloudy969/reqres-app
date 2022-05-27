import React from "react";

import ResultBlock from "../../../UI/ResultBlock/ResultBlock";
import CreditForm from "./CreditForm/CreditForm";
import { useSelector } from "react-redux";
import {
  getMonthlyPayment,
  getPercentages,
} from "../Calculations/calculations";

const CreditCalculator = () => {
  const state = useSelector((state) => state.creditCalculator);

  const credit = state.creditSum;
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
  const requireRevenue = (summary * 1.666).toFixed();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <CreditForm />
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

export default CreditCalculator;
