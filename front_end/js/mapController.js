angular
  .module('nytApp')
  .controller('MapController', ['$rootScope','$scope','SliderFactory', '$log', '$timeout', 'uiGmapGoogleMapApi',function($rootScope, $scope, SliderFactory,$log, $timeout, uiGmapGoogleMapApi) {

    // Do stuff with your $scope.

    var self = this

    self.locations = []

    _($rootScope.articles).forEach(function(article) {
      article.locations = []
      _(article.keywords).forEach(function(keyword) {

          if(keyword.name==='glocations') {
            
            article.locations.push({name: keyword.value})
            console.log('added'+ keyword.value + 'to', article.headline.main)
            } else {
              console.log('no location added!')
            }
        }).value();
      if (article.locations[0]) {
        console.log("'" + article.headline.main + "' has location " + article.locations[0].name)
        var geocoder = new google.maps.Geocoder();

        geocoder.geocode( { "address": article.locations[0].name }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
              console.log('ok')
              article.locations[0].latitude = results[0].geometry.location.lat();
              article.locations[0].longitude = results[0].geometry.location.lng();

              console.log('article lat', article.locations[0].latitude)
              console.log('article lng', article.locations[0].longitude)
            }

        });
      }
    }).value();

     

      _($rootScope.articles).forEach(function(article) {

         // var geocoder = new google.maps.Geocoder();

        console.log('article.locations[0].name', article.locations[0].name)

        geocoder.geocode( { "address": article.locations[0].name }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
              console.log('ok')
              article.locations[0].latitude = results[0].geometry.location.lat();
              article.locations[0].longitude = results[0].geometry.location.lng();

              console.log('article lat', article.locations[0].latitude)
              console.log('article lng', article.locations[0].longitude)
            }

        });
      })


    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    // uiGmapGoogleMapApi.then(function(maps) {
    //   $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
    //   $scope.options = {scrollwheel: false};
    //   $scope.coordsUpdates = 0;
    //   $scope.dynamicMoveCtr = 0;
    //   $scope.marker = {
    //     id: 0,
    //     coords: {
    //        latitude: $scope.latitude,
    //     longitude: $scope.longitude
    //     }
    //   }
    //   console.log($scope.marker)
    //   $scope.dynamicMoveCtr++;
    // })

}]);











