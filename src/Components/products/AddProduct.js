import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    const { products } = this.props;
    this.state = {
      quantity: 1,
      selectedItem: products[0],
    };
  }

  selectItem = (e) => {
    const { products } = this.props;
    this.setState({
      quantity: 1,
      selectedItem: products.find(item => item.id === e.target.value),
    });
  };

  render() {
    const { quantity, selectedItem } = this.state;
    const { products, addNewItem, orderId } = this.props;
    return (
      <div>
        <h3>Product</h3>
        <select onChange={this.selectItem}>
          {products.map(item => (
            <option key={`product-${item.id}`} value={item.id}>
              {item.id}
            </option>
          ))}
        </select>
        <h3>Description</h3>
        <p>{selectedItem.description}</p>
        <h3>Quantity</h3>
        <input
          type="number"
          placeholder={quantity}
          value={quantity}
          min="1"
          onChange={e => this.setState({ quantity: e.target.value < 1 ? 1 : e.target.value })}
        />
        <h3>{`Total: ${(+quantity * selectedItem.price).toFixed(2)}`}</h3>
        <button
          type="submit"
          onClick={() =>
            addNewItem(orderId, {
              'product-id': selectedItem.id,
              quantity: quantity.toString(),
              'unit-price': selectedItem.price,
              total: (+quantity * selectedItem.price).toFixed(2),
            })
          }
        >
          Add to cart
        </button>
      </div>
    );
  }
}

export default AddProduct;

AddProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.string,
    }),
  ).isRequired,
  orderId: PropTypes.string.isRequired,
  addNewItem: PropTypes.func.isRequired,
};
