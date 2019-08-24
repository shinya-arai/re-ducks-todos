import { connect } from 'react-redux'
import { usersSelectors, usersOperations } from '../../state/ducks/users'
import UserProfile from '../components/UserProfile'

const mapStateToProps = state => {
  return {
    users: usersSelectors.getUsers(
      state.usersState.usersInfo,
      state.usersState.usersFilter
    ),
    currentUser: usersSelectors.getCurrentUser(
      state.usersState.usersInfo
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch()
    }
  }
}

const UserProfileContainer = connect(mapStateToProps)(UserProfile)

export default UserProfileContainer