var React = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      city: 'San Francisco'
    };
  },
  hanldeSubmitCity: function(e) {
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city);
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
