import CONSTANTS from './constants'

const getUsers = (users, filter) => {
  switch(filter) {
    case CONSTANTS.GET_ALL:
      return users;
    default: 
      throw new Error("error")
  }
}

const getCurrentUser = currentUser => {
  return currentUser
}

export default {
  getUsers,
  getCurrentUser
}