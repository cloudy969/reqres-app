import React from "react";

import CreditForm from "./CreditForm/CreditForm";
import { useSelector } from "react-redux";
import {
  getChartData,
  getMonthlyPayment,
  getPercentages,
} from "../Calculations/calculations";
import ResultBlock from "../../../../UI/ResultBlock/ResultBlock";
import Chart from "../../../../UI/Chart/Chart";

const CreditCalculator = () => {
  const state = useSelector((state) => state.creditCalculator);

  const credit = state.creditSum;
  const summary = Math.round(
    getMonthlyPayment(credit, state.percentage, state.creditTerm)
  );
  const percentages = Math.round(
    getPercentages(credit, state.percentage, state.creditTerm, summary)
  );
  const total = percentages + credit;
  const requireRevenue = Math.round(summary * 1.66667);
  const chartData = getChartData(credit, state.percentage, state.creditTerm, summary);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
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
      <Chart data={chartData} />
    </>
  );
};

export default CreditCalculator;
