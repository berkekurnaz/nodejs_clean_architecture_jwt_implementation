var mongoose = require("mongoose");
const dotenv = require('dotenv');

module.exports = () => {
    dotenv.config();
    const uri = "mongodb+srv://" + process.env.DATABASE_USER_USERNAME +":" + process.env.DATABASE_USER_PASSWORD  +"@"+ process.env.DATABASE_URL  +"/" + process.env.DATABASE_NAME;
    mongoose.connect(uri);

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
}