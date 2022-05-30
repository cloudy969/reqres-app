import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <LineChart
      width={750}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        name="Оставшаяся сумма кредита"
        type="monotone"
        dataKey="sum"
        stroke="#6363ff"
      />
      <Line
        name="Выплаченная долговая часть"
        type="monotone"
        dataKey="debt"
        stroke="#ff6363"
      />
      <Line
        name="Выплаченная процентная часть"
        type="monotone"
        dataKey="percent"
        stroke="#639663"
      />
    </LineChart>
  );
};

export default Chart;