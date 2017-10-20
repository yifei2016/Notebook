# start mongodb, server run on daemon, so do not need to open a new tag
```
$ brew services start mongodb
```
# stop mongodb
```
$ brew services stop mongodb
```
# check process
```
$ ps aux | grep mongo
```
run `kill <processid>` to kill process

# connect to mongodb server on client
```
$ mongo
```
run `exit` to disconnect mongodb

import json file to mongoDB, stand on the same folder with fordon.json
```
$ mongoimport --jsonArray --db olsson --collection vehicles --file fordon.json
```

to count how many matched 
```
$ db.vehicles.find({gearbox:'manuell', requiredDriversLicense: 'B'}).count()
```
