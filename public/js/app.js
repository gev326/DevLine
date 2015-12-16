(function() {
  'use strict';

angular.module('app',['ui.router'])
  .config(router);

router.$inject = ['$stateProvider', '$urlRouterProvider'];

function router($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })

    .state('clients', {
      url: '/clients',
      templateUrl: 'templates/clients.html'
    })

    .state('projects', {
      url: '/projects',
      templateUrl: 'templates/projects.html'
    })


  .state('dash', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html',
      controller: 'DashController',
      controllerAs: 'vm'
    })


}


})();
