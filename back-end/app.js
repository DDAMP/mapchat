var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport');

var flash = require('connect-flash');


var app = express();
;
require('./login/passportconf')(passport);
app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser()); 
var _dirname="../front-end/app";



var path = require("path");
app.set('views', path.join( _dirname,'/views')); 

app.use(express.static("../front-end" + '/app'));
app.use('/bower_components',  express.static( '../front-end/bower_components'));


app.use(session({ secret: 'Alamakota' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

app.listen(3000, function () {
console.log('Example app listening on port 3000!');	

});
require('./login/rutes.js')(app,passport); 

app.get('/', function (req, res) {
  res.send('hello world')
});
module.exports = app;
