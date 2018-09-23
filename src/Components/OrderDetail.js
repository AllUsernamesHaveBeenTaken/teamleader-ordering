import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProductList from './ProductList';
import FlashMessage from './FlashMessage';

const totalOrder = (items) => {
  const total = items.map(item => item.total);
  return total.length > 0 ? total.reduce((a, b) => +a + +b) : 0;
};

const OrderDetail = ({ order, placeOrder, addNewItem }) => (
  <OrderDetailWrapper>
    {order.success !== undefined && <FlashMessage success={order.success} />}
    <h1>{`Order No. ${order.id}`}</h1>
    {order.items.length > 0 ? (
      <ProductList
        success={order.success}
        items={order.items}
        orderId={order.id}
        addNewItem={addNewItem}
      />
    ) : (
      <p>This order has no products.</p>
    )}
    <h2>{`Total: ${totalOrder(order.items)}`}</h2>
    {order.items.length > 0 && (
      <button type="submit" disabled={order.success} onClick={() => placeOrder(order.id)}>
        Place order
      </button>
    )}
  </OrderDetailWrapper>
);

export default OrderDetail;

OrderDetail.propTypes = {
  order: PropTypes.shape({
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
  }).isRequired,
  placeOrder: PropTypes.func.isRequired,
  addNewItem: PropTypes.func.isRequired,
};

const OrderDetailWrapper = styled.div`
  margin-left: 2rem;
  text-align: start;
`;
