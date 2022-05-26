import React from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./EstatePriceForm.module.css";
import {
  changeCreditTerm,
  changeEstatePrice,
  changeFirstPayment,
  changePercentage,
} from "../../../../../redux/actions/estatePriceActions";
import { InputNumber, Slider } from "antd";
import ButtonList from "../../../../UI/ButtonList/ButtonList";
import {
  paymentButtons,
  percentButtons,
  termButtons,
} from "./ButtonsData/ButtonsData";

const EstatePriceForm = () => {
  const state = useSelector((state) => state.estatePrice);
  const dispatch = useDispatch();

  const changePrice = (newValue) => {
    dispatch(changeEstatePrice(newValue));
    if (newValue === 500000) {
      dispatch(changeFirstPayment(0));
    } else if (newValue <= state.firstPayment + 500000) {
      dispatch(changeFirstPayment(newValue - 500000));
    }
  };
  const changePayment = (newValue) => {
    dispatch(changeFirstPayment(newValue));
  };
  const changeTerm = (newValue) => {
    dispatch(changeCreditTerm(newValue));
  };
  const changePercentages = (newValue) => {
    dispatch(changePercentage(newValue));
  };

  const chooseFirstPayment = (value) => {
    let firstPayment = parseInt(
      ((state.estatePrice * parseInt(value.slice(0, -1))) / 100).toFixed()
    );
    if (state.estatePrice - firstPayment > 500000)
      dispatch(changeFirstPayment(firstPayment));
  };

  const chooseCreditTerm = (value) => {
    let creditTerm = parseInt(value.substring(0, value.length - 4));
    dispatch(changeCreditTerm(creditTerm));
  };

  const choosePercentage = (value) => {
    let percentage = parseInt(value.slice(0, -1));
    dispatch(changePercentage(percentage));
  };

  return (
    <form className={style.form}>
      <label>
        Стоимость недвижимости
        <div className={style.wrapper}>
          <InputNumber
            className={style.input}
            min={500000}
            max={99999999}
            step={20000}
            controls={false}
            onChange={changePrice}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }
            value={
              (typeof state.estatePrice === "number"
                ? state.estatePrice
                : 500000) &&
              (state.estatePrice > 99999999 ? 99999999 : state.estatePrice)
            }
            size="large"
            keyboard={false}
          />
          <Slider
            className={style.slider}
            min={500000}
            max={99999999}
            onChange={changePrice}
            value={
              typeof state.estatePrice === "number" ? state.estatePrice : 500000
            }
            step={20000}
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
            max={state.estatePrice - 500000}
            step={20000}
            controls={false}
            onChange={changePayment}
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
            max={state.estatePrice - 500000}
            onChange={changePayment}
            value={
              typeof state.firstPayment === "number" ? state.firstPayment : 0
            }
            step={20000}
            tipFormatter={null}
          />
        </div>
        <ButtonList values={paymentButtons} buttonAction={chooseFirstPayment} />
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
        <ButtonList values={termButtons} buttonAction={chooseCreditTerm} />
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
        <ButtonList values={percentButtons} buttonAction={choosePercentage} />
      </label>
    </form>
  );
};

export default EstatePriceForm;
