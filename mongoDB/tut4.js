db.items.updateOne({name:"moto A30s"},{$set:{price: 2}})
db.items.updateMany({name:"moto A30s"},{$set:{price: 200,rating:2}})