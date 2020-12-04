import React from "react";
import {
  Container,
  Row,
  Card,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
class MagicFooter extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <Link>&nbsp</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>Information</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>Community guidelines</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>Privacy&Policy</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>Sales Solutions</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>Security Center</Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Link>&nbsp</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>Information</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>Community guidelines</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>Privacy&Policy</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>Sales Solutions</Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link>&nbsp</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MagicFooter;
