db.employees.updateMany(
    { }, 
    { $rename: { points: "score" } }
);

db.employees.updateMany(
    { }, 
    { $unset: { score:"" } }
);