//use db-kia
//db.createCollection("cars")
db.cars.insertOne({model:"m1"})
db.cars.insertMany([
    {
        model:"m2"
    },
    {
        model:"m3"
    }
])
db.cars.updateMany({},{$set:{price:20000}})

db.cars.updateOne(
    {model:"m2"},
    {$inc :{price : 5000}}
)

db.cars.updateMany({},{$set:{date:Date()}})

db.cars.updateOne(
    {model : "m1"},
    {$set :{variant :["v1","v2","v2"]}}
)


db.employees.updateOne(
    { email: "dan@gmail.com" },
    {
      $set: {
        name: "Danial",
        email: "dan@gmail.com",
        department: "HR",
        salary: 5000,
        location: ["FL", "LA"],
        date: Date(),
      },
    },
)
    db.cars.updateMany({},{$set:{variant:["v1"]}});
    db.cars.updateMany(
        { model:'m3' },
        { $pull: { variant: "v2" } }
      );
      db.cars.find(
        { price: { $lt: 25000 } }
      
);
    db.cars.findOne({points:5})
    db.cars.deleteOne({points:5})
    db.cars.find({model:"m2"})
    db.cars.insertOne({model:"m5"})
    db.cars.insertOne({model:"m4"})
    db.cars.insertOne({model:"m1"})
    db.cars.find().skip(2)
    db.cars.find().limit(1)