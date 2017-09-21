//Skapa därefter en fil (app.js) som använder sig av din model för att skriva data
//till din databas. Denna fil ska koppla upp sig mot databasen, skriva in data och meddela
//när den gjort det (räcker med console.log).
//Du kan nu också nöja dig med att skriva hårdkodade värden som skrivs in i databasen.


var mongoose = require('mongoose'),
    Movie = require('./movie.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie',{
      useMongoClient: true
    });

    var film  = new Movie({
      title: 'De kommer att drunkna i sina mödrars tårar',
      year: 1992,
      ratings: [1,4,2,5],
      name: 2,
      unique: true
    });
    film.save(function(err,result){
      if(err)
      console.log(err)
      console.log('Filmen ' + film.title + ' saved.')
    });
//fylla på med en egenskap som inte finns i den model du skapat.
//wont cause error
