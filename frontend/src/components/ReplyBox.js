import React from 'react'

class ReplyBox extends React.Component {
  state = {};
  render () {
    return (
        <div className="container">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Avatar" />
          <p>Hello. How are you today?</p>
          <span className="time-right">11:00</span>
        </div>
        )
  }
}

export default ReplyBox
