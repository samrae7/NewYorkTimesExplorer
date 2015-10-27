angular.module('nytApp')
  .factory('SliderFactory', function($http, $q) {

    var SliderFactory = {

      getArticles: function(date, keyword) {
        var deferred = $q.defer();
        //$http returns promises by default so don't need to set up a deferred object
        //can just have 
        //return $http.get('http://jsonplaceholder.typicode.com/photos')

        if (keyword==='') {

          $http
            .get('http://localhost:3000/' + date )
            .success(function(response) {
              deferred.resolve(response);
            })
            .error(function(error) {
              deferred.reject(error);
            })

            return deferred.promise;

        }

        else {
          console.log('DATE', date)
          $http
            .get('http://localhost:3000/' + date + '/' + keyword)
            .success(function(response) {
              deferred.resolve(response);
            })
            .error(function(error) {
              deferred.reject(error);
            })

            return deferred.promise;
        }
      }



    }

    return SliderFactory
})
