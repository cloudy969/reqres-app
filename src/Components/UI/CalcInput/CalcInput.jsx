import React from "react";
import {InputNumber, Slider} from "antd";

import style from "./CalcInput.module.css";

const CalcInput = ({minValue, maxValue, step, value, setValue}) => {
    const onChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className={style.wrapper}>
            <InputNumber
                className={style.input}
                tooltipPlacement={false}
                min={minValue}
                max={maxValue}
                step={step}
                controls={false}
                onChange={onChange}
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                value={(typeof value === "number" ? value : minValue ) && (value > maxValue ? maxValue : value)}
                size="large"
            />
            <Slider
                className={style.slider}
                min={minValue}
                max={maxValue}
                onChange={onChange}
                value={(typeof value === "number" ? value : minValue )}
                step={step}
            />
        </div>
)
    ;
};

export default CalcInput;
