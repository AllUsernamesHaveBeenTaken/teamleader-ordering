import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlasMessage = ({ success }) => (
  <FlasMessageWrapper success={success}>
    {success ? 'This order has been submitted!' : 'This order has not been submitted!'}
  </FlasMessageWrapper>
);

export default FlasMessage;

const FlasMessageWrapper = styled.p`
  background: ${props => (props.success ? 'lightgreen' : 'lightpink')};
`;

FlasMessage.propTypes = {
  success: PropTypes.bool.isRequired,
};
