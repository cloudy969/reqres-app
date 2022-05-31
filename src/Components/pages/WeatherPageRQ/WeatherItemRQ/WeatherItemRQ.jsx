import React from "react";

const WeatherItemRQ = ({ data }) => {
  const today = new Date().toLocaleString();
  const normalizedDescr = `${data.weather[0].description[0].toLocaleUpperCase()}${data.weather[0].description.slice(
    1
  )}`;
  return (
    <div>
      <h2>
        Погода в г.{data.name} на {today}
      </h2>
      <h3>{normalizedDescr}</h3>
      <ul>
        <li>
          <strong>Температура:</strong> {Math.round(data.main.temp)}°С
        </li>
        <li>
          <strong>Ощущается как:</strong> {Math.round(data.main.feels_like)}°С
        </li>
        <li>
          <strong>Минимальная температура по городу:</strong>{" "}
          {Math.round(data.main.temp_min)}°С
        </li>
        <li>
          <strong>Максимальная температура по городу:</strong>{" "}
          {Math.round(data.main.temp_max)}°С
        </li>
        <li>
          <strong>Cкорость ветра:</strong> {Math.round(data.wind.speed)} м/с
        </li>
        <li>
          <strong>Влажность:</strong> {data.main.humidity}%
        </li>
        <li>
          <strong>Давление:</strong> {data.main.pressure} гПа
        </li>
        <li>
          <strong>Атмосферная видимость:</strong> {data.visibility} метров
        </li>
      </ul>
    </div>
  );
};

export default WeatherItemRQ;
