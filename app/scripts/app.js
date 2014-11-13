'use strict';

/**
 * @ngdoc overview
 * @name ng3App
 * @description
 * # ng3App
 *
 * Main module of the application.
 */
angular
  .module('ng3App', [
    'ui.router',
    'ui.bootstrap',
    'firebase'
    ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('start', {
        url: '/',
        templateUrl: 'views/main.html'
      });
    $urlRouterProvider
      .otherwise('/');
   }]);
