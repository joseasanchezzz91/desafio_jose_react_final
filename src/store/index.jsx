import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducerPeliculas from './modules/peliculas/';
import rootReducer from './modules/auth';


const reducers = combineReducers({
    peliculas: RootReducerPeliculas,
    login:rootReducer
})


const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;