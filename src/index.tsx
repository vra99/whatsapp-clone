import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './globalStyles';
import Home from './Layout/home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
      <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
