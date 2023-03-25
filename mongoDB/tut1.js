// insertng data in mongo db
use harryKart
db.items.insertOne({name:"samsung A30s", price: 15000, rating:4.5,qty:233,sold:98})
db.items.insertMany([{name:"samsung A30s", price: 15000, rating:4.5,qty:233,sold:98},{name:"moto A30s", price: 45000, rating:3.5,qty:2933,sold:198},{name:"realme A30s", price: 145000, rating:1.5,qty:33,sold:18}])
