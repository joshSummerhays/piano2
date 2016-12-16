let mongoose = require('mongoose');

let Student = mongoose.model('Student', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    experience: {
        required: true
    },
    startDate: {
        required: true
    },
    age: {
        required: true,
        type: Number
    }
});


// let Billy = new User({
//     email: 'example@example.com'
// });

// Billy.save().then((doc) => {
//     console.log('success', doc);
// }, (err) => {
//     console.log('failure', err);
// });

module.exports = {
    Student
}


