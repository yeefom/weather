import React, {PropTypes} from 'react';

function Button({onSubmitCity, children}) {
  return (
    <button
      type='button'
      onClick={onSubmitCity}>
      {children}
    </button>
  );
}

function Input({city, onUpdateCity}) {
  return (
    <input
      placeholder={city}
      type='text'
      onChange={onUpdateCity} />
  );
}

function Home({onUpdateCity, city, onSubmitCity}) {
  return (
    <div>
      <h3>Enter a City and State</h3>
      <Input
        onUpdateCity={onUpdateCity}
        city={city} />
      <Button
        onSubmitCity={onSubmitCity}>
        Get Weather
      </Button>
    </div>
  );
}

Home.propTypes = {
  onUpdateCity: PropTypes.func.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

export default Home;
