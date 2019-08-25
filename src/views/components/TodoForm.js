import React from 'react';

class Todoform extends React.Component  {
  state = { text: '' }

  onPostClick = e => {
    e.preventDefault()

    const { onPostClick } = this.props
    const { text } = this.state

    onPostClick(text)
    this.setState({ text: '' })
  }

  render() {
    const { text } = this.state

    return (
      <div style={{ display: 'flex', height: '100%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
        <form>
          <input 
            type="text" 
            style={{ height: '4rem', width: '12rem' }}
            onChange={e => this.setState({ text: e.target.value})}
            value={text}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              style={{ backgroundColor: 'green', color: 'white' }}
              onClick={this.onPostClick}
            >
              投稿する
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Todoform