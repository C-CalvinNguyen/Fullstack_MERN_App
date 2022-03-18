import React, { Component } from 'react'
import axios from 'axios'
import EmployeeList from './List/EmployeeList'
import { Link } from 'react-router-dom'

export default class Employee extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             employees : []
        }
    }

    componentDidMount = () => {
        this.getEmployeeData()
    }

    getEmployeeData = () => {
        axios.get('http://localhost:8080/api/v1/employees')
        .then(res => {
            console.log(res.data)
            this.setState({...this.state, employees: res.data})
            console.log(this.state.employees)
        })
    }

    render() {
        return (
            <div>
                {
                
                    this.state.employees.map(employee => (
                        <>
                        <EmployeeList key={employee.id} employee = {employee} />
                        </>
                    ))

                }
                <br/>
                <button><Link to="/add-employee/_add">Add Employee</Link></button>
            </div>
        )
    }
}
