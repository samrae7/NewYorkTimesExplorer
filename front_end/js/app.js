angular
  .module('nytApp', ['ui.router', 'rzModule','uiGmapgoogle-maps'])
  .config(MainRouter)
  .controller('MyController', ['$scope', function($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
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




