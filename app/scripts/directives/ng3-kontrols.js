'use strict';

/**
 * @ngdoc directive
 * @name ng3App.directive:ng3Kontrols
 * @description
 * # ng3Kontrols
 */
angular.module('ng3App')
  .directive('ng3Kontrols', ['ng3Setup', function (n3S) {
    return {
      retrict: 'A',
      template: '<input type="checkbox" ng-model="console.kontrols" />',
      replace: true,
      link: function(scope,ele,attrs){
        scope.$watch("console.kontrols", function(newValue, oldValue){
          if (newValue != oldValue) controlswitch(newValue);
        })
        
        function controlswitch(value) {
          n3S.controllerChanger(value);
          if (value) {
            scope.console.prevskybox = scope.console.skybox;
            scope.console.prevfloor = scope.console.floor;
            scope.console.floor = "none";
            scope.console.skybox = "none";
          } else {
            if (scope.console.prevskybox != "none" || scope.console.prevfloor != "none") {
              scope.console.skybox = scope.console.prevskybox;
              scope.console.floor = scope.console.prevfloor;
            }
          }
        }
      },
      controller: ['$scope', function($scope){
        $scope.console.kontrols = false;
      }]
    }
  }]);
