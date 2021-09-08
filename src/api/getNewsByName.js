import axios from 'axios';
import { BASEURL_BACKEND } from '../config/constants';

const getNewsByName = async (newsQuery) => {
  const { name, pageSize } = newsQuery;
  // eslint-disable-next-line no-return-await
  return axios.get(`${BASEURL_BACKEND}/v1/api/news?q=${name}&pageSize=${pageSize}`);
};

export default getNewsByName;
