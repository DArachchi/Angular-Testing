'use strict';

angular.
  module('teamService', ['ngResource']).
    factory('teamFactory', ['$resource',
      function($resource) {
        return $resource('teams/teams.json', {}, {
          query: {
          method: 'GET',
          params: {},
          isArray: true
          }
    });
  }
]);