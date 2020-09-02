import movieTypes from "./movie-types";

export const setMoviesList = (moviesList) => ({
  type: movieTypes.SET_MOVIE_LIST,
  payload: moviesList
})

export const updateNominateList = (list) => ({
  type: movieTypes.UPDATE_NOMINATE_LIST,
  payload: list
})

export const removeFromNominateList = (movie) => ({
  type: movieTypes.REMOVE_FROM_NOMINATE_LIST,
  payload: movie
})
