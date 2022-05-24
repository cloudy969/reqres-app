import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

const APIkey = '1b67b174bff4b9ae4f3d5df0c09b693d'

const weatherAPI = {
    getWeatherByCity: (city) => {
        return instance.get(`weather?q=${city}&lang=ru&appid=${APIkey}`)
            .catch(err => console.log(err))
    },
};

export default weatherAPI;