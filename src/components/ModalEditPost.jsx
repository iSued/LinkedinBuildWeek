import React from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";

class ModalEditPost extends React.Component {
  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col xs={12}>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{ border: "none" }}
                  value={this.state.POSTModel.text}
                  id="texttopost"
                  onChange={(e) => this.updateField(e)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalEditPost;
