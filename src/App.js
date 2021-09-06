/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import NavBar from './app/NavBar';
import SearchResult from './app/SearchResult';
import CurrentLeft from './app/CurrentLeft';
import Forecast from './app/Forecast';
import OtherCities from './app/OtherCities';
import CurrentRight from './app/CurrentRight';

import getCurrentAndForecast from './api/getCurrentAndForecastAxios';
import { CITIES, BREAKPOINT3, CITY_PLACEHOLDER } from './config/constants';
import { weekday, weekList } from './utils/weekConfig';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(https://wallpaperaccess.com/full/2629319.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  margin: 30px;
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: fit-content;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${(props) => (props.padding ? '80px 80px' : '64px 0')};
  background-image: url(https://i.imgur.com/GhQZhaO.jpg);
  background-size: cover;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  color: #fff;
  position: relative;

  @media only screen and (max-width: ${BREAKPOINT3}px) {
    flex-direction: column-reverse;
  }
`;

const CardBottom = styled.div`
	display: flex;
	flex-direction: row;
	padding: ${(props) => (props.padding ? '80px 80px' : '36px 0')};
	
	@media only screen and (max-width: ${BREAKPOINT3}px) {
		flex-direction: column;
    padding: 10px 0;
	}
}
`;

const DividerBottom = styled.hr`
  width: 2px;
  background-color: rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: ${BREAKPOINT3}px) {
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
    console.log('API CALLED!!');

    this.setWeather();
  }

  render() {
    const { weather } = this.state;

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
                {/* <OtherCities weather={weather} setDefaultCity={this.setDefaultCity} /> */}
                <DividerBottom />
                <Forecast daily={weather.daily} />
              </CardBottom>
            </Card>
          </Container>
        </main>
      </>
    );
  }
}

export default App;
