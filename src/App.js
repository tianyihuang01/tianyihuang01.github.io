// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import styled from 'styled-components';

import CurrentLeft from './components/CurrentLeft/CurrentLeft';
import Forecast from './components/Forecast/Forecast';
import OtherCities from './components/OtherCities/OtherCities';
import CurrentRight from './components/CurrentRight/CurrentRight';

import ContainerBottom from './components/ContainerBottom/ContainerBottom';

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background-image: url(https://wallpaperaccess.com/full/2629319.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
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

const App = () => {
	return (
		<Container>
			<Card>
				<CardTop>
					<CurrentLeft />
					<CurrentRight />
				</CardTop>
				<CardBottom>
					<ContainerBottom>
						<OtherCities />
					</ContainerBottom>
					<DividerBottom />
					<ContainerBottom>
						<Forecast />
					</ContainerBottom>
				</CardBottom>
			</Card>
		</Container>
	);
};

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
