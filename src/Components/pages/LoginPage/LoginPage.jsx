import React, {useContext} from 'react';
import MyForm from "../../UI/MyForm/MyForm";
import { useNavigate } from "react-router-dom";
import { API } from "../../../API/API";
import {isAuthContext} from "../../../Context/Context";

const LoginPage = () => {

    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useContext(isAuthContext)

    const sendData = async (data) => {
        const response = await API.sendAuthData(data);
        if (response.status === 200) {
            localStorage.setItem('token', JSON.stringify(response.data.token) )
            setIsAuth(true);
            navigate('/home')
        }
    }

    return (
            <>
                <h2>Авторизация</h2>
                <MyForm sendData={sendData}/>
            </>
        );
    };

export default LoginPage;