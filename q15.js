db.employees.updateOne(
    { email: "dan@gmail.com" },
    { $set: { department: "HR" } },
    { upsert: true }
  );
  
  db.employees.updateOne(
    { email: "dan@gmail.com" },
    { $set: { salary: 2500, department: "Admin" } },
    { upsert: true }
  );
  
  db.employees.updateOne(
    { email: "dat@gmail.com" },
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
    { upsert: true }
  );