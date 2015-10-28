angular
  .module('nytApp')
  .controller('MapController', ['$rootScope','$scope','SliderFactory', function($rootScope, $scope, SliderFactory) {

      var self = this

      if (!$rootScope.articles) {
        console.log("oh no! no articles got so far. let's get some")
        SliderFactory.getArticles('20150101', 'presidential elections')
        .then(function(response) {
        $rootScope.articles = response.nyt.response.docs
        console.log($rootScope.articles)
      });

      } else console.log($rootScope.articles)

      $scope.map = {
        center: {
          latitude: 40.1451,
          longitude: -99.6680
        },
        zoom: 4,
        bounds: {}
      };

      $scope.options = {
      scrollwheel: false
      };

    //   var createRandomMarker = function(i, bounds, idKey) {
    //   var lat_min = bounds.southwest.latitude,
    //     lat_range = bounds.northeast.latitude - lat_min,
    //     lng_min = bounds.southwest.longitude,
    //     lng_range = bounds.northeast.longitude - lng_min;

    //   if (idKey == null) {
    //     idKey = "id";
    //   }

    //   var latitude = lat_min + (Math.random() * lat_range);
    //   var longitude = lng_min + (Math.random() * lng_range);
    //   var ret = {
    //     latitude: latitude,
    //     longitude: longitude,
    //     title: 'm' + i
    //   };
    //   ret[idKey] = i;
    //   return ret;
    // };


    $scope.Markers = [];

    //Get the bounds from the map once it's loaded
    // $scope.$watch(function() {
    //   return $scope.map.bounds;
    // }, function(nv, ov) {
    //   // Only need to regenerate once
    //   if (!ov.southwest && nv.southwest) {
    //     var markers = [];
    //     for (var i = 0; i < 50; i++) {
    //       markers.push(createRandomMarker(i, $scope.map.bounds))
    //     }
    //     $scope.randomMarkers = markers;
    //   }
    // }, true);

      _($rootScope.articles).forEach(function(article) {
          _(article.keywords).forEach(function(keyword){
              if(keyword.name==='glocations') {
                console.log(keyword.value)
              } else {console.log('no location!')}
            }).value();
        }).value();

     var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { "address": 'New York' }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
        console.log('ok')
        var location = results[0].geometry.location;
        var markers = []
        var testMarker = {
          id: 101,
          coords: {
            latitude: 37.7833,
            longitude: -122.4167
          }
        }
       markers.push(testMarker)
       $scope.Markers = markers
      //$scope.map.panTo(location);
       }
      });

    }]);



