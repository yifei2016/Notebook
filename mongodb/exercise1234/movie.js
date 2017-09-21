//Skapa ett schema för en collection med filmer. Se till att åtminstone en egenskap
//är obligatoriska (required), samt att någon numerär egenskap (year, rating)
//har ett min- och/eller maxvärde.


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: {
    type: String,
    required: 'movie must have a tilte'
  },
  year: {
    type: Number,
    min: [1990, '1990 is the earliest year'],
    max: [2017, '2017 is the oldest year']
  },
  ratings: [{
    type: Number,
    min: [1, '1 is the lowest rating'],
    max: [5, '5 is the highest rating']
  }
]
})

module.exports = mongoose.model('Movie', movieSchema)
//to import module use require, custom module(module exports) use path,
//built in(node core module) , use module name

//npm install: third party module)module, use module name
