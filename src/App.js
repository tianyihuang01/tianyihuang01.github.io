// import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';

// import Current from './components/Current/Current';
// import Forecast from './components/Forecast/Forecast';
// import OtherCities from './components/OtherCities/OtherCities';

const Container = styled.div`
	background-image: url(https://wallpaperaccess.com/full/2629319.png);
	background-size: cover;
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

const TopHeader = styled.div`
	font-size: 3rem;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 36px 0;
}
`;

const BottomSection = styled.div`
	padding: 0 48px;
	border: 0;
	border-bottom-left-radius: 32px;
	border-bottom-right-radius: 32px;
`;

const BottomDivider = styled.div`
	width: 3px;
	background-color: rgba(0, 0, 0, 0.1);
`;

const BottomHeader = styled.h2`
	margin-bottom: 1rem;
	font-size: 1.5rem;
	margin: 0 0 0.5rem;
	letter-spacing: 2px;
	font-weight: 300;
`;


const App = () => {
  return (
    <Container>
      <Card>
        <CardTop>
          <TopHeader>Melbourne</TopHeader>
        </CardTop>
        <CardBottom>
          <BottomSection>
            <BottomHeader>OtherCities</BottomHeader>
          </BottomSection>
          <BottomDivider/>
          <BottomSection>
            <BottomHeader>Forecast</BottomHeader>
          </BottomSection>
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

{
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
}
