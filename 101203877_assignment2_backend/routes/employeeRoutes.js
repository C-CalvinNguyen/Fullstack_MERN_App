const express = require('express')
const employeeModel = require('../models/employee')
const app = express()

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
   }
 );

    // All Employee resources are fetched.
    app.get('/api/v1/employees', async (req, res) => {
        const employee = await employeeModel.find({});
    
        try {
            res.status(200).json(employee)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    })
    
    // A new Employee resource is created.
    app.post('/api/v1/employees', async (req, res) => {
    console.log(req.body)
    const employee = new employeeModel(req.body)

    try {
        await employee.save()
        res.status(201).json(employee)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
    })

    // One Employee resource is fetched
    app.get('/api/v1/employees/:id', async (req, res) => {
        const employee = await employeeModel.find({id: {$eq:req.params.id}})

        try {
            res.status(200).json(employee)
        } catch (err) {
            res.status(500).json(err)
        }
    })

    // Employee resource is updated
    app.put('/api/v1/employees/:id', async (req, res) => {
        
        try {
            console.log(req.body)
            let employeeFind = await employeeModel.findOne({id: {$eq:req.params.id}})

            await employeeModel.findByIdAndUpdate(employeeFind._id.toString(), {
                "id": req.params.id,
                "firstName": req.body.firstName,
                'lastName': req.body.lastName,
                'emailId': req.body.emailId
            }, {runValidators: true})
            
            res.status(200).json()   
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    })

    // Employee resource is deleted
    app.delete('/api/v1/employees/:id', async (req, res) => {
        try {
            let employeeFind = await employeeModel.findOne({id: {$eq:req.params.id}})
            if (!employeeFind) res.status(400).send('No employee found')

            const employee = await employeeModel.findByIdAndDelete(employeeFind._id.toString())
            if (!employee) res.status(400).send('No employee found')

            res.status(204).json()
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    })

module.exports = app