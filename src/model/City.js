const mongoose = require('mongoose')


const citySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    country: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    latitude: {
        type: String, 
        required: true
    },
    longitude: {
        type: String, 
        required: true
    },
    createdAt: Date
});

module.exports = mongoose.model('City', citySchema)