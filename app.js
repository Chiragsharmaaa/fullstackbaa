const express = require("express");
const Sequelize = require('sequelize')
const sequelize = require("./database");
const path = require("path");
const bodyParser = require("body-parser");
const mainController = require("./controllers/main");
const User = require('./models/user')
const cors = require('cors')
const userRoutes = require("./router/main");

const app = express();
app.use(cors())


// app.use(userRoutes)

const router = express.Router();

app.use(bodyParser.json({ extended: false }));

app.use(express.static(path.join(__dirname)));

app.use(express.static(__dirname));

app.post((req, res, next) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

app.post('/user/add-user', mainController.postAddUser)

app.get('/user/get-users', async (req, res, next) => {

})

app.post((req, res, next) => {
    res.status(404).send('<h1> Page not found </h1>');
});

sequelize
    .sync()
    .then((result) => {
        console.log(result)
        app.listen(3000);
    })
    .catch((err) => console.log(err));
