var myApp = angular.module('myapp', ['rzModule']);

myApp.controller("SliderController", SliderController);

function SliderController() {

    var self = this;

    self.nytSlider = {
        floor: 0,
        ceil: 31,
        value: 15
    }

    self.dateInWords = self.nytSlider.value + ' Sep'

    self.callDate = function() {
      //if value is less than ten add a zero before

      var day = self.nytSlider.value
      console.log(day)

      if (day < 10) {
        day = '0' + day
      }

      console.log('2015' + day + '09')

      
      //refactor this
      self.dateInWords = self.nytSlider.value + ' Sep'
    }

    self.translate = function(value) {
      return value + ' Sep'
    }
}



