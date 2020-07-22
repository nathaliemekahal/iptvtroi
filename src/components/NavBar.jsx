import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  FormControl,
  Nav,
  Form,
  Button,
} from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar className="Navbar-class">
        <Navbar.Brand href="#home">
          <img
            src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/114899941_10224241639815004_3866051165616481125_n.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=teIIsES8EskAX_J0gp_&_nc_ht=scontent-cdt1-1.xx&oh=4627dd18e3c114068b551c8b43b5db12&oe=5F3E6712"
            width="90px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
