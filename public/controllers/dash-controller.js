(function() {
  "use strict";


angular.module('app')

.controller('DashController', ["$http","clientDataService", "userDataService", function($http, clientDataService, userDataService) {
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
    $http.post("/api/clients/:id/projects", {
      name: vm.project.name,
      rate: vm.project.rate,
      hourly: vm.project.hourly,
      hrlyDesign: vm.project.hrlyDesign,
      hrlyPlanning: vm.project.hrlyPlanning ,
      hrlyQA: vm.project.hrlyQA,
      hrlyRefactor: vm.project.hrlyRefactor ,
      cost: vm.project.cost
    }).then(function(res){
      var client = vm.clients.filter(function(c) {
        return c._id.toString();
      })[0];
      client.projects.push(res.data);
    });
  };
}]);


})();
