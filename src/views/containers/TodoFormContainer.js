import { connect } from 'react-redux'
import { postsOperations } from '../../state/ducks/posts'
import { usersSelectors } from '../../state/ducks/users'
import TodoForm from '../components/TodoForm'

const mapStateToProps = state => {
  return {
    currentUser: usersSelectors.getCurrentUser(
      state.usersState.usersInfo.currentUser
    )
  }
}

const mapDispatchToProps = {
  onPostClick: postsOperations.addPost
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)

export default TodoFormContainer