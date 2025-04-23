db.employees.find({
    $or: [
      { salary: { $gt: 2000 } }, 
      { department: { $eq: "HR" } }
  ],
  });
  
  db.employees.find({
      $and: [
        { salary: { $gt: 2000 } }, 
        { department: { $eq: "HR" } }
    ],
    });
  
  
    db.employees.find({
      $nor: [
        { salary: { $gt: 2000 } }, 
        { department: { $eq: "HR" } }
    ],
    });