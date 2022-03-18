import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

/*
let getEmployeeById = (eId) => {
    axios.get(`http://localhost:8080/api/v1/employees/${eId}`)
    .then(response => {
        setState(response.data)
    })

}
*/

export default function EmployeeView() {
    const {id} = useParams()
    const [state, setState] = useState([])
    let eId = (""+id)
    
    useEffect(() => {
        getEmployeeById(eId)
    }, [])

    const getEmployeeById = (eId) => {
        axios.get(`http://localhost:8080/api/v1/employees/${eId}`)
        .then((res) => {
            const data = res.data
            setState(data)
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div>
            {
                state.map(employee => (
                    <>
                        <p>Hello, {employee.firstName}, {employee.lastName}</p>
                        <p>Employee ID: {employee.id}</p>
                        <p>Email: {employee.emailId}</p>
                    </>
                ))
            }
        </div>
    )
}
