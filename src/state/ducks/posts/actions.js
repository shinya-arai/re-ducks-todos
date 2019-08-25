import types from './types'

export const addPost = newPost => {
  return {
    type: types.ADD_POST,
    payload: {
      newPost
    }
  }
}

export default {
  addPost
}