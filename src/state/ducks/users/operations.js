import actions from './actions'
import { usersSelectors } from './index'
import configureStore from '../../store'

const changeCurrentUser = userId => {
  const { usersState }  = configureStore().getState()
  const users = usersSelectors.getUsers(
    usersState.usersInfo.users,
    usersState.usersFilter
  )

  const newCurrentUser = users.find(user => user.id === userId)

  return actions.changeCurrentUser(newCurrentUser)
}

export default {
  changeCurrentUser
}