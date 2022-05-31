import React from "react";
import { Tabs } from "antd";

import EstatePriceCalculator from "../EstatePriceCalculator/EstatePriceCalculator";
import CreditCalculator from "../CreditCalculator/CreditCalculator";
import PaymentCalculator from "../PaymentCalculator/PaymentCalculator";

const TabsPanel = () => {
    const { TabPane } = Tabs;

    return (
    <Tabs style={{ width: "100%" }} defaultActiveKey="1">
      <TabPane tab="Недвижимость" key="1">
        <EstatePriceCalculator />
      </TabPane>
      <TabPane tab="Кредит" key="2">
        <CreditCalculator />
      </TabPane>
      <TabPane tab="Платеж" key="3">
        <PaymentCalculator />
      </TabPane>
    </Tabs>
  );
};

export default TabsPanel;
