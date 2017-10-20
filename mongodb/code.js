var query = {};
if(req.query.gearbox) query.gearbox = req.query.gearbox;
if(req.query.fuel) query.fuel = req.query.fuel;
//query.requiredDriversLicense come from schema prop
if(req.query.requiredDriversLicense){
 query.requiredDriversLicense = req.query.requiredDriversLicense
}
if(req.query.dailyFee){
 query.dailyFee = {$lte: req.query.dailyFee}
}

Vehicles.find(query, (err, vehicle) => {
  if (err)
  res.send(err);
  res.json(vehicle);
})
}

  is equal to:
  // ['gearbox','fuel','requiredDriversLicense','dailyFee'].forEach(key=>{
  //   var value = req.query[key]
  //   if(value) {
  //     if(key === 'dailyFee')
  //     query.dailyFee = {$lte: value}
  //     else
  //     query[key] = value;
  //   }
  // })
