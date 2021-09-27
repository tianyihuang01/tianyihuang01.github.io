import axios from 'axios';
import { BASEURL_BACKEND } from '../config/constants';

const getNewsByName = (newsQuery) => {
  const { name, pageSize } = newsQuery;
  return axios.get(`${BASEURL_BACKEND}/v1/api/news?q=${name}&pageSize=${pageSize}`);
};

export default getNewsByName;
