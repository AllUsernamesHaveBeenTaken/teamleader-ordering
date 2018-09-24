import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { elevation, transition } from '../../Utilities';

const OrderSideBarItem = ({ selectOrder, id }) => (
  <MenuItemWrapper data-testid="menu-item" onClick={() => selectOrder(id)}>
    <MenuItemTitle data-testid="menu-item-title">{`Order No. ${id}`}</MenuItemTitle>
  </MenuItemWrapper>
);

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
