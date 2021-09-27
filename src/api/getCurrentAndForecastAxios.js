import axios from 'axios';
import { BASEURL_BACKEND } from '../config/constants';

const getCurrentAndForecast = (coord) => {
  const { lon, lat } = coord;
  return axios.get(`${BASEURL_BACKEND}/v1/api/weather/oneCall/?lon=${lon}&lat=${lat}`);
};

export default getCurrentAndForecast;
