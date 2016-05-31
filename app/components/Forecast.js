var React = require('react');
var PropTypes = React.PropTypes;
var dateUtil = require('../utilities/date');

function WeatherItem(props) {
  return (
    <li>{props.date}: {props.weather}</li>
  );
}

function Weather(props) {
  return (
    <ul>
      {
        props.weather &&
          props.weather.map(function(weather) {
            return <WeatherItem key={weather.dt} date={dateUtil(weather.dt)} weather={weather.temp.day} />;
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

Forecast.propTypes = {
  city: PropTypes.string,
  weather: PropTypes.array
};

module.exports = Forecast;
