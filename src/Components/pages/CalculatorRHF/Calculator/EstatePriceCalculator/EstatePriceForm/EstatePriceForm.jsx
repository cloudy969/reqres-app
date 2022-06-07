import React, {useEffect, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";

import {
  changeCreditTerm,
  changeEstatePrice,
  changeFirstPayment,
  changePercentage,
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
import ReactHookFormInput from "../../../../../UI/ReactHookFormInput/ReactHookFormInput";

const EstatePriceForm = () => {
  const state = useSelector((state) => state.estatePrice);
  const dispatch = useDispatch();

  const { control, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      estatePrice: state.estatePrice,
      firstPayment: state.firstPayment,
      creditTerm: state.creditTerm,
      percentage: state.percentage,
    },
  });
  const estatePriceValue = watch("estatePrice");
  const firstPaymentValue = watch("firstPayment");
  const creditTermValue = watch("creditTerm");
  const percentageValue = watch("percentage");

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

  useEffect(() => {
    changePrice(estatePriceValue);
  }, [estatePriceValue]);

  useEffect(() => {
    changePayment(firstPaymentValue);
  }, [firstPaymentValue])

  useEffect(() => {
    changeTerm(creditTermValue);
  },[creditTermValue])

  useEffect(() => {
    changePercentages(percentageValue);
  }, [percentageValue])

  return (
    <form className={style.form}>
      <label>
        Стоимость недвижимости
        <ReactHookFormInput
          min={estatePriceMin}
          max={estatePriceMax}
          step={estatePriceStep}
          value={state.estatePrice}
          name="estatePrice"
          control={control}
        />
      </label>

      <label>
        Первоначальный взнос
        <ReactHookFormInput
          min={firstPaymentMin}
          max={state.estatePrice - estatePriceMin}
          step={firstPaymentStep}
          value={state.firstPayment}
          name="firstPayment"
          control={control}
        />
        <ButtonList values={paymentButtons} buttonAction={chooseFirstPayment} />
      </label>

      <label>
        Срок кредита
        <ReactHookFormInput
          min={creditTermMin}
          max={creditTermMax}
          value={state.creditTerm}
          name="creditTerm"
          control={control}
        />
        <ButtonList values={termButtons} buttonAction={chooseCreditTerm} />
      </label>

      <label>
        Процентная ставка
        <ReactHookFormInput
          min={percentageMin}
          max={percentageMax}
          step={percentageStep}
          value={state.percentage}
          name="percentage"
          control={control}
        />
        <ButtonList values={percentButtons} buttonAction={choosePercentage} />
      </label>
    </form>
  );
};

export default EstatePriceForm;
