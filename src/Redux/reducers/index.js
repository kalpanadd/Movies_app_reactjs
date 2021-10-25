import { combineReducers } from 'redux';
import { Movie_reducer } from './selecion_reducer';

const reducers = combineReducers({
    allDetails: Movie_reducer,
})

export default reducers;