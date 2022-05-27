import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeCreditTerm,
  changeEstatePrice,
  changeFirstPayment,
  changePercentage,
} from "../../../../../redux/actions/estatePriceActions";
import ButtonList from "../../../../UI/ButtonList/ButtonList";
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
import CustomInput from "../../../../UI/CustomInput/CustomInput";
import style from "./EstatePriceForm.module.css";

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
        <CustomInput
          min={estatePriceMin}
          max={estatePriceMax}
          step={estatePriceStep}
          action={changePrice}
          value={state.estatePrice}
        />
      </label>

      <label>
        Первоначальный взнос
        <CustomInput
          min={firstPaymentMin}
          max={state.estatePrice - estatePriceMin}
          step={firstPaymentStep}
          action={changePayment}
          value={state.firstPayment}
        />
        <ButtonList values={paymentButtons} buttonAction={chooseFirstPayment} />
      </label>

      <label>
        Срок кредита
        <CustomInput
          min={creditTermMin}
          max={creditTermMax}
          action={changeTerm}
          value={state.creditTerm}
        />
        <ButtonList values={termButtons} buttonAction={chooseCreditTerm} />
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
        <ButtonList values={percentButtons} buttonAction={choosePercentage} />
      </label>
    </form>
  );
};

export default EstatePriceForm;
