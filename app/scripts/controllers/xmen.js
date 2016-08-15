'use strict';

/**
 * @ngdoc function
 * @name projectxApp.controller:XmenCtrl
 * @description
 * # XmenCtrl
 * Controller of the projectxApp
 */
angular.module('projectxApp')
  .controller('XmenCtrl', function ($http, $scope, $routeParams, $route) {
    var init = function () {
      $http.get(apiUrl+'/'+$routeParams.uid).then(function (response) {
        $scope.curXmen = response.data;
        $http.get(apiUrl+'/xmen').then(function (response) {
          $scope.xmens = response.data;
        });
      });
      $http.get(apiUrl+'/'+$routeParams.uid+'/suggest').then(function (response) {
        $scope.suggests = response.data;
      });
    }
    init();
    $scope.like = function (uid) {
      $http.post(apiUrl+'/'+$routeParams.uid+'/like', {uid: uid}).then(function (response) {
        $route.reload();
      });
      return false;
    }
    
  });
