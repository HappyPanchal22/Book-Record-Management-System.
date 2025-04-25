// const mongoose = require("mongoose");

// function DbConnection(){
//     const DB_URL = process.env.MONGO_URI;

//     mongoose.connect(DB_URL);
// }

// const db = mongoose.connection;
// db.on("error",console.log.bind(console, "Connection Error"));
// db.once("open", function(){
//     console.log("DB Connected !!");
// });

// module.exports = DbConnection;

const mongoose = require('mongoose');

function DbConnection() {
    const DB_URL = process.env.MONGO_URI;

    mongoose.connect(DB_URL, {
        connectTimeoutMS: 30000,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', () => {
        console.log('DB Connected!!');
    });
}

module.exports = DbConnection;
