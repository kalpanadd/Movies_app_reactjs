import { SELECT_MOVIE } from "../actions/selection_movie";

const initialState = ""
// const initialtoggle = false;

export function Movie_reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SELECT_MOVIE:
            return { ...state, payload };

        default:
            return state;
    }
}

// export function Toggle_details(state = initialtoggle, { type, payload }) {
//     switch (type) {
//         case OPEN_DETAILS:

//             return payload;

//         default:
//             return state;;
//     }
// }