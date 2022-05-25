import React from "react";
import { Tabs } from "antd";

import style from './TabsPanel.module.css'
import FormBlock from "../FormBlock/FormBlock";

const { TabPane } = Tabs;

const TabsPanel = () => {
  return (
    <Tabs className={style.panel}  defaultActiveKey="1" >
      <TabPane tab="Недвижимость" key="1">
        <FormBlock />
      </TabPane>
      <TabPane tab="Кредит" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Платежи" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default TabsPanel;
