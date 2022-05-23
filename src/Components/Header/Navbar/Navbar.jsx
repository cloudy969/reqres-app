import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink className={style.link} to={'/users'}> Все пользователи </NavLink>
            <NavLink className={style.link} to={'/users'}> 2 </NavLink>
            <NavLink className={style.link} to={'/users'}> 3 </NavLink>
            <NavLink className={style.link} to={'/users'}> 4 </NavLink>
            <NavLink className={style.link} to={'/users'}> 5 </NavLink>
        </nav>
    );
};

export default Navbar;