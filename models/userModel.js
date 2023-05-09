const mongoose = require("mongoose")
const Schema  = mongoose.Schema

const UserSchema = Schema({
    userName: {
        type: String,
        required: [true, "You need to enter a user name"]
    },
    email: {
        type: String,
        required: [true, "You need to enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "You need to enter a password"]
    }
})

module.exports = mongoose.model('User', UserSchema)