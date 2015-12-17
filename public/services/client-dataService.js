(function() {
  'use strict';

  angular
    .module("app")
    .factory("clientDataService", clientDataService);

  clientDataService.$inject = ["$http"];

  function clientDataService($http) {
    var service = {
      clients:  $http.get("/api/clients")
    };

    return service;
  }


})();
