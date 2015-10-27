var nytApp = angular.module('nytApp', ['rzModule'])
  .controller("SliderController", function(SliderFactory) {

    var self = this;

    SliderFactory.getArticles()
    .then(function(response) {
      self.articles = response;
      console.log(response)
    });

    self.article = {}

    self.nytSlider = {
        floor: 1,
        ceil: 31,
        value: 15
    }

    //self.articles = []

    self.dateInWords = self.nytSlider.value + ' Sep'

    self.callDate = function() {
      //if value is less than ten add a zero before

      var day = self.nytSlider.value
      console.log(day)

      if (day < 10) {
        day = '0' + day
      }

      var date = '201509' + day
      console.log(date)

      SliderFactory.getArticlesByDate(date)
        .then(function(response) {
        self.articles = response.nyt.response.docs
        console.log(self.articles)
      });

      //refactor this
      self.dateInWords = self.nytSlider.value + ' Sep'
    }

    self.callDate()

    self.translate = function(value) {
      return value + ' Sep'
    }

  })


    



