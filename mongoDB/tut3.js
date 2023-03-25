// show dbs
// use harryKart
// show collections


db.items.find({price:15000})

//delete a entry
db.items.deleteOne({price:15000})   //-->delete the first matching entry in case of multi document match
db.items.deleteMany({price:15000}) 