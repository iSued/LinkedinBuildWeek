import React from "react";
import { Row, Col, Container, Accordion, Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

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
              {this.props.threeProps.map((user) => (
                <Row>
                  <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src={user.image}
                      className="avatar"
                    />
                  </Col>
                  <Col
                    xs={7}
                    className="bordered d-flex px-2 py-2 justify-content-start align-items-center"
                  >
                    <Link to={"/profile/" + user._id}>
                      <h4>
                        {user.name} {user.surname}
                      </h4>
                      <p>{user.title}</p>
                    </Link>
                  </Col>
                  <Col className="bordered d-flex px-2 py-2 justify-content-center align-items-center">
                    <AddCircleOutlineIcon />
                  </Col>
                </Row>
              ))}
            </Card.Body>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {this.props.fourProps.map((user) => (
                  <Row>
                    <Col className=" d-flex px-2 py-2 justify-content-center align-items-center">
                      <Avatar
                        alt="Remy Sharp"
                        src={user.image}
                        className="avatar"
                      />
                    </Col>
                    <Col
                      xs={7}
                      className="bordered d-flex px-2 py-2 justify-content-start align-items-center"
                    >
                      <Link to={"/profile/" + user._id}>
                        <h4>
                          {user.name} {user.surname}
                        </h4>
                        <p>{user.title}</p>
                      </Link>
                    </Col>
                    <Col className="bordered d-flex px-2 py-2 justify-content-center align-items-center">
                      <AddCircleOutlineIcon />
                    </Col>
                  </Row>
                ))}
              </Card.Body>
            </Accordion.Collapse>
            <Card.Header className=" d-flex px-2 py-2 justify-content-center align-items-center">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Show more <ArrowDropDownIcon />
              </Accordion.Toggle>
            </Card.Header>
          </Card>
        </Accordion>
      </div>
    );
  }
}
export default withRouter(MayKnow);
