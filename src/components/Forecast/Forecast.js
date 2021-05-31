// import React from 'react';
import styled from 'styled-components';

import ContainerBottom from '../ContainerBottom/ContainerBottom';
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

const WeekList = [
	{
		key: 'MON',
		img: 'http://openweathermap.org/img/wn/02d.png',
		temp: '17°',
	},
	{
		key: 'TUE',
		img: 'http://openweathermap.org/img/wn/02d.png',
		temp: '17°',
	},
	{
		key: 'WED',
		img: 'http://openweathermap.org/img/wn/02d.png',
		temp: '17°',
	},
	{
		key: 'THU',
		img: 'http://openweathermap.org/img/wn/02d.png',
		temp: '17°',
	},
	{
		key: 'FRI',
		img: 'http://openweathermap.org/img/wn/02d.png',
		temp: '17°',
	},
];

const Forecast = () => (
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

export default Forecast;

/* <ContainerWeather>
	<ForecastWeek>MON</ForecastWeek>
	<img src="http://openweathermap.org/img/wn/02d.png" alt="Clouds" />
	<ForecastTemp>17°</ForecastTemp>
</ContainerWeather>
<ContainerWeather>
	<ForecastWeek>TUE</ForecastWeek>
	<img src="http://openweathermap.org/img/wn/02d.png" alt="Clouds" />
	<ForecastTemp>17°</ForecastTemp>
</ContainerWeather>
<ContainerWeather>
	<ForecastWeek>WED</ForecastWeek>
	<img src="http://openweathermap.org/img/wn/02d.png" alt="Clouds" />
	<ForecastTemp>17°</ForecastTemp>
</ContainerWeather>
<ContainerWeather>
	<ForecastWeek>THU</ForecastWeek>
	<img src="http://openweathermap.org/img/wn/02d.png" alt="Clouds" />
	<ForecastTemp>17°</ForecastTemp>
</ContainerWeather>
<ContainerWeather>
	<ForecastWeek>FRI</ForecastWeek>
	<img src="http://openweathermap.org/img/wn/02d.png" alt="Clouds" />
	<ForecastTemp>17°</ForecastTemp>
</ContainerWeather> */
