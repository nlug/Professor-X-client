'use strict';

/**
 * @ngdoc overview
 * @name projectxApp
 * @description
 * # projectxApp
 *
 * Main module of the application.
 */
var apiUrl = "http://localhost:2700"
angular
  .module('projectxApp', [
    'ngAnimate',
    'ngRoute',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/xmen/:uid', {
        templateUrl: 'views/xmen.html',
        controller: 'XmenCtrl',
        controllerAs: 'xmen'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
