import React from 'react';
import style from './UserItem.module.css'

const UserItem = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={props.avatar} alt=""/>
            <div className={style.infoWrapper}>
                <p className={style.name}>{props.first_name} {props.last_name}</p>
                <p>{props.email}</p>
            </div>


        </div>
    );
};

export default UserItem;