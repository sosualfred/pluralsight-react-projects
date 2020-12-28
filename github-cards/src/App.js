import React from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

const CardList = (props) => {
  if (props.profiles.length === 0) {
    return <h1 style={{ marginTop: '2rem' }}>Profile is Empty</h1>;
  } else {
    return (
      <div>
        {props.profiles.map((user, id) => (
          <Card key={id} profile={user} />
        ))}
      </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }

  updateData = (profile) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profile],
    }));
    console.log(this.state.profiles);
  };

  render() {
    return (
      <div>
        <h1 className="header">{this.props.title}</h1>
        <Form updateProfile={this.updateData} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
