import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../../Elements';

const ProductItem = ({
  item, orderId, success, substractItem, addItem, deleteItem,
}) => (
  <TableRow data-testid="item-row">
    <td>{item['product-id']}</td>
    <td>
      {!success ? (
        <Fragment>
          <button
            type="submit"
            data-testid="substract-item"
            disabled={success}
            onClick={() => substractItem(orderId, item['product-id'])}
          >
            -
          </button>
          {item.quantity}
          <button
            type="submit"
            data-testid="add-item"
            disabled={success}
            onClick={() => addItem(orderId, item['product-id'])}
          >
            +
          </button>
        </Fragment>
      ) : item.quantity}
    </td>
    <td>{item['unit-price']}</td>
    <td>{item.total}</td>
    {!success && (
      <td>
        <IconWrapper
          data-testid="delete-item"
          onClick={() => deleteItem(orderId, item['product-id'])}
        >
          <Icon name="trash" color="black" />
        </IconWrapper>
      </td>
    )}
  </TableRow>
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
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  substractItem: PropTypes.func.isRequired,
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
