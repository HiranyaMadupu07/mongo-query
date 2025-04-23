db.employees.find({}, { _id: 0, name: 1 });

db.employees.find({}, { _id: 1, name: 1 });

db.employees.find({}, { name: 1, email: 1 });

db.employees.find({}, { _id: 0, name: 1, email: 1 });

db.employees.find({}, { _id: 0, name: 1, department: 1 });

db.employees.find(
  { email: "amy@gmail.com" },
  { _id: 0, name: 1, department: 1 }
);

db.employees.find(
  { email: "amy@gmail.com" },
  { _id: false, name: true, department: true }
);

db.employees.find({ "address.city": "Jacksonville" });

db.employees.find({location:"FL"})