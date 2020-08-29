import movieTypes from './movie-types';
import {setMoviesList, checkIfMovieIsNominate} from "./movie-actions";
import axios from "axios";
import {addToNominateList, removeFromNominateList} from "./movie-utils";

const INITIAL_STATE = {
  moviesList: [],
  nominateList: []
}

const getMoviesByTitle = (title) => {
  return function(dispatch) {
    return axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=789a991d&s=${title}`)
      .then((res) => {
      const movies = res.data.Search;
      movies.map((movie) => {
        movie.is_nominate = false;
      })
      dispatch(setMoviesList(movies));
    }).catch((error) => {
    })
  };
}

const movieReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case movieTypes.SET_MOVIE_LIST:
      return {
        ...state,
        moviesList: action.payload
      }
    case movieTypes.UPDATE_NOMINATE_LIST:
      return {
        ...state,
        nominateList: addToNominateList(state.nominateList, action.payload)
      }
    case movieTypes.REMOVE_FROM_NOMINATE_LIST:
      return {
        ...state,
        nominateList: removeFromNominateList(state.nominateList, action.payload)
      }
    default:
      return state
  }
}

export {movieReducer, getMoviesByTitle};
