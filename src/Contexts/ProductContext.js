import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = createContext();

export class ProductProvider extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('API/products.json')
      .then(res => res.json())
      .then(data => this.setState(() => ({ products: data })));
  }

  render() {
    const { children } = this.props;
    const { products } = this.state;
    return (
      <ProductContext.Provider
        value={{
          products,
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  }
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
