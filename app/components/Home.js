var React = require('react');
var PropTypes = React.PropTypes;

function Button(props) {
  return (
    <button
      type='button'
      onClick={props.onSubmitCity}>
      {props.children}
    </button>
  );
}

function Input(props) {
  return (
    <input
      placeholder={props.city}
      type='text'
      onChange={props.onUpdateCity} />
  );
}

function Home(props) {
  return (
    <div>
      <h3>Enter a City and State</h3>
      <Input
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
        Get Weather
      </Button>
    </div>
  );
}

Home.propTypes = {
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

module.exports = Home;
