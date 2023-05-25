import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';
import { Card } from 'react-bootstrap'

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            firstName: '',
             lastName: '',
              emailId: ''
        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee ={firstName: this.state.firstName,lastName: this.state.lastName, emailId:this.state.emailId}

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        });
    }

    cancel(){
        this.props.history.push('/employees');
    }

  render() {
    return (
        <Card>

        
      <div>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className='text-center'>Add Employees</h3>
                    <div className='card-body'>
                        <form>
                            <div className ="form-group">
                                <label>First Name:</label>
                                <input placeholder='First Name' name='firstName' className='form-center'
                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>
                            <div className ="form-group">
                                <label>Last Name:</label>
                                <input placeholder='Last Name' name='lastName' className='form-center'
                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <div className ="form-group">
                                <label>Email Id:</label>
                                <input placeholder='Email Address' name='emailId' className='form-center'
                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className='form-check-input'/>
                                <label className='form-check-label'>Check Me</label>
                                

                            </div>
                            <div className="mx-auto">
                            <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </Card>
    )
  }
}

export default CreateEmployeeComponent