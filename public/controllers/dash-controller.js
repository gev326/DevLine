(function() {
  "use strict";


angular.module('app')

.controller('DashController', ["$http","clientDataService", function($http, clientDataService) {
  var vm = this;
  vm.client = {
    name: '',
    phone: '',
    email: ''
  }


  // vm.getClients        = getClients;
  // vm.deleteClient   = deleteClient;
  // vm.updateClient   = updateClient;
  // vm.postClient     = postClient;


// function getClients() {
//   $http.get('/api/clients').then(function(response){
//     vm.clients = response.data;
//   }, function(errRes) {
//     console.error('error', errRes);
//   });
// }

  // vm.getClients = function() {
  //   $http.get("/api/clients").then(function(response){
  //     vm.clients = response.data;
  //   }, function(errRes) {
  //     console.log("error ", errRes);
  //   });
  // }

  vm.createClient = function() {
    $http.post("/api/clients", vm.client
    ).then(function(response){
      vm.client = response.data;
    })
  };

  clientDataService.clients.then(function(res) {
    vm.clients = res.data;
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
      cost: vm.project.cost,
    }).then(function(res){
      var client = vm.clients.filter(function(c) {
        return c._id.toString();
      })[0];
      client.projects.push(res.data);
    });
  };
}]);


})();
