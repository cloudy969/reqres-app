import React, { useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { API } from "../../../API/API";
import { isAuthContext } from "../../../Context/Context";
import MyForm from "../../UI/MyForm/MyForm";
import Loader from "../../UI/Loader/Loader";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useContext(isAuthContext);

  const mutation = useMutation(async (data) => await API.sendAuthData(data), {
    onSuccess: (data) => {
      localStorage.setItem("token", JSON.stringify(data.token));
      setIsAuth(true);
      navigate("/home");
    },
  });
  const sendData = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <h2>Авторизация</h2>
      {mutation.isLoading ? <Loader /> : <MyForm sendData={sendData} />}
    </>
  );
};

export default LoginPage;
