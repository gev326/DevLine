(function() {
  'use strict';

  angular.module("app")
    .factory("clientDataService", ["$http", function($http){

      var service = {
        clients: $http.get("/api/clients")
      };

      return service;

    }]);


})();
