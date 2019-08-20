import React from 'react';

class InputBox extends React.Component {
  state = {
    message_title: ""
  };
  handleChange = (e) => {
    this.setState({message_title: e.target.value})
  }
  render () {
    return (
      <div className="below">
      Your message:
        <form>
          <input type="text" name="message_title" value={this.state.message_title} onChange={this.handleChange} />
          <input type="file" />
          <input type="submit" />
        </form>
      </div>
        )
  }
}

export default InputBox;
