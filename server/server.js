const express = require('express');
const bodyParser = require('body-parser');
// var { mongoose } = require('./db/mongoose');
// let { Student } = require('./models/student');


const app = express();


const http = require('http').createServer(app);
const port = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../dist'));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

//get all students on waitlist - test
// app.get('/waitlist', (req, res) => {
//     Student.find().then(waitlisters => {
//         res.status(200).send(waitlisters);
//     }, e => {
//         res.status(400).send(e)
//     });
// });

//post all student to waitlist - test
// app.post('/student', (req, res) => {
//     let student = new Student({
//         name: req.body.name,
//         phone: req.body.phone,
//         email: req.body.email,
//         experience: req.body.experience,
//         startDate: req.body.startDate,
//         age: req.body.age
//     });

//     student.save().then(doc => {
//         res.status(201).send(doc);
//     }, e => {
//         res.status(400).send(e);
//     });
// });


http.listen(port, () => {
    console.log(`started on port ${port}`);
});



