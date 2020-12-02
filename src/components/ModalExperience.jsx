import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default class ModalExperience extends Component {
  state = {
    experience: {},
  };

  handleChange = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        [e.target.id]: e.target.value,
      },
    });
  };

  addExperience = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.id}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(this.state.experience),

          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      );

      if (response.ok) {
        alert("Experience UPDATED SUCCESFULLY");



        this.props.submitExpCounter();

        // this.props.submitCounter();
      } else {
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.showModalExperience}
          onHide={() => this.props.hide()}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.addExperience}>
              <Form.Group>
                <Form.Label htmlFor="name">Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Role"
                  id="role"
                  value={this.state.experience.role}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Company"
                  id="company"
                  value={this.state.experience.company}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your start date"
                  id="startDate"
                  value={this.state.experience.startDate}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your end date"
                  id="endDate"
                  value={this.state.experience.endDate}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  id="description"
                  value={this.state.experience.description}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Area"
                  id="area"
                  value={this.state.experience.area}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit Changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
