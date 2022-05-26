import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber, Slider } from "antd";

import {
  changeCreditTermPC,
  changeFirstPaymentPC,
  changeMonthlyPaymentPC, changePercentagePC
} from "../../../../../redux/actions/paymentActions";
import style from "./PaymentForm.module.css";


const PaymentForm = () => {
  const state = useSelector((state) => state.paymentCalculator);
  const dispatch = useDispatch();

  const changePayment = (newValue) => {
    dispatch(changeMonthlyPaymentPC(newValue));
  };
  const changeFirstPayment = (newValue) => {
    dispatch(changeFirstPaymentPC(newValue));
  };
  const changeTerm = (newValue) => {
    dispatch(changeCreditTermPC(newValue));
  };
  const changePercentages = (newValue) => {
    dispatch(changePercentagePC(newValue));
  };

  return (
    <form className={style.form}>
      <label>
        Ежемесячный платеж
        <div className={style.wrapper}>
          <InputNumber
            className={style.input}
            min={2000}
            max={999999}
            step={20000}
            controls={false}
            onChange={changePayment}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }
            value={
              (typeof state.monthlyPayment === "number"
                ? state.monthlyPayment
                : 500000) &&
              (state.monthlyPayment > 999999 ? 999999 : state.monthlyPayment)
            }
            size="large"
            keyboard={false}
          />
          <Slider
            className={style.slider}
            min={2000}
            max={999999}
            onChange={changePayment}
            value={
              typeof state.monthlyPayment === "number" ? state.monthlyPayment : 2000
            }
            step={2000}
            tipFormatter={null}
          />
        </div>
      </label>

      <label>
        Первоначальный взнос
        <div className={style.wrapper}>
          <InputNumber
            className={style.input}
            min={0}
            max={99499999}
            step={10000}
            controls={false}
            onChange={changeFirstPayment}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }
            value={
              (typeof state.firstPayment === "number"
                ? state.firstPayment
                : 0) &&
              (state.firstPayment > state.estatePrice - 500000
                ? state.estatePrice - 500000
                : state.firstPayment)
            }
            size="large"
          />
          <Slider
            className={style.slider}
            min={0}
            max={99499999}
            onChange={changeFirstPayment}
            value={
              typeof state.firstPayment === "number" ? state.firstPayment : 0
            }
            step={10000}
            tipFormatter={null}
          />
        </div>
      </label>

      <label>
        Срок кредита
        <div className={style.wrapper}>
          <InputNumber
            className={style.input}
            min={1}
            max={30}
            controls={false}
            onChange={changeTerm}
            value={
              (typeof state === "number" ? state.creditTerm : 1) &&
              (state.creditTerm > 30 ? 30 : state.creditTerm)
            }
            size="large"
          />
          <Slider
            className={style.slider}
            min={1}
            max={30}
            onChange={changeTerm}
            value={typeof state.creditTerm === "number" ? state.creditTerm : 1}
            tipFormatter={null}
          />
        </div>
      </label>

      <label>
        Процентная ставка
        <div className={style.wrapper}>
          <InputNumber
            className={style.input}
            min={1}
            max={30}
            controls={false}
            onChange={changePercentages}
            value={
              (typeof state === "number" ? state.percentage : 1) &&
              (state.percentage > 30 ? 30 : state.percentage)
            }
            size="large"
          />
          <Slider
            className={style.slider}
            min={1}
            max={30}
            step={0.1}
            onChange={changePercentages}
            value={typeof state.percentage === "number" ? state.percentage : 1}
            tipFormatter={null}
          />
        </div>
      </label>
    </form>
  );
};

export default PaymentForm;