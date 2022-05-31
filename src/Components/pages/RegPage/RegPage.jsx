import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { API } from "../../../API/API";
import MyForm from "../../UI/MyForm/MyForm";
import Loader from "../../UI/Loader/Loader";

const RegPage = () => {
  const navigate = useNavigate();

  const mutation = useMutation(async (data) => await API.sendRegData(data), {
    onSuccess: () => {
      navigate("/success");
    },
  });

  const sendData = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <h2>Регистрация</h2>
      {mutation.isLoading ? <Loader /> : <MyForm sendData={sendData} />}
    </>
  );
};

export default RegPage;
