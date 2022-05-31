import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "react-query";
import { Input, Button } from "antd";

import style from "./WeatherPageRQ.module.css";
import weatherAPI from "../../../API/weatherAPI";
import WeatherItemRQ from "./WeatherItemRQ/WeatherItemRQ";
import Loader from "../../UI/Loader/Loader";

const WeatherPageRQ = () => {
  const [weatherData, setWeatherData] = useState({});

  const { control, reset, watch, handleSubmit, formState } = useForm({
    defaultValues: {
      cityName: "",
    },
  });
  const currentCityName = watch('cityName');

  const mutation = useMutation(
    (cityName) => weatherAPI.getWeatherByCity(cityName),
    {
      onSuccess: (data) => {
        setWeatherData(data);
        reset();
      },
    }
  );

  const onSubmit = async ({ cityName }) => {
    mutation.mutate(cityName);
  };

  return (
    <div>
      <h1>Просмотр погоды</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="cityName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              className={style.input}
              placeholder="Введите название города"
              required
            />
          )}
        />

        <Button
          type="primary"
          htmlType="submit"
          disabled={!currentCityName || mutation.isLoading ? true : false}
        >
          Найти
        </Button>
      </form>
      {mutation.isLoading ? (
        <Loader />
      ) : Object.keys(weatherData).length !== 0 ? (
        <WeatherItemRQ data={weatherData} />
      ) : null}
    </div>
  );
};

export default WeatherPageRQ;
