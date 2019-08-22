import React from 'react';
import ReceiveBox from './receiveBox'
import ReplyBox from './replyBox'
// import ChatConstants from './constants/chatConstants'

class ChatSpace extends React.Component {
  state = {
    receiveText: [],
    replyText: [],
    clickableList: [],
    initialTextList: ["Check missing people in the city", "Check missing people in state", "Search a person from image", "Search a person name"]
  };
  addChatMsg = () => {
    const {replyTextList, receiveTextList} = this.props
    return receiveTextList.map((text, index) => {
      return (
        <React.Fragment>
          <ReceiveBox
            textList={text.text_list}
            sendRequest={this.sendRequest}
            type={text.type}
          />
          {index>0 ? (
              <ReplyBox
                text={replyTextList[index]}
              />
            ) : null}
        </React.Fragment>
        )
    })
  }
  sendRequest = (text) => {
    this.props.sendRequest(text)
  }
  render () {
    const {receiveText, replyText} = this.state
    return (
        <React.Fragment>
          {this.addChatMsg()}
        </React.Fragment>
        )
  }
}

export default ChatSpace
