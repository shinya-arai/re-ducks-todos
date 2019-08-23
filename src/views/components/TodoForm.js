import React from 'react';

const Todoform = () => {
  return (
    <div style={{ display: 'flex', height: '100%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
      <form>
        <input type="text" style={{ height: '4rem', width: '12rem' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ backgroundColor: 'green', color: 'white' }}>投稿する</button>
        </div>
      </form>
    </div>
  )
}

export default Todoform