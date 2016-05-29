var React = require('react');

function Main(props) {
  return (
    <div>
      <h1>Weather</h1>
      {props.children}
    </div>
  );
}

module.exports = Main;
