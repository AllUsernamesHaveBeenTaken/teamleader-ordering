import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import ProductItem from '../ProductItem';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const substractItem = jest.fn();
const addItem = jest.fn();
const deleteItem = jest.fn();

const item = {
  'product-id': 'B102',
  quantity: '10',
  total: '49.90',
  'unit-price': '4.99',
};

const orderId = '1';

// ProductItem's props = item, orderId, success, substractItem, addItem, deleteItem
test('<ProductItem /> where success is true', () => {
  const success = true;
  const { queryByTestId, getByTestId } = render(
    <ProductItem
      item={item}
      orderId={orderId}
      success={success}
      substractItem={substractItem}
      addItem={addItem}
      deleteItem={deleteItem}
    />,
  );

  expect(getByTestId('item-row')).toBeTruthy();

  expect(queryByTestId('substract-item')).toBeFalsy();
  expect(substractItem).toHaveBeenCalledTimes(0);

  expect(queryByTestId('add-item')).toBeFalsy();
  expect(addItem).toHaveBeenCalledTimes(0);

  expect(queryByTestId('delete-item')).toBeFalsy();
  expect(deleteItem).toHaveBeenCalledTimes(0);
});

test('<ProductItem /> where success is false', () => {
  const success = false;
  const { getByTestId } = render(
    <ProductItem
      item={item}
      orderId={orderId}
      success={success}
      substractItem={substractItem}
      addItem={addItem}
      deleteItem={deleteItem}
    />,
  );

  expect(getByTestId('item-row')).toBeTruthy();

  fireEvent.click(getByTestId('substract-item'));
  expect(substractItem).toHaveBeenCalledTimes(1);
  expect(substractItem).toHaveBeenCalledWith(orderId, item['product-id']);

  fireEvent.click(getByTestId('add-item'));
  expect(addItem).toHaveBeenCalledTimes(1);
  expect(addItem).toHaveBeenCalledWith(orderId, item['product-id']);

  fireEvent.click(getByTestId('delete-item'));
  expect(deleteItem).toHaveBeenCalledTimes(1);
  expect(deleteItem).toHaveBeenCalledWith(orderId, item['product-id']);
});
