// import React from 'react';
import {CITIES} from '../../constants/constants';
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
			key: weather[CITIES.SYDNEY.name].city,
			temp: `${Math.trunc(weather[CITIES.SYDNEY.name].temp)}°`,
			icon: `http://openweathermap.org/img/wn/${
				weather[CITIES.SYDNEY.name].icon
			}.png`,
		},
		{
			key: weather[CITIES.BRISBANE.name].city,
			temp: `${Math.trunc(weather[CITIES.BRISBANE.name].temp)}°`,
			icon: `http://openweathermap.org/img/wn/${
				weather[CITIES.BRISBANE.name].icon
			}.png`,
		},
		{
			key: weather[CITIES.PERTH.name].city,
			temp: `${Math.trunc(weather[CITIES.PERTH.name].temp)}°`,
			icon: `http://openweathermap.org/img/wn/${
				weather[CITIES.PERTH.name].icon
			}.png`,
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

