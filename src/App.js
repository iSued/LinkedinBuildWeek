import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyChat from "./components/MyChat";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/">
            <Row>
              <Col className="col-9">
                <MyChat />
              </Col>
              <Col className="col-3">
                <Sidebar />
              </Col>
            </Row>
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;
