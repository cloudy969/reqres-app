import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { API } from "../../../API/API";
import UsersList from "./UsersList/UsersList";

const UsersPage = () => {
  const location = useLocation();
  const pageNumber = location.search?.substring(6) || 1;

  const [users, setUsers] = useState([]);
  const [paginationProps, setPaginationProps] = useState({
    totalUsers: 0,
    pageSize: 10,
  });
  const [page, setPage] = useState(parseInt(pageNumber));

  useEffect(async () => {
    setPage(parseInt(pageNumber));

    const response = await API.getUsers(pageNumber);

    setPaginationProps({
      ...paginationProps,
      totalUsers: response.total,
      pageSize: response.per_page,
    });
  }, [pageNumber]);

  return (
    <UsersList
      users={users}
      totalUsers={paginationProps.totalUsers}
      pageSize={paginationProps.pageSize}
      setUsers={setUsers}
      pageNumber={pageNumber}
      page={page}
      setPage={setPage}
    />
  );
};

export default UsersPage;
