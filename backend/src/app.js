const express = require('express');
const path = require('path');
const config = require("./config/config");

const requestLogging = require("./middlewares/request_logging_middleware");
const errorHandler = require("./middlewares/error_handler_middleware");

const blogRoute = require("./routes/blog_route");
const loginRoute = require("./routes/login_route");

const passport = require("./auth/passport_jwt_strategy");
require("./db/db");

let app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(passport.initialize());
app.use('/', express.json());
app.use('/', requestLogging);

// add CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/", loginRoute);
app.use("/", blogRoute);
app.use("/", errorHandler);



app.get("*", function (req, res) {
    res.status(404).render("not-found", {url: req.url});
});

app.listen(config.server.port);

module.exports = app;