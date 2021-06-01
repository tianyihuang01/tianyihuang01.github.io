// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import styled from 'styled-components';

import CurrentLeft from './app/CurrentLeft/CurrentLeft';
import Forecast from './app/Forecast/Forecast';
import OtherCities from './app/OtherCities/OtherCities';
import CurrentRight from './app/CurrentRight/CurrentRight';

// import GetCurrentWeather from './api/GetCurrentWeather/GetCurrentWeather';

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

// const { Melbourne, Sydney, Brisbane, Perth } = [
// 	'2158177',
// 	'2147714',
// 	'7839562',
// 	'2153391',
// ];

const getCurrentWeather = (setWeather) => {
	const base = 'http://api.openweathermap.org/data/2.5/weather?';
	// const city = Melbourne;
	const cities = ['2158177', '2147714', '7839562', '2153391'];
	const api = '999f0f8fefdcfd98119382216ae94e89';
	const units = 'metric';
	let data = [];

	//https://www.w3schools.com/xml/xml_http.asp
	const xhttp = new XMLHttpRequest();

	(function loop(i, length) {
		if (i >= length) {
			setWeather(data);
			return;
		}
		const url = `${base}id=${cities[i]}&appid=${api}&units=${units}`;
		xhttp.open('GET', url, true);
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				// document.getElementById('demo').innerHTML = xhttp.responseText;
				data.push(JSON.parse(xhttp.responseText));
				// setWeather(data);
				// console.log(data[i]);
				// setWeather(data);
				loop(i + 1, length);
			}
		};
		xhttp.send();
	})(0, cities.length);

	// console.log(data);
	// console.log(data[0]);
};

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
		// fetch().then((weather) => (
		// 	this.setWeather(weather)
		// ));

		// getCurrentWeather((weather) => {
		// 	this.setWeather({
		// 		melbourne: weather[0],
		// 		sydney: weather[1],
		// 		brisbane: weather[2],
		// 		perth: weather[3]
		// 	});
		// });

		getCurrentWeather((weather) => {
			this.setWeather({
				melbourne: {
					city: weather[0].name,
					temp: weather[0].main.temp,
					weather: weather[0].weather[0].main,
					humidity: weather[0].main.humidity,
					wind: weather[0].wind.speed,
					icon: weather[0].weather[0].icon,
					coord: weather[0].coord,
				},
				sydney: {
					city: weather[1].name,
					temp: weather[1].main.temp,
					weather: weather[1].weather[0].main,
					humidity: weather[1].main.humidity,
					wind: weather[1].wind.speed,
					icon: weather[1].weather[0].icon,
					coord: weather[1].coord,
				},
				brisbane: {
					city: weather[2].name,
					temp: weather[2].main.temp,
					weather: weather[2].weather[0].main,
					humidity: weather[2].main.humidity,
					wind: weather[2].wind.speed,
					icon: weather[2].weather[0].icon,
					coord: weather[2].coord,
				},
				perth: {
					city: weather[3].name,
					temp: weather[3].main.temp,
					weather: weather[3].weather[0].main,
					humidity: weather[3].main.humidity,
					wind: weather[3].wind.speed,
					icon: weather[3].weather[0].icon,
					coord: weather[3].coord,
				},
			});
		});

		// getCurrentWeather((weather) => {
		// 	this.setWeather({
		// 		city: weather.name,
		// 		temp: weather.main.temp,
		// 		weather: weather.weather[0].main,
		// 		humidity: weather.main.humidity,
		// 		wind: weather.wind.speed,
		// 		icon: weather.weather[0].icon,
		// 		coord: weather.coord,
		// 	});
		// });
	}

	render() {
		const { weather } = this.state;
		if (weather) {
			// console.log(typeof weather);
			// console.log(Object.entries(weather));
			// console.log(Object.keys(weather));
			// console.log(Object.values(weather));
			// console.log(this.state);
			console.log(weather);
			// console.log(weather[0].name);
			// console.log(weather[0].main.temp);
			// console.log(weather[0].weather[0].main);
			// console.log(weather[0].main.humidity);
			// console.log(weather[0].wind.speed);
		}

		return (
			<Container>
				<Card>
					<CardTop>
						{weather && (
							<CurrentLeft
								temp={weather['melbourne'].temp}
								weather={weather['melbourne'].weather}
								humidity={weather['melbourne'].humidity}
								wind={weather['melbourne'].wind}
							/>
						)}
						{weather && <CurrentRight city={weather['melbourne'].city} />}
						{/* {false && (
							<CurrentLeft
								temp="null"
								weather="null"
								humidity="null"
								wind="null"
							/>
						)}
						{false && <CurrentRight city="null" />} */}
						{/* {weather && (
							<CurrentLeft
								temp={weather.temp}
								weather={weather.weather}
								humidity={weather.humidity}
								wind={weather.wind}
							/>
						)}
						{weather && <CurrentRight city={weather.city} />} */}
					</CardTop>
					<CardBottom>
						{weather && <OtherCities weather={weather}/>}
						<DividerBottom />
						<Forecast />
					</CardBottom>
				</Card>
			</Container>
		);
	}
}

// const App = () => {
// 	return (
// 		<Container>
// 			<Card>
// 				<CardTop>
// 					<CurrentLeft />
// 					<CurrentRight />
// 				</CardTop>
// 				<CardBottom>
// 					<OtherCities/>
// 					<DividerBottom />
// 					<Forecast />
// 				</CardBottom>
// 			</Card>
// 		</Container>
// 	);
// };

export default App;

// const url = `${base}id=${city}&appid=${api}&units=${units}`;

// xhttp.onreadystatechange = function () {
// 	if (this.readyState == 4 && this.status == 200) {
// 		// Typical action to be performed when the document is ready:
// 		// document.getElementById('demo').innerHTML = xhttp.responseText;
// 		const data = JSON.parse(xhttp.responseText);
// 		// const data = xhttp.responseText;
// 		// console.log(data);
// 		setWeather(data);
// 	}
// };
// xhttp.open('GET', url, true);
// xhttp.send();

/* <Container>
		<Card>
		<Current />
		<Forecast />
		<OtherCities />
		</Card>
		</Container> */

/* <div className="App">
	<Container>
		<Card>
			<Current />
			<Forecast />
			<OtherCities />
		</Card>
	</Container>
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
			Edit <code>src/App.js</code> and save to reload.
		</p>
		<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn React
		</a>
	</header>
</div>; */
