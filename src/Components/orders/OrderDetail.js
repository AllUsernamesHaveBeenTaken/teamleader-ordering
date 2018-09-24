import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProductList from '../products/ProductList';
import AddProduct from '../products/AddProduct';
import { Toggle } from '../../Utilities';
import { FlashMessage, Modal } from '../../Elements';

import { ProductContext } from '../../Contexts';

const OrderDetail = ({
  order, placeOrder, addNewItem, addItem, deleteItem, substractItem,
}) => (
  <OrderDetailWrapper>
    {order.success !== undefined && <FlashMessage success={order.success} />}
    <h1>{`Order No. ${order.id}`}</h1>
    {order.items.length > 0 ? (
      <ProductList
        success={order.success}
        items={order.items}
        orderId={order.id}
        addNewItem={addNewItem}
        addItem={addItem}
        deleteItem={deleteItem}
        substractItem={substractItem}
      />
    ) : (
      <Fragment>
        <p>This order has no products.</p>
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
                      orderId={order.id}
                      products={products}
                      addNewItem={addNewItem}
                    />
                  )}
                </ProductContext.Consumer>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </Fragment>
    )}
    <h2>{`Total: ${order.total}`}</h2>
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
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  substractItem: PropTypes.func.isRequired,
};

const OrderDetailWrapper = styled.div`
  margin-left: 2rem;
  text-align: start;
`;
