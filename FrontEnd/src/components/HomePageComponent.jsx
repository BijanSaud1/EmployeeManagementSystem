import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class HomePageComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
        }
        
    }
  render() {
    return (
        <Card style={{width: '50rem', align:'center'}}>
            
                <Card.Body>
                    <Card.Title>Welcome to Employee Management System</Card.Title>
                    <Card.Text>
                        This is a Simple project to build CRUD operation for Employee Management System.
                        Spring-boot Maven project is used for the backend of the project and React to build the Frontend.
                        MySql Database is used to store data in the database 

                    </Card.Text>
                </Card.Body>
            
        </Card>
   
         

 
    )
  }
}