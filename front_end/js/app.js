angular
  .module('nytApp', ['ui.router', 'rzModule','uiGmapgoogle-maps'])
  .config(MainRouter)//could use ng-annotate here
  
function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
   .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'map.html'
    })
};




