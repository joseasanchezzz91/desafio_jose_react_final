import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducerPeliculas from './modules/peliculas/';


const reducers = combineReducers({
    peliculas: RootReducerPeliculas
})


const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;