import axios from 'axios';
import { API } from '../constants/constants';

const getCurrentAndForecast = async (city) => {
	const base = 'https://api.openweathermap.org/data/2.5/onecall?';
	const units = 'metric';
	const exclude = 'minutely,hourly,alerts';
	const url = `${base}lat=${city.lat}&lon=${city.lon}&exclude=${exclude}&appid=${API}&units=${units}`;
	return axios({ method: 'get', url: `${url}`, baseURL: `${base}` });
};

export default getCurrentAndForecast;
