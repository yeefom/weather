var React = require('react');

function Detail(props) {
  return (
    <div>
      <h3>{props.city}</h3>
      <p>{props.date}</p>
      <p>Temp: {props.weather.day}</p>
      <p>Max: {props.weather.max}</p>
      <p>Min: {props.weather.min}</p>
    </div>
  );
}

module.exports = Detail;
