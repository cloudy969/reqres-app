import React from "react";
import { useSelector } from "react-redux";

import EstatePriceForm from "./EstatePriceForm/EstatePriceForm";
import ResultBlock from "../../../UI/ResultBlock/ResultBlock";
import {
  getChartData,
  getMonthlyPayment,
  getPercentages,
} from "../Calculations/calculations";
import Chart from "../../../UI/Chart/Chart";

const EstatePriceCalculator = () => {
  const state = useSelector((state) => state.estatePrice);

  const credit = state.estatePrice - state.firstPayment;
  const summary = Math.round(
    getMonthlyPayment(credit, state.percentage, state.creditTerm)
  );
  const percentages = Math.round(
    getPercentages(credit, state.percentage, state.creditTerm, summary)
  );
  const total = percentages + credit;
  const requireRevenue = Math.round(summary * 1.666666666667);
  const chartData = getChartData(
    credit,
    state.percentage,
    state.creditTerm,
    summary
  );

  return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15, }}>
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
        <Chart data={chartData} />
      </div>

  );
};

export default EstatePriceCalculator;
