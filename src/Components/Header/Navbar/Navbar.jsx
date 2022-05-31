import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink className={style.link} to={'/users'}> Все пользователи </NavLink>
            <NavLink className={style.link} to={'/weather'}>Погода</NavLink>
            <NavLink className={style.link} to={'/calc'}>Калькулятор</NavLink>
            <NavLink className={style.link} to={'/usersRQ'}> Все пользователи React Query </NavLink>
            <NavLink className={style.link} to={'/weatherRQ'}>Погода React Query</NavLink>
            <NavLink className={style.link} to={'/calcRHF'}>Калькулятор React Hook Form</NavLink>
        </nav>
    );
};

export default Navbar;