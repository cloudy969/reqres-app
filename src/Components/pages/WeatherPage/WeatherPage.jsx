import React, { useState } from "react";
import { Input, Button } from "antd";

import style from "./WeatherPage.module.css";
import weatherAPI from "../../../API/weatherAPI";

const WeatherPage = () => {
  const [queryText, setQueryText] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await weatherAPI.getWeatherByCity(queryText);

    if (response.status === 200) {
      setData(response.data);
      setQueryText("");
    }
  };

  return (
    <div>
      <h1>Прогноз погоды</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input
          className={style.input}
          placeholder="Введите название города"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
        />
        <Button type="primary" disabled={!queryText ? true : false}>
          Найти
        </Button>
      </form>
    </div>
  );
};

export default WeatherPage;
