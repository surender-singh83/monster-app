import {applyMiddleware, compose, createStore} from 'redux';
import loginReducer from '../reducer/loginReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancer(applyMiddleware(thunk));

const store = createStore(
    loginReducer,
    enhancer
    );

export default store;