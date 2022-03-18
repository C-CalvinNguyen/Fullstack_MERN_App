let mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        unique: [true, "Please enter a unique ID (Number)"],
        required: 'Please enter a valid ID (Number)'
    },
    firstName: {
        type: String,
        required: 'Please enter your first name (String)',
    },
    lastName: {
        type: String,
        required: 'Please enter your last name (String)',
    },
    emailId: {
        type: String,
        required: 'Please enter an email address',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    }
}, {versionKey: false})

const Employee = mongoose.model('employee', EmployeeSchema, 'employee')
module.exports = Employee