import styled from 'styled-components';

import { BREAKPOINT } from '../constants/constants';
import ContainerTop from '../components/ContainerTop';

const CityName = styled.div`
	margin-top: 16px;
	font-size: 2rem;
	text-align: center;

	&::after {
		content: '';
		height: 2px;
		width: 60%;
		margin: 10px auto;
		display: block;
		background: white;
		@media only screen and (max-width: ${BREAKPOINT}px) {
			width: 35%;
		}
	}
`;

const CurrentRight = ({ city }) => (
	<ContainerTop>
		<CityName>{city}</CityName>
	</ContainerTop>
);

export default CurrentRight;
