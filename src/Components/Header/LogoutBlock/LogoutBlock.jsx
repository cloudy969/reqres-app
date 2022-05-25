import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const LogoutBlock = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Вы уверены?')) {
      localStorage.removeItem("token");
      setIsAuth(false);
      navigate("/login");
    }
  };

  return (
    <Button type="danger" onClick={handleLogout}>
      Выйти
    </Button>
  );
};

export default LogoutBlock;
