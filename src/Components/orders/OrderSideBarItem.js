import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { elevation, transition } from '../../Utilities';

class OrderSideBarItem extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      id,
    };
  }

  render() {
    const { id } = this.state;
    const { selectOrder } = this.props;
    return (
      <MenuItemWrapper onClick={() => selectOrder(id)}>
        <MenuItemTitle>{`Order No. ${id}`}</MenuItemTitle>
      </MenuItemWrapper>
    );
  }
}

export default OrderSideBarItem;

OrderSideBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  selectOrder: PropTypes.func.isRequired,
};

const MenuItemWrapper = styled.div`
  overflow: auto;
  border-bottom: 1px solid black;
  cursor: pointer;
  ${transition({})};
  &:hover {
    ${elevation[4]};
  }
`;

const MenuItemTitle = styled.h1`
  margin: 0;
  padding: 1rem;
`;
