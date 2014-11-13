'use strict';

/**
 * @ngdoc service
 * @name ng3App.ng3Kontrolsservice
 * @description
 * # ng3Kontrolsservice
 * Factory in the ng3App.
 */
angular.module('ng3App')
  .factory('ng3Kontrolsservice', ['ng3Renderservice', function(n3RS){
    return {
      getInstanceOrbit: function(camera) {
        return new THREE.OrbitControls(camera, n3RS.renderer.domElement)
      },
      getInstanceTrackball: function(camera){
        return new THREE.TrackballControls(camera, n3RS.renderer.domElement)
      }
    }
  }]);
