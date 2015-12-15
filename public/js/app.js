(function() {
  'use strict';

angular.module('app',['ui.router'])
  .config(router);

router.$inject = ['$stateProvider', '$urlRouterProvider'];

function router($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

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







}


})();
