'use strict';

/**
 * @ngdoc directive
 * @name ng3App.directive:ng3Ambientlighter
 * @description
 * # ng3Ambientlighter
 */
angular.module('ng3App')
    .directive('ng3Ambientlighter', ['ng3Toggle', function(n3T) {  // D
      return {
        retrict: 'A',
        template: '<input type="checkbox" ng-model="console.light" />',
        replace: true,
        link: function(scope,ele,attrs) {
          scope.$watch('console.light', function(newValue, oldValue){
            if (newValue != oldValue) n3T.toggle(newValue, lightAmbient);
          })
          var lightAmbient = new THREE.AmbientLight( 0x333333 );
          n3T.toggle(scope.console.light, lightAmbient);
        },
        controller: ['$scope', function($scope) {
          $scope.console.light = true;
        }]
      }
  }]);
