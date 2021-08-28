import axios from 'axios';

const getCurrentAndForecast = async (city) => {
  const { lon, lat } = city;
  return await axios.get(
    `http://localhost:3000/v1/api/weather/oneCall/?lon=${lon}&lat=${lat}`
  );
};

export default getCurrentAndForecast;
