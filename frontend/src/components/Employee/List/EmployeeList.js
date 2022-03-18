import React from 'react'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import EmployeeView from '../EmployeeDetails/EmployeeView'
import axios from 'axios'

export default function EmployeeList(props) {

    let handleDelete = (eId) => {
        axios.delete(`http://localhost:8080/api/v1/employees/${eId}`)
        .then(res => {
            console.log(res)
            window.location.reload(false)
        })
    }

    return (
        <div>
            <div>
                <p style={{display: "inline"}} key={props.employee.id}>{props.employee.id} - {props.employee.firstName}, {props.employee.lastName}</p>
                <p style={{display: "inline"}}>&ensp;</p>
                <button><Link to={`/view-employee/${props.employee.id}`}>Details</Link></button>
                <button><Link to={`/add-employee/${props.employee.id}`}>Update</Link></button>
                <button type='submit' onClick={() => handleDelete(props.employee.id)}>Delete</button>
            </div>
        </div>
    )
}
