import React from "react";

import TabsPanel from "./TabsPanel/TabsPanel";
import style from './Calculator.module.css'

const Calculator = () => {
  return (
    <div className={style.wrapper}>
      <TabsPanel />
    </div>
  );
};

export default Calculator;
