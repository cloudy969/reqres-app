import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

import style from './AuthBlock.module.css';

const AuthBlock = () => {
  return (
    <div className={style.wrapper}>
      <NavLink to="/register">
        <Button type="primary">Зарегистрироваться</Button>
      </NavLink>
      <NavLink to="/login">
        <Button type="primary">Войти</Button>
      </NavLink>
    </div>
  );
};

export default AuthBlock;
