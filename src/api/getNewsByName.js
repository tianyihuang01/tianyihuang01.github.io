import axios from 'axios';
import { PORT_BACKEND } from '../config/constants';

const getNewsByName = async (newsQuery) => {
  const { name, pageSize } = newsQuery;
  // eslint-disable-next-line no-return-await
  return axios.get(`http://localhost:${PORT_BACKEND}/v1/api/news?q=${name}&pageSize=${pageSize}`);
};

export default getNewsByName;
