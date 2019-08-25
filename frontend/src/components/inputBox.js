import React from 'react';

class InputBox extends React.Component {
  state = {
    message_title: ""
  };
  handleChange = (e) => {
    this.setState({message_title: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendRequest(this.state.message_title)
  }
  render () {
    const {textDeactivated, fileDeactivated} = this.props
    // console.log(activated)
    return (
      <div className="below">
      Your message:
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="message_title" value={this.state.message_title} onChange={this.handleChange} disabled={textDeactivated} />
          <input type="file" disabled={fileDeactivated} />
          <input type="submit" />
        </form>
      </div>
        )
  }
}

export default InputBox;
