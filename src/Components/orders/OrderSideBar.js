import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import OrderSideBarItem from './OrderSideBarItem';

const OrderSideBar = ({ orders, selectOrder }) => (
  <SideBarWrapper>
    {!orders ? (
      <div data-testid="no-orders">
        <h1>No orders</h1>
      </div>
    ) : (
      orders.map(order => (
        <OrderSideBarItem key={`order-${order.id}`} id={order.id} selectOrder={selectOrder} />
      ))
    )}
  </SideBarWrapper>
);

export default OrderSideBar;

const SideBarWrapper = styled.div`
  box-shadow: 10px 0 5px -2px #00000022;
  height: 100vh;
`;

OrderSideBar.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      'customer-id': PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          'product-id': PropTypes.string.isRequired,
          quantity: PropTypes.string.isRequired,
          'unit-price': PropTypes.string.isRequired,
          total: PropTypes.string.isRequired,
        }),
      ),
      total: PropTypes.string.isRequired,
    }),
  ),
  selectOrder: PropTypes.func.isRequired,
};

OrderSideBar.defaultProps = {
  orders: false,
};
