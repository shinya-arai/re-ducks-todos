import React from 'react';

class UserProfile extends React.Component {
  displayUsers = () => {
    const { users, onUserClick } = this.props;

    return users.map(user => {
      return (
        <div 
          key={user.id}
          style={{ marginLeft: '2rem', cursor: 'pointer' }}
          onClick={() => onUserClick(user.id)}
        >
          {user.name}
        </div>
      )
    })
  }

  render() {
    const { currentUser } = this.props

    return (
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <div style={{ display: 'flex' }}>
            ユーザー選択: {this.displayUsers()}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '70%' }}>
          <div>名前: {currentUser ? currentUser.name : 'null'}</div>
          <div>投稿数: {currentUser ? currentUser.count : 'null'}</div>
        </div>
      </div>
    )
  }
}

export default UserProfile