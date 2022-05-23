import React from 'react';
import UserItem from "../UserItem/UserItem";
import {Pagination, Table} from 'antd';
import style from './UserList.module.css'

const UsersList = ({users, pageSize, totalUsers, currentPage, setCurrentPage}) => {

    const columns = [
        {
            title: 'Аватар',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (url) => <img className={style.userAvatar} src={url}/>,
        },
        {
            title: 'Имя',
            dataIndex: 'first_name',
            key: 'first_name',
            render: name => <a href='#'>{name}</a>
        },
        {
            title: 'Фамилия',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }
    ]
    const dataSource = users;

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(currentPage)
    }

    return (
        <div>
            <Table
                className={style.wrapper}
                columns={columns}
                dataSource={dataSource}
                showHeader={false}
                pagination={false}
            />
            {/*<ul className='users-list'>*/}
            {/*    {users.map(user => <li key={user.id}> <UserItem {...user} /> </li>)}*/}
            {/*</ul>*/}
            <Pagination current={currentPage}
                        pageSize={pageSize}
                        total={totalUsers}
                        onChange={changePage}
                        className={style.pagination}
            />
        </div>
    );
};

export default UsersList;