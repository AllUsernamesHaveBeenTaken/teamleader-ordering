import React from 'react';
import styled from 'styled-components';

import OrderSideBarItem from './OrderSideBarItem';
import { OrderContext } from '../../Contexts';

const OrderSideBar = () => (
  <OrderContext.Consumer>
    {context => (
      <SideBarWrapper>
        {context.orders.map(order => (
          <OrderSideBarItem key={`order-${order.id}`} id={order.id} selectOrder={context.selectOrder} />
        ))}
      </SideBarWrapper>
    )}
  </OrderContext.Consumer>
);

export default OrderSideBar;

const SideBarWrapper = styled.div`
  box-shadow: 10px 0 5px -2px #00000022;
  height: 100vh;
`;
