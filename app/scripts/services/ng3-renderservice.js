'use strict';

/**
 * @ngdoc service
 * @name ng3App.ng3Renderservice
 * @description
 * # ng3Renderservice
 * Factory in the ng3App.
 */
angular.module('ng3App')
  .service('ng3Renderservice', function () {
    return {
      renderer: new THREE.WebGLRenderer( {alpha: 1, antialias: true, clearColor: 0xffffff} )
    }
  });
