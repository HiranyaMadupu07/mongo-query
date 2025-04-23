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