angular
  .module('nytApp')
  .controller('MapController', ['$rootScope','$scope','SliderFactory', '$log', '$timeout', 'uiGmapGoogleMapApi',function($rootScope, $scope, SliderFactory,$log, $timeout, uiGmapGoogleMapApi) {

    // Do stuff with your $scope.

    var self = this
    self.locations = []
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
      }
    }
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

      console.log(maps)

      _($rootScope.articles).forEach(function(article) {
        _(article.keywords).forEach(function(keyword) {
          if(keyword.name==='glocations') {
            console.log(keyword.value)
            self.locations.push(keyword.value)
            } else {
              console.log('no location!')
            }
          }).value();
        }).value();

      console.log('locations',self.locations)

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { "address": self.locations[0] }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
        console.log('ok')
        $scope.Platitude = results[0].geometry.location.lat();
        $scope.Plongitude = results[0].geometry.location.lng();

        console.log($scope.Platitude)
        console.log($scope.Plongitude)

        $scope.marker.coords = {
          latitude: $scope.Platitude,
          longitude: $scope.Plongitude
        }

        console.log($scope.marker.coords)
      };
    })

  });

}]);











