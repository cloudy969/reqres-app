import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeCreditSumCC,
  changeCreditTermCC,
  changePercentageCC,
} from "../../../../../redux/actions/creditActions";
import CustomInput from "../../../../UI/CustomInput/CustomInput";
import ButtonList from "../../../../UI/ButtonList/ButtonList";
import {
  creditSumMax,
  creditSumMin,
  creditSumStep,
  creditTermMax,
  creditTermMin,
  percentageMax,
  percentageMin,
  percentageStep,
} from "../../Constants/constants";
import { percentButtons, termButtons } from "../../ButtonsData/ButtonsData";
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

  const chooseCreditTerm = (value) => {
    let creditTerm = parseInt(value.substring(0, value.length - 4));
    dispatch(changeCreditTermCC(creditTerm));
  };
  const choosePercentage = (value) => {
    let percentage = parseFloat(value.substring(0, value.length - 1));
    dispatch(changePercentageCC(percentage));
  };

  return (
    <form className={style.form}>
      <label>
        Сумма кредита
        <CustomInput
          min={creditSumMin}
          max={creditSumMax}
          step={creditSumStep}
          action={changeSum}
          value={state.creditSum}
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

export default CreditForm;
