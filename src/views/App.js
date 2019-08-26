import React from 'react';

import UserProfileContainer from './containers/UserProfileContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import TodoListContainer from './containers/TodoListContainer';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column', width: '100%' }}>
      <div style={{ height: '20%' }}>
        <UserProfileContainer />
      </div>
      <div style={{ height: '20%'  }}>
        <TodoFormContainer />
      </div>
      <div style={{ height: '60%'  }}>
        <TodoListContainer />
      </div>
    </div>
  );
}

export default App;