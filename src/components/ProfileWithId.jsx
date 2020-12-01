import React from "react";
import { Col, Alert } from "react-bootstrap";
import BoxInfo from "./BoxInfo";
import Activity from "./Activity";
import ELC from "./ELC";
import SkillsAndEndorsement from "./SkillsAndEndorsement";

class PorfileWithId extends React.Component {
  state = {
    profile: {},
  };

  fetchProfile = async () => {
    this.props.changeMe();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          this.props.match.params.id,
        {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      );

      let profile = await response.json();
      console.log(profile);

      if (response.ok) {
        this.setState({ profile });
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
      <Col md={9}>
        <BoxInfo me={this.props.me} myProfile={this.state.profile} />
        <Activity myProfile={this.state.profile} />
        <ELC me={this.props.me} />
        <SkillsAndEndorsement me={this.props.me} />
      </Col>
    );
  }
}

export default PorfileWithId;
