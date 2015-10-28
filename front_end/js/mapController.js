angular
  .module('nytApp')
  .controller('MapController', ['$rootScope','$scope','SliderFactory', '$log', '$timeout', function($rootScope, $scope, SliderFactory,$log, $timeout) {

    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 37.7833,
        longitude: -122.4167
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
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


///////

      var self = this

      if (!$rootScope.articles) {
        console.log("oh no! no articles got so far. let's get some")
        SliderFactory.getArticles('20150101', 'presidential elections')
        .then(function(response) {
        $rootScope.articles = response.nyt.response.docs
        console.log($rootScope.articles)
      });

      } else console.log($rootScope.articles)

      _($rootScope.articles).forEach(function(article) {
          _(article.keywords).forEach(function(keyword){
              if(keyword.name==='glocations') {
                console.log(keyword.value)
              } else {console.log('no location!')}
            }).value();
        }).value();



  }]);







     // var geocoder = new google.maps.Geocoder();
     //  geocoder.geocode( { "address": 'New York' }, function(results, status) {
     //  if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
     //    console.log('ok')
     //    var location = results[0].geometry.location;
     //    var markers = []
     //    var testMarker = {
     //      id: 101,
     //      coords: {
     //        latitude: 37.7833,
     //        longitude: -122.4167
     //      }
     //    }
     //   markers.push(testMarker)
     //   $scope.Markers = markers
     //  //$scope.map.panTo(location);
     //   }
     //  });


