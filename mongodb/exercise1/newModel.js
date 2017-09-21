//Skapa ett schema för en collection med filmer. Se till att åtminstone en egenskap
//är obligatoriska (required), samt att någon numerär=numerisk egenskap (year, rating) har
//ett min- och/eller maxvärde.

//Gör en model av ditt schema och lägg all kod som rör din model i en fil (movieModel.js)

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//unique = "true" is: If specified as True, the recurring record is only one;
//if it is specified as False, all eligible records are filtered out.

var movieSchema = new Schema({
    title: {
      type: String,
      required: 'Movies must have a title',
      unique: true
    },
    year: {
      type: Number
    },
    ratings: [{type: Number}],
    actors:  [{ type: Schema.Types.ObjectId, ref: 'Actor'}]
});
var actorSchema = new Schema({
      type: String,
      movies: [{ type: Schema.Types.ObjectId, ref: 'Movie'}]
});

// movieSchema.methods.fullMovie = function () {
//     let ratingSumma = 0;
//     this.ratings.forEach(function(rating){
//          ratingSumma += rating;
//     })
//     return this.title + "" + this.year;
//     console.log(this.title + "" + this.year);
//
// }
//Varje document som vi skapar från vårt schema har redan sina inbyggda methods,
//så vi lägger till en ny - det måste göras innan vi skapar en model -
module.exports = mongoose.model('Movie', movieSchema)
module.exports = mongoose.model('Actor', actorSchema)
//Schemat använder vi sedan för att skapa en modell som ger oss ett objekt att hantera,
//och som genererar en instans av modellen, vilket blir ett document.
