(function() {
  "use strict";

  angular
    .module('app')
    .controller('NavController', NavController);

    NavController.$inject = ["$http", "userDataService", "$log"];

    function NavController($http, userDataService, $log) {
      var vm = this;

      vm.user = userDataService;

      $http({
        method: "GET",
        url:    "/api/me"
      }).then(
        function(res) {
          $log.log("User found and loaded:", res.data);
          vm.user.data = res.data;
        },
        function(err) {
          $log.log(err);
        }
      );
    }

})();
