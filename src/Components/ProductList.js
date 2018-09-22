import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
import { Modal } from '../Elements';
import { Toggle } from '../Utilities';

const ProductList = ({ items, orderId, success }) => (
  <div>
    <h2>Products in this order</h2>
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Product id</th>
          <th>Quantity</th>
          <th>Unit price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <ProductItem
            key={`item-${item['product-id']}`}
            success={success}
            item={item}
            orderId={orderId}
          />
        ))}
        <tr>
          <th align="left">
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button type="button" onClick={toggle}>
                    +
                  </button>
                  <Modal on={on} toggle={toggle}>
                    <AddProduct />
                  </Modal>
                </Fragment>
              )}
            </Toggle>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProductList;

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      'product-id': PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      'unit-price': PropTypes.string.isRequired,
      total: PropTypes.string.isRequired,
    }),
  ).isRequired,
  orderId: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

ProductList.defaultProps = {
  success: false,
};
