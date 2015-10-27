var request = require('request')

function getArticles(req,res){
  request('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=presidential+election&begin_date=20120901&end_date=20120931&api-key=' + process.env.NYT_API_KEY, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body))
        var data = JSON.parse(body)
         res.json({ nyt: data})
      }
  })
}

function getArticlesByDate(req,res){
  console.log(req.params.date)
  var date=req.params.date
  request('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=presidential+election&begin_date='+ date + '&end_date=' + date + '&api-key=' + process.env.NYT_API_KEY, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body))
        var data = JSON.parse(body)
         res.json({ nyt: data})
      }
  })
}

//PUT API KEY IN A CONFIG FILE TO MAKE THINGS NEATER

function sayHi(req, res) {
    res.json({ message: 'wow this actually works! welcome to our api!' });   
}

module.exports = {
  getArticles: getArticles,
  getArticlesByDate: getArticlesByDate,
  sayHi: sayHi
}