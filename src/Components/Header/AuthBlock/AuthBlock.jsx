import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../Header.module.css";

const AuthBlock = () => {
    return (
        <>
            <NavLink className={style.link} to='/register' > Зарегистрироваться </NavLink>
            <NavLink className={style.link} to='/login' > Войти </NavLink>
        </>
    );
};

export default AuthBlock;