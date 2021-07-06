import styled from 'styled-components';
import { BREAKPOINT2, BREAKPOINT1 } from '../constants/constants';

const Container = styled.div`
	padding: 0 96px;

	@media only screen and (max-width: ${BREAKPOINT1}px) {
		padding: 0 20px;
	}

	@media only screen and (max-width: ${BREAKPOINT2}px) and (min-width: ${BREAKPOINT1}px) {
		padding: 0 50px;
	}
`;

export default Container;
