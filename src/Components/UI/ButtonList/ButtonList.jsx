import React from "react";

import style from "./ButtonList.module.css";

const ButtonList = ({ values, buttonAction }) => {

  const handleClick = (value) => {
    buttonAction(value)
  }

  return (
    <div className={style.wrapper}>
      {values.map((value) => (
        <p className={style.paragraph} key={value.id} onClick={() => handleClick(value.value)}>
          {value.value}
        </p>
      ))}
    </div>
  );
};

export default ButtonList;