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
      console.log('2015' + self.nytSlider.value + '09')

      //if value is less than ten need to call a number
      self.dateInWords = self.nytSlider.value + ' Sep'
    }

    self.translate = function(value) {
      return value + ' Sep'
    }
}



