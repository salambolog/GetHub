var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var connect = require('connect');
var everyauth = require('everyauth');
var path = require("path");

app.listen(process.env.PORT || 5080);

app.use(express.static(__dirname + '/public'));

path.dirname(require.main.filename);


app.set('view engine', 'html');
app.set('view options', {layout: false});
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res) {
  res.render('index');
});

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });
