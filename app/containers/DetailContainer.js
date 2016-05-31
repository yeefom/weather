var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function() {
    return (
      <Detail
        date={this.props.location.state.date}
        weather={this.props.location.state.weather}
        city={this.props.location.state.city} />
    );
  }
});

module.exports = DetailContainer;
