import { SELECT_MOVIE, POSTER_IMG } from "../actions/selection_movie";

const initialState = "";
const posterImg = "";
export function Movie_reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SELECT_MOVIE:
            return { ...state, payload };

        default:
            return state;
    }
}

export function Poster_reducer(state = posterImg, { type, payload }) {
    switch (type) {
        case POSTER_IMG:
            return payload;

        default:
            return state;;
    }

}

