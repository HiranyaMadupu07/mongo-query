db.employees.aggregate([
    {},//pipeline1
    {},//pipeline2
    {},//pipeline3
])


db.employees.aggregate([
    {$match:{department:{$eq:"HR"}}},  
])


db.employees.aggregate([
    {$project:{name:1,department:1}},  
]);


db.employees.aggregate([
    {$match:{department:{$eq:"HR"}}},  
    {$project:{name:1,department:1}},  
]);

db.employees.aggregate([
    {$match:{department:{$eq:"HR"}}}, 
    {$addFields:{Bonus:"NA"}} ,
    {$project:{name:1,department:1,Bonus:1}}, 
    {$sort:{name:1}},
    {$skip:1},
    {$limit:1} 
]);

db.employees.aggregate([
    {$match:{department:{$eq:"HR"}}},
    //{$addFields:{Bonus:"NA"}} ,  
    {$project:{name:1,department:1,Bonus:1}}, 
    {$sort:{name:1}},
    {$skip:1},
    {$limit:1} 
]);

db.employees.aggregate([
    {$match:{department:{$in:["HR","IT"]}}},
    {$group:{
        _id:"$department",
        total:{$sum:"$salary"}
    }}
]);

db.employees.aggregate([
    {$match:{name:{$exists:true}}},
    {$project:{_id:0,name:1,location:1}},
    {$unwind:"$location"}//unwind---print each attribute in seperate line..instead of printing as an array
]);

db.employees.aggregate([
    {$match:{department:{$in:["HR","IT"]}}},
    {$project:{department:1,
        salary:1,
        salary: {$convert: {input: "$salary", to: "int"}}}},
    {$group:{
        _id:"$department",
        total:{$sum:"$salary"}
    }}
]);