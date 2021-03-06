/**
 * @module UserModel
 * @author John L. Carveth
 */

const mongoose = require('mongoose')
const isEmail = require('../utils/validator').isEmail

/**
 * @constructor User
 */
const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: [isEmail, 'Please provide a valid email.']
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    verified: { // For user email verification
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('users', User)