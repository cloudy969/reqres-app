import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Table } from "antd";

import { API } from "../../../../API/API";
import style from "./UserList.module.css";
import Pagination from "../../../UI/Pagination/Pagination";

const UsersList = ({
  users,
  pageSize,
  totalUsers,
  setUsers,
  pageNumber,
  page,
  setPage,
}) => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Аватар",
      dataIndex: "avatar",
      key: "avatar",
      render: (url) => (
        <NavLink to="/user/1">
          <img className={style.userAvatar} src={url} />
        </NavLink>
      ),
    },
    {
      title: "Имя",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Фамилия",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  const dataSource = users;

  useEffect(async () => {
    const response = await API.getUsers(page);
    setUsers(response.data);

    page === 1
      ? navigate("/users", { replace: true })
      : navigate(`/users?page=${page}`, { replace: true });
  }, [page]);

  return (
    <div>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: () => navigate(`/user/${record.id}`),
          };
        }}
        rowClassName={style.row}
        className={style.wrapper}
        columns={columns}
        dataSource={dataSource}
        showHeader={false}
        pagination={false}
      />
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalUsers / pageSize}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
export default UsersList;
