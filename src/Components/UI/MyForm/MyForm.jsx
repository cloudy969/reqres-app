import React from "react";
import { Button, Form, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import style from "./MyForm.module.css";

const MyForm = ({ sendData }) => {
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const dataValues = watch();
  console.log(dataValues)

  const handleData = (data) => {
    sendData(data);
  };

  return (
    <Form name="basic" onSubmitCapture={handleSubmit(handleData)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <Input
              type="email"
              size="large"
              {...field}
              placeholder="Введите email"
            />
            <p className={style.error}>{errors.email?.message}</p>
          </>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
            <Input
              type="password"
              size="large"
              {...field}
              placeholder="Введите пароль"
            />
            <p className={style.error}>{errors.password?.message}</p>
          </>
        )}
      />

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
