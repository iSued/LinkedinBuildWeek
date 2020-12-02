import React from "react"
import PencilEdit from "./PencilEdit"
import PlusEdit from "./PlusEdit"
import {Card, Row, Col, ListGroup} from "react-bootstrap"

export default class extends React.Component {
  state = {MyExperience: this.props.MyExperience}

  handleEdit = (exp) => {
    this.props.onClicked()
    this.props.editExp(exp)
  }

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
                <Card.Title>Experience</Card.Title>
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
                  {this.props.MyExperience &&
                    this.props.MyExperience.map((experience, index) => (
                      <ListGroup.Item
                        className="d-flex align-items-center justify-content-between"
                        key={index}
                      >
                        <div>
                          <div>
                            <img
                              src="https://placehold.it/300x300"
                              alt="placeholder"
                              width="56px"
                            />
                          </div>
                          <div>
                            <h5>{experience.role}</h5>
                            <h6>{experience.company}</h6>
                            <p>
                              {experience.startDate} - {experience.endDate}
                            </p>
                          </div>
                        </div>
                        <div>
                          <PencilEdit
                            me={this.props.me}
                            color="#0b67c2"
                            onClicked={() => this.handleEdit(experience)}
                          />
                        </div>
                      </ListGroup.Item>
                    ))}
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
                <Card.Title>Licenses and Certifications</Card.Title>
                {this.props.me && <h3 className="text-primary">+</h3>}
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
                {this.props.me && <h3 className="text-primary">+</h3>}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ListGroup className="d-flex" variant="flush">
                  <ListGroup.Item className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-between">
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
