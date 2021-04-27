const mongoose = require('mongoose')

const reqString ={
    type: String,
    required: true,
}

const movieSchema = mongoose.Schema({
    moviename: reqString,
    movielink: reqString,
    movinpicture: reqString,
})

module.exports = mongoose.model('movie',movieSchema)