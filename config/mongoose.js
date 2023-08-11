// connected to database
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});

module.exports = db;
