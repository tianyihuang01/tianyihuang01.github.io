export const weekday = () => {
	const d = new Date();
	const n = d.getDay();
	const weekdayList = [
		'MON',
		'TUE',
		'WED',
		'THU',
		'FRI',
		'SAT',
		'SUN',
		'MON',
		'TUE',
		'WED',
		'THU',
		'FRI',
		'SAT',
		'SUN',
	];
	return weekdayList.slice(n, n + 5);
};

export const weekList = (weekdayList, daily) => [
	{
		key: weekdayList[0],
		img: `http://openweathermap.org/img/wn/${daily[0].weather[0].icon}.png`,
		temp: `${Math.trunc(daily[0].temp.day)}°`,
	},
	{
		key: weekdayList[1],
		img: `http://openweathermap.org/img/wn/${daily[1].weather[0].icon}.png`,
		temp: `${Math.trunc(daily[1].temp.day)}°`,
	},
	{
		key: weekdayList[2],
		img: `http://openweathermap.org/img/wn/${daily[2].weather[0].icon}.png`,
		temp: `${Math.trunc(daily[2].temp.day)}°`,
	},
	{
		key: weekdayList[3],
		img: `http://openweathermap.org/img/wn/${daily[3].weather[0].icon}.png`,
		temp: `${Math.trunc(daily[3].temp.day)}°`,
	},
	{
		key: weekdayList[4],
		img: `http://openweathermap.org/img/wn/${daily[4].weather[0].icon}.png`,
		temp: `${Math.trunc(daily[4].temp.day)}°`,
	},
];
