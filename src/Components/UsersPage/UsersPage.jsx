import React, {useEffect, useState} from 'react';
import {API} from "../../API/API";
import UsersList from "./UsersList/UsersList";

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    const [paginationProps, setPaginationProps] = useState({totalUsers: 0, pageSize: 10 })
    const [currentPage, setCurrentPage] = useState(1)

    useEffect( async () => {
        const response = await API.getUsers(currentPage);
        setUsers(response.data.data)

        setPaginationProps({
            ...paginationProps,
            totalUsers: response.data.total,
            pageSize: response.data.per_page})
    }, [currentPage])

    return <UsersList users={users}
                      totalUsers={paginationProps.totalUsers}
                      pageSize={paginationProps.pageSize}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
    />
};

export default UsersPage;