// import React from 'react';
import styled from 'styled-components';

import ContainerBottom from '../ContainerBottom/ContainerBottom';
import HeaderBottom from '../HeaderBottom/HeaderBottom';

const ContainerCities = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	text-align: left;
	width: 100%;
	letter-spacing: 2px;
	font-weight: 400;
	font-size: 1rem;
`;

const CityName = styled.h3`
	font-weight: 400;
	width: 110px;
	letter-spacing: 1px;
	margin: 0px;
`;

const CityTemp = styled.div`
	font-size: 1.25rem;
	color: rgba(0, 0, 0, 0.5);
	margin-right: 10px;
`;

// const CityList = [
// 	{
// 		key: 'Sydeny',
// 		temp: '17°',
// 		icon: 'http://openweathermap.org/img/wn/02d.png',
// 	},
// 	{
// 		key: 'Brisbane',
// 		temp: '20°',
// 		icon: 'http://openweathermap.org/img/wn/03d.png',
// 	},
// 	{
// 		key: 'Perth',
// 		temp: '17°',
// 		icon: 'http://openweathermap.org/img/wn/03d.png',
// 	},
// ];

const OtherCities = () => (
	<ContainerBottom>
		<HeaderBottom>Other Cities</HeaderBottom>
		<ContainerCities>
			<CityName>Sydeny</CityName>
			<CityTemp>17°</CityTemp>
			<img src="http://openweathermap.org/img/wn/02d.png" alt="Clouds" />
		</ContainerCities>
		<ContainerCities>
			<CityName>Brisbane</CityName>
			<CityTemp>20°</CityTemp>
			<img src="http://openweathermap.org/img/wn/02d.png" alt="Clouds" />
		</ContainerCities>
		<ContainerCities>
			<CityName>Perth</CityName>
			<CityTemp>17°</CityTemp>
			<img src="http://openweathermap.org/img/wn/03d.png" alt="Clouds" />
		</ContainerCities>
		{/* {CityList.map((key, temp, icon) => (
			<ContainerCities key={key}>
				<CityName>{key}</CityName>
				<CityTemp>{temp}</CityTemp>
				<img src={icon} alt="Clouds" />
			</ContainerCities>
		))} */}
	</ContainerBottom>
);

export default OtherCities;
