'use strict';

/**
 * @ngdoc function
 * @name projectxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectxApp
 */
angular.module('projectxApp')
  .controller('MainCtrl', function ($http, $scope, $location) {
    // Load xmen
    $http.get(apiUrl+'/xmen').then(function (response) {
      $scope.xmens = response.data;
    });
    $scope.add = function () {
      $http.post(apiUrl+'/xmen', $scope.newXmen).then(function (response) {
        if (response.data.id) {
          $location.path('/xmen/'+response.data.id);
        }
        $scope.message = response.data;
      });
    }
  });
