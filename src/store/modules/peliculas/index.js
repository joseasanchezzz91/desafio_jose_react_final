import { combineReducers } from 'redux';
import peliculasReducer from './peliculas.reducer';

const RootReducerPeliculas = combineReducers({
    getAll: peliculasReducer
});


export default RootReducerPeliculas;



