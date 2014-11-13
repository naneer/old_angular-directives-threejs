'use strict';

/**
 * @ngdoc service
 * @name ng3App.ng3Toggle
 * @description
 * # ng3Toggle
 * Factory in the ng3App.
 */
angular.module('ng3App')
  .factory('ng3Toggle', ['ng3Sceneservice', function(n3SS){
    return {
      toggle: function(bool, value){
          if (bool) {
            n3SS.scene.add(value);
          } else {
            n3SS.scene.remove(value);
          }
      }
    };
  }]);
