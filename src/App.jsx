import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";

import React from "react";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    me: true,
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Profile me={this.state.me} />
        <Footer />
      </div>
    );
  }
}

export default App;
