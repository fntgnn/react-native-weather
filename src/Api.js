import APPID from './APPID';

var kelvinToF=function(kelvin){
	return Math.round((kelvin - 273.15) * 1.8 + 32) + '°F';
};

export default function(latitude, longitude){
	let rootUrl ='http://api.openweathermap.org/data/2.5/weather?APPID='+APPID();

	let url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;	//feature of es6

	return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        return {
        	city: responseJson.name,
        	temperature: kelvinToF(responseJson.main.temp),
        	description: responseJson.weather[0].description
        };
      })
      .catch((error) => {
        console.error(error);
      });
}