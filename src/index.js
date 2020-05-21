import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    appTitle="REACT TRAINING"
    appSubTitle="Work Like There's Someone Working 24hrs Trying To Take It From You."
  />,
  document.getElementById('root')
);

registerServiceWorker();
