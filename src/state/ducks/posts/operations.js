import actions from './actions'
import { usersSelectors } from '../users'
import configureStore from '../../store'

const addPost = text => {
  const { usersState } = configureStore().getState()
  const contributer = usersSelectors.getCurrentUser(usersState.usersInfo.currentUser)

  const id = Math.random() * Math.random() * Math.random();

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