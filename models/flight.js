const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {type: String, enum: ['ATL', 'AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: Date,
})

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Delta', 'JetBlue', 'SouthWest']},
    airport: {type: String, enum: ['ATL', 'AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: {type: Number, min: 10, max: 9999},
    departs: Date,
    destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);