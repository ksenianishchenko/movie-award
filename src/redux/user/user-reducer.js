import userTypes from "./user-types";
import {setCurrentUser, setIsLoggin, setErrorsOnSignUp, setErrorsOnLogin} from "./user-actions";
import {onUpdateNominateList} from "../movie/movie-reducer";
import axios from "axios";
import API from '../../api';

const INITIAL_STATE = {
  currentUser: null,
  isLoggedIn: false,
  onLoginError: '',
  onSignUpError: ''
}

const addNewUser = (user) => {
  return dispatch => {
    API.post("users", {user}, {withCredentials: true})
    .then((res) => {
      if(res.data.status === "created") {
        dispatch(setCurrentUser(res.data.user));
        dispatch(setIsLoggin(true));
      }

      if(res.data.status === 400) {
        dispatch(setErrorsOnSignUp(res.data.errors[0]));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onLoginRequest = (user) => {
  return (dispatch) => {
    API.post("login", {user}, {withCredentials: true})
    .then((res) => {
      if(res.data.logged_in === true) {
        dispatch(setCurrentUser(res.data.user));
        dispatch(setIsLoggin(true));
        dispatch(onUpdateNominateList(res.data.user.id));
      }

      if(res.data.status === 401) {
        dispatch(setErrorsOnLogin(res.data.errors[0]));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onLogoutRequest = () => {
  return (dispatch) => {
    API.delete("logout", {withCredentials: true})
    .then((res) => {
      if(res.data.logged_out === true) {
        dispatch(setIsLoggin(false));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onAuthorizationRequest = () => {
  return (dispatch) => {
    API.get("logged_in", {withCredentials: true})
    .then((res) => {
      if(res.data.logged_in === true) {
        dispatch(setIsLoggin(true));
        dispatch(setCurrentUser(res.data.user));
        dispatch(onUpdateNominateList(res.data.user.id));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case userTypes.SET_LOGGED_IN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload
      }
    case userTypes.SET_ERRORS_ON_LOGGIN:
      return {
        ...state,
        onLoginError: action.payload
      }
    case userTypes.SET_ERRORS_ON_SIGN_UP:
      return {
        ...state,
        onSignUpError: action.payload
      }
    default:
      return state;
  }
}

export {userReducer, addNewUser, onLoginRequest, onLogoutRequest, onAuthorizationRequest};
