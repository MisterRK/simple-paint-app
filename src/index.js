import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Playground from './Playground'
import * as serviceWorker from './serviceWorker';
import Name from './components/Name';
import Paint from './components/Paint'

ReactDOM.render(
  <React.StrictMode>
    <Paint />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
