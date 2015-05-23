
(function () {
  'use strict';
  
  angular.module('everypg', []) // EVERY module MUST have the top directive in it
  .controller('Main', ['$scope', function($scope){
    $scope.name='RAINU';
  }])
})()

// Starts with an iffe 
// Include module with every page's ng-directive
// include same code with different controller with every page in ONE app
// $scope is almost DOM 