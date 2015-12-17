(function() {
  "use strict";


angular.module('app')

.controller('DashController', ["$http","clientDataService", "userDataService", "$stateParams", function($http, clientDataService, userDataService, $stateParams) {
  var vm = this;

  vm.user    = userDataService;
  vm.client  = {
    name:  '',
    phone: '',
    email: ''
  };
  vm.clients = {
    list: []
  };

  vm.current = {
    client: $stateParams.client_id
  };

  // vm.sp = $stateParams;

  vm.createClient = function() {
    $http.post("/api/clients", vm.client
    ).then(function(response){
      vm.client = {
        name:  '',
        phone: '',
        email: ''
      };

      vm.clients.list = response.data.clients;
    })
  };

  clientDataService.clients.then(function(res) {
    vm.clients.list = res.data;
  });

  vm.createProject = function() {
    $http.post("/api/clients/" + $stateParams.client_id + "/projects", {
      name:         vm.project.name,
      rate:         vm.project.rate,
      hourly:       vm.project.hourly,
      hrlyDesign:   vm.project.hrlyDesign,
      hrlyPlanning: vm.project.hrlyPlanning ,
      hrlyQA:       vm.project.hrlyQA,
      hrlyRefactor: vm.project.hrlyRefactor ,
      cost:         vm.project.cost
    }).then(function(res){
      console.log(res);
      vm.clients.list = res.data.clients;
    });
  };
}]);


})();
