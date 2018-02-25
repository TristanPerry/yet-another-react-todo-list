import React from 'react';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
