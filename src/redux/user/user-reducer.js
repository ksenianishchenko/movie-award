import userTypes from "./user-types";
import {setCurrentUser, setIsLoggin} from "./user-actions";
import axios from "axios";

const INITIAL_STATE = {
  currentUser: null,
  isLoggedIn: false
}

const addNewUser = (user) => {
  return dispatch => {
    axios.post("http://localhost:3001/users", {user}, {withCredentials: true})
    .then((res) => {
      if(res.data.status === "created") {
        dispatch(setCurrentUser(res.data.user));
        dispatch(setIsLoggin(true));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onLoginRequest = (user) => {
  return (dispatch) => {
    axios.post("http://localhost:3001/login", {user}, {withCredentials: true})
    .then((res) => {
      if(res.data.logged_in === true) {
        dispatch(setCurrentUser(res.data.user));
        dispatch(setIsLoggin(true));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onLogoutRequest = () => {
  return (dispatch) => {
    axios.delete("http://localhost:3001/logout", {withCredentials: true})
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
    axios.get("http://localhost:3001/logged_in", {withCredentials: true})
    .then((res) => {
      if(res.data.logged_in === true) {
        dispatch(setIsLoggin(true));
        dispatch(setCurrentUser(res.data.user));
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
    default:
      return state;
  }
}

export {userReducer, addNewUser, onLoginRequest, onLogoutRequest, onAuthorizationRequest};
