var React = require('react');

function Button(props) {
  return (
    <button type='button'>
      {props.children}
    </button>
  );
}

function Input() {
  return (
    <input
      placeholder='San Francisco'
      type='text' />
  );
}

function Home() {
  return (
    <div>
      <h3>Enter a City and State</h3>
      <Input/>
      <Button>
        Get Weather
      </Button>
    </div>
  );
}

module.exports = Home;
