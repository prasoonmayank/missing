import React from 'react'

class ReplyBox extends Component {
  state = {};
  render () {
    const {message} = this.props;
    return (
        <div class="container">
          <img src="/w3images/bandmember.jpg" alt="Avatar" style="width:100%;" />
          <p>Hello. How are you today?</p>
          <span class="time-right">11:00</span>
        </div>
        )
  }
}

export default ReplyBox
