import React from "react"
import {Modal, Button, Form} from "react-bootstrap"

class ModalForm extends React.Component {
  state = {
    show: false,
    info: {},
  }

  handleChange = (e) => {
    this.setState({
      info: {
        ...this.state.info,
        [e.target.id]: e.target.value,
      },
    })
  }

  handleSubmit = () => {
    this.changeInfo(this.state.info)
  }

  changeInfo = async (body) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          body: JSON.stringify(body),

          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      )

      if (response.ok) {
        alert("UPDATED SUCCESFULLY")
      } else {
        const error = await response.json()
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
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
                <Form.Control
                  type="text"
                  placeholder="Enter your First Name"
                  id="name"
                  value={this.state.info.name}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Last Time"
                  id="surname"
                  value={this.state.info.surname}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  value={this.state.info.email}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="bio"
                  value={this.state.info.bio}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Job Title"
                  id="title"
                  value={this.state.info.title}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City or Country"
                  id="area"
                  value={this.state.info.area}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>ImageUrl</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="image Url"
                  id="image"
                  value={this.state.info.image}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="username"
                  value={this.state.info.username}
                  onChange={(e) => this.handleChange(e)}
                />
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
            <Button variant="primary" onClick={() => this.handleSubmit()}>
              Submit Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ModalForm
