import { combineReducers } from 'redux';
import { Movie_reducer } from './selecion_reducer';
// import { Toggle_details } from './selecion_reducer';

const reducers = combineReducers({
    allDetails: Movie_reducer,
    // toggler: Toggle_details,
})

export default reducers;