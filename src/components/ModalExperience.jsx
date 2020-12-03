import React, { Component } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";

export default class ModalExperience extends Component {
  state = {
    experience: {
      role: "",
      company: "",
      startDate: "",
      endDate: "", //could be null
      description: "",
      area: "",
    },
    post: null,
  };

  handleChange = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        [e.target.id]: e.target.value,
      },
    });
  };

  fileUploadHandler = (e) => {
    const formData = new FormData();
    formData.append("experience", e.target.files[0]);
    this.setState({ post: formData });
  };

  fetchPostImage = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.id}/experiences/${id}/picture`,
        {
          method: "POST",
          body: this.state.post,

          headers: {
            //"Content-Type": "application/json",
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      );
      if (response.ok) {
        console.log("OK");
      } else {
        const error = await response.json();
        console.log(error);
        <Alert variant="danger">Something went wrong</Alert>;
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    if (this.props.editExp.experience._id) {
      this.setState({
        experience: {
          role: this.props.editExp.experience.role,
          company: this.props.editExp.experience.company,
          startDate: this.props.editExp.experience.startDate,
          endDate: this.props.editExp.experience.endDate, //could be null
          description: this.props.editExp.experience.description,
          area: this.props.editExp.experience.area,
        },
      });
    } else {
      this.setState({
        experience: {
          role: "",
          company: "",
          startDate: "",
          endDate: "", //could be null
          description: "",
          area: "",
        },
      });
    }
  };

  submitExperience = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (this.props.editExp.experience._id) {
        response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${this.props.id}/experiences/${this.props.editExp.experience._id}`,
          {
            method: "PUT",
            body: JSON.stringify(this.state.experience),

            headers: {
              "Content-Type": "application/json",
              Authorization: process.env.REACT_APP_TOKEN,
            },
          }
        );
      } else {
        response = await fetch(
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
      }

      if (response.ok) {
        const data = await response.json();

        alert(
          `Experience ${
            this.props.editExp.experience._id ? "EDITED" : "ADDED"
          } SUCCESFULLY`
        );
        if (this.state.post !== null) {
          this.fetchPostImage(data._id);
        }
        this.props.submitExpCounter();
        this.props.hide();
      } else {
        const error = await response.json();
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // submitExperienceWithImage = (e) => {
  //   this.fetchPostImage();
  //   this.submitExperience();
  // };

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
            <Form onSubmit={this.submitExperience}>
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
              <Form.Group>
                <Form.Control
                  type="file"
                  id="fileUpload"
                  onChange={this.fileUploadHandler}
                  style={{ display: "none" }}
                  ref={(fileInput) => (this.fileInput = fileInput)}
                />
                <Button
                  className="rounded-pill mr-3 my-3 p-1 px-4 w-100"
                  variant="primary"
                  onClick={() => this.fileInput.click()}
                >
                  Upload file
                </Button>
              </Form.Group>

              <Button variant="primary" type="submit">
                {this.props.editExp.experience._id
                  ? "Edit Experience"
                  : "Add New Experience"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
