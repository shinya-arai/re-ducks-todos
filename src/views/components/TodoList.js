import React from 'react';

class TodoList extends React.Component {
  showTodoList = () => {
    const Todos = [
      {content: 're-ducksを学ぶ', person: 'Taro'},
      {content: 'typescriptを勉強する', person: 'Jiro'},
      {content: 'react-nativeが得意', person: 'Saburo'},
      {content: 'scala学びたい', person: 'Shiro'},
      {content: 'AWS試験受かりたい', person: 'Goro'},
    ]

    return Todos.map((todo, i) => {
      return (
        <div 
          key={i}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '10rem' }}
        >
          <div>{todo.content}</div>
          <div>{todo.person}</div>
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