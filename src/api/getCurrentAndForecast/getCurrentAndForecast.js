import { CITIES, API } from '../../constants/constants';

const getCurrentAndForecast = (setWeather) => {
	const base = 'http://api.openweathermap.org/data/2.5/onecall?';
	const { MELBOURNE, SYDNEY, BRISBANE, PERTH } = CITIES;
	const cities = [
		{ lat: MELBOURNE.coord.lat, lon: MELBOURNE.coord.lon },
		{ lat: SYDNEY.coord.lat, lon: SYDNEY.coord.lon },
		{ lat: BRISBANE.coord.lat, lon: BRISBANE.coord.lon },
		{ lat: PERTH.coord.lat, lon: PERTH.coord.lon },
	];
	// const api = API;
	const units = 'metric';
	const exclude = 'minutely,hourly,alerts';
	let data = [];

	const xhttp = new XMLHttpRequest();

	(function loop(i, length) {
		if (i >= length) {
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
