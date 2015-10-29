// REQUIREMENTS //
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var request = require('request')
var router = express.Router(); 
var cors = require('cors');

app.use(cors())

var mainController = require('./controllers/mainController')


// var routes = require('./config/routes')
// app.use(routes);

// CONFIG //



app.use('/', router);

// body parser config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



request('http://jservice.io/api/random?count=1', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body)[0].question)
  }
})

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', mainController.sayHi);

router.get('/:date', mainController.getArticlesWithoutKeyword);

router.get('/:date/:keyword', mainController.getArticles);

router.get('/:startDate/:endDate/:keyword', mainController.getArticlesDateRange)

// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000")
})