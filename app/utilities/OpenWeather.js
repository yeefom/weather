var axios = require('axios');
var key;

function getWeather(city) {
  if (!key) {
     key = require('../config/OpenWeather')();
  }
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&units=Imperial&type=accurate&q=' + city + '&APPID=' + key);
}

module.exports = getWeather;
