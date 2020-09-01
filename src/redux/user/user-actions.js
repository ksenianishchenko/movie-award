import userTypes from "./user-types";

export const setCurrentUser = user => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user
})

export const setIsLoggin = (status) => ({
  type: userTypes.SET_LOGGED_IN_STATUS,
  payload: status
})
