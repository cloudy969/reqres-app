import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, InputNumber } from "antd";

import style from "./Timer.module.css";

const Timer = () => {
  const [time, setTime] = useState("");
  const [ratio, setRatio] = useState(0.99);
  const { register, handleSubmit } = useForm();

  const strokeDashArray = Number(2 * Math.PI * 100);

  // console.log(Math.pi)

  useEffect(() => {
    setRatio(ratio - 0.1);
  }, [time]);

  const timer = () => {
    if (time > 0) setTime(time - 1);
  };
  const stopTimer = () => clearInterval(timerId);

  const timerId = setTimeout(timer, 1000);
  const onSubmit = (data) => {
    clearTimeout(timerId);
    setTime(data.time);
  };

  return (
    <>
      <h1>Таймер</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <InputNumber
          className={style.input}
          {...register("time")}
          placeHolder="Установите время"
          controls={false}
          type="number"
        />
        <Button htmlType="submit" type="primary">
          Запустить
        </Button>
      </form>
      {time > 0 && (
        <div>
          <svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
            <circle
              className={style.circleBg}
              r="100"
              cy="125"
              cx="125"
              stroke-width="2"
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
              stroke-width="2"
              fill="none"
            ></circle>
          </svg>
          <h1 className={style.label}>{time}</h1>
          <div className={style.wrapper}>
            <Button className={style.btn} type="danger" onClick={stopTimer}>
              Стоп
            </Button>
            <Button type="success" onClick={timer}>
              Пуск
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
