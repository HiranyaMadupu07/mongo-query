db.students.insertOne({
    studentName:"John"
});

db.subjects.insertOne({
    subjectName:"Maths"
});

db.marks.insertOne({
    studentId:ObjectId('6808a74dd21aa8b820b5f8a5'),
    subjectId:ObjectId('6808acbfd21aa8b820b5f8a8'),
    score:95
});
db.marks.find({},{_id:0,studentId:1,subjectId:1,score:1});

db.marks.find({},{_id:0,score:1});

db.marks.aggregate([
    {$lookup:{
        from:"subjects",
        localField:"subjectId",
        foreignField:"_id",
        as:"subjects",
    },
},
{
    $lookup:{
        from:"students",
        localField:"studentId",
        foreignField:"_id",
        as:"students",
    }
},
{$unwind:"$students"},
{$project:{
    _id:0,
    "students.studentName":1,
    "subjects.subjectName":1,
    score:1,
}}
]);


db.createView("marksView","marks",[
    {$lookup:{
        from:"subjects",
        localField:"subjectId",
        foreignField:"_id",
        as:"subjects",
    },
},
{
    $lookup:{
        from:"students",
        localField:"studentId",
        foreignField:"_id",
        as:"students",
    }
},
{$unwind:"$students"},
{$project:{
    // _id:0,
    "students.studentName":1,
    "subjects.subjectName":1,
    score:1,
}}
]);


db.marksView.find()
db.marksView.drop()

db.createView("HREmployees","employees",[
    {$match: {department:"HR"}}
]);
db.HREmployees.find()