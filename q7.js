db.employees.insertMany([
    {
      name: "Test2",
      email: "test2@gmail.com",
      nationality: "ABC",
    },
    {
      name: "Test3",
      email: "test3@gmail.com",
      nationality: "ABC",
    },
  ]);
  
  db.emplyees.find({nationality:"ABC"})
  
  db.emplyees.findOne({nationality:"ABC"})
  
  db.employees.deleteMany({nationality:"ABC"}) ;