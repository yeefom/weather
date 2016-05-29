var React = require('react');
var Forecast = require('../components/Forecast');
var OpenWeatherUtil = require('../utilities/OpenWeather');

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      weather: {}
    };
  },
  componentDidMount: function() {
    OpenWeatherUtil(this.props.routeParams.city).then(function(data) {
      this.setState({
        weather: {
          city: data.data.name,
          temp: data.data.main.temp
        }
      });
    }.bind(this));
  },
  render: function() {
    return (
      <Forecast
        weather={this.state.weather}/>
    );
  }
});

module.exports = ForecastContainer;
