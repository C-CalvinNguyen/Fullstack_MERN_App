import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Navigate, useNavigate } from 'react-router'

export default function EmployeeUpdate() {
    const {id} = useParams()
    let eId = (""+id)
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        let updated_user = {
            firstName: fname,
            lastName: lname,
            emailId: email
        }
            updateEmployeeById(updated_user, parseInt(eId))
    }
    
    const updateEmployeeById = (updated_user, eId) => {
        console.log(eId)
        console.log(updated_user)
        axios.put(`http://localhost:8080/api/v1/employees/${eId}`, {firstName: fname, lastName: lname, emailId: email})
        .then(res => {
            console.log(res);
            navigate(`/view-employee/${eId}`)
        })
        .catch(err => {
            console.log(err)
            alert(err.response.data.message)
        })
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type='text' value={fname} onChange={e => setFName(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Last Name:
                    <input type='text' value={lname} onChange={e => setLName(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <br/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}
