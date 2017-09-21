'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', '$httpProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: ['http', function View1Controller($http) {
      var self = this;
  
      $http.get('teams/teams.json'.then(function(response) {
        self.teams = response.data;
        console.log(self.teams);
      }));
    }]
  });
}])

.controller('View1Ctrl', [function() {

}]);