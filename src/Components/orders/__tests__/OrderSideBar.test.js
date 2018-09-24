import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import OrderSideBar from '../OrderSideBar';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const orders = [
  {
    id: '1',
    'customer-id': '1',
    items: [
      {
        'product-id': 'B102',
        quantity: '10',
        'unit-price': '4.99',
        total: '49.90',
      },
    ],
    total: '49.90',
  },
  {
    id: '2',
    'customer-id': '2',
    items: [
      {
        'product-id': 'B102',
        quantity: '5',
        'unit-price': '4.99',
        total: '24.95',
      },
    ],
    total: '24.95',
  },
];

const selectOrder = jest.fn();

// OrderSideBar's props = orders, selectOrder
test('<OrderSideBar /> with orders', () => {
  const { getAllByTestId, queryByTestId } = render(
    <OrderSideBar orders={orders} selectOrder={selectOrder} />,
  );

  expect(getAllByTestId('menu-item')).length = orders.length;

  expect(queryByTestId('no-orders')).toBeFalsy();
});

test('<OrderSideBar /> with outorders', () => {
  const { getByTestId, queryAllByTestId } = render(
    <OrderSideBar selectOrder={selectOrder} />,
  );

  expect(queryAllByTestId('menu-item')).length = 0;

  expect(getByTestId('no-orders')).toBeTruthy();
});
