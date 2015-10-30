angular.module('nytApp')
  .controller("SliderController", ['$rootScope','SliderFactory', function($rootScope, SliderFactory) {

    var self = this;

    self.searchText = self.searchText || "presidential election"
    self.year = self.year || "1967"
    


    self.nytSlider = {
        floor: 1,
        ceil: 12,
        value: 6
    }

    self.dateInWords = self.nytSlider.value + ' ' + self.year

    self.hideArticles = function() {
      console.log('articles removed and invisible. waiting for new articles to load')
    }

    self.workOutDates = function() {
      //if value is less than ten add a zero before

      self.month = self.nytSlider.value

      if (self.month < 10) {
        self.month = '0' + self.month
      }

      self.date1 = self.year + self.month + '01'
      self.date2 = self.year + self.month + '28'

      //reminder - refactor this
      self.dateInWords = self.nytSlider.value + ' ' + self.year
    }

     
    self.getArticlesDateRange = function() {

      self.workOutDates()

      SliderFactory.getArticlesDateRange(self.date1, self.date2, self.searchText)
        .then(function(response) {
        $rootScope.articles = response.nyt.response.docs
        console.log($rootScope.articles)
      });

    }

    self.getArticlesDateRange()

    self.translate = function(value) {
      var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return months[value-1]
    }

  }]);


    



