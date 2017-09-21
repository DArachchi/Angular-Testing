'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
    $http.get('teams/teams.json').then(function successCallback(response) {
      $scope.teams = response.data;
      console.log(self.teams);
    },
    function errorCallback(response) {
      alert("Error on data loading:" + " " + response.status + ": " + response.statusText);
      console.log(response);
    });
}]);