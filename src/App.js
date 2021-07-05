// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import CurrentLeft from './app/CurrentLeft/CurrentLeft';
import Forecast from './app/Forecast/Forecast';
import OtherCities from './app/OtherCities/OtherCities';
import CurrentRight from './app/CurrentRight/CurrentRight';

// import getCurrentWeather from './api/getCurrentWeather/getCurrentWeather';
import getCurrentAndForecast from './api/getCurrentAndForecast/getCurrentAndForecast';
import { CITIES } from './constants/constants';
import { weekday, weekList } from './utils/weekConfig';

// import ContainerBottom from './components/ContainerBottom/ContainerBottom';

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background-image: url(https://wallpaperaccess.com/full/2629319.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Card = styled.div`
	margin: 60px;
	background: #fff;
	border-radius: 32px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const CardTop = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${(props) => (props.padding ? '80px 80px' : '64px 0')};
	background-image: url(https://i.imgur.com/GhQZhaO.jpg);
	background-size: cover;
	border-top-left-radius: 32px;
	border-top-right-radius: 32px;
	color: #fff;
	position: relative;
`;

const CardBottom = styled.div`
	display: flex;
	flex-direction: row;
	padding: 36px 0;
}
`;

const DividerBottom = styled.div`
	width: 3px;
	background-color: rgba(0, 0, 0, 0.1);
`;

const cities = [
	{
		name: CITIES.MELBOURNE.name,
		lat: CITIES.MELBOURNE.coord.lat,
		lon: CITIES.MELBOURNE.coord.lon,
	},
	{
		name: CITIES.SYDNEY.name,
		lat: CITIES.SYDNEY.coord.lat,
		lon: CITIES.SYDNEY.coord.lon,
	},
	{
		name: CITIES.BRISBANE.name,
		lat: CITIES.BRISBANE.coord.lat,
		lon: CITIES.BRISBANE.coord.lon,
	},
	{
		name: CITIES.PERTH.name,
		lat: CITIES.PERTH.coord.lat,
		lon: CITIES.PERTH.coord.lon,
	},
];

const defaultCity = CITIES.MELBOURNE.name;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			weather: undefined,
			defaultWeather: undefined,
		};

		this.setWeather = this.setWeather.bind(this);
	}

	setWeather(newWeather) {
		this.setState({
			weather: newWeather.filter((item) => item.name !== defaultCity),
			defaultWeather: newWeather[this.defaultIndex],
		});
		// console.log(newWeather);
	}

	defaultIndex = cities.findIndex((item) => item.name === defaultCity);

	componentDidMount() {
		let output = [];

		getCurrentAndForecast(cities, (data) => {
			data.forEach((item, index) => {
				output.push({
					id: nanoid(),
					name: cities[index].name,
					temp: `${Math.trunc(item.current.temp)}°`,
					weather: item.current.weather[0].main,
					humidity: `${item.current.humidity} %`,
					wind: `${item.current.wind_speed} M/S`,
					icon: `http://openweathermap.org/img/wn/${item.current.weather[0].icon}.png`,
					daily: weekList(weekday(), item.daily),
				});
				console.log(output);
			});
			this.setWeather(output);
		});
	}

	render() {
		const { weather, defaultWeather } = this.state;
		// if (weather) {
		// 	console.log(weather);
		// 	console.log(weather.length);
		// }

		if (!weather) {
			// return 'LOADING......';
			return (
				<Container>
					<Card>
						<CardTop padding>LOADING......</CardTop>
						<CardBottom>LOADING......</CardBottom>
					</Card>
				</Container>
			);
		}

		return (
			<Container>
				<Card>
					<CardTop>
						<CurrentLeft
							temp={defaultWeather.temp}
							weather={defaultWeather.weather}
							humidity={defaultWeather.humidity}
							wind={defaultWeather.wind}
						/>
						<CurrentRight city={defaultWeather.name} />
					</CardTop>
					<CardBottom>
						<OtherCities weather={weather} />
						<DividerBottom />
						<Forecast daily={defaultWeather.daily} />
					</CardBottom>
				</Card>
			</Container>
		);
	}
}

export default App;
