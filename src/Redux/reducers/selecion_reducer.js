import { SELECT_MOVIE } from "../actions/selection_movie";

const initialState = "kalp"
export function Movie_reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SELECT_MOVIE:
            state = { ...state, payload };
            return state;

        default:
            return state;
    }
}
