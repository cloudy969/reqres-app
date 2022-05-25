import React from "react";
import { Button } from "antd";

import style from "./ResultBlock.module.css";

const ResultBlock = ({
  monthlyPayment = 10000,
  credit = 100000,
  percentage = 100000,
  totalCreditAndPercentage = 200000,
  requireRevenue = 50000,
}) => {

  const normalizedValue = (number) => {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className={style.wrapper}>
      <p className={style.paragraph}>Ваш ежемесячный платеж</p>
      <h1>{normalizedValue(monthlyPayment)} ₽</h1>
      <ul className={style.list}>
        <li className={style.item}>Кредит: {normalizedValue(credit)} ₽</li>
        <li className={style.item}>
          Проценты: {normalizedValue(percentage)} ₽
        </li>
        <li className={style.item}>
          Проценты + Кредит: {normalizedValue(totalCreditAndPercentage)} ₽
        </li>
        <li className={style.item}>
          Необходимый доход: {normalizedValue(requireRevenue)} ₽
        </li>
      </ul>
      <Button className={style.btn} type="primary">
        Рассчитать
      </Button>
    </div>
  );
};

export default ResultBlock;
