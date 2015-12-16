(function() {
  "use strict";


angular.module('app')

.controller('DashController', ["$http","clientDataService", function($http, clientDataService) {
  var vm = this;


  vm.clients = [];

  vm.newClient = {
      name: "",
      phone: "",
      email: ""
  };


  vm.editClient = {
    name: "",
    phone: "",
    email: ""
  }

  // vm.getClients     = getClients;
  // vm.deleteClient   = deleteClient;
  // vm.updateClient   = updateClient;
  // vm.postClient     = postClient;



  vm.getClients = function() {
    $http.get("/api/clients").then(function(response){
      vm.clients = response.data;
    }, function(errRes) {
      console.log("error ", errRes);
    });
  }

  vm.createClient = function() {
    $http.post("/api/clients", {
      name: "",
      phone: "",
      email: ""
    }).then(function(response){
      vm.client = response.data;
    })
  };

  clientDataService.clients.then(function(res) {
    vm.clients = res.data;
  });

  vm.createProject = function() {
    $http.post("/api/clients/:id/projects", {
      name: "this sucks",
      rate: 120,
      hourly: true,
      hrlyDesign: 123,
      hrlyPlanning: 10 ,
      hrlyQA: 15,
      hrlyRefactor: 199 ,
      cost: 199
    }).then(function(res){
      var client = vm.clients.filter(function(c) {
        return c._id.toString();
      })[0];
      client.projects.push(res.data);
    });
  };
}]);


})();
