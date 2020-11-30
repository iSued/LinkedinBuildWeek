import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import NavBar from "./components/NavBar"

import React from "react"
import Profile from "./components/Profile"

class App extends React.Component {
  state = {
    me: true,
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Profile me={this.state.me} />
      </div>
    )
  }
}

export default App
