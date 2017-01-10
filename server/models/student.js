let mongoose = require('mongoose');

let StudentSchema = new mongoose.Schema({
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
        type: String,
        required: true
    },
    startDate: {
        type: String,
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

let Student = mongoose.model('Student', StudentSchema);

module.exports = {Student};


