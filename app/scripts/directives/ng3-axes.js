'use strict';

/**
 * @ngdoc directive
 * @name ng3App.directive:ng3Axes
 * @description
 * # ng3Axes
 */
angular.module('ng3App')
  .directive('ng3Axes', ['ng3Toggle', function (n3T) {
    return {
      retrict: 'A',
      template: '<input type="checkbox" ng-model="console.axes" />',
      replace: true,
      link: function(scope,ele,attrs) {
        scope.$watch("console.axes", function(newValue, oldValue){
          if (newValue != oldValue) n3T.toggle(newValue, axes);
        })
        var axes = new THREE.AxisHelper(5000);
        n3T.toggle(scope.console.axes, axes);
      },
      controller: ['$scope', function($scope){
        $scope.console.axes = true;
      }]
    }
  }]);
