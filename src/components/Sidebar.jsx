import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Advertise from "./Advertise";
import Know from "./Know";
import MayKnow from "./MayKnow";

import TopSettings from "./TopSettings";
import Videos from "./Videos";

class Sidebar extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}
export default Sidebar;
