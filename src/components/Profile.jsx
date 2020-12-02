
import React from "react";
import { Col, Alert, Spinner } from "react-bootstrap";
import BoxInfo from "./BoxInfo";
import ProfileStrength from "./ProfileStrength";
import Dashboard from "./Dashboard";
import ModalForm from "./ModalForm";
import Activity from "./Activity";
import ELC from "./ELC";
import SkillsAndEndorsement from "./SkillsAndEndorsement";
import Interests from "./Interests";
import ModalExperience from "./ModalExperience";


class Profile extends React.Component {
  state = {
    myProfile: {},
    show: false,
    submitCounter: 0,
    showModalExperience: false,
    MyExperience: [],

    editExperience: {experience: {}},
    submitExpCounter: 0,
    loading: true,
    loadingExp: true,
  }

  fetchProfile = async () => {
    this.setState({ loading: true });
    this.props.changeMe();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      )

      let myProfile = await response.json()
      console.log(myProfile)

      if (response.ok) {
        this.fetchExperience(myProfile._id);
        this.setState({ myProfile, loading: false });
      } else {
        this.setState({ loading: false });
        <Alert variant="danger">Something went wrong</Alert>;
      }
    } catch (error) {
      console.log(error)
    }
  }
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
      )
      let MyExperience = await response.json()
      console.log("here experience", MyExperience)

      if (response.ok) {
        this.setState({ MyExperience, loadingExp: false });
      } else {
        this.setState({ loadingExp: false });
        <Alert variant="danger">Something went wrong</Alert>;
      }
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount = () => {
    this.fetchProfile()
  }

  componentDidUpdate = (previousProps, previousState) => {
    if (previousState.submitCounter !== this.state.submitCounter) {
      this.fetchProfile()
    }

    if (previousState.submitExpCounter !== this.state.submitExpCounter) {
      this.fetchProfile();
    }
  };


  render() {
    return (
      <>
        {this.state.show && (
          <ModalForm
            show={this.state.show}
            hide={() =>
              this.setState({
                show: false,
              })
            }
            myProfile={this.state.myProfile}
            submitCounter={() =>
              this.setState({submitCounter: this.state.submitCounter + 1})
            }
          />
        )}

        <Col md={9}>
          {this.state.loading ? (
            <Spinner
              animation="border"
              variant="success"
              style={{ marginLeft: "45%" }}
            />
          ) : (
            <BoxInfo
              me={this.props.me}
              myProfile={this.state.myProfile}
              onClicked={() => {
                this.setState({ show: true });
              }}
            />
          )}
          {this.props.me && (
            <>
              <ProfileStrength exp={this.state.MyExperience} />

              <Dashboard />

              <Activity myProfile={this.state.myProfile} />

              {this.state.showModalExperience && (
                <ModalExperience
                  id={this.state.myProfile._id}
                  showModalExperience={this.state.showModalExperience}
                  hide={() =>
                    this.setState({
                      showModalExperience: false,
                      editExperience: {experience: {}},
                    })
                  }
                 submitExpCounter={() =>
                    this.setState({
                      submitExpCounter: this.state.submitExpCounter + 1,
                    })
                  }
                  editExp={this.state.editExperience}
                />
              )}
       
       {this.state.loadingExp ? (
                <Spinner
                  animation="border"
                  variant="success"
                  style={{ marginLeft: "45%" }}
                />
              ) : 
              
             (<ELC
                me={this.props.me}
                onClicked={() => {
                  this.setState({showModalExperience: true})
                }}
                MyExperience={this.state.MyExperience}
                editExp={(experience) =>
                  this.setState({
                    editExperience: {
                      experience: experience,
                    },
                  })
                }
              />)}

              <SkillsAndEndorsement me={this.props.me} />
              <Interests />
            </>
          )}
        </Col>
      </>
    )
  }
}
export default Profile
