const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://user:user@user-data.rlu3qiz.mongodb.net/?retryWrites=true&w=majority&appName=user-data');


mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

module.exports = mongoose.connection;