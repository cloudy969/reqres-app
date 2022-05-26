import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber, Slider } from "antd";

import {
  changeCreditSumCC,
  changeCreditTermCC,
  changePercentageCC,
} from "../../../../../redux/actions/creditActions";
import ButtonList from "../../../../UI/ButtonList/ButtonList";
import style from "./CreditForm.module.css";

const CreditForm = () => {
  const state = useSelector((state) => state.creditCalculator);
  const dispatch = useDispatch();


  const changeSum = (newValue) => {
    dispatch(changeCreditSumCC(newValue));
  };
  const changeTerm = (newValue) => {
    dispatch(changeCreditTermCC(newValue));
  };
  const changePercentages = (newValue) => {
    dispatch(changePercentageCC(newValue));
  };

  return (
    <form className={style.form}>
      <label>
        Сумма кредита
        <div className={style.wrapper}>
          <InputNumber
            className={style.input}
            min={0}
            max={99999999}
            step={20000}
            controls={false}
            onChange={changeSum}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }
            value={
              (typeof state.creditSum === "number" ? state.creditSum : 0) &&
              (state.creditSum > 99999999 ? 99999999 : state.creditSum)
            }
            size="large"
            keyboard={false}
          />
          <Slider
            className={style.slider}
            min={0}
            max={99999999}
            onChange={changeSum}
            value={
              typeof state.creditSum === "number" ? state.creditSum : 500000
            }
            step={20000}
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

export default CreditForm;
