import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ProductList from '../ProductList';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const substractItem = jest.fn();
const addItem = jest.fn();
const deleteItem = jest.fn();
const addNewItem = jest.fn();

const orderId = '1';

const items = [
  {
    'product-id': 'B102',
    quantity: '10',
    total: '49.90',
    'unit-price': '4.99',
  },
  {
    'product-id': 'B102',
    quantity: '10',
    total: '49.90',
    'unit-price': '4.99',
  },
];
// ProductList's props = items, orderId, success, addNewItem, addItem, deleteItem, substractItem,
test('<ProductList /> where success is true', () => {
  const success = true;
  const { getByTestId, queryByTestId, getAllByTestId } = render(
    <ProductList
      items={items}
      orderId={orderId}
      success={success}
      addNewItem={addNewItem}
      substractItem={substractItem}
      addItem={addItem}
      deleteItem={deleteItem}
    />,
  );

  expect(getByTestId('items-table')).toBeTruthy();

  expect(queryByTestId('add-product')).toBeFalsy();
  expect(addNewItem).toHaveBeenCalledTimes(0);

  expect(getAllByTestId('item-row').length).toBe(items.length);
});
