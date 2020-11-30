import React from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import BoxInfo from "./BoxInfo";
import ProfileStrength from "./ProfileStrength";
import Dashboard from "./Dashboard";

class Profile extends React.Component {
  state = {
    myProfile: {},
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
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={9}>
              <BoxInfo me={this.props.me} myProfile={this.state.myProfile} />
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
