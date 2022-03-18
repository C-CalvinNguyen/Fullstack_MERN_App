const express = require('express')
const mongoose = require('mongoose')
const employeeRouter = require('./routes/employeeRoutes')


let app = express()
app.use(express.json())


// INSERT MONGODB CONNECTION URI IN STRING
//mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
let db = ''

mongoose.connect(db,
{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

app.use(employeeRouter)

app.listen(8080, () => {
    console.log("Server running at http://localhost:8080")
})