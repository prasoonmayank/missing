import React from 'react'

class ReceiveBox extends React.Component {
  state = {};
  render () {
    return (
        <div className="container darker">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Avatar" class="right" />
          <p>Hey! I'm fine. Thanks for asking!</p>
          <span className="time-left">11:01</span>
        </div>
        )
  }
}

export default ReceiveBox
