import React from "react";
import { useSelector } from "react-redux";

import EstatePriceForm from "./EstatePriceForm/EstatePriceForm";
import ResultBlock from "../../../UI/ResultBlock/ResultBlock";

const EstatePriceCalculator = () => {
  const state = useSelector((state) => state.estatePrice);

  const credit = state.estatePrice - state.firstPayment;
  const percentages = (
    (credit * (state.percentage * state.creditTerm)) /
    100
  ).toFixed();
  const total = parseInt(percentages) + parseInt(credit);
  const summary = (total / (state.creditTerm * 12)).toFixed();
  const requireRevenue = (summary * 1.66).toFixed();

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
