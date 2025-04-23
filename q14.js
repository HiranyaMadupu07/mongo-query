
db.employees.updateOne(
    { email: "amy@gmail.com" },
    { $set: { department: "Admin" } }
  );
  
  db.employees.find();
  