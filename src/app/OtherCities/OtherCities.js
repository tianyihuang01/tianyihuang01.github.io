// import React from 'react';
import styled from 'styled-components';

import ContainerBottom from '../../components/ContainerBottom/ContainerBottom';
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
	width: 67px;
`;

const OtherCities = ({weather}) => {
	// console.log(city);
	const CityList = [
		{
			key: weather['sydney'].city,
			temp: `${weather['sydney'].temp}°`,
			icon: `http://openweathermap.org/img/wn/${weather['sydney'].icon}.png`,
		},
		{
			key: weather['brisbane'].city,
			temp: `${weather['brisbane'].temp}°`,
			icon: `http://openweathermap.org/img/wn/${weather['brisbane'].icon}.png`,
		},
		{
			key: weather['perth'].city,
			temp: `${weather['perth'].temp}°`,
			icon: `http://openweathermap.org/img/wn/${weather['perth'].icon}.png`,
		},
	];
	return (
		<ContainerBottom>
			<HeaderBottom>Other Cities</HeaderBottom>
			{CityList.map((item) => (
				<ContainerCities key={item.key}>
					<CityName>{item.key}</CityName>
					<CityTemp>{item.temp}</CityTemp>
					<img src={item.icon} alt="Clouds" />
				</ContainerCities>
			))}
		</ContainerBottom>
	);
};

export default OtherCities;

/* <ContainerCities>
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
</ContainerCities> */
