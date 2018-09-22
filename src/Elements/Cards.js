import styled from 'styled-components';
import { elevation, transition } from '../Utilities';

export default styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 50px;
  color: black;
  ${elevation[1]};
  ${transition({})};
  &:hover {
    ${elevation[3]};
  }
`;
