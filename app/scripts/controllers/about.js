'use strict';

/**
 * @ngdoc function
 * @name ngTestappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngTestappApp
 */
angular.module('ngTestappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
