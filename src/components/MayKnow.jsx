import React from "react";
import { Row, Col, Container, Accordion, Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

class MayKnow extends React.Component {
  render() {
    return (
      <div className="mb-2 youknow">
        <Accordion>
          <Card className="youknow">
            <Card.Body>
              <Container>
                <h3>People you may know</h3>
              </Container>
              <Row>
                <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://picsum.photos/id/237/200/300"
                    className="avatar"
                  />
                </Col>
                <Col
                  xs={7}
                  className="bordered d-flex px-2 py-2 justify-content-start align-items-center"
                >
                  <Link>
                    <h4>John Hello</h4>
                    <span>Burger seller at facebook</span>
                  </Link>
                </Col>
                <Col className="bordered d-flex px-2 py-2 justify-content-center align-items-center">
                  <AddCircleOutlineIcon />
                </Col>
              </Row>

              <Row>
                <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://picsum.photos/id/237/200/300"
                    className="avatar"
                  />
                </Col>
                <Col
                  xs={7}
                  className=" bordered d-flex px-2 py-2 justify-content-start align-items-center"
                >
                  <Link>
                    <h4>John Hello</h4>
                    <span>Burger seller at facebook</span>
                  </Link>
                </Col>
                <Col className="bordered d-flex px-2 py-2 justify-content-center align-items-center">
                  <AddCircleOutlineIcon />
                </Col>
              </Row>
              <Row>
                <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://picsum.photos/id/237/200/300"
                    className="avatar"
                  />
                </Col>
                <Col
                  xs={7}
                  className=" bordered d-flex px-2 py-2 justify-content-start align-items-center"
                >
                  <Link>
                    <h4>John Hello</h4>
                    <span>Burger seller at facebook</span>
                  </Link>
                </Col>
                <Col className="bordered d-flex px-2 py-2 justify-content-center align-items-center">
                  <AddCircleOutlineIcon />
                </Col>
              </Row>
              <Row>
                <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://picsum.photos/id/237/200/300"
                    className="avatar"
                  />
                </Col>
                <Col
                  xs={7}
                  className=" d-flex px-2 py-2 justify-content-start align-items-center"
                >
                  <Link>
                    <h4>John Hello</h4>
                    <span>Burger seller at facebook</span>
                  </Link>
                </Col>
                <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                  <AddCircleOutlineIcon />
                </Col>
              </Row>
            </Card.Body>
            <Card.Header className=" d-flex px-2 py-2 justify-content-center align-items-center">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row>
                  <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://picsum.photos/id/237/200/300"
                      className="avatar"
                    />
                  </Col>
                  <Col
                    xs={7}
                    className="bordered d-flex px-2 py-2 justify-content-start align-items-center"
                  >
                    <Link>
                      <h4>John Hello</h4>
                      <span>Burger seller at facebook</span>
                    </Link>
                  </Col>
                  <Col className="bordered d-flex px-2 py-2 justify-content-center align-items-center">
                    <AddCircleOutlineIcon />
                  </Col>
                </Row>

                <Row>
                  <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://picsum.photos/id/237/200/300"
                      className="avatar"
                    />
                  </Col>
                  <Col
                    xs={7}
                    className=" bordered d-flex px-2 py-2 justify-content-start align-items-center"
                  >
                    <Link>
                      <h4>John Hello</h4>
                      <span>Burger seller at facebook</span>
                    </Link>
                  </Col>
                  <Col className="bordered d-flex px-2 py-2 justify-content-center align-items-center">
                    <AddCircleOutlineIcon />
                  </Col>
                </Row>
                <Row>
                  <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://picsum.photos/id/237/200/300"
                      className="avatar"
                    />
                  </Col>
                  <Col
                    xs={7}
                    className=" bordered d-flex px-2 py-2 justify-content-start align-items-center"
                  >
                    <Link>
                      <h4>John Hello</h4>
                      <span>Burger seller at facebook</span>
                    </Link>
                  </Col>
                  <Col className="bordered d-flex px-2 py-2 justify-content-center align-items-center">
                    <AddCircleOutlineIcon />
                  </Col>
                </Row>
                <Row>
                  <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://picsum.photos/id/237/200/300"
                      className="avatar"
                    />
                  </Col>
                  <Col
                    xs={7}
                    className=" d-flex px-2 py-2 justify-content-start align-items-center"
                  >
                    <Link>
                      <h4>John Hello</h4>
                      <span>Burger seller at facebook</span>
                    </Link>
                  </Col>
                  <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                    <AddCircleOutlineIcon />
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
export default withRouter(MayKnow);
