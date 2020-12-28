import React from "react";
import axios from 'axios';

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${this.state.username}`);
    const profileData = {
        name: response.data.name,
        location: response.data.location,
        avatar_url: response.data.avatar_url
    }
    this.props.updateProfile(profileData);
    console.log(profileData);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit }>
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
