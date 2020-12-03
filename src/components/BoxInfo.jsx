import React from "react"
import {Button, Card} from "react-bootstrap"
import BoxInfoButton from "./BoxInfoButton"
import OpenToWork from "./OpenToWork"
import PencilEdit from "./PencilEdit"
import ModalProfilePicture from "./ModalProfilePicture"

class BoxInfo extends React.Component {
  state = {
    showPictureModal: false,
  }

  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src="https://coverfiles.alphacoders.com/372/37275.jpg"
          style={{objectFit: "cover"}}
          alt="placeholderr"
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div style={{marginTop: "-130px"}}>
              <img
                src={this.props.myProfile.image}
                alt="placeholder"
                height="160px"
                style={{
                  borderRadius: "50%",
                  border: "4px solid white",
                }}
                onClick={() => {
                  this.setState({showPictureModal: true})
                }}
              />
              {this.state.showPictureModal && (
                <ModalProfilePicture
                  showPictureModal={this.state.showPictureModal}
                  hidePictureModal={() =>
                    this.setState({showPictureModal: false})
                  }
                />
              )}
            </div>
            <div>
              <BoxInfoButton me={this.props.me} />
              <Button
                variant="outline-secondary"
                className="rounded-pill p-1 px-4"
              >
                More...
              </Button>
              <PencilEdit
                color="#666666"
                me={this.props.me}
                onClicked={this.props.onClicked}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div>
              <h3 className="text-dark" style={{fontWeight: "normal"}}>
                {this.props.myProfile.name} {this.props.myProfile.surname}
              </h3>
              <h5 className="text-secondary" style={{fontWeight: "normal"}}>
                {this.props.myProfile.title}
              </h5>
              <ul className="d-flex pl-0 ">
                <li style={{listStyle: "none"}}>{this.props.myProfile.area}</li>
                <li className="mx-4 text-primary" style={{fontWeight: "bold"}}>
                  72 connections
                </li>
                <li className="mx-3 text-primary" style={{fontWeight: "bold"}}>
                  Contact info
                </li>
              </ul>
            </div>
            <div className="ml-0 pl-0 mr-5 pr-5">
              <div className="d-flex align-items-center">
                <img
                  src="https://strive.school/favicon.ico"
                  height="40px"
                  className="mr-2"
                  alt="strive"
                />
                <a
                  href="https://www.linkedin.com/school/strive-school/"
                  style={{color: "#666666"}}
                >
                  Strive School
                </a>
              </div>
            </div>
          </div>
          {this.props.me && <OpenToWork me={this.props.me} />}
        </Card.Body>
      </Card>
    )
  }
}

export default BoxInfo
