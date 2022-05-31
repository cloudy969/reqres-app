import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Table } from "antd";

import { API } from "../../../../API/API";
import Pagination from "../../../UI/Pagination/Pagination";
import style from "./UserListRQ.module.css";
import { useQuery } from "react-query";
import Loader from "../../../UI/Loader/Loader";

const UsersListRQ = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pageNumber = location.search?.substring(6) || 1;

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(parseInt(pageNumber));
  const [totalPages, setTotalPages] = useState(0);

  const { isLoading, data } = useQuery(
    ["users", page],
    (page) => API.getUsers(page.queryKey[1]),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setUsers(data.data);
        setTotalPages(data.total / data.per_page);

        page === 1
          ? navigate("/usersRQ", { replace: true })
          : navigate(`/usersRQ?page=${page}`, { replace: true });
      },
    }
  );

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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Table
            onRow={(record, rowIndex) => {
              return {
                onClick: () => navigate(`/userRQ/${record.id}`),
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
            totalPages={totalPages}
            page={page}
            setPage={setPage}
          />
        </div>
      )}
    </>
  );
};
export default UsersListRQ;
