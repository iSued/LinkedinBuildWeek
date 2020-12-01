import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    me: true,
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route path="/">
            <Container className="mt-5">
              <Row>
                <Profile me={this.state.me} />

                <Sidebar />
              </Row>
            </Container>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
