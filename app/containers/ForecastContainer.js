var React = require('react');
var Forecast = require('../components/Forecast');
var OpenWeatherUtil = require('../utilities/OpenWeather');

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {};
  },
  componentDidMount: function() {
    OpenWeatherUtil(this.props.routeParams.city).then(function(res) {
      this.setState({
        city: res.data.city.name,
        weather: res.data.list
      });
    }.bind(this));
  },
  render: function() {
    return (
      <Forecast
        weather={this.state.weather}
        city={this.state.city} />
    );
  }
});

module.exports = ForecastContainer;
