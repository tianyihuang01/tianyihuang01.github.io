// const { Melbourne, Sydney, Brisbane, Perth } = [
// 	'2158177',
// 	'2147714',
// 	'7839562',
// 	'2153391',
// ];
const Melbourne = '2158177';

const GetCurrentWeather = (setWeather) => {
	const base = 'http://api.openweathermap.org/data/2.5/weather?';
	const city = Melbourne;
	const api = '999f0f8fefdcfd98119382216ae94e89';
	const units = 'metric';

	const url = `${base}id=${city}&appid=${api}&units=${units}`;

	//https://www.w3schools.com/xml/xml_http.asp
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			// document.getElementById('demo').innerHTML = xhttp.responseText;
			const data = JSON.parse(xhttp.responseText);
			// const data = xhttp.responseText;
			// console.log(data);
			setWeather(data);
		}
	};
	xhttp.open('GET', url, true);
	xhttp.send();
};

export default GetCurrentWeather;
