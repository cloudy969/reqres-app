import React from "react";
import { useSelector } from "react-redux";

import PaymentForm from "./PaymentForm/PaymentForm";
import ResultBlock from "../../../UI/ResultBlock/ResultBlock";
import {
  getChartData,
  getEstatePrice,
  getPercentages,
} from "../Calculations/calculations";
import Chart from "../../../UI/Chart/Chart";

const PaymentCalculator = () => {
  const state = useSelector((state) => state.paymentCalculator);

  const requiredRevenue = Math.round(state.monthlyPayment * 1.666);
  const total = state.monthlyPayment * (state.creditTerm * 12);
  const summary = Math.round(
    getEstatePrice(state.monthlyPayment, state.percentage, state.creditTerm) +
      state.firstPayment
  );
  const percentages = getPercentages(
    summary - state.firstPayment,
    state.percentage,
    state.creditTerm,
    state.monthlyPayment
  ).toFixed();
  const credit = total - percentages;

  const chartData = getChartData(
    credit,
    state.percentage,
    state.creditTerm,
    state.monthlyPayment,
  );

  return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
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
        <Chart data={chartData}/>
      </>

  );
};

export default PaymentCalculator;
