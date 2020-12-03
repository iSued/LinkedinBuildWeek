import React from "react";
import AddFeeds from "./AddFeeds";
import FileUnderProfile from "./FileUnderProfile";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import DownFeed from "./DownFeed";

class FeedSideRight extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <AddFeeds />
          </Col>
        </Row>
        <Row>
          <Col>
            <DownFeed />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default FeedSideRight;
