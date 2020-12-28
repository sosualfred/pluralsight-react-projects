import React from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

const TestData = [
  {
    name: "Sosu Alfred",
    avatar_url: "https://avatars3.githubusercontent.com/u/22264939?v=4",
    location: "Ghana",
  },
  {
    name: "James Bond",
    avatar_url: "https://avatars3.githubusercontent.com/u/22264939?v=4",
    location: "London",
  }
];

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((user, id) => <Card key={id} profile={user} />)}
    </div>
  );
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: TestData
    }
  }

  render() {
    return (
      <div>
        <h1 className="header">{this.props.title}</h1>
        <Form/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
