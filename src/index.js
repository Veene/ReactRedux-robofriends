import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //from react redux pacakage
import { createStore, applyMiddleware, combineReducers } from 'redux'; // functions from redux package
import { createLogger } from 'redux-logger'; // middleware function imported from redux logger
import thunkMiddleware from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
// import Card from './Card.js';
import App from './App';
// import { robots } from './robots';

const logger = createLogger(); //middleware

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(   
                <Provider store={store}>
                    <App  />
                </Provider>,
                     document.getElementById('root'));
registerServiceWorker();
