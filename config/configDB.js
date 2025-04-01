const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:admin@bloodbuddb.csmvuk1.mongodb.net/?retryWrites=true&w=majority&appName=bloodbudDB');


mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

module.exports = mongoose.connection;
