(function() {
  'use strict';

  angular
    .module("app")
    .factory("userDataService", userDataService);

  userDataService.$inject = [];

  function userDataService() {
    var service = {
      data: {}
    };

    return service;
  }

})();
