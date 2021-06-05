// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import styled from 'styled-components';

import CurrentLeft from './app/CurrentLeft/CurrentLeft';
import Forecast from './app/Forecast/Forecast';
import OtherCities from './app/OtherCities/OtherCities';
import CurrentRight from './app/CurrentRight/CurrentRight';

// import getCurrentWeather from './api/getCurrentWeather/getCurrentWeather';
import getCurrentAndForecast from './api/getCurrentAndForecast/getCurrentAndForecast';
import { CITIES } from './constants/constants';

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
	padding: 64px 0;
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


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			weather: undefined,
		};

		this.setWeather = this.setWeather.bind(this);
	}

	setWeather(newWeather) {
		this.setState({
			weather: newWeather,
		});
		// console.log(newWeather);
	}

	componentDidMount() {
		// getCurrentWeather(this.setWeather);
		// getCurrentAndForecast(this.setWeather);

		getCurrentAndForecast((weather) => {
			this.setWeather({
				[CITIES.MELBOURNE.name]: {
					city: CITIES.MELBOURNE.name,
					temp: weather[0].current.temp,
					weather: weather[0].current.weather[0].main,
					humidity: weather[0].current.humidity,
					wind: weather[0].current.wind_speed,
					icon: weather[0].current.weather[0].icon,
					daily: weather[0].daily,
				},
				[CITIES.SYDNEY.name]: {
					city: CITIES.SYDNEY.name,
					temp: weather[1].current.temp,
					weather: weather[1].current.weather[0].main,
					humidity: weather[1].current.humidity,
					wind: weather[1].current.wind_speed,
					icon: weather[1].current.weather[0].icon,
					daily: weather[1].daily,
				},
				[CITIES.BRISBANE.name]: {
					city: CITIES.BRISBANE.name,
					temp: weather[2].current.temp,
					weather: weather[2].current.weather[0].main,
					humidity: weather[2].current.humidity,
					wind: weather[2].current.wind_speed,
					icon: weather[2].current.weather[0].icon,
					daily: weather[2].daily,
				},
				[CITIES.PERTH.name]: {
					city: CITIES.PERTH.name,
					temp: weather[3].current.temp,
					weather: weather[3].current.weather[0].main,
					humidity: weather[3].current.humidity,
					wind: weather[3].current.wind_speed,
					icon: weather[3].current.weather[0].icon,
					daily: weather[3].daily,
				},
			});
		});
	}

	render() {
		const { weather } = this.state;
		// if (weather) {
		// 	console.log(weather);
		// }

		return (
			<Container>
				<Card>
					<CardTop>
						{weather && (
							<CurrentLeft
								temp={weather[CITIES.MELBOURNE.name].temp}
								weather={weather[CITIES.MELBOURNE.name].weather}
								humidity={weather[CITIES.MELBOURNE.name].humidity}
								wind={weather[CITIES.MELBOURNE.name].wind}
							/>
						)}
						{weather && (
							<CurrentRight city={weather[CITIES.MELBOURNE.name].city} />
						)}
						{/* {false && (
							<CurrentLeft
								temp="null"
								weather="null"
								humidity="null"
								wind="null"
							/>
						)}
						{false && <CurrentRight city="null" />} */}
					</CardTop>
					<CardBottom>
						{weather && <OtherCities weather={weather} />}
						<DividerBottom />
						{weather && (
							<Forecast daily={weather[CITIES.MELBOURNE.name].daily} />
						)}
					</CardBottom>
				</Card>
			</Container>
		);
	}
}

export default App;
