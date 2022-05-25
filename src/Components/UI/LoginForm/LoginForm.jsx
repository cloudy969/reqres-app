import React, { useState } from "react";
import style from "./LoginForm.module.css";
import { Button, Input } from "antd";

const LoginForm = ({ sendData }) => {
  const [data, setData] = useState({ email: "", password: "" });

  const sendFormData = (e) => {
    e.preventDefault();
    sendData(data);
  };

  return (
    <form onSubmit={sendFormData}>
      <Input
        className={style.input}
        required
        type="email"
        size="large"
        placeholder="Введите ваш Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <Input
        className={style.input}
        required
        type="password"
        size="large"
        placeholder="Введите ваш пароль"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <Button
        type="primary"
        size="large"
        disabled={data.email && data.password ? false : true}
        htmlType='submit'
      >
        Отправить
      </Button>
    </form>
  );
};

export default LoginForm;
