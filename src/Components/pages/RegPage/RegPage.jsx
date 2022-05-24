import React from 'react';
import { useNavigate } from "react-router-dom";
import { API } from '../../../API/API'
import RegForm from "../../UI/RegForm/RegForm";

const RegPage = () => {

    const navigate = useNavigate();

    const sendData = async (data) => {
            const response = await API.sendRegData(data);
            if (response.status === 200) navigate('/success')
    }

    return (
        <>
            <h2>Регистрация</h2>
            <RegForm sendData={sendData}/>
        </>
    );
};

export default RegPage;