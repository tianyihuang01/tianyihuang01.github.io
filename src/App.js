// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import styled from 'styled-components';

import CurrentLeft from './app/CurrentLeft/CurrentLeft';
import Forecast from './app/Forecast/Forecast';
import OtherCities from './app/OtherCities/OtherCities';
import CurrentRight from './app/CurrentRight/CurrentRight';

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
const Melbourne = 	'2158177';

const getCurrentWeather = (setWeather) => {
	const base = 'http://api.openweathermap.org/data/2.5/weather?';
	const city = Melbourne;
	const api = '999f0f8fefdcfd98119382216ae94e89';
	const units = 'metric';

	const url = `${base}id=${city}&appid=${api}&units=${units}`;

	//https://www.w3schools.com/xml/xml_http.asp
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			// document.getElementById('demo').innerHTML = xhttp.responseText;
			const data = JSON.parse(xhttp.responseText);
			// const data = xhttp.responseText;
			// console.log(data);
			setWeather(data);
		}
	};
	xhttp.open('GET', url, true);
	xhttp.send();
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
	}

	componentDidMount() {
		// getCurrentWeather(this.setWeather);
		// fetch().then((weather) => (
		// 	this.setWeather(weather)
		// ));
		getCurrentWeather((weather) => {
			this.setWeather({
				city: weather.name,
				temp: weather.main.temp,
				weather: weather.weather[0].main,
				humidity: weather.main.humidity,
				wind: weather.wind.speed,
				icon: weather.weather[0].icon,
			});
		});

	}

	render() {
		const { weather } = this.state;
		console.log(weather);
		
		return (
			<Container>
				<Card>
					<CardTop>
						{weather && (
							<CurrentLeft
								temp={weather.temp}
								weather={weather.weather}
								humidity={weather.humidity}
								wind={weather.wind}
							/>
						)}
						{weather && <CurrentRight city={weather.city}/>}
					</CardTop>
					<CardBottom>
						<OtherCities />
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
