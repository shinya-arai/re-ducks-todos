import React from 'react';

import UserProfile from './components/UserProfile';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column', width: '100%' }}>
      <div style={{ height: '20%' }}>
        <UserProfile />
      </div>
      <div style={{ height: '20%'  }}>
        <TodoForm />
      </div>
      <div style={{ height: '60%'  }}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;