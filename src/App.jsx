import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import React from "react";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PorfileWithId from "./components/ProfileWithId";
import FeedPost from "./components/FeedPost";

class App extends React.Component {
  state = {
    me: true,
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />

          <Container className="mt-5">
            <Row>
              {/* <Route
                path="/"
                exact
                render={(props) => (
                  <Profile
                    changeMe={() => this.setState({ me: true })}
                    me={this.state.me}
                    {...props}
                  />
                )}
              /> */}
              <Route
                path="/profile/:id"
                exact
                render={(props) => (
                  <PorfileWithId
                    changeMe={() => this.setState({ me: false })}
                    me={this.state.me}
                    {...props}
                  />
                )}
              />
            </Row>
          </Container>
          <Route
            path="/feed"
            exact
            render={(props) => <FeedPost {...props} />}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
