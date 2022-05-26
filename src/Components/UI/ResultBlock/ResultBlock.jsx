import React from "react";
import { Button } from "antd";

import style from "./ResultBlock.module.css";

const ResultBlock = ({
  title,
  credit,
  percentages,
  total,
  summary,
  requiredRevenue,
}) => {
  const normalizedValue = (number) => {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleData = () => {
      console.log({
          credit,
          percentages,
          total,
          summary,
          requiredRevenue,
      })
  }

  return (
    <div className={style.wrapper}>
      <p className={style.paragraph}>{title}</p>
      <h1>{normalizedValue(summary)} ₽</h1>
      <ul className={style.list}>
        <li className={style.item}>Кредит: {normalizedValue(credit)} ₽</li>
        <li className={style.item}>
          Проценты: {normalizedValue(percentages)} ₽
        </li>
        <li className={style.item}>
          Проценты + Кредит: {normalizedValue(total)} ₽
        </li>
        <li className={style.item}>
          Необходимый доход: {normalizedValue(requiredRevenue)} ₽
        </li>
      </ul>
      <Button onClick={handleData} className={style.btn} type="primary">
        Рассчитать
      </Button>
    </div>
  );
};

export default ResultBlock;
