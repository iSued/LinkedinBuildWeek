import React from "react";
import ProfileCard from "./ProfileCard";
import FileUnderProfile from "./FileUnderProfile";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

class FeedSideLeft extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ProfileCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <FileUnderProfile />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default FeedSideLeft;
