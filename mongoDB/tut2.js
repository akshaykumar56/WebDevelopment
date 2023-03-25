// searching items
db.items.find({rating:3.5})
db.items.find({rating:{$gte:3.5}})
db.items.find({rating:{$gte:3.5}})

// and opertion
db.items.find({rating:{$gte:3.5},price:{$gt:4000}})
