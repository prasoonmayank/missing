import React from 'react'
import InputBox from './components/inputBox'
import ChatSpace from './components/chatSpace'

class App extends React.Component {
  state = {};
  render () {
    return (
        <React.Fragment>
          <div class="topnav">
            <span class="active" href="#home">Missing list</span>
          </div>
          <ChatSpace />
          <InputBox />
        </React.Fragment>
      )
  }
}

export default App
