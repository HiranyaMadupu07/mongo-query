db.employees.insertOne({
    name: "Ayan Ryan",
    email: "ayan@gmail.com",
    department: "HR",
    salary: 3056,
    location: ["FL", "OH", "AZ", "TX"],
    date: Date(),
  });
  
  db.employees.insertOne({
    name: "Amy Sam",
    email: "amy@gmail.com",
    department: "HR",
    salary: 2000,
    location: ["FL"],
    date: Date(),
  });
  
  db.employees.insertOne({
    name: "Jason George",
    email: "jason@gmail.com",
    address: { city: "Jacksonville", state: "FL" },
    department: "HR",
    salary: 1000,
    location: ["FL", "TX"],
    date: Date(),
  });