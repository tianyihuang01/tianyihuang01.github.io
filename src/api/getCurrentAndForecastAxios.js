import axios from 'axios';
import { PORT_BACKEND } from '../config/constants';

const getCurrentAndForecast = async (coord) => {
  const { lon, lat } = coord;
  // eslint-disable-next-line no-return-await
  return await axios.get(
    `http://localhost:${PORT_BACKEND}/v1/api/weather/oneCall/?lon=${lon}&lat=${lat}`,
  );
};

export default getCurrentAndForecast;
