import React from 'react'
import axios from 'axios'
import InputBox from './components/inputBox'
import ChatSpace from './components/chatSpace'

class App extends React.Component {
  state = {
    activated: false,
    choice_type: 100,
    replyTextList: [],
    textList: [],
    receiveTextList: []
  }
  componentDidMount  () {
    this.sendRequest('')
  }
  sendRequest = (text) => {
    console.log(text)
    const post_data = {
      choice_type: this.state.choice_type,
      text: text
    }
    if (text !== '') {
      this.setState(prevState => {
        const newState = prevState
        newState["replyTextList"].push(text)
        return newState
      })
    }
    axios.post('http://localhost:8000/api/msg/', post_data)
      .then(res => {
        this.setState(prevState => {
          const newState = prevState
          const n = {'text_list': res.data.return_text_list,
                     'type': res.data.type}
          newState["receiveTextList"].push(n)
          newState["choice_type"] = res.data.choice_type
          return newState
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  setText = (text) => {
    this.setState({text: text})
  }
  render () {
    const {activated,text,choice_type,textList,receiveTextList,replyTextList} = this.state;
    return (
        <React.Fragment>
          <div className="topnav">
            <span className="active" href="#home">Missing list</span>
          </div>
          <ChatSpace
            sendRequest={this.sendRequest}
            textList={textList}
            selectedText={text}
            replyTextList={replyTextList}
            receiveTextList={receiveTextList}
           />
          <InputBox
            activated={activated}
            setText={this.setText}
            sendRequest={this.sendRequest}
          />
        </React.Fragment>
      )
  }
}

export default App
