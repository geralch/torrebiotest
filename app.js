// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const cors = require("cors")
// const bodyParser = require('body-parser');
// var indexRouter = require('./routes/index'); 
// var linkedInRouter=require("./routes/linkedIn");
// var torrenegra=require("./routes/torreNegra");

// var app = express();
// app.use(cors())
// app.use(logger('dev'));
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())


// app.use(cookieParser());
// //app.use(express.static(path.join(__dirname, 'public')));
// app.use( (req, res, next)=> {
//      console.log(req.body) 
//     next();
//   }); 
//   app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
// app.use('/linkedin', linkedInRouter); 
// app.use("/torrenegra",torrenegra);
// module.exports = app; 
var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const bodyParser = require('body-parser');
var linkedInRouter = require("./routes/linkedIn");
var torrebio = require("./routes/torreBio");
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public/index.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})
app.use('/public', express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.send(JSON.stringify({ Hello: "" }));
});
app.use('/linkedin', linkedInRouter);
app.use("/torrebio", torrebio);
app.listen(port, function () {
    console.log(`Example app listening on port !`);
});
