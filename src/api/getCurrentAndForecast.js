import { API } from '../constants/constants';

const getCurrentAndForecast = (cities, setWeather) => {
	const base = 'https://api.openweathermap.org/data/2.5/onecall?';
	const units = 'metric';
	const exclude = 'minutely,hourly,alerts';
	let data = [];

	const xhttp = new XMLHttpRequest();

	(function loop(i, length) {
		if (i >= length) {
			// console.log(data);
			setWeather(data);
			return;
		}
		const url = `${base}lat=${cities[i].lat}&lon=${cities[i].lon}&exclude=${exclude}&appid=${API}&units=${units}`;
		xhttp.open('GET', url, true);
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				data.push(JSON.parse(xhttp.responseText));
				// console.log(data[i]);
				// setWeather(data);
				loop(i + 1, length);
			}
		};
		xhttp.send();
	})(0, cities.length);
};

export default getCurrentAndForecast;
