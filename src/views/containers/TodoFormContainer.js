import { connect } from 'react-redux'
import { postsOperations } from '../../state/ducks/posts'
import TodoForm from '../components/TodoForm'

const mapDispatchToProps = {
  onPostClick: postsOperations.addPost
}

const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm)

export default TodoFormContainer