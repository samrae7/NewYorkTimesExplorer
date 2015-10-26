angular.module('nytApp')
  .factory('SliderFactory', function($http, $q) {

    var SliderFactory = {


      getArticles: function() {
        var deferred = $q.defer();
        //$http returns promises by default so don't need to set up a deferred object
        //can just have 
        //return $http.get('http://jsonplaceholder.typicode.com/photos')
        $http
          .get('http://localhost:3000')
          .success(function(response) {
            deferred.resolve(response);
          })
          .error(function(error) {
            deferred.reject(error);
          })

          return deferred.promise;
      },

      getArticlesByDate: function(date) {
        var deferred = $q.defer();
        //$http returns promises by default so don't need to set up a deferred object
        //can just have 
        //return $http.get('http://jsonplaceholder.typicode.com/photos')
        console.log('DATE', date)
        $http
          .get('http://localhost:3000/' + date)
          .success(function(response) {
            deferred.resolve(response);
          })
          .error(function(error) {
            deferred.reject(error);
          })

          return deferred.promise;
      },


    }

    return SliderFactory
})
