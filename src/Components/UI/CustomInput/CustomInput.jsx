import React from "react";
import { InputNumber, Slider } from "antd";

import style from "../../pages/Calculator/PaymentCalculator/PaymentForm/PaymentForm.module.css";

const CustomInput = ({ min, max, step, value, action }) => {
  const handleChange = (value) => {
    action(value);
  };

  return (
    <div className={style.wrapper}>
      <InputNumber
        className={style.input}
        min={min}
        max={max}
        step={step}
        controls={false}
        onChange={(e) => handleChange(e.target.value)}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        value={
          (typeof value === "number" ? value : min) &&
          (value > max ? max : value)
        }
        size="large"
        keyboard={false}
      />
      <Slider
        className={style.slider}
        min={min}
        max={max}
        onChange={(value) => handleChange(value)}
        value={
          typeof value === "number" ? value : min
        }
        step={step}
        tipFormatter={null}
      />
    </div>
  );
};

export default CustomInput;
