import React from 'react';

class InputBox extends React.Component {
  state = {
    message_title: ""
  };
  handleChange = (e) => {
    this.setState({message_title: e.target.value})
  }
  render () {
    const {activated} = this.props
    return (
      <div className="below">
      Your message:
        <form>
          <input type="text" name="message_title" value={this.state.message_title} onChange={this.handleChange} disabled={activated} />
          <input type="file" disabled={activated} />
          <input type="submit" disabled={activated} />
        </form>
      </div>
        )
  }
}

export default InputBox;
