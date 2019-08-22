import React from 'react'

class ReceiveBox extends React.Component {
  state = {
    textList: ["This is text 1", "This is text 2"],
    disabledClick: false
  };
  handleClick = (index) => {
    if (!this.state.disabledClick)
      this.props.sendRequest(this.props.textList[index])
    this.setState({disabledClick: true})
  }
  render () {
    const {textList} = this.props
    return (
        <div className="container darker">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Avatar" className="right" />
          <ul>
            {textList.map((txt, i) => (
              <li key={i} onClick={() => this.handleClick(i)} style={{cursor: 'pointer'}}>{txt}</li>
            ))}
          </ul>
          <span className="time-left">11:01</span>
        </div>
        )
  }
}

 export default ReceiveBox
