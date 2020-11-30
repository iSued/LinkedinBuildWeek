import React from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import BoxInfo from "./BoxInfo";
import ProfileStrength from "./ProfileStrength";
import Dashboard from "./Dashboard";
import ModalForm from "./ModalForm";

class Profile extends React.Component {
  state = {
    myProfile: {},
    show: false,
    submitCounter: 0,
  };

  fetchProfile = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      );

      let myProfile = await response.json();
      console.log(myProfile);

      if (response.ok) {
        this.setState({ myProfile });
      } else {
        <Alert variant="danger">Something went wrong</Alert>;
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchProfile();
  };

  componentDidUpdate = (previousProps, previousState) => {
    if (previousState.submitCounter !== this.state.submitCounter) {
      this.fetchProfile();
    }
  };

  render() {
    return (
      <>
        <Container>
          {this.state.show && (
            <ModalForm
              show={this.state.show}
              hide={() => this.setState({ show: false })}
              myProfile={this.state.myProfile}
              submitCounter={() =>
                this.setState({ submitCounter: this.state.submitCounter + 1 })
              }
            />
          )}
          <Row>
            <Col md={9}>
              <BoxInfo
                me={this.props.me}
                myProfile={this.state.myProfile}
                onClicked={() => {
                  this.setState({ show: true });
                }}
              />
              {this.props.me && (
                <>
                  <ProfileStrength />

                  <Dashboard />
                </>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Profile;
