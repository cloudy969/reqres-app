import React from 'react';
import {useNavigate} from "react-router-dom";

const LogoutBlock = ({setIsAuth}) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsAuth(false)
        navigate('/login')
    }

    return <button onClick={handleLogout} className='btn'>Выйти</button>
};

export default LogoutBlock;