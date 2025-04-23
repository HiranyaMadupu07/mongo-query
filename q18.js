db.employees.insertMany([
    {
      email: "test1@gmail.com",
      department: "test",
    },
    {
      email: "test2@gmail.com",
      department: "test",
    },
    {
      email: "test3@gmail.com",
      department: "test",
    },
  ]);
  
  db.employees.deleteOne(
      {department:"test"}
  );
  
  db.employees.deleteMany(
      {department:"test"}
  );