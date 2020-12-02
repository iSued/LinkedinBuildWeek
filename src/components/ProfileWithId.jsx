import React from "react";
import { Col, Alert, Spinner } from "react-bootstrap";
import BoxInfo from "./BoxInfo";
import Activity from "./Activity";
import ELC from "./ELC";
import SkillsAndEndorsement from "./SkillsAndEndorsement";
import Interests from "./Interests";

class PorfileWithId extends React.Component {
  state = {
    profile: {},
    MyExperience: [],
    loading: true,
    loadingExp: true,
  };

  fetchProfile = async () => {
    this.setState({ loading: true });
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
        this.setState({ profile, loading: false });
      } else {
        this.setState({ loading: false });
        <Alert variant="danger">Something went wrong</Alert>;
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchExperience = async (id) => {
    this.setState({ loadingExp: true });
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
        this.setState({ MyExperience, loadingExp: false });
      } else {
        this.setState({ loadingExp: false });
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
        {this.state.loading ? (
          <Spinner
            animation="border"
            variant="success"
            style={{ marginLeft: "45%" }}
          />
        ) : (
          <BoxInfo me={this.props.me} myProfile={this.state.profile} />
        )}
        <Activity myProfile={this.state.profile} />
        {this.state.loadingExp ? (
          <Spinner
            animation="border"
            variant="success"
            style={{ marginLeft: "45%" }}
          />
        ) : (
          <ELC me={this.props.me} MyExperience={this.state.MyExperience} />
        )}
        <SkillsAndEndorsement me={this.props.me} />
        <Interests />
      </Col>
    );
  }
}

export default PorfileWithId;
