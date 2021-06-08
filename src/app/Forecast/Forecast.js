// import React from 'react';
import styled from 'styled-components';

import ContainerBottom from '../../components/ContainerBottom/ContainerBottom';
import HeaderBottom from '../HeaderBottom/HeaderBottom';

const ContainerForecast = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 280px;
`;

const ContainerWeather = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 50px;
	margin: 0 10px;
`;

const ForecastWeek = styled.h3`
	font-weight: 400;
	letter-spacing: 1px;
	margin: 0.85rem 0 0.66rem;
`;

const ForecastTemp = styled.div`
	font-size: 1.25rem;
	color: rgba(0, 0, 0, 0.5);
	margin-right: 10px;
	margin: 0.6em 0 0 0;
`;


const weekday = () => {
	const d = new Date();
	const n = d.getDay();
	const weekdayList = [
		'MON',
		'TUE',
		'WED',
		'THU',
		'FRI',
		'SAT',
		'SUN',
		'MON',
		'TUE',
		'WED',
		'THU',
		'FRI',
		'SAT',
		'SUN'
	];
	return weekdayList.slice(n, n+5);
};

const Forecast = ({daily}) => {
	const weekdayList = weekday();
	const WeekList = [
		{
			key: weekdayList[0],
			img: `http://openweathermap.org/img/wn/${daily[0].weather[0].icon}.png`,
			temp: `${Math.trunc(daily[0].temp.day)}°`,
		},
		{
			key: weekdayList[1],
			img: `http://openweathermap.org/img/wn/${daily[1].weather[0].icon}.png`,
			temp: `${Math.trunc(daily[1].temp.day)}°`,
		},
		{
			key: weekdayList[2],
			img: `http://openweathermap.org/img/wn/${daily[2].weather[0].icon}.png`,
			temp: `${Math.trunc(daily[2].temp.day)}°`,
		},
		{
			key: weekdayList[3],
			img: `http://openweathermap.org/img/wn/${daily[3].weather[0].icon}.png`,
			temp: `${Math.trunc(daily[3].temp.day)}°`,
		},
		{
			key: weekdayList[4],
			img: `http://openweathermap.org/img/wn/${daily[4].weather[0].icon}.png`,
			temp: `${Math.trunc(daily[4].temp.day)}°`,
		},
	];
	return (
		<ContainerBottom>
			<HeaderBottom>Forecast</HeaderBottom>
			<ContainerForecast>
				{WeekList.map(({ key, img, temp }) => (
					<ContainerWeather key={key}>
						<ForecastWeek>{key}</ForecastWeek>
						<img src={img} alt="Clouds" />
						<ForecastTemp>{temp}</ForecastTemp>
					</ContainerWeather>
				))}
			</ContainerForecast>
		</ContainerBottom>
	);
} ;

export default Forecast;

