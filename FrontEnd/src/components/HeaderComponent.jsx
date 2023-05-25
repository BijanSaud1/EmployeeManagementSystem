import React, { Component } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'

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
                <Container>
                 
                  
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id = "basic-navbar-nav"/>
                  <Nav className="me-auto">
                    <Navbar.Brand href = "http://localhost:3000/">Employee Management App</Navbar.Brand>
                    <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
                    <Nav.Link href = "http://localhost:3000/employees">Employees</Nav.Link>
                  </Nav>
                  <Nav.Link href = "http://localhost:3000/">Login</Nav.Link>
                </Container>
              </Navbar>
            </header>
        </div>
      </div>
    )
  }
}
