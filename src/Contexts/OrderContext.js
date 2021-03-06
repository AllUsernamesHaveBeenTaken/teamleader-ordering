import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const OrderContext = createContext();

export class OrderProvider extends Component {
  state = {
    orders: [],
    selectedOrder: '1',
  };

  componentDidMount() {
    /*
      Replace fetch url with:
      http://5ba3d0348da2f20014654ca0.mockapi.io/orders
      to test with an API.
    */
    fetch('API/orders.json')
      .then(res => res.json())
      .then(data => this.setState(() => ({ orders: data })));
  }

  totalOrder = (items) => {
    const total = items.map(item => item.total);
    return total.length > 0 ? total.reduce((a, b) => +a + +b) : 0;
  };

  findOrder = (orders, orderId) => orders.find(order => order.id === orderId);

  findItem = (items, itemId) => items.find(item => item['product-id'] === itemId);

  selectOrder = (id) => {
    this.setState(() => ({ selectedOrder: id }));
  };

  deleteItem = (orderId, itemId) => {
    const { orders } = this.state;
    const foundOrder = this.findOrder(orders, orderId);
    const findItemIndex = foundOrder.items.findIndex(item => item['product-id'] === itemId);
    foundOrder.items.splice(findItemIndex, 1);
    foundOrder.total = this.totalOrder(foundOrder.items).toString();
    const newOrders = orders.map(order => (order.id === orderId ? foundOrder : order));
    this.setState(() => ({
      orders: newOrders,
    }));
  };

  placeOrder = (orderId) => {
    const { orders } = this.state;
    const randomBoolean = Math.random() >= 0.3;
    const foundOrder = this.findOrder(orders, orderId);
    foundOrder.total = this.totalOrder(foundOrder.items).toString();
    const newOrders = orders.map(
      order => (order.id === orderId ? { ...foundOrder, success: randomBoolean } : order),
    );
    console.log('====================================');
    console.log('Is order placed: ', randomBoolean);
    console.log(`Order-${foundOrder.id}:`, foundOrder);
    console.log('====================================');
    this.setState(() => ({
      orders: newOrders,
    }));
  };

  substractItem = (orderId, itemId) => {
    const { orders } = this.state;
    const foundOrder = this.findOrder(orders, orderId);
    const foundItem = this.findItem(foundOrder.items, itemId);

    if (foundItem.quantity === '1') {
      this.deleteItem(orderId, itemId);
    } else {
      const quantity = foundItem.quantity - 1;
      const newTotal = quantity * +foundItem['unit-price'];
      const findItemIndex = foundOrder.items.findIndex(item => item['product-id'] === itemId);
      foundOrder.items[findItemIndex] = {
        ...foundItem,
        quantity: quantity.toString(),
        total: newTotal.toFixed(2),
      };
      foundOrder.total = this.totalOrder(foundOrder.items).toString();
      const newOrders = orders.map(order => (order.id === orderId ? foundOrder : order));
      this.setState(() => ({
        orders: newOrders,
      }));
    }
  };

  addItem = (orderId, itemId) => {
    const { orders } = this.state;
    const foundOrder = this.findOrder(orders, orderId);
    const foundItem = this.findItem(foundOrder.items, itemId);
    const quantity = +foundItem.quantity + 1;
    const findItemIndex = foundOrder.items.findIndex(item => item['product-id'] === itemId);
    const newTotal = quantity * +foundItem['unit-price'];
    foundOrder.items[findItemIndex] = {
      ...foundItem,
      quantity: quantity.toString(),
      total: newTotal.toFixed(2),
    };
    foundOrder.total = this.totalOrder(foundOrder.items).toString();
    const newOrders = orders.map(order => (order.id === orderId ? foundOrder : order));
    this.setState(() => ({
      orders: newOrders,
    }));
  };

  addNewItem = (orderId, itemToAdd) => {
    const { orders } = this.state;
    const foundOrder = this.findOrder(orders, orderId);
    const foundItem = this.findItem(foundOrder.items, itemToAdd['product-id']);
    if (foundItem === undefined) {
      foundOrder.items.push(itemToAdd);
    } else {
      this.addItem(orderId, itemToAdd['product-id']);
    }
    foundOrder.total = this.totalOrder(foundOrder.items).toString();
    const newOrders = orders.map(order => (order.id === orderId ? foundOrder : order));
    this.setState(() => ({
      orders: newOrders,
    }));
  };

  render() {
    const { children } = this.props;
    const { orders, selectedOrder } = this.state;
    return (
      <OrderContext.Provider
        value={{
          orders,
          selectedOrder,
          selectOrder: this.selectOrder,
          deleteItem: this.deleteItem,
          placeOrder: this.placeOrder,
          substractItem: this.substractItem,
          addItem: this.addItem,
          addNewItem: this.addNewItem,
        }}
      >
        {children}
      </OrderContext.Provider>
    );
  }
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
