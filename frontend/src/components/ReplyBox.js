import React from 'react'

class ReplyBox extends React.Component {
  state = {};
  render () {
    const {text} = this.props
    console.log(text)
    return (
        <div className="container">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Avatar" />
          <p>{text}</p>
          <span className="time-right">11:00</span>
        </div>
        )
  }
}

export default ReplyBox
