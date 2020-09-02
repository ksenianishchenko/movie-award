import movieTypes from './movie-types';
import {setMoviesList, checkIfMovieIsNominate, updateNominateList} from "./movie-actions";
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

const onUpdateNominateList = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/nominates", {withCredentials: true})
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
    axios.post("http://localhost:3001/movies", {movie}, {withCredentials: true})
    .then((res) => {
      if(res.data.status === "created") {
        console.log(res.data.user);
      }
    })
    .then(() => {
      dispatch(onUpdateNominateList());
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

const onNominateDelete = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3001/movies/${id}`, {withCredentials: true})
    .then((res) => {
      dispatch(onUpdateNominateList());
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
        moviesList: action.payload
      }
    case movieTypes.UPDATE_NOMINATE_LIST:
      return {
        ...state,
        nominateList: action.payload
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
