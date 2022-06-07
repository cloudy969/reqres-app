import React, { useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { API } from "../../../API/API";
import { isAuthContext } from "../../../Context/Context";
import MyForm from "../../UI/MyForm/MyForm";
import Loader from "../../UI/Loader/Loader";
import {GoogleLogin} from "@react-oauth/google";

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

  const googleAuth = (response) => {
    console.log(response)
    localStorage.setItem('token', response.credential);
    setIsAuth(true);
    navigate("/home");
  }

  return (
    <>
      <h2>Авторизация</h2>
      {mutation.isLoading ? <Loader /> : <>
        <MyForm sendData={sendData} />
        <GoogleLogin
            onSuccess={googleAuth}
            onError={() => console.log('Login Failed')}
            useOneTap={true}
        />
      </> }
    </>
  );
};

export default LoginPage;
