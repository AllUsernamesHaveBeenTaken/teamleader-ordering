import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Portal, absolute } from '../Utilities';
import Card from './Cards';
import Icon from './Icon';

const Modal = ({ children, on, toggle }) => (
  <Portal>
    {on && (
      <ModalWrapper>
        <ModalCard>
          <CloseButton onClick={toggle}>
            <Icon name="close" />
          </CloseButton>
          <div>{children}</div>
        </ModalCard>
        <Background onClick={toggle} />
      </ModalWrapper>
    )}
  </Portal>
);

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
  position: relative;
  z-index: 1;
  min-width: 320px;
`;

const CloseButton = styled.button`
  ${absolute({ x: 'right' })} border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: #00000060;
`;
