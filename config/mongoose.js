 require('dotenv').config();

const mongoose = require('mongoose');

let DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connection successful`);
}).catch((err) => {
    console.log(`Error connecting to database`, err);
});

module.exports = mongoose.connection;
 




