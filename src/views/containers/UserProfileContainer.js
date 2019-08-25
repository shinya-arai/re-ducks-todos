import { connect } from 'react-redux'
import { usersSelectors, usersOperations } from '../../state/ducks/users'
import UserProfile from '../components/UserProfile'

const mapStateToProps = state => {
  return {
    users: usersSelectors.getUsers(
      state.usersState.usersInfo.users,
      state.usersState.usersFilter
    ),
    currentUser: usersSelectors.getCurrentUser(
      state.usersState.usersInfo.currentUser
    )
  }
}

const mapDispatchToProps = {
  onUserClick: usersOperations.changeCurrentUser
}

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile)

export default UserProfileContainer