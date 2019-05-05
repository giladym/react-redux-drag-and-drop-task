import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/index';
import * as serviceWorker from './serviceWorker';
import configureStore from './store.config';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import FontFaceObserver from 'fontfaceobserver';
import history from './utils/history';


// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
    document.body.classList.add('fontLoaded');
  });

  
  // Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
