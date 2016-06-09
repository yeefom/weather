import React, {Component} from 'react';
import Detail from '../components/Detail';

class DetailContainer extends Component {
  render() {
    return (
      <Detail
        date={this.props.location.state.date}
        weather={this.props.location.state.weather}
        city={this.props.location.state.city} />
    );
  }
}

export default DetailContainer;
