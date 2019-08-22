import React from 'react';
import ReceiveBox from './receiveBox'
import ReplyBox from './replyBox'
// import ChatConstants from './constants/chatConstants'

class ChatSpace extends React.Component {
  state = {
    receiveText: ["Receive Text1","Receive Text2","Receive Text3"],
    replyText: ["Reply Text1", "Reply Text2", "Reply Text3"],
    clickableList: [],
    initialTextList: ["Check missing people in the city", "Check missing people in state", "Search a person from image", "Search a person name"]
  };
  addChatMsg = () => {
    const {receiveText, replyText} = this.state;
    // let outjsx = ()
    // for (let i=0; i<receiveText.length; i++) {}
    return receiveText.map((rText, i) => {
      let pText = replyText[i]
      return (
          <React.Fragment>
            <ReceiveBox
              text={rText}
              textList={[]}
            />
            <ReplyBox
              text={pText}
            />
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
          <ReceiveBox
            textList={this.state.initialTextList}
            sendRequest={this.sendRequest}
            text=""
          />
          <ReplyBox />
          {this.addChatMsg()}
        </React.Fragment>
        )
  }
}

export default ChatSpace
