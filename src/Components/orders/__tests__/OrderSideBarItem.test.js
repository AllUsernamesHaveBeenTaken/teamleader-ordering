import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import OrderSideBarItem from '../OrderSideBarItem';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const orderId = '1';

const selectOrder = jest.fn();

// OrderSideBarItem's props = id, selectOrder
test('<OrderSideBarItem />', () => {
  const { getByTestId } = render(
    <OrderSideBarItem id={orderId} selectOrder={selectOrder} />,
  );

  const menuItem = getByTestId('menu-item');

  expect(menuItem).toBeTruthy();

  expect(getByTestId('menu-item').textContent).toBe(`Order No. ${orderId}`);

  fireEvent.click(menuItem);
  expect(selectOrder).toHaveBeenCalledTimes(1);
  expect(selectOrder).toBeCalledWith(orderId);
});
