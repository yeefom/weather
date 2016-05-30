var React = require('react');
var dateUtil = require('../utilities/date');

function ForecastItem(props) {
  return (
    <li>{props.date}: {props.weather}</li>
  );
}

function Weather(props) {
  return (
    <ul>
      {
        Object.keys(props.weather).length !== 0 &&
          props.weather.map(function(weather) {
            return <ForecastItem key={weather.dt} date={dateUtil(weather.dt)} weather={weather.temp.day} />;
          })
      }
    </ul>
  );
}

function Forecast(props) {
  return (
    <div>
      <h3>{props.city}</h3>
      <Weather weather={props.weather} />
    </div>
  );
}

module.exports = Forecast;
