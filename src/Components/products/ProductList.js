import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ProductContext } from '../../Contexts';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
import { Modal } from '../../Elements';
import { Toggle } from '../../Utilities';

const ProductList = ({
  items,
  orderId,
  success,
  addNewItem,
  addItem,
  deleteItem,
  substractItem,
}) => (
  <div>
    <h2>Products in this order</h2>
    <table data-testid="items-table" style={{ borderCollapse: 'collapse' }}>
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
            addItem={addItem}
            deleteItem={deleteItem}
            substractItem={substractItem}
          />
        ))}
        {!success && (
          <tr>
            <th align="left">
              <Toggle>
                {({ on, toggle }) => (
                  <Fragment>
                    <button data-testid="add-product" type="button" onClick={toggle}>
                    Add a product
                    </button>
                    <Modal on={on} toggle={toggle}>
                      <ProductContext.Consumer>
                        {({ products }) => (
                          <AddProduct
                            data-testid="<AddProduct />"
                            orderId={orderId}
                            products={products}
                            addNewItem={addNewItem}
                          />
                        )}
                      </ProductContext.Consumer>
                    </Modal>
                  </Fragment>
                )}
              </Toggle>
            </th>
          </tr>
        )}
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
  addNewItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  substractItem: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  success: false,
};
