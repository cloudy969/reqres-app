import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export let API = {
    sendRegData: (data) => {
       return  instance.post('register', data)
           .catch(error => console.log(error))
    },
    sendAuthData: (data) => {
        return instance.post('login', data)
            .catch(error => console.log(error))
    },
    getUsers: (pageNumber = 1) => {
        return instance.get(`users?page=${pageNumber}`)
            .catch(err => console.log(err))
    },
}