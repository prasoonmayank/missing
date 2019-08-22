import React from 'react'

class ReceiveBox extends React.Component {
  state = {
    textList: ["This is text 1", "This is text 2"]
  };
  handleClick = (index) => {
    this.props.sendRequest(this.state.textList[index])
  }
  render () {
    const {textList, text} = this.props
    return (
        <div className="container darker">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Avatar" class="right" />
          <p>{text}</p>
          <ul>
            {textList.map((txt, i) => (
              <li key={i} onClick={() => this.handleClick(i)}>{txt}</li>
            ))}
          </ul>
          <span className="time-left">11:01</span>
        </div>
        )
  }
}

 export default ReceiveBox
