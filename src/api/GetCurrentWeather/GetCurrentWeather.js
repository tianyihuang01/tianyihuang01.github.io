import { CITIES, API } from '../../constants/constants';

const getCurrentWeather = (setWeather) => {
	const base = 'http://api.openweathermap.org/data/2.5/weather?';
	// const city = Melbourne;
	const cities = [
		CITIES.MELBOURNE.id,
		CITIES.SYDNEY.id,
		CITIES.BRISBANE.id,
		CITIES.PERTH.id,
	];
	// const api = API;
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

// const { Melbourne, Sydney, Brisbane, Perth } = [
// 	'2158177',
// 	'2147714',
// 	'7839562',
// 	'2153391',
// ];
// const Melbourne = '2158177';

// const GetCurrentWeather = (setWeather) => {
// 	const base = 'http://api.openweathermap.org/data/2.5/weather?';
// 	const city = Melbourne;
// 	const api = '999f0f8fefdcfd98119382216ae94e89';
// 	const units = 'metric';

// 	const url = `${base}id=${city}&appid=${api}&units=${units}`;

// 	//https://www.w3schools.com/xml/xml_http.asp
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			// Typical action to be performed when the document is ready:
// 			// document.getElementById('demo').innerHTML = xhttp.responseText;
// 			const data = JSON.parse(xhttp.responseText);
// 			// const data = xhttp.responseText;
// 			// console.log(data);
// 			setWeather(data);
// 		}
// 	};
// 	xhttp.open('GET', url, true);
// 	xhttp.send();
// };

// export default GetCurrentWeather;
