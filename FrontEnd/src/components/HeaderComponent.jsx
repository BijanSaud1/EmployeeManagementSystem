import React, { Component } from 'react'
import { Navbar, Stack, Nav, NavDropdown} from 'react-bootstrap'

export default class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
           
        }
    }


  render() {
    return (
      <div>
        <div>
            <header>
              <Navbar className = 'navbar navbar-expand-md bg-light' >
                <container>
                 
                  
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id = "basic-navbar-nav"/>
                  <Nav className="me-auto">
                    <Navbar.Brand href = "http://localhost:3000/">Employee Management App</Navbar.Brand>
                    <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
                    <Nav.Link href = "http://localhost:3000/employees">Employees</Nav.Link>
                  </Nav>
                  <NavDropdown title="Login" id="basic-nav-dropdowwn">
                  <NavDropdown.Item href ="#home">Sign In</NavDropdown.Item>
                  <NavDropdown.Item href ="#home">Sign Up</NavDropdown.Item>
                  
                 </NavDropdown>
                  
                </container>
                <div>
                
               
                
                 
                </div>
              </Navbar>
                
            </header>
        </div>
      </div>
    )
  }
}
