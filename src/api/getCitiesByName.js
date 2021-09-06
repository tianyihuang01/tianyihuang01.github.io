import axios from 'axios';
import { PORT_BACKEND } from '../config/constants';

const getCitiesByName = async (city) => {
  const { name } = city;
  // eslint-disable-next-line no-return-await
  return await axios.get(`http://localhost:${PORT_BACKEND}/v1/api/cities?name=${name}`);
};

export default getCitiesByName;
