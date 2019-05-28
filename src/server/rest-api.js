// Require express and create an instance of it
var express = require('express');
var app = express();
var cors = require('cors')
var fs = require("fs");
var contents = fs.readFileSync("../assets/JSON/personal.json");
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
app.all('/!*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
    next();
});
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/
// on the request to root (localhost:3000/)
app.get('/', cors(corsOptions), function (req, res) {
    res.send('<b>My</b> first express http server');
});


app.get('/bioData', cors(corsOptions), function (req, res) {
    var obj = JSON.parse(contents);
    res.json(obj);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
