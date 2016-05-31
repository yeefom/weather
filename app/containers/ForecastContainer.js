var React = require('react');
var Forecast = require('../components/Forecast');
var OpenWeatherUtil = require('../utilities/OpenWeather');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
  handleClick: function(date, weather) {
    var city = this.state.city;
    this.context.router.push({
      pathname: '/detail/' + city,
      state: {
        city: city,
        date: date,
        weather: weather
      }
    });
  },
  render: function() {
    return (
      <Forecast
        weather={this.state.weather}
        city={this.state.city}
        handleClick={this.handleClick} />
    );
  }
});

module.exports = ForecastContainer;
