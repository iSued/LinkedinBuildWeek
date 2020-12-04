import React from "react";
import {
  Navbar,
  Container,
  Form,
  Nav,
  FormControl,
  Button,
  InputGroup,
  Alert,
  Dropdown,
  Row,
} from "react-bootstrap";

import HomeIcon from "@material-ui/icons/Home";
import { HiSearch } from "react-icons/hi";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import "../NavBar.css";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  state = { myProfile: {} };
  fetchProfile = async () => {
    this.setState({ loading: true });

    const url = "https://striveschool-api.herokuapp.com/api/profile/me";

    try {
      let response = await fetch(url, {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      });

      let myProfile = await response.json();
      console.log("navProfile", myProfile);

      if (response.ok) {
        this.setState({ myProfile, loading: false });
      } else {
        this.setState({ loading: false });
        <Alert variant="danger">Something went wrong</Alert>;
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = () => this.fetchProfile();

  render() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <p>
        {children}
        <RiArrowDownSFill
          className="m-0 p-0"
          style={{ fontSize: "17px" }}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        />
        Me
      </p>
    ));
    console.log("heelooooo");

    return (
      <>
        <Navbar
          variant="light"
          style={{ backgroundColor: "#fff" }}
          className="navbar p-0"
          expand="lg"
        >
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  className="nav_logo"
                >
                  <title>LinkedIn</title>

                  <g>
                    <path
                      d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline>
                <InputGroup style={{ width: "240px" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{ backgroundColor: "#EEF3F8", border: "none" }}
                    >
                      <HiSearch />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    style={{ backgroundColor: "#EEF3F8", border: "none" }}
                    type="text"
                    placeholder="Search"
                  />
                </InputGroup>
              </Form>

              <Nav className="ml-auto">
                <Link to="/">
                  <div className="nav-link">
                    <HomeIcon />
                    <p>Home</p>
                  </div>
                </Link>
                <Nav.Link href="#" className="nav-link">
                  <PeopleAltIcon />

                  <p>My Network</p>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  <WorkIcon />
                  <p>Jobs</p>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  <SmsIcon />
                  <p>Messaging</p>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  <NotificationsIcon />
                  <p>Notifications</p>
                </Nav.Link>
                <Link to="/profile/me" className="nav-link">
                  {this.state.myProfile.length !== 0 && (
                    <img
                      src={this.state.myProfile.image}
                      className="profile-img"
                    />
                  )}

                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-custom-components"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu id="meMenu" style={{ minWidth: "300px" }}>
                      {this.state.myProfile ? (
                        <>
                          <Dropdown.Item
                            eventKey="1"
                            style={{ padding: "4px 12px" }}
                          >
                            <div className="d-flex">
                              <img
                                src={this.state.myProfile.image}
                                alt=""
                                width="56px"
                              />

                              <div className="pl-1 d-flex flex-column justify-content-center">
                                <h6>
                                  {this.state.myProfile.name +
                                    " " +
                                    this.state.myProfile.surname}
                                </h6>
                                <h6>{this.state.myProfile.title}</h6>
                              </div>
                            </div>
                          </Dropdown.Item>
                        </>
                      ) : (
                        <>
                          <Dropdown.Item eventKey="1">Image</Dropdown.Item>
                          <Dropdown.Item eventKey="2">Full Name</Dropdown.Item>
                          <Dropdown.Item eventKey="3">Job Title</Dropdown.Item>
                        </>
                      )}
                      <Dropdown.Item
                        eventKey="4"
                        style={{ backgroundColor: "transparent" }}
                      >
                        <Button
                          id="profileButton"
                          onClick={() => this.props.history.push("/profile/me")}
                        >
                          View Profile
                        </Button>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Account</Dropdown.Header>
                      <Dropdown.Item eventKey="5">
                        Access My Premium
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="6">
                        Settings & Privacy
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="7">Help</Dropdown.Item>
                      <Dropdown.Item eventKey="8">Language</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Manage</Dropdown.Header>
                      <Dropdown.Item eventKey="9">
                        Posts & Activity
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="10">
                        Job Posting Account
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="11">Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Link>
              </Nav>
              <Nav className="second-nav">
                <Nav.Link href="#" className="nav-link">
                  <CgMenuGridR />
                  <p>
                    Work{" "}
                    <RiArrowDownSFill
                      className="m-0 p-0"
                      style={{ fontSize: "17px" }}
                    />
                  </p>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="nav-link"
                  style={{ maxWidth: "70px", textDecoration: "underline" }}
                >
                  <p style={{ color: "#5D3B09" }}>Reactivate premium</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default withRouter(NavBar);
