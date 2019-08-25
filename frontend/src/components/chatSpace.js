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
    console.log(replyTextList)
    console.log(receiveTextList)
    return receiveTextList.map((text, index) => {
      return (
        <React.Fragment>
          {index>0 ? (
              <ReplyBox
                text={replyTextList[index-1]}
              />
            ) : null}
          <ReceiveBox
            textList={text.text_list}
            sendRequest={this.sendRequest}
            type={text.type}
          />
        </React.Fragment>
        )
    })
  }
  sendRequest = (text) => {
    this.props.sendRequest(text)
  }
  render () {
    return (
        <React.Fragment>
          {this.addChatMsg()}
        </React.Fragment>
        )
  }
}

export default ChatSpace
