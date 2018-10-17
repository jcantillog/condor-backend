var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type: Number},
    name: {type: String},
    imageUrl: {type: String},
    imageText: {type: String},
    payBeforeTakingCourse: {type: Boolean},
    numberOfReviews: {type: Number},
    numberOfContentPages: {type: Number},
    providerId: {type: Number},
    completions: {type: Number},
    totalEarned: {type: Number},
    dateAdded: {type: Date},
    maximumCredits: {type: Number},
    price: {type: Number},
    description:{type: String},
    popularity: {type: Number},
    rating: {type: Number}
});

module.exports = mongoose.model('Course', schema);