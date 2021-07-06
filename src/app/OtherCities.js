import styled from 'styled-components';

import { BREAKPOINT2 } from '../constants/constants';
import ContainerBottom from '../components/ContainerBottom';
import HeaderBottom from './HeaderBottom';

const ContainerCities = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	text-align: left;
	width: 100%;
	letter-spacing: 2px;
	font-weight: 400;
	font-size: 1rem;
	justify-content: space-between;
`;

const CityName = styled.h3`
	font-weight: 400;
	width: 95px;
	letter-spacing: 1px;
	margin: 0px 10px;
	cursor: pointer;
`;

const CityTemp = styled.div`
	font-size: 1.25rem;
	color: rgba(0, 0, 0, 0.5);
	margin-right: 10px;
	width: 40px;
`;

const CityDesc = styled.h3`
	font-weight: 400;
	color: rgba(0, 0, 0, 0.5);
	width: 60px;
	letter-spacing: 1px;
	margin: 0px 10px;
	padding-left: 20px;
	display: none;
	@media only screen and (min-width: ${BREAKPOINT2}px) {
		display: block;
	}
`;

const OtherCities = ({ weather, setDefaultCity }) => {
	console.log('other city rendered！！');

	return (
		<ContainerBottom>
			<HeaderBottom>Other Cities</HeaderBottom>
			{weather.map((item) => {
				return (
					<ContainerCities key={item.id}>
						<CityName onClick={() => setDefaultCity(item.name)}>
							{item.name}
						</CityName>
						<CityTemp>{item.temp}</CityTemp>
						<img src={item.icon} alt="Clouds" />
						<CityDesc>{item.weather}</CityDesc>
					</ContainerCities>
				);
			})}
		</ContainerBottom>
	);
};

export default OtherCities;
