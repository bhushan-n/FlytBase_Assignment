import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Implemented a HOC ErrorBoundary to avoid unhandled crashes
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary'

// Please check out BoxContainer.js that's where all the magic is✨

ReactDOM.render(
  <React.StrictMode>
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
