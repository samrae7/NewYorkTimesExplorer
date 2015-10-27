// angular.module('nytApp', ['ui.router'])

// .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

//   $urlRouterProvider.otherwise("/");

//   $stateProvider
//     .state('map', {
//       url: '/map',
//       templateUrl:"map.html"
//     })
// });

angular
  .module('nytApp', ['ui.router', 'rzModule'])
  .config(MainRouter);

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

