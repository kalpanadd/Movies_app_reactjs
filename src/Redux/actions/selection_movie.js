export const SELECT_MOVIE = "SELECT_MOVIE";

export function select_movie(details) {
    return {
        type: SELECT_MOVIE,
        payload: details
    }
}