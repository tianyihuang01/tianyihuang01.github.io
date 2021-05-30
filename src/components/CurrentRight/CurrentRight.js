import styled from 'styled-components';

import ContainerTop from '../ContainerTop/ContainerTop';

const CityName = styled.div`
	margin-top: 16px;
	font-weight: 500;

	&::after {
		border: solid rgba(11, 58, 102, 0.75) 1px;
	}
`;

const CurrentRight = () => (
	<ContainerTop>
		<CityName>Melbourne</CityName>
	</ContainerTop>
);

export default CurrentRight;