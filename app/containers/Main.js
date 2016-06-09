import React from 'react';

function Main({children}) {
  return (
    <div>
      <h1>Weather</h1>
      {children}
    </div>
  );
}

export default Main;
