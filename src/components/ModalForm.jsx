import React from "react"
import {Modal, Button, Form} from "react-bootstrap"

class ModalForm extends React.Component {
  state = {
    show: false,
  }

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={() => {
            this.setState({show: true})
          }}
        >
          Launch demo modal
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => this.setState({show: false})}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your First Name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter your Last Time" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Bio</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter your Job Title" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Area</Form.Label>
                <Form.Control type="text" placeholder="City or Country" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>ImageUrl</Form.Label>
                <Form.Control type="text" placeholder="image Url" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" placeholder="Your username" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({show: false})}
            >
              Close
            </Button>
            <Button variant="primary">Saubmit Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ModalForm
