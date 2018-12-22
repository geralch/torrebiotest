var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors")
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index'); 
var linkedInRouter=require("./routes/linkedIn");
var torrenegra=require("./routes/torreNegra");

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use( (req, res, next)=> {
     console.log(req.body)
    // console.log(req.method)
    next();
  }); 
app.use('/', indexRouter); 
app.use('/linkedin', linkedInRouter); 
app.use("/torrenegra",torrenegra);
module.exports = app;
