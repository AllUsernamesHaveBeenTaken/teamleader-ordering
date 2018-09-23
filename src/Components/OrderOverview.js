import React, { Fragment } from 'react';
import styled from 'styled-components';

import OrderSideBar from './OrderSideBar';
import OrderDetail from './OrderDetail';

import { OrderContext } from '../Contexts';

const OrderOverview = () => (
  <OrderOverviewWrapper>
    <OrderContext.Consumer>
      {context =>
        (context.orders.length > 0 ? (
          <Fragment>
            <OrderSideBar />
            <OrderDetail
              order={context.orders.find(order => order.id === context.selectedOrder && order)}
              placeOrder={context.placeOrder}
              addNewItem={context.addNewItem}
            />
          </Fragment>
        ) : (
          <p>No orders Found</p>
        ))
      }
    </OrderContext.Consumer>
  </OrderOverviewWrapper>
);

export default OrderOverview;

const OrderOverviewWrapper = styled.div`
  display: flex;
`;
