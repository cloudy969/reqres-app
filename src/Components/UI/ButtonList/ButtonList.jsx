import React from "react";

import style from "./ButtonList.module.css";
import {Button} from "antd";

const ButtonList = ({ values, buttonAction }) => {

  const handleClick = (value) => {
    buttonAction(value)
  }

  return (
    <div>
      {values.map((value) => (
        <Button type='primary' className={style.btn} key={value.id} onClick={() => handleClick(value.value)}>
          {value.value}
        </Button>
      ))}
    </div>
  );
};

export default ButtonList;