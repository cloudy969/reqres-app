import React from "react";

import ResultBlock from "./ResultBlock/ResultBlock";
import TabsPanel from "./TabsPanel/TabsPanel";
import style from './Calculator.module.css'

const Calculator = () => {
  return (
    <div className={style.wrapper}>
      <TabsPanel />
      <ResultBlock />
    </div>
  );
};

export default Calculator;
