import React from 'react';

class TodoList extends React.Component {
  showTodoList = () => {
    const { posts } = this.props

    if(!posts) {
      return null
    }

    return posts.map(post => {
      return (
        <div 
          key={post.id}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '10rem' }}
        >
          <div>{post.text}</div>
          <div>{post.contributer.name}</div>
          <div>{post.contributer.count}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.showTodoList()}
      </div>
    )
  }
}

export default TodoList