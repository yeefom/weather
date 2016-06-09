import axios from 'axios';
import key from '../config/OpenWeather';

function getWeather(city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&units=Imperial&type=accurate&q=${city}&APPID=${key()}`);
}

export default getWeather;
