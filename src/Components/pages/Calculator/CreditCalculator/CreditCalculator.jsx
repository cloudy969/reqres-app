import React from "react";

import ResultBlock from "../../../UI/ResultBlock/ResultBlock";
import CreditForm from "./CreditForm/CreditForm";
import { useSelector } from "react-redux";

const CreditCalculator = () => {
  const state = useSelector((state) => state.creditCalculator);

  const credit = state.creditSum;
  const percentages = (
    (credit * (state.percentage * state.creditTerm)) /
    100
  ).toFixed();
  const total = parseInt(percentages) + parseInt(credit);
  const summary = (total / (state.creditTerm * 12)).toFixed();
  const requireRevenue = (summary * 1.66).toFixed();

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
