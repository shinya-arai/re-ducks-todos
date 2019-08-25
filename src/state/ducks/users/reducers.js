import { combineReducers } from 'redux'
import CONSTANTS from './constants'
import types from './types'

const initialState = {
  users: [
    {id: 1, name: 'Taro', count: 10},
    {id: 2, name: 'Jiro', count: 3},
    {id: 3, name: 'Saburo', count: 19},
    {id: 4, name: 'Shiro', count: 36},
    {id: 5, name: 'Goro', count: 55},
  ],
  currentUser: null,
}

const usersInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.newCurrentUser
      }
    default:
      return state
  }
}

const usersFilter = (state = CONSTANTS.GET_ALL, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const usersReducer = combineReducers({
  usersInfo,
  usersFilter
})

export default usersReducer