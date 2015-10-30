var request = require('request')

function getArticlesWithoutKeyword(req,res){
  request('http://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date='+ req.params.startDate + '&end_date=' + req.params.endDate + '&api-key=' + process.env.NYT_API_KEY, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body))
        var data = JSON.parse(body)
         res.json({ nyt: data})
      }
  })
}

function getArticles(req,res){
  console.log(req.params.date)
  var date=req.params.date
  request('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.params.keyword + '&begin_date='+ date + '&end_date=' + date + '&api-key=' + process.env.NYT_API_KEY, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body))
        var data = JSON.parse(body)
         res.json({ nyt: data})
      }
  })
}

function getArticlesDateRange(req,res){
  // console.log('start', req.params.startDate)
  // console.log('end', req.params.endDate)
  // console.log('keyword', req.params.keyword)
    request('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.params.keyword + '&begin_date='+ req.params.startDate + '&end_date=' + req.params.endDate + '&api-key=' + process.env.NYT_API_KEY, function (error, response, body) {
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
  getArticlesDateRange: getArticlesDateRange,
  getArticlesWithoutKeyword: getArticlesWithoutKeyword,
  sayHi: sayHi
}