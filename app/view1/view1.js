'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
    $http.get('teams/teams.json').then(function successCallback(response) {
      $scope.teams = response.data;
    },
    function errorCallback(response) {
      alert("Error on data loading:" + " " + response.status + ": " + response.statusText);
    });
}]);