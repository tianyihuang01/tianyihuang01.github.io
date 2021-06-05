import { CITIES, API } from '../../constants/constants';

const getCurrentWeather = (setWeather) => {
	const base = 'https://api.openweathermap.org/data/2.5/weather?';
	// const city = Melbourne;
	const cities = [
		CITIES.MELBOURNE.id,
		CITIES.SYDNEY.id,
		CITIES.BRISBANE.id,
		CITIES.PERTH.id,
	];
	const units = 'metric';
	let data = [];

	//https://www.w3schools.com/xml/xml_http.asp
	const xhttp = new XMLHttpRequest();

	(function loop(i, length) {
		if (i >= length) {
			setWeather(data);
			return;
		}
		const url = `${base}id=${cities[i]}&appid=${API}&units=${units}`;
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

export default getCurrentWeather;

