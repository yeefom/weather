import React, {Component} from 'react';
import Forecast from '../components/Forecast';
import OpenWeatherUtil from '../utilities/OpenWeather';

class ForecastContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    try {
      const {data} = await OpenWeatherUtil(this.props.routeParams.city);
      this.setState({
        city: data.city.name,
        weather: data.list
      });
    } catch(err) {
      console.error(`ERR in OpenWeatherUtil: ${err}`);
    }
  }
  handleClick(date, weather) {
    const city = this.state.city;
    this.context.router.push({
      pathname: `/detail/${city}`,
      state: {
        city,
        date,
        weather
      }
    });
  }
  render() {
    return (
      <Forecast
        weather={this.state.weather}
        city={this.state.city}
        handleClick={(date, weather) => this.handleClick(date, weather)} />
    );
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ForecastContainer;
