import types from './types'
import { combineReducers } from 'redux';

const initialState = {
  posts: []
}

const postsInfo = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload.newPost)
      }
    default:
      return state
  }
}

const postsReducer = combineReducers({
  postsInfo,
})

export default postsReducer