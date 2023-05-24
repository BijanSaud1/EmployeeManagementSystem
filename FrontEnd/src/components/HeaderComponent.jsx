import React, { Component } from 'react'

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
                <nav className="navbar navbar-expad-md navbar-dark bg-dark">
                    <div>
                        <a href="https://javaguides.net" className = "navbar-brand" >Employee Mangement App</a>
                    </div>
                </nav>
            </header>
        </div>
      </div>
    )
  }
}
