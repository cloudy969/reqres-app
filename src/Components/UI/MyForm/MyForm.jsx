import React, {useState} from 'react';
import style from './MyForm.module.css'

const MyForm = ({sendData}) => {
    const [data, setData] = useState({email: '', password: ''})

    const sendFormData = (e) => {
        e.preventDefault();
        sendData(data);
    }

    return (
        <form onSubmit={sendFormData}>
            <input className={style.input}
                   required
                   type="email"
                   placeholder='Введите ваш Email'
                   value={data.email}
                   onChange={e => setData({...data, email: e.target.value})}
            />
            <input className={style.input}
                   required
                   type="password"
                   placeholder='Введите ваш пароль'
                   value={data.password}
                   onChange={e => setData({...data, password: e.target.value})}
            />
            <button className={style.btn}>Отправить</button>
        </form>
    );
};

export default MyForm;