// angular.module('app')

// .controller('HomeController', ["$http","clientDataService", function($http, clientDataService) {
//   var vm = this;

//   vm.createClient = function() {
//     $http.post("/api/clients", {
//       name: "name",
//       phone: "phone",
//       email: "email"
//     }).then(function(response){
//       vm.client = response.data;
//     })
//   };

//   clientDataService.clients.then(function(res) {
//     vm.clients = res.data;
//   });

//   vm.createProject = function() {
//     $http.post("/api/clients/5670d2a2876394f677df5174/projects", {
//       name: "cake",
//       rate: 123123
//     }).then(function(res){
//       var client = vm.clients.filter(function(c) {
//         return c._id.toString() === "5670d2a2876394f677df5174";
//       })[0];
//       client.projects.push(res.data);
//     });
//   };
// }]);
