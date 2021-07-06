import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import CurrentLeft from './app/CurrentLeft';
import Forecast from './app/Forecast';
import OtherCities from './app/OtherCities';
import CurrentRight from './app/CurrentRight';

import getCurrentAndForecast from './api/getCurrentAndForecast';
import { CITIES, BREAKPOINT } from './constants/constants';
import { weekday, weekList } from './utils/weekConfig';

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

	@media only screen and (max-width: ${BREAKPOINT}px) {
		flex-direction: column-reverse;
	}
`;

const CardBottom = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${(props) => (props.padding ? '80px 80px' : '36px 0')};
	
	@media only screen and (max-width: ${BREAKPOINT}px) {
		flex-direction: column;
	}
}
`;

const DividerBottom = styled.hr`
	width: 2px;
	background-color: rgba(0, 0, 0, 0.1);

	@media only screen and (max-width: ${BREAKPOINT}px) {
		width: 90%;
	}
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

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			weather: undefined,
			defaultWeather: undefined,
		};

		this.setWeather = this.setWeather.bind(this);
		this.setDefaultCity = this.setDefaultCity.bind(this);
	}

	defaultCity = CITIES.MELBOURNE.name;
	newWeather = [];

	setWeather() {
		this.setState({
			weather: this.newWeather.filter((item) => item.name !== this.defaultCity),
			defaultWeather: this.newWeather.find(
				(item) => item.name === this.defaultCity
			),
		});
	}

	setDefaultCity(city) {
		this.defaultCity = city;
		this.setWeather();
		console.log('setDefaultCity');
	}

	componentDidMount() {
		getCurrentAndForecast(cities, (data) => {
			data.forEach((item, index) => {
				this.newWeather.push({
					id: nanoid(),
					name: cities[index].name,
					temp: `${Math.trunc(item.current.temp)}°`,
					weather: item.current.weather[0].main,
					humidity: `${item.current.humidity} %`,
					wind: `${item.current.wind_speed} M/S`,
					icon: `http://openweathermap.org/img/wn/${item.current.weather[0].icon}.png`,
					daily: weekList(weekday(), item.daily),
				});
				console.log('API CALLED!!');
			});
			this.setWeather();
		});
	}

	render() {
		const { weather, defaultWeather } = this.state;
		if (!weather) {
			return (
				<Container>
					<Card>
						<CardTop padding>LOADING......</CardTop>
						<CardBottom padding>LOADING......</CardBottom>
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
						<OtherCities
							weather={weather}
							setDefaultCity={this.setDefaultCity}
						/>
						<DividerBottom />
						<Forecast daily={defaultWeather.daily} />
					</CardBottom>
				</Card>
			</Container>
		);
	}
}

export default App;
