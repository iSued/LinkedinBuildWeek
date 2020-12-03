import React from "react"
import {Modal, Form, Row, Col, Button} from "react-bootstrap"

class ModalEditPost extends React.Component {
  state = {
    postEdit: {
      text: "",
    },
  }

  handleChange = (e) => {
    this.setState({
      postEdit: {
        text: e.target.value,
      },
    })
  }

  componentDidUpdate = (previousProps) => {
    if (previousProps.post.text !== this.props.post.text) {
      this.setState({postEdit: {text: this.props.post.text}})
    }
  }

  deletePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.post._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      )
      if (response.ok) {
        alert("Post DELETED successfully")
        this.props.feedCounter()
        this.props.onHide()
      } else {
        const error = await response.json()
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  editFetch = async (e) => {
    e.preventDefault()
    try {
      console.log(this.state.postEdit)
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" +
          this.props.post._id,
        {
          method: "PUT",
          body: JSON.stringify(this.state.postEdit),

          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      )
      if (response.ok) {
        // const data = await response.json();
        this.props.feedCounter()
        alert(`post edited SUCCESFULLY`)
        // if (this.state.post !== null) {
        //   this.fetchPostImage(data._id);
        // }
        // this.props.submitExpCounter();
        this.props.onHide()
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
      <Modal show={this.props.show} onHide={() => this.props.onHide()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col xs={12}>
            <Form onSubmit={this.editFetch}>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{border: "none"}}
                  value={this.state.postEdit.text}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>

              <div className="d-flex justify-content-around">
                <Button
                  variant="outline-secondary"
                  onClick={() => this.deletePost()}
                >
                  Delete
                </Button>
                <Button type="submit" variant="primary">
                  Edit post
                </Button>
              </div>
            </Form>
          </Col>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ModalEditPost
