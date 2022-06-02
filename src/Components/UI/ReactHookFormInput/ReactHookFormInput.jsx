import React from "react";
import { InputNumber, Slider } from "antd";

import style from "../../pages/Calculator/PaymentCalculator/PaymentForm/PaymentForm.module.css";
import { useController } from "react-hook-form";

const ReactHookFormInput = ({
  min,
  max,
  step,
  value,
  action,
  control,
  name,
}) => {
  // const handleChange = (value) => {
  //   action(value);
  // };

  const { field } = useController({ control, name });

  return (
    <div className={style.wrapper}>
      <InputNumber
        {...field}
        className={style.input}
        min={min}
        max={max}
        controls={false}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        value={value}
        size="large"
        keyboard={false}
      />
      <Slider
        {...field}
        className={style.slider}
        min={min}
        max={max}
        step={step}
        value={value}
        tipFormatter={null}
      />
    </div>
  );
};

export default ReactHookFormInput;
