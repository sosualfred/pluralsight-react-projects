import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  onUsernameChnage = (event) => {
    this.setState({ username: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          required
          value={this.state.username}
          onChange={this.onUsernameChnage}
          placeholder="Github Username"
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
