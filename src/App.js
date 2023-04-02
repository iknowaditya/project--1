import React, { Component } from "react";
import User from "./Components/User";
import Navbar from "./Components/Navbar";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { user_data: [], loading: true };
    this.showUser = this.showUser.bind(this);
  }

  showUser() {
    const source = "https://reqres.in/api/users?page=1";
    fetch(source)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ user_data: user.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div>
          <Navbar showUsers={this.showUser} />
        </div>
        <div className="box2">
          <User loading={this.state.loading} user={this.state.user_data} />
        </div>
      </>
    );
  }
}

export default App;
