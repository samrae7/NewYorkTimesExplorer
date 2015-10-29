angular
  .module('nytApp')
  .controller('MapController', ['$rootScope','$scope','SliderFactory', '$log', '$timeout', 'uiGmapGoogleMapApi',function($rootScope, $scope, SliderFactory,$log, $timeout, uiGmapGoogleMapApi) {

    var self = this;

    self.Markers = []

    _($rootScope.articles).forEach(function(article, index) {
        //article.locations = []
      _(article.keywords).forEach(function(keyword) {

          if(keyword.name==='glocations') {
            article.locations = []
            article.locations.push({name: keyword.value})
            console.log('added'+ keyword.value + 'to', article.headline.main)
            } else {
              console.log('no location added!')
            }
        }).value()
      if (article.locations) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { "address": article.locations[0].name }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK && results.length > 0) {console.log('ok')
            article.locations[0].latitude = results[0].geometry.location.lat();
            article.locations[0].longitude = results[0].geometry.location.lng();
            //fixed my big problem by pushing the marker from here as opposed to further down
              self.Markers.push(
                {
                  id: index,
                  latitude: article.locations[0].latitude,
                  longitude: article.locations[0].longitude
                }
              )
            }
          });
      }
    }).value();

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

      $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
      $scope.options = {scrollwheel: false};
      $scope.coordsUpdates = 0;
      $scope.dynamicMoveCtr = 0;

      // console.log($rootScope.la)

      // self.Markers.push(
      //     {
      //       id:0,
      //       latitude:$rootScope.la,
      //       longitude:$rootScope.lo
      //     }
      //   )

    })

}]);











