import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { API } from "../../../API/API";
import style from "./UserPageRQ.module.css";
import Loader from "../../UI/Loader/Loader";

const UserPageRQ = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const [user, setUser] = useState({});

  const { isLoading, data } = useQuery(
    ["user", id],
    async (id) => await API.getUser(id.queryKey[1]),
    {
      onSuccess: (data) => {
        setUser({
          avatar: data.data.avatar,
          name: data.data.first_name + " " + data.data.last_name,
          email: data.data.email,
        });
      },
    }
  );

  return (
    <div className={style.wrapper}>
      {isLoading && <Loader />}
      <img src={user.avatar} alt={`${user.name}`} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default UserPageRQ;
