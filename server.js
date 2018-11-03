var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var path = require("path");
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

var session = require("express-session");
const flash = require("express-flash");

app.use(session({
    secret: "secretponies",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(1010, function() {
    console.log("listening on port 1010");
});