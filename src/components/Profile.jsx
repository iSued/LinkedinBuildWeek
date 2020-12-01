import React from "react"
import {Row, Col, Container, Alert} from "react-bootstrap"
import BoxInfo from "./BoxInfo"
import ProfileStrength from "./ProfileStrength"
import Dashboard from "./Dashboard"
import ModalForm from "./ModalForm"
import Activity from "./Activity"
import ELC from "./ELC"
import SkillsAndEndorsement from "./SkillsAndEndorsement"
import Interests from "./Interests"
import ModalExperience from "./ModalExperience"

class Profile extends React.Component {
  state = {
    myProfile: {},
    show: false,
    submitCounter: 0,
    showModalExperience: false,
    MyExperience: [],
    experience_id: "",
    editExperience: {experience: {}, editCounter: 0},
  }

  fetchProfile = async () => {
    this.props.changeMe()
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
        this.fetchExperience(myProfile._id)
        this.setState({myProfile})
      } else {
        ;<Alert variant="danger">Something went wrong</Alert>
      }
    } catch (error) {
      console.log(error)
    }
  }
  fetchExperience = async (id) => {
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
        this.setState({MyExperience})
      } else {
        ;<Alert variant="danger">Something went wrong</Alert>
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
  }

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
          <BoxInfo
            me={this.props.me}
            myProfile={this.state.myProfile}
            onClicked={() => {
              this.setState({show: true})
            }}
          />
          {this.props.me && (
            <>
              <ProfileStrength />

              <Dashboard />

              <Activity myProfile={this.state.myProfile} />

              {this.state.showModalExperience && (
                <ModalExperience
                  id={this.state.myProfile._id}
                  showModalExperience={this.state.showModalExperience}
                  hide={() =>
                    this.setState({
                      showModalExperience: false,
                      editExperience: {experience: {}, editCounter: 0},
                    })
                  }
                  exp_id={this.state.experience_id}
                  editExp={this.state.editExperience}
                  clearEdit={() =>
                    this.setState({
                      editExperience: {experience: {}, editCounter: 0},
                    })
                  }
                />
              )}
              <ELC
                me={this.props.me}
                onClicked={() => {
                  this.setState({showModalExperience: true})
                }}
                MyExperience={this.state.MyExperience}
                id={(exp_id) => this.setState({experience_id: exp_id})}
                editExp={(experience) =>
                  this.setState({
                    editExperience: {
                      experience: experience,
                      editCounter: this.state.editExperience.editCounter + 1,
                    },
                  })
                }
              />

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
