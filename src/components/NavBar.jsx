import React, {Component} from "react"
import {
  Navbar,
  Container,
  Form,
  Nav,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap"

import HomeIcon from "@material-ui/icons/Home"
import {HiSearch} from "react-icons/hi"
import WorkIcon from "@material-ui/icons/Work"
import SmsIcon from "@material-ui/icons/Sms"
import NotificationsIcon from "@material-ui/icons/Notifications"
import {RiArrowDownSFill} from "react-icons/ri"
import {CgMenuGridR} from "react-icons/cg"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import "../NavBar.css"

export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          variant="light"
          style={{backgroundColor: "#fff"}}
          className="navbar p-0"
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                class="nav_logo"
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline>
                <InputGroup style={{width: "240px"}}>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{backgroundColor: "#EEF3F8", border: "none"}}
                    >
                      <HiSearch />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    style={{backgroundColor: "#EEF3F8", border: "none"}}
                    type="text"
                    placeholder="Search"
                  />
                </InputGroup>
              </Form>

              <Nav className="ml-auto">
                <Nav.Link href="#" className="nav-link">
                  <HomeIcon />
                  <p>Home</p>
                </Nav.Link>
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
                <Nav.Link href="#" className="nav-link">
                  <img
                    src="https://pbs.twimg.com/media/Ea3jz_1WoAANHhD.png"
                    className="profile-img"
                  />
                  <p>
                    Me{" "}
                    <RiArrowDownSFill
                      className="m-0 p-0"
                      style={{fontSize: "17px"}}
                    />
                  </p>
                </Nav.Link>
              </Nav>
              <Nav className="second-nav">
                <Nav.Link href="#" className="nav-link">
                  <CgMenuGridR />
                  <p>
                    Work{" "}
                    <RiArrowDownSFill
                      className="m-0 p-0"
                      style={{fontSize: "17px"}}
                    />
                  </p>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="nav-link"
                  style={{maxWidth: "70px", textDecoration: "underline"}}
                >
                  <p style={{color: "#5D3B09"}}>Reactivate premium</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}