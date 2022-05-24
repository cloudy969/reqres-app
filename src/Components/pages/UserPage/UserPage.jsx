import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API } from "../../../API/API";
import style from "./UserPage.module.css";

const UserPage = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await API.getUser(params.id);
    setUser(response.data.data);
  }, []);

  return (
    <div className={style.wrapper}>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <p>{user.email}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default UserPage;