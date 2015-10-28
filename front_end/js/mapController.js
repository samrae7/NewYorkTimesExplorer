angular
  .module('nytApp')
  .controller('MapController', ['$rootScope','$scope','SliderFactory', '$log', '$timeout', function($rootScope, $scope, SliderFactory,$log, $timeout) {

    // $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
    //   if (_.isEqual(newVal, oldVal))
    //     return;
    //   $scope.coordsUpdates++;
    // });
    // $timeout(function () {
    //   $scope.marker.coords = {
    //     latitude: 42.1451,
    //     longitude: -100.6680
    //   };
    //   $scope.dynamicMoveCtr++;
    //   $timeout(function () {
    //     $scope.marker.coords = {
    //       latitude: 43.1451,
    //       longitude: -102.6680
    //     };
    //     $scope.dynamicMoveCtr++;
    //   }, 2000);
    // }, 1000);

      var self = this

      self.locations = []

     _($rootScope.articles).forEach(function(article) {
          _(article.keywords).forEach(function(keyword){
              if(keyword.name==='glocations') {
                console.log(keyword.value)
                self.locations.push(keyword.value)
              } else {console.log('no location!')}
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

        $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
        $scope.options = {scrollwheel: false};
        $scope.coordsUpdates = 0;
        $scope.dynamicMoveCtr = 0;
        $scope.marker = {
          id: 0,
          coords: {
            latitude: $scope.Platitude,
            longitude: $scope.Plongitude
          }
      // options: { draggable: true },
      // events: {
      //   dragend: function (marker, eventName, args) {
      //     $log.log('marker dragend');
      //     var lat = marker.getPosition().lat();
      //     var lon = marker.getPosition().lng();
      //     $log.log(lat);
      //     $log.log(lon);

      //     $scope.marker.options = {
      //       draggable: true,
      //       labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
      //       labelAnchor: "100 0",
      //       labelClass: "marker-labels"
      //     };
      //   }
      // }
      };
    }
  });
}]);









