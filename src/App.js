/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';

import NavBar from './app/NavBar';
import News from './app/News';
import CurrentLeft from './app/CurrentLeft';
import Forecast from './app/Forecast';
import CurrentRight from './app/CurrentRight';

import getCurrentAndForecast from './api/getCurrentAndForecastAxios';
import { BREAKPOINT1, BREAKPOINT2, BREAKPOINT3, CITY_PLACEHOLDER } from './config/constants';
import { weekday, weekList } from './utils/weekConfig';
import background from './images/background.webp';
import backgroundTop from './images/background_top.jpg';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  margin: 68px 0 20px 0;
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 720px;

  @media only screen and (max-width: ${BREAKPOINT1}px) {
    width: 250px;
  }

  @media only screen and (min-width: ${BREAKPOINT1 + 1}px) and (max-width: ${BREAKPOINT2}px) {
    width: 320px;
  }

  @media only screen and (min-width: ${BREAKPOINT2 + 1}px) and (max-width: ${BREAKPOINT3}px) {
    width: 720px;
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${(props) => (props.padding ? '80px 80px' : '64px 0')};
  background-image: url(${backgroundTop});
  background-size: cover;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  color: #fff;
  position: relative;

  @media only screen and (max-width: ${BREAKPOINT2}px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const CardBottom = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${(props) => (props.padding ? '80px 80px' : '36px 0')};
	justify-content: ${(props) => (props.padding ? 'center' : 'flex-start')};

	@media only screen and (max-width: ${BREAKPOINT2}px) {
		flex-direction: column;
    padding: 10px 0;
    align-items: center;
	}
}
`;

const DividerBottom = styled.hr`
  width: 2px;
  background-color: rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: ${BREAKPOINT2}px) {
    width: 90%;
  }

  @media only screen and (min-width: ${BREAKPOINT2 + 1}px) {
    margin: unset;
  }
`;

class App extends React.Component {
  // eslint-disable-next-line react/sort-comp
  constructor(props) {
    super(props);

    this.state = {
      weather: undefined,
      city: CITY_PLACEHOLDER,
    };

    this.setWeather = this.setWeather.bind(this);
    this.setCity = this.setCity.bind(this);
  }

  newWeather = {};

  componentDidMount() {
    this.getCurrentAndForecast();
  }

  setWeather() {
    this.setState({
      weather: this.newWeather,
    });
  }

  async setCity(selectedCity) {
    this.setState({ city: selectedCity }, () => {
      // console.log(this.state.city);
      this.getCurrentAndForecast();
    });
  }

  async getCurrentAndForecast() {
    const { id, name, coord } = this.state.city;
    // console.log(this.state.city);
    const { data } = await getCurrentAndForecast(coord);
    this.newWeather = {
      id,
      name,
      temp: `${Math.trunc(data.current.temp)}°`,
      weather: data.current.weather[0].main,
      humidity: `${data.current.humidity}%`,
      wind: `${data.current.wind_speed}M/S`,
      icon: `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`,
      daily: weekList(weekday(), data.daily),
    };
    // console.log(`Weather API CALLED!! -- ${name}`);

    this.setWeather();
  }

  render() {
    const { weather, city } = this.state;
    // console.log('App Render', city, weather);
    if (!weather) {
      return (
        <>
          <header>
            <NavBar setCity={this.setCity} />
          </header>
          <main>
            <Container>
              <Card>
                <CardTop padding>LOADING......</CardTop>
                <CardBottom padding>LOADING......</CardBottom>
              </Card>
            </Container>
          </main>
        </>
      );
    }

    return (
      <>
        <header>
          <NavBar setCity={this.setCity} />
        </header>
        <main>
          <Container>
            <Card>
              <CardTop>
                <CurrentLeft
                  temp={weather.temp}
                  weather={weather.weather}
                  humidity={weather.humidity}
                  wind={weather.wind}
                />
                <CurrentRight city={weather.name} />
              </CardTop>
              <CardBottom>
                <Forecast daily={weather.daily} />
                <DividerBottom />
                <News city={city} />
              </CardBottom>
            </Card>
          </Container>
        </main>
      </>
    );
  }
}

export default App;
