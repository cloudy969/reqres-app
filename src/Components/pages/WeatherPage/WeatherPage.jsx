import React, { useState } from "react";
import { Input, Button } from "antd";

import style from "./WeatherPage.module.css";
import weatherAPI from "../../../API/weatherAPI";
import WeatherItem from "./WeatherItem/WeatherItem";
import Loader from "../../UI/Loader/Loader";

const WeatherPage = () => {
  const [queryText, setQueryText] = useState("");
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({});
    setIsFetching(true);

    const response = await weatherAPI.getWeatherByCity(queryText);
    if (response.status === 200) {
      setData(response.data);
      setQueryText("");
    }

    setIsFetching(false);
  };

  return (
    <div>
      <h1>Просмотр погоды</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input
          className={style.input}
          placeholder="Введите название города"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
        />
        <Button
          type="primary"
          disabled={!queryText || isFetching ? true : false}
        >
          Найти
        </Button>
      </form>
      {isFetching ? <Loader /> : null}
      {Object.keys(data).length !== 0 ? <WeatherItem data={data} /> : null}
    </div>
  );
};

export default WeatherPage;
