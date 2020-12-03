import React, {Component} from "react"
import {Modal, Button} from "react-bootstrap"

export default class ModalProfilePicture extends Component {
  state = {}

  // postImage = async () => {
  //     const url = "https://striveschool-api.herokuapp.com/api/profile/{userId}/picture"

  //     try {
  //         const response = fetch("https://striveschool-api.herokuapp.com/api/profile/me/picture", {
  //             method: "POST",
  //             body: new FormData(formElem)
  //           )
  //         }

  //     }
  //     catch (error) {

  //     }
  // }

  render() {
    return (
      <Modal
        show={this.props.showPictureModal}
        onHide=""
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.props.hidePictureModal()}
          >
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
