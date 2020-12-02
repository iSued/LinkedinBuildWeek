import React from "react";
import { Alert, Row, Col } from "react-bootstrap";
import Advertise from "./Advertise";
import Know from "./Know";
import MayKnow from "./MayKnow";

import TopSettings from "./TopSettings";
import Videos from "./Videos";

class Sidebar extends React.Component {
  state = { users: [] };
  componentDidMount = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile",
      {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      }
    );
    let users = await response.json();
    if (response.ok) {
      console.log("all users", users);
      this.setState({ users });
    } else {
      this.setState({ loadingExp: false });
      <Alert variant="danger">No users</Alert>;
    }
  };
  render() {
    return (
      <>
        <Col md={3}>
          <Row>
            <Col>
              <TopSettings />
            </Col>
          </Row>
          <Row>
            <Col>
              <Advertise />
            </Col>
          </Row>
          <Row>
            <Col>
              <Know />
            </Col>
          </Row>
          <Row>
            <Col>
              <MayKnow />
            </Col>
          </Row>
          <Row>
            <Col>
              <Videos />
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}
export default Sidebar;
