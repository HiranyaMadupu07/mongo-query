
db.employees.updateMany({}, { $push: { points: 5 } });

db.employees.updateMany({}, { $push: { points: 7 } });

db.employees.updateMany({}, { $push: { hobbies: "Movies" } });

db.employees.updateMany({}, { $addToSet: { hobbies: "Movies" } });

db.employees.updateMany({}, { $addToSet: { hobbies: "Music" } });

db.employees.updateMany(
  { email: "dan@gmail.com" },
  { $addToSet: { hobbies: "Sports" } }
);

db.employees.updateMany(
  { email: "dan@gmail.com" },
  { $pull: { hobbies: "Sports" } }
);

db.employees.updateMany(
  { },
  { $pull: { points: { $gte: 7 } } }
);
