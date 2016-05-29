var React = require('react');

function puke(obj) {
  return (
    <p>{JSON.stringify(obj, null, ' ')}</p>
  );
}

function Forecast(props) {
  return (
    <div>{puke(props.weather)}</div>
  );
}

module.exports = Forecast;
