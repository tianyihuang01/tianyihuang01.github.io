import axios from 'axios';
import { BASEURL_BACKEND } from '../config/constants';

const getCitiesByName = (city) => {
  const { name } = city;
  return axios.get(`${BASEURL_BACKEND}/v1/api/cities?name=${name}`);
};

export default getCitiesByName;
