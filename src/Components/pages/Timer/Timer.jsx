import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, InputNumber } from "antd";

import style from "./Timer.module.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [ratio, setRatio] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const { control, watch, handleSubmit } = useForm();
  const settledTime = watch("timer");

  const strokeDashArray = 2 * Math.PI * 100;

  const onSubmit = (data) => {
    setIsActive(false);
    setRatio(1);
    setSeconds(data.timer);
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  useEffect(() => {
    let timer = null;
    setRatio(ratio - (ratio - seconds / settledTime));
    if (isActive) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearTimeout(timer);
    }
    if (seconds == 0) {
      clearTimeout(timer);
      setIsActive(false);
    }
    return () => clearTimeout(timer);
  }, [isActive, seconds]);

  return (
    <>
      <h1>Таймер</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="timer"
          control={control}
          render={({ field }) => (
            <InputNumber
              required
              className={style.input}
              {...field}
              placeholder="Введите количество секунд"
              controls={false}
              type="number"
            />
          )}
        />
        <Button htmlType="submit" type="primary">
          Установить время
        </Button>
      </form>
      <div>
        <div className={style.timerWrapper}>
          <svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
            <circle
              className={style.circleBg}
              r="100"
              cy="125"
              cx="125"
              fill="none"
            ></circle>
            <circle
              style={{
                strokeDasharray: strokeDashArray,
                strokeDashoffset: strokeDashArray * (1 - ratio),
              }}
              className={style.circle}
              r="100"
              cy="125"
              cx="125"
              fill="none"
            ></circle>
          </svg>
          <h1 className={style.label}>{seconds}</h1>
        </div>
        <div className={style.wrapper}>
          <Button className={style.btn} type="danger" onClick={toggleIsActive}>
            {isActive ? "Пауза" : "Пуск"}
          </Button>
          <Button onClick={reset}>Сброс</Button>
        </div>
      </div>
    </>
  );
};

export default Timer;
