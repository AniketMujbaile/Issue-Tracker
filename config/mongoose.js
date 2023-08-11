 // connected to database
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://aniketmujbaile1:uvwLUuTtCRGsFZvp@cluster0.zmb9bya.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});

module.exports = db;
 




