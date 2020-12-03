import React from "react";
import ProfileCard from "./ProfileCard";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

class FeedSideLeft extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <ProfileCard />
        </Col>
      </Row>
    );
  }
}
export default FeedSideLeft;
