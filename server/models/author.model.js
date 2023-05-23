const mongoose = require('mongoose');
// const {isName} = require("validators");

const AuthorSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "Name must be at least 2 characters long"],
        minlength: [2, "Name must be at least 2 characters long"],
        maxlength: [55, "Name must be less than 55 characters long"],
        unique: [true, "Name must be unique"]

    }
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);
