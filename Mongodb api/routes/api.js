const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// get a list of students from the database
router.get('/students',(req,res,)=>{
    Student.find({}).then((students)=>{
        res.send(students);
    }).catch();
});

// add a new student to database
router.post('/students',(req,res,)=>{
    Student.create(req.body).then((student)=>{
        res.send(student);
    }).catch();
});

// update a student in the database
router.put('/students/:id',(req,res,)=>{
    Student.findOneAndUpdate({_id: req.params.id},req.body).then((student)=>{
        Student.findOne({_id: req.params.id}).then((student)=>{
            res.send("id updated...");
        });
    });
});

// delete a student in the database
router.delete('/students/:id',(req,res,)=>{
    Student.findOneAndDelete({_id: req.params.id}).then((student)=>{
        res.send("id deleted...");
    });
});
module.exports = router;