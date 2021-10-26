export const SELECT_MOVIE = "SELECT_MOVIE";
export const POSTER_IMG = "POSTER_IMG";


export function select_movie(details) {
    return {
        type: SELECT_MOVIE,
        payload: details,
    }
}

export function selected_poster(url) {
    return {
        type: POSTER_IMG,
        payload: url,
    }
}