import React from 'react';
import ReceiveBox from './receiveBox'
import ReplyBox from './replyBox'

class ChatSpace extends React.Component {
  state = {};
  render () {
    return (
        <React.Fragment>
          <h3>Chat Space</h3>
          <ReceiveBox />
          <ReplyBox />
          <ReceiveBox />
          <ReplyBox />
          <ReceiveBox />
          <ReplyBox />
          <ReceiveBox />
          <ReplyBox />
          <ReceiveBox />
          <ReplyBox />
          <ReceiveBox />
          <ReplyBox />
        </React.Fragment>
        )
  }
}

export default ChatSpace
