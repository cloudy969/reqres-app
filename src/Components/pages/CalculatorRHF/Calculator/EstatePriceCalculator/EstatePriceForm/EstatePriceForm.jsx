import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeCreditTerm,
  changeEstatePrice,
  changeFirstPayment, changePercentage
} from "../../../../../../redux/actions/estatePriceActions";
import {
  paymentButtons,
  percentButtons,
  termButtons,
} from "../../ButtonsData/ButtonsData";
import {
  creditTermMax,
  creditTermMin,
  estatePriceMax,
  estatePriceMin,
  estatePriceStep,
  firstPaymentMin,
  firstPaymentStep,
  percentageMax,
  percentageMin,
  percentageStep,
} from "../../Constants/constants";
import ButtonList from "../../../../../UI/ButtonList/ButtonList";
import style from "./EstatePriceForm.module.css";
import CustomInput from "../../../../../UI/CustomInput/CustomInput";
import ReactHookFormInput from "../../../../../UI/ReactHookFormInput/ReactHookFormInput";


const EstatePriceForm = () => {
  const state = useSelector((state) => state.estatePrice);
  const dispatch = useDispatch();

  const changePrice = (newValue) => {
    dispatch(changeEstatePrice(newValue));
    if (newValue === estatePriceMin) {
      dispatch(changeFirstPayment(firstPaymentMin));
    } else if (newValue <= state.firstPayment + estatePriceMin) {
      dispatch(changeFirstPayment(newValue - estatePriceMin));
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
    if (state.estatePrice - firstPayment > estatePriceMin)
      dispatch(changeFirstPayment(firstPayment));
  };
  const chooseCreditTerm = (value) => {
    let creditTerm = parseInt(value.substring(0, value.length - 4));
    dispatch(changeCreditTerm(creditTerm));
  };
  const choosePercentage = (value) => {
    let percentage = parseFloat(value.substring(0, value.length - 1));
    dispatch(changePercentage(percentage));
  };

  return (
    <form className={style.form}>
      <label>
        Стоимость недвижимости
        <ReactHookFormInput
          min={estatePriceMin}
          max={estatePriceMax}
          step={estatePriceStep}
          action={changePrice}
          value={state.estatePrice}
          inputName='estatePrice'
        />
      </label>

      <label>
        Первоначальный взнос
        <ReactHookFormInput
          min={firstPaymentMin}
          max={state.estatePrice - estatePriceMin}
          step={firstPaymentStep}
          action={changePayment}
          value={state.firstPayment}
          inputName='firstPayment'
        />
        <ButtonList values={paymentButtons} buttonAction={chooseFirstPayment} />
      </label>

      <label>
        Срок кредита
        <ReactHookFormInput
          min={creditTermMin}
          max={creditTermMax}
          action={changeTerm}
          value={state.creditTerm}
          inputName='creditTerm'
        />
        <ButtonList values={termButtons} buttonAction={chooseCreditTerm} />
      </label>

      <label>
        Процентная ставка
        <ReactHookFormInput
          min={percentageMin}
          max={percentageMax}
          step={percentageStep}
          action={changePercentages}
          value={state.percentage}
          inputName='percentage'
        />
        <ButtonList values={percentButtons} buttonAction={choosePercentage} />
      </label>
    </form>
  );
};

export default EstatePriceForm;
