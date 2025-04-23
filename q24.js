db.users.insertMany([
    {
      name: "name1",
    },
    {
      name: "name2",
    },
  ]);
  
  db.posts.insertMany([
    {
      title: "title 1",
      desc: "desc 1",
      userId: ObjectId("68086dc7876e4cdd5ddb0101"),
    },
    {
      title: "title 2",
      desc: "desc 2",
      userId: ObjectId("68086dc7876e4cdd5ddb0101"),
    },
    {
      title: "title 3",
      desc: "desc 3",
      userId: ObjectId("68086dc7876e4cdd5ddb0102"),
    },
  ]);
  
  db.userPosts.insertMany([
    {
      title: "title 1",
      desc: "desc 1",
      name: "name 1",
    },
    {
      title: "title 2",
      desc: "desc 2",
      name: "name 1",
    },
    {
      title: "title 3",
      desc: "desc 3",
      name: "name 2",
    },
  ]);
  
  //write a query to display name and title
  // from userPosts
  
  db.userPosts.find(
    {},
    {
      _id: 0,
      name: 1,
      title: 1,
    }
  );
  
  db.userPosts.updateMany(
    { name: "name 1" },
    {
      $set: { name: "n1" },
    }
  );
  
  db.createCollection("cust", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email"],
      },
    },
  });
  
  db.cust.insertOne({
      name:"customer 1",
      email:"customer1@email.com",
      city:"Hyd"
  })