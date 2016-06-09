import React, {Component} from 'react';
import Home from '../components/Home';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      city: 'San Francisco'
    };
  }
  hanldeSubmitCity(e) {
    e.preventDefault();
    this.context.router.push(`/forecast/${this.state.city}`);
  }
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  render() {
    return (
      <Home
        onUpdateCity={e => this.handleUpdateCity(e)}
        onSubmitCity={e => this.hanldeSubmitCity(e)}
        city={this.state.city} />
    );
  }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default HomeContainer;
