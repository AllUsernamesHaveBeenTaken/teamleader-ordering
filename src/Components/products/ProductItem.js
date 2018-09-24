import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { OrderContext } from '../../Contexts';

import { Icon } from '../../Elements';

const ProductItem = ({ item, orderId, success }) => (
  <OrderContext.Consumer>
    {context => (
      <TableRow>
        <td>{item['product-id']}</td>
        <td>
          {!success && (
            <button
              type="submit"
              disabled={success}
              onClick={() => context.substractItem(orderId, item['product-id'])}
            >
              -
            </button>
          )}

          {item.quantity}

          {!success && (
            <button
              type="submit"
              disabled={success}
              onClick={() => context.addItem(orderId, item['product-id'])}
            >
              +
            </button>
          )}
        </td>
        <td>{item['unit-price']}</td>
        <td>{item.total}</td>
        {!success && (
          <td>
            <IconWrapper onClick={() => context.deleteItem(orderId, item['product-id'])}>
              <Icon name="trash" color="black" />
            </IconWrapper>
          </td>
        )}
      </TableRow>
    )}
  </OrderContext.Consumer>
);

export default ProductItem;

ProductItem.propTypes = {
  item: PropTypes.shape({
    'product-id': PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    'unit-price': PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
  }).isRequired,
  orderId: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

ProductItem.defaultProps = {
  success: false,
};

const TableRow = styled.tr`
  border-bottom: 1px solid black;
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;
