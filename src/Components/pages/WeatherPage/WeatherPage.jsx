import React, {useState} from "react";

import style from "./WeatherPage.module.css";
import weatherAPI from "../../../API/weatherAPI";

const WeatherPage = () => {
    const [queryText, setQueryText] = useState('');
    const [data, setData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await weatherAPI.getWeatherByCity(queryText)
        console.log(response)
        setQueryText('');
    }

    return (
        <div>
            <h1>Прогноз погоды</h1>
            <form
                className={style.form}
                onSubmit={handleSubmit}
            >
                <input
                    placeholder="Введите название города"
                    value={queryText}
                    onChange={(e) => setQueryText(e.target.value)}
                />
                <button>Найти</button>
            </form>
        </div>
    );
};

export default WeatherPage;