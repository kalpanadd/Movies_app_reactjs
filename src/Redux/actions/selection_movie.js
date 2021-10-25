export const SELECT_MOVIE = "SELECT_MOVIE";
// export const OPEN_DETAILS = "OPEN_DETAILS";



export function select_movie(details) {
    return {
        type: SELECT_MOVIE,
        payload: details,
    }
}

// export function open(toggle) {
//     return {
//         type: OPEN_DETAILS,
//         payload: toggle,
//     }
// }