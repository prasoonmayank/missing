import React from 'react'
import axios from 'axios'
import InputBox from './components/inputBox'
import ChatSpace from './components/chatSpace'

class App extends React.Component {
  state = {
    activated: false,
    choice_type: 0,
    text: ''
  };
  sendRequest = (text) => {
    const post_data = {
      choice_type: this.state.choice_type,
      text: this.state.text
    }
    axios.post('http://localhost:8000/api/msg/', post_data)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  setText = (text) => {
    this.setState({text: text})
  }
  render () {
    const {activated,choice_type} = this.state;
    return (
        <React.Fragment>
          <div class="topnav">
            <span class="active" href="#home">Missing list</span>
          </div>
          <ChatSpace
            sendRequest={this.sendRequest}
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
