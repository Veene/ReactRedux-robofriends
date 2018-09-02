import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //from react redux pacakage
import { createStore } from 'redux'; //from redux package
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';
// import Card from './Card.js';
import App from './App';
// import { robots } from './robots';

const store = createStore(searchRobots)

ReactDOM.render(   
                <Provider store={store}>
                    <App  />
                </Provider>,
                     document.getElementById('root'));
registerServiceWorker();
