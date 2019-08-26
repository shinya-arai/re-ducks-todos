import actions from './actions'

const addPost = (text, currentUser) => {
  const id = Math.random() * Math.random() * Math.random()
  const contributer = currentUser

  const newPost = {
    id,
    text,
    contributer
  }

  return actions.addPost(newPost)
}

export default {
  addPost
}