import {combineReducers} from "redux";

import {userReducer} from "./user/user-reducer";
import {movieReducer} from "./movie/movie-reducer";

export default combineReducers({
  user: userReducer,
  movie: movieReducer
});
