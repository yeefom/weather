var React = require('react');
var PropTypes = React.PropTypes;
var dateUtil = require('../utilities/date');

function WeatherItem(props) {
  return(
    <li onClick={props.handleClick}>{props.date}: {props.weather}</li>
  );
}

function Weather(props) {
  return (
    <ul>
      {props.weather &&
        props.weather.map(function(weather) {
          var date = dateUtil(weather.dt);
          return <WeatherItem
            key={weather.dt}
            date={date}
            weather={weather.temp.day}
            handleClick={props.handleClick.bind(null, date, weather.temp)} />;
        })}
    </ul>
  );
}

function Forecast(props) {
  return (
    <div>
      <h3>{props.city}</h3>
      <Weather
        weather={props.weather}
        handleClick={props.handleClick} />
    </div>
  );
}

Forecast.propTypes = {
  city: PropTypes.string,
  weather: PropTypes.array
};

module.exports = Forecast;
