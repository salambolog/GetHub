// var express    = require('express');
// var mongoose   = require('mongoose');
// var bodyParser = require('body-parser');

// mongoose.connect('mongodb://localhost/rest_test');

// var app        = express();
// app.use(bodyParser.urlencoded({ extended:true}));

// app.get('/', function(req,res){
//   res.renderFile('index');
// });

// app.listen(3000);
// console.log('race against slime!');


























// configure app to use bodyParser()


// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);



var port = process.env.PORT || 8080;        // set our port

// API
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'API activated!' });
});

// API ROUTES



// ROUTES
// app.use('/api', router);
app.route('/')
  .get(function(req, res) {
    res.render('/');
  })


app.listen(port);
console.log('Magic happens on port ' + port);
