var mongoose = require('mongoose'),
    Movie = require('./exercise7/newModel.js');
    Actor = require('./exercise7/actorModel');
//När vi har skapat denna instans av vår modell kan vi bland annat spara den
//i databasen. Då måste vi också lite tidigare ha skrivit kod som skapar en
//uppkoppling till databasen som nedan

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movieDB',{
  useMongoClient: true
});
//film is document

//vi sedan kan spara info om actor enligt koden nedan.

var actor = new Actor({
  name.first: 'Johannes',
  name.last: 'Anyuru'
});
actor.save(function (err){
  if(err)
    console.log(err);
  var film  = new Movie({
      title: 'De kommer att drunkna i sina mödrars tårar',
      year: 1972,
      ratings: [1,4,9,5],
      actor: actor._id
    });
    film.save(function(err,result){
      if(err)
        console.log(err)
      console.log('Filmen ' + film.title + ' saved.')
    });
});

//存入collection的data首先by mongoose, connect到指定MongoDB server
