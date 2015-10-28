angular
  .module('nytApp', ['ui.router', 'rzModule','uiGmapgoogle-maps'])
  .config(MainRouter)//could use ng-annotate here
  .config(aSynchMapConfig)
  
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


function aSynchMapConfig(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key:'AIzaSyAbNickZ1FJGwxldvy49BdkHy3-S8WS_uw',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}



