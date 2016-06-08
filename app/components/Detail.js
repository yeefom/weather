import React from 'react';

function Detail({city, date, weather}) {
  return (
    <div>
      <h3>{city}</h3>
      <p>{date}</p>
      <p>Temp: {weather.day}</p>
      <p>Max: {weather.max}</p>
      <p>Min: {weather.min}</p>
    </div>
  );
}

export default Detail;
