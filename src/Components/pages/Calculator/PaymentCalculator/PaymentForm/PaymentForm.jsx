import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeCreditTermPC,
  changeFirstPaymentPC,
  changeMonthlyPaymentPC,
  changePercentagePC,
} from "../../../../../redux/actions/paymentActions";
import CustomInput from "../../../../UI/CustomInput/CustomInput";
import ButtonList from "../../../../UI/ButtonList/ButtonList";
import {
  creditTermMax,
  creditTermMin,
  firstPaymentMaxPC,
  firstPaymentMinPC,
  firstPaymentStepPC,
  monthlyPaymentMax,
  monthlyPaymentMin,
  monthlyPaymentStep, percentageMax, percentageMin, percentageStep,
} from "../../Constants/constants";
import { percentButtons, termButtons } from "../../ButtonsData/ButtonsData";
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

  const chooseCreditTerm = (value) => {
    let creditTerm = parseInt(value.substring(0, value.length - 4));
    dispatch(changeCreditTermPC(creditTerm));
  };
  const choosePercentage = (value) => {
    let percentage = parseFloat(value.substring(0, value.length - 1));
    dispatch(changePercentagePC(percentage));
  };

  return (
    <form className={style.form}>
      <label>
        Ежемесячный платеж
        <CustomInput
        min={monthlyPaymentMin}
        max={monthlyPaymentMax}
        step={monthlyPaymentStep}
        action={changePayment}
        value={state.monthlyPayment}
        />
      </label>

      <label>
        Первоначальный взнос
        <CustomInput
        min={firstPaymentMinPC}
        max={firstPaymentMaxPC}
        step={firstPaymentStepPC}
        action={changeFirstPayment}
        value={state.firstPayment}
        />
      </label>

      <label>
        Срок кредита
        <CustomInput
        min={creditTermMin}
        max={creditTermMax}
        action={changeTerm}
        value={state.creditTerm}
        />
        <ButtonList values={termButtons} buttonAction={chooseCreditTerm}/>
      </label>

      <label>
        Процентная ставка
        <CustomInput
        min={percentageMin}
        max={percentageMax}
        step={percentageStep}
        action={changePercentages}
        value={state.percentage}
        />
        <ButtonList values={percentButtons} buttonAction={choosePercentage}/>
      </label>
    </form>
  );
};

export default PaymentForm;
