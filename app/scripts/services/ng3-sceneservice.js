'use strict';

/**
 * @ngdoc service
 * @name ng3App.ng3Sceneservice
 * @description
 * # ng3Sceneservice
 * Service in the ng3App.
 */
angular.module('ng3App')
  .service('ng3Sceneservice', function ng3Sceneservice() {
    return {
      scene: new THREE.Scene()
    }
  });
