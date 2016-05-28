var React = require('react');
var ReactDOM = require('react-dom');

function Component() {
  return (
    <h1>Hello World</h1>
  );
}

ReactDOM.render(
  <Component/>,
  document.getElementById('app')
);
