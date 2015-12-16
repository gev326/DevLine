angular.module('app')

.controller('DashController', ["$http","clientDataService", function($http, clientDataService) {
  var vm = this;

  vm.createClient = function() {
    $http.post("/api/clients", {
      name: "name",
      phone: "phone",
      email: "email"
    }).then(function(response){
      vm.client = response.data;
    })
  };

  clientDataService.clients.then(function(res) {
    vm.clients = res.data;
  });

  vm.createProject = function() {
    $http.post("/api/clients/:id/projects", {
      name: "cake",
      rate: 123123
    }).then(function(res){
      var client = vm.clients.filter(function(c) {
        return c._id.toString();
      })[0];
      client.projects.push(res.data);
    });
  };
}]);
