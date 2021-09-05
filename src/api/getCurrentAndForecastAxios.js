import axios from 'axios';
import { PORT_BACKEND } from '../constants/constants';

const getCurrentAndForecast = async (city) => {
  const { lon, lat } = city;
  // eslint-disable-next-line no-return-await
  return await axios.get(
    `http://localhost:${PORT_BACKEND}/v1/api/weather/oneCall/?lon=${lon}&lat=${lat}`,
  );
};

export default getCurrentAndForecast;
