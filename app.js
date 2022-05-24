const express = require("express");
let cors = require('cors')
let app = express();

let bodyParser = require('body-parser');
const path = require('path');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

const db = require("./database/db")();

// Routes
const userService = require('./user_service/routes/user.routes.js');
app.use('/user', userService);

// App start with port 80
app.listen(process.env.PORT || 80, () => {
    console.log("App Started On Port : 80");
});

module.exports = app;