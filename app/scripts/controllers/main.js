'use strict';

/**
 * @ngdoc function
 * @name ngTestappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngTestappApp
 */
angular.module('ngTestappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
