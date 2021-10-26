import { combineReducers } from 'redux';
import { Movie_reducer, Poster_reducer } from './selecion_reducer';

const reducers = combineReducers({
    allDetails: Movie_reducer,
    poster_url: Poster_reducer

})

export default reducers;