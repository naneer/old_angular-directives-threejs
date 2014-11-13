'use strict';

/**
 * @ngdoc directive
 * @name ng3App.directive:ng3Viewer
 * @description
 * # ng3Viewer
 */
angular.module('ng3App')
  .directive('ng3Viewer', ['ng3Setup', function(n3S) {
        return {
            retrict: 'A',
            link: function(scope,ele,attrs){
                n3S.init(ele[0]);
                n3S.animate();
            }
        }
  }]);
