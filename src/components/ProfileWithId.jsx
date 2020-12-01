import React from "react";
import { Col, Alert } from "react-bootstrap";
import BoxInfo from "./BoxInfo";
import Activity from "./Activity";
import ELC from "./ELC";
import SkillsAndEndorsement from "./SkillsAndEndorsement";
import Interests from "./Interests";

class PorfileWithId extends React.Component {
  state = {
    profile: {},
    MyExperience: [],
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
        this.fetchExperience(profile._id);
        this.setState({ profile });
      } else {
        <Alert variant="danger">Something went wrong</Alert>;
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchExperience = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      );
      let MyExperience = await response.json();
      console.log("here experience", MyExperience);

      if (response.ok) {
        this.setState({ MyExperience });
      } else {
        <Alert variant="danger">Something went wrong</Alert>;
      }
    } catch (err) {
      console.log(err);
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
        <ELC me={this.props.me} MyExperience={this.state.MyExperience} />
        <SkillsAndEndorsement me={this.props.me} />
        <Interests />
      </Col>
    );
  }
}

export default PorfileWithId;
