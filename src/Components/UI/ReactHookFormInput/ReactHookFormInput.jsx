import React from "react";
import style from "../../pages/Calculator/PaymentCalculator/PaymentForm/PaymentForm.module.css";
import { InputNumber, Slider } from "antd";
import { useForm, Controller } from "react-hook-form";

const ReactHookFormInput = ({ min, max, step, value, action, inputName }) => {
  const handleChange = (value) => {
    action(value);
  };

  const { control, watch } = useForm();

    console.log(watch())

  return (
    <div className={style.wrapper}>
      <Controller
        name={inputName}
        control={control}
        defaultValue={value}
        render={({ field }) => (
          <InputNumber
            {...field}
            className={style.input}
            min={min}
            max={max}
            step={step}
            controls={false}
            onChange={(value) => handleChange(value)}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }
            value={
              (typeof value === "number" ? value : min) &&
              (value > max ? max : value)
            }
            size="large"
            keyboard={false}
          />
        )}
      />

      <Slider
        className={style.slider}
        min={min}
        max={max}
        onChange={(value) => handleChange(value)}
        value={typeof value === "number" ? value : min}
        step={step}
        tipFormatter={null}
      />
    </div>
  );
};

export default ReactHookFormInput;