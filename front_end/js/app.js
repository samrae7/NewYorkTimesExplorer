angular
  .module('nytApp', ['ui.router', 'rzModule','uiGmapgoogle-maps'])
  .config(MainRouter)//could use ng-annotate here
  .controller('MyController', ['$rootScope','$scope','SliderFactory', function($rootScope, $scope, SliderFactory) {

      var self = this

      console.log($rootScope.articles)

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
      var createRandomMarker = function(i, bounds, idKey) {
      var lat_min = bounds.southwest.latitude,
        lat_range = bounds.northeast.latitude - lat_min,
        lng_min = bounds.southwest.longitude,
        lng_range = bounds.northeast.longitude - lng_min;

      if (idKey == null) {
        idKey = "id";
      }
      // console.log(SliderController.articles)

      var latitude = lat_min + (Math.random() * lat_range);
      var longitude = lng_min + (Math.random() * lng_range);
      var ret = {
        latitude: latitude,
        longitude: longitude,
        title: 'm' + i
      };
      ret[idKey] = i;
      return ret;
    };
    $scope.randomMarkers = [];

    // Get the bounds from the map once it's loaded
    $scope.$watch(function() {
      return $scope.map.bounds;
    }, function(nv, ov) {
      // Only need to regenerate once
      if (!ov.southwest && nv.southwest) {
        var markers = [];
        for (var i = 0; i < 50; i++) {
          markers.push(createRandomMarker(i, $scope.map.bounds))
        }
        $scope.randomMarkers = markers;
      }
    }, true);


     SliderFactory.getArticles('20150101', 'obama')
      .then(function(response) {
      $scope.articles = response.nyt.response.docs
      console.log($scope.articles)
      //$scope.articles is not availble outside of this function because of asynch
      _($scope.articles).forEach(function(article) {
          _(article.keywords).forEach(function(keyword){
              if(keyword.name==='glocations') {
                console.log(keyword.value)
              }
            }).value();
        }).value();
      });

      _([1, 2]).forEach(function(n) {
      console.log(n);
      }).value();

      


    }]);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
   .state('/home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'map.html'
    })
};




