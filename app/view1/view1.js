'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', ['$scope', 'teamFactory', function($scope, teamFactory) {
  teamFactory.query().$promise.then(function(teams) {
    $scope.teams = teams;
  })
}]);