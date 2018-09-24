import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import AddProduct from '../AddProduct';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const addNewItem = jest.fn();

const orderId = '1';

const products = [
  {
    id: 'A101',
    description: 'Screwdriver',
    category: '1',
    price: '9.75',
  },
  {
    id: 'A102',
    description: 'Electric screwdriver',
    category: '1',
    price: '49.50',
  },
];

// AddProduct's props = products, addNewItem, orderId
test('<AddProduct />', () => {
  const { debug, getByTestId } = render(
    <AddProduct products={products} addNewItem={addNewItem} orderId={orderId} />,
  );

  expect(getByTestId('select-product')).toBeTruthy();
  getByTestId('select-product').value = 'A101';
  fireEvent.change(getByTestId('select-product'));

  expect(getByTestId('quantity-product')).toBeTruthy();
  getByTestId('quantity-product').value = '1';
  fireEvent.change(getByTestId('quantity-product'));

  expect(getByTestId('submit-new-product')).toBeTruthy();
  fireEvent.click(getByTestId('submit-new-product'));
  expect(addNewItem).toHaveBeenCalledTimes(1);
  expect(addNewItem).toBeCalledWith(orderId, {
    'product-id': 'A101',
    quantity: '1',
    'unit-price': '9.75',
    total: '9.75',
  });

  debug();
});
