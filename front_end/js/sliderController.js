angular.module('nytApp')
  .controller("SliderController", ['$rootScope','SliderFactory', function($rootScope, SliderFactory) {

    var self = this;


    self.searchText = self.searchText || "presidential election"

    self.nytSlider = {
        floor: 1,
        ceil: 31,
        value: 15
    }


    self.dateInWords = self.nytSlider.value + ' Sep'

    self.hideArticles = function() {
      console.log('articles removed and invisible. waiting for new articles to load')
    }

    self.workOutDate = function() {
      //if value is less than ten add a zero before

      var day = self.nytSlider.value

      if (day < 10) {
        day = '0' + day
      }

      var date = '201509' + day
      

      //refactor this
      self.dateInWords = self.nytSlider.value + ' Sep'

      return date
    }

     
    self.getArticles = function() {

      date = self.workOutDate()

      SliderFactory.getArticles(date, self.searchText)
        .then(function(response) {
        $rootScope.articles = response.nyt.response.docs
        console.log($rootScope.articles)
      });

    }

    self.getArticles()

    self.translate = function(value) {
      return value + ' Sep'
    }

  }]);


    



