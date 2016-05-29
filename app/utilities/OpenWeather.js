var axios = require('axios');
var key = require('../config/OpenWeather')();

function getWeather(city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?units=Imperial&q=' + city + '&APPID=' + key);
}

module.exports = getWeather;
