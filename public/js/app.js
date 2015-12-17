(function() {
  'use strict';

angular.module('app',['ui.router'])
  .config(router);

router.$inject = ['$stateProvider', '$urlRouterProvider'];

function router($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'DashController',
      controllerAs: 'vm'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })

    .state('clients', {
      url: '/clients',
      templateUrl: 'templates/clients.html',
      controller: 'DashController',
      controllerAs: 'vm'
    })

    .state('projects', {
      url: '/projects/:client_id',
      templateUrl: 'templates/projects.html',
      controller: 'DashController',
      controllerAs: 'vm'
    })

    .state('dash', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html',
      controller: 'DashController',
      controllerAs: 'vm'
    });
}


})();
