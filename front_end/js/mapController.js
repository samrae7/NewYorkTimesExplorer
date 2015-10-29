angular
  .module('nytApp')
  .controller('MapController', ['$rootScope','$scope','SliderFactory', '$log', '$timeout', 'uiGmapGoogleMapApi',function($rootScope, $scope, SliderFactory,$log, $timeout, uiGmapGoogleMapApi) {

    // Do stuff with your $scope.

    var self = this;

    self.Markers = []

      // self.Markers.push(
      //     {
      //       id:0,
      //       latitude:40.1451,
      //       longitude:-99.6680
      //     }
      //   )

    var geodArticles = _($rootScope.articles).forEach(function(article, index) {
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

              self.Markers.push(
                {
                  id: index,
                  latitude: article.locations[0].latitude,
                  longitude: article.locations[0].longitude
                }
              )
            // $rootScope.lo = article.locations[0].longitude
            // $rootScope.la = article.locations[0].latitude
            }
          });
      }
    }).value();

    console.log("geodArticles", geodArticles);

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

      console.log('ARTICLES', $rootScope.articles)

      _($rootScope.articles).forEach(function(article, index) {
        console.log('ARTICLE', article)
        // console.log('INDEX', index)

        // if (article.locations[0] != undefined) {
        //   console.log (article)
        //   self.Markers.push(
        //     {
        //       id: index,
        //       latitude: article.locations[0].latitude,
        //       longitude: article.locations[0].longitude
        //     }
        //   )
        // }

      }).value()

      //console.log($scope.Markers)
      //$scope.dynamicMoveCtr++;

    })

}]);











