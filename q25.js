

db.employees.find({email:"cathy@gmail.com"})
db.employees.find({email:"cathy@gmail.com"}).explain("executionStats")

db.employees.createIndex({"email":1})

db.employees.getIndexes()

db.employees.find({email:"cathy@gmail.com"}).explain("executionStats")

db.employees.dropIndex("email_1")

db.employees.dropIndexes()