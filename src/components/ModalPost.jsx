import React from "react";
import {
  Modal,
  Button,
  Col,
  Row,
  Dropdown,
  Form,
  Alert,
} from "react-bootstrap";
import "./FeedPost.css";
import PublicIcon from "@material-ui/icons/Public";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "@material-ui/core";
import { BsPencilSquare } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { GrNotes } from "react-icons/gr";

export default class ModalPost extends React.Component {
  state = {
    show: false,
    POSTModel: { text: " " },
    showpost: false,
    errMessage: "",
    post: null,
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  Addhashtag = (e) => {
    let text = document.getElementById("texttopost").value;

    this.setState({ POSTModel: { text: "#" + text }, showpost: true });
  };
  updateField = (e) => {
    this.setState({ POSTModel: { text: e.target.value } });
  };
  fileUploadHandler = (e) => {
    const formData = new FormData();
    formData.append("post", e.target.files[0]);

    this.setState({ post: formData });
  };
  fetchPostImage = async (id) => {
    if (this.state.post) {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/${id}`,
          {
            method: "POST",
            body: this.state.post,

            headers: {
              Authorization: process.env.REACT_APP_TOKEN,
            },
          }
        );
        if (response.ok) {
          console.log("OK");
          this.props.feedCounter();
        } else {
          const error = await response.json();
          console.log(error);
          <Alert variant="danger">Something went wrong</Alert>;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  submitPost = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.POSTModel),
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();

        this.props.feedCounter();
        this.setState({
          POSTModel: { text: "" },
        });
        this.fetchPostImage(data._id);

        this.handleClose();
      } else {
        console.log(this.state.POSTModel.text);
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
        console.log(error);
      }
    } catch (e) {
      console.log(e);
      this.setState({
        errMessage: e.message,
      });
    }
  };
  render() {
    return (
      <>
        <div className="startpost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
            onClick={this.handleShow}
          >
            <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
          </svg>
          <span> Start a post</span>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Make a post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={2}>
                <img
                  src="https://pbs.twimg.com/media/Ea3jz_1WoAANHhD.png"
                  alt="myprofilepic"
                  style={{ borderRadius: "50%", width: "100%" }}
                />
              </Col>
              <Col xs={3} className="px-0 mb-3">
                <h6>My Name</h6>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <PublicIcon /> Anyone <ArrowDropDownIcon />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <p className=" mt-3 ml-4  text-muted">
                {" "}
                What do you want to talk about?{" "}
              </p>
              <Col xs={12}>
                <Form>
                  <Form.Group>
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

              <span
                className="addhashtag mx-3"
                onClick={(e) => this.Addhashtag(e)}
              >
                Add hashtag
              </span>
              <span className="text-muted mt-1" style={{ fontSize: "14px" }}>
                {" "}
                Help the right people see your post
              </span>
            </Row>
            <Row className="d-flex justify-content-between my-4">
              <div>
                <Link className="mx-3">
                  <CgMathPlus />
                </Link>
                <Link>
                  <YouTubeIcon />
                </Link>
                <label for="file">
                  <Link>
                    <input
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                      onChange={this.fileUploadHandler}
                    />
                    <ImageIcon
                      className="ml-3"
                      style={{ cursor: "pointer" }}
                      // onClick={() => this.fileInput.click()}
                    />
                  </Link>
                </label>
                <Link>
                  <GrNotes className="mx-3" />
                </Link>
              </div>
              <div>
                {(this.state.POSTModel.text !== " " || this.state.post) && (
                  <button
                    className="mr-3"
                    type="submit"
                    id="post"
                    onClick={this.submitPost}
                    // style={{ display: this.state.showpost ? "block" : "none" }}
                  >
                    {" "}
                    Post
                  </button>
                )}
              </div>
            </Row>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
