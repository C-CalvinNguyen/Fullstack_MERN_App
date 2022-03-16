import React, { Component } from 'react'
import axios from 'axios'

export default class EmployeeAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: '',
             fname: '',
             lname: '',
             email: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let new_user = {
            id: parseInt(this.state.id),
            firstName: this.state.fname,
            lastName: this.state.lname,
            emailId: this.state.email
        }
        axios.post(`http://localhost:8080/api/v1/employees`, {id: parseInt(this.state.id), 
            firstName: this.state.fname, lastName: this.state.lname, emailId: this.state.email})
        .then(res => {
            console.log(res);
            window.location = "http://localhost:3000/"
            
        })
        .catch(err => {
            console.log(err.response.data.message)
            if (err.response.data.message == null) {
                alert('Please enter a unique Employee ID Number')
            } else {
                alert(err.response.data.message)
            }
        })
        console.log(new_user)
    }
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Employee ID:
                    <input type='text' name='id' value={this.state.id} onChange={e => this.handleChange(e)}/>
                </label>
                <br/>
                <label>
                    First Name:
                    <input type='text' name='fname' value={this.state.fname} onChange={e => this.handleChange(e)}/>
                </label>
                <br/>
                <label>
                    Last Name:
                    <input type='text' name='lname' value={this.state.lname} onChange={e => this.handleChange(e)}/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type='text' name='email' value={this.state.email} onChange={e => this.handleChange(e)}/>
                </label>
                <br/>
                <input type='submit' value='Submit'/>
            </form>
            </div>
        )
    }
}
