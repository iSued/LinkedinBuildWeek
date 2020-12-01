import React from "react"
import PencilEdit from "./PencilEdit"
import PlusEdit from "./PlusEdit"
import {Card, Row, Col, ListGroup, Alert} from "react-bootstrap"

export default class extends React.Component {
  state = {MyExperience: this.props.MyExperience}

  render() {
    return (
      <>
        <Card className="mt-4 p-4">
          <Card.Body>
            <Row>
              <Col
                className="d-flex justify-content-between align-items-center"
                xs={12}
              >
                <Card.Title>Experience</Card.Title>{" "}
                <PlusEdit
                  color="#666666"
                  me={this.props.me}
                  onClicked={this.props.onClicked}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center justify-content-between">
                    <div>
                      <div>
                        <img
                          src="https://placehold.it/300x300"
                          alt="placeholder"
                          width="56px"
                        />
                      </div>
                      <div>
                        <h6>C# Developer</h6>
                      </div>
                    </div>
                    <div>
                      <PencilEdit me={this.props.me} color="#0b67c2" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <div>
                      <img
                        src="https://placehold.it/300x300"
                        alt="placeholder"
                        width="56px"
                      />
                    </div>
                    <div>
                      <h6>Journalist</h6>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="p-4">
          <Card.Body>
            <Row>
              <Col
                className="d-flex justify-content-between align-items-center"
                xs={12}
              >
                <Card.Title>Licenses and Certifications</Card.Title>{" "}
                <h3 className="text-primary">+</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ListGroup className="d-flex" variant="flush">
                  <ListGroup.Item className="d-flex align-items-center justify-content-between">
                    <div>
                      <div>
                        <img
                          src="https://placehold.it/300x300"
                          alt="placeholder"
                          width="56px"
                        />
                      </div>
                      <div>
                        <h6>CSS: Selectors</h6>
                      </div>
                    </div>
                    <div>
                      <PencilEdit me={this.props.me} color="#0b67c2" />
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <div>
                      <img
                        src="https://placehold.it/300x300"
                        alt="placeholder"
                        width="56px"
                      />
                    </div>
                    <div>
                      <h6>Learning ECMA scripts</h6>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    )
  }
}
