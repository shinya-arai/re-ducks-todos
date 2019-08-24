import CONSTANTS from './constants'

const getUsers = (usersInfo, filter) => {
  switch(filter) {
    case CONSTANTS.GET_ALL:
      return usersInfo.users;
    default: 
      throw new Error("error")
  }
}

const getCurrentUser = usersInfo => {
  return usersInfo.currentUser
}

export default {
  getUsers,
  getCurrentUser
}