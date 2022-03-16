const express = require('express')
const mongoose = require('mongoose')
const employeeRouter = require('./routes/employeeRoutes')


let app = express()
app.use(express.json())

//mongodb+srv://all_user:password321@comp3123.bxzhg.mongodb.net/101203877_assignment2?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://all_user:password321@comp3123.bxzhg.mongodb.net/101203877_assignment2?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

app.use(employeeRouter)

app.listen(8080, () => {
    console.log("Server running at http://localhost:8080")
})