import React from "react";
import { Row, Col, Container, Accordion, Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class Know extends React.Component {
  state = {
    users1: this.props.someProps,
    users2: this.props.otherProps,
  };
  render() {
    return (
      <div className="mb-2 youknow">
        <Accordion>
          <Card className="youknow mb-2">
            <Card.Body>
              <Container>
                <h3>you know</h3>
              </Container>
              {this.props.oneProps.map((user) => (
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
                    <MessageSharpIcon />
                  </Col>
                </Row>
              ))}
            </Card.Body>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {this.props.twoProps.map((user) => (
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
                      <MessageSharpIcon />
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
export default withRouter(Know);
