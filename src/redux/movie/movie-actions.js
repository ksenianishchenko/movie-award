import movieTypes from "./movie-types";

export const setMoviesList = (moviesList) => ({
  type: movieTypes.SET_MOVIE_LIST,
  payload: moviesList
})

export const updateNominateList = (movie) => ({
  type: movieTypes.UPDATE_NOMINATE_LIST,
  payload: movie
})

export const removeFromNominateList = (movie) => ({
  type: movieTypes.REMOVE_FROM_NOMINATE_LIST,
  payload: movie
})
