import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { postsSelectors } from '../../state/ducks/posts'

const mapStateToProps = state => {
  return {
    posts: postsSelectors.getPosts(
      state.postsState.postsInfo.posts
    )
  }
} 

const TodoListContainer = connect(mapStateToProps)(TodoList)

export default TodoListContainer