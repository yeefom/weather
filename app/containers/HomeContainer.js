var React = require('react');
var Home = require('../components/Home');
var OpenWeatherUtil = require('../utilities/OpenWeather');

var HomeContainer = React.createClass({
  getInitialState: function() {
    return {
      city: 'San Francisco'
    };
  },
  hanldeSubmitCity: function() {
    OpenWeatherUtil(this.state.city).then(function(data) {
      console.log(data.data.name);
      console.log(data.data.main.temp);
    });
  },
  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    });
  },
  render: function() {
    return (
      <Home
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.hanldeSubmitCity}
        city={this.state.city} />
    );
  }
});

module.exports = HomeContainer;
