import styled from 'styled-components';
import { BREAKPOINT2, BREAKPOINT1 } from '../config/constants';

const ContainerBottom = styled.div`
  padding: 0 48px;
  border: 0;

  @media only screen and (max-width: ${BREAKPOINT1}px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: ${BREAKPOINT2}px) and (min-width: ${BREAKPOINT1}px) {
    padding: 0 30px;
  }
`;

export default ContainerBottom;
