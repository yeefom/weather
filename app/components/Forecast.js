import React, {PropTypes} from 'react';
import dateUtil from '../utilities/date';

function WeatherItem({handleClick, date, weather}) {
  return(
    <li onClick={handleClick}>{date}: {weather}</li>
  );
}

function Weather({weather, handleClick}) {
  return (
    <ul>
      {weather &&
        weather.map(weatherItem => {
          const date = dateUtil(weatherItem.dt);
          return <WeatherItem
            key={weatherItem.dt}
            date={date}
            weather={weatherItem.temp.day}
            handleClick={handleClick.bind(null, date, weatherItem.temp)} />;
        })}
    </ul>
  );
}

function Forecast({city, weather, handleClick}) {
  return (
    <div>
      <h3>{city}</h3>
      <Weather
        weather={weather}
        handleClick={handleClick} />
    </div>
  );
}

Forecast.propTypes = {
  city: PropTypes.string,
  weather: PropTypes.array
};

export default Forecast;
