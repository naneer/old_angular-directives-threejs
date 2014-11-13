'use strict';

/**
 * @ngdoc service
 * @name ng3App.ng3Cameraservice
 * @description
 * # ng3Cameraservice
 * Factory in the ng3App.
 */
angular.module('ng3App')
  .factory('ng3Cameraservice', ['$window', function($window) {
    return {
      perspectiveCamera: function() {
        return new THREE.PerspectiveCamera(40, $window.innerWidth / $window.innerHeight, 1, 50000);
      }
    }
  }]);
