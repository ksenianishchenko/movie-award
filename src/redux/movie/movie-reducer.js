import movieTypes from './movie-types';
import {setMoviesList, updateNominateList} from "./movie-actions";
import axios from "axios";
import API from '../../api';
import {addToNominateList, removeFromNominateList, checkIfMovieIsNominate} from "./movie-utils";

const INITIAL_STATE = {
  moviesList: [],
  nominateList: []
}

const getMoviesByTitle = (title) => {
  return function(dispatch) {
    return axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=789a991d&s=${title}`)
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

const onUpdateNominateList = (id) => {
  return (dispatch) => {
    API.get(`nominates/${id}`, {withCredentials: true})
    .then((res) => {
      if(res.data.nominates) {
        console.log(res.data.nominates);
        dispatch(updateNominateList(res.data.nominates));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const addNewMovie = (movieToAdd, currentUser) => {
  let movie = {
    title: movieToAdd.Title,
    year: movieToAdd.Year,
    imdbId: movieToAdd.imdbID,
    movie_type: movieToAdd.Type,
    poster: movieToAdd.Poster,
    user_id: currentUser.id
  }
  return dispatch => {
    API.post("movies", {movie}, {withCredentials: true})
    .then((res) => {
      if(res.data.status === "created") {
        console.log(res.data.user);
      }
    })
    .then(() => {
      dispatch(onUpdateNominateList(currentUser.id));
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

const onNominateDelete = (id, currentUserId) => {
  return (dispatch) => {
    API.delete(`movies/${id}`, {withCredentials: true})
    .then((res) => {
      dispatch(onUpdateNominateList(currentUserId));
    }).catch((error) => {
      console.log(error);
    })
  }
}

const movieReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case movieTypes.SET_MOVIE_LIST:
      return {
        ...state,
        moviesList: checkIfMovieIsNominate(state.nominateList, action.payload)
      }
    case movieTypes.UPDATE_NOMINATE_LIST:
      return {
        ...state,
        nominateList: action.payload
      }
    case movieTypes.UPDATE_MOVIES_LIST:
      return {
        ...state,
        moviesList: updateMoviesList(state.moviesList, action.payload)
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

export {movieReducer, getMoviesByTitle, addNewMovie, onUpdateNominateList, onNominateDelete};
