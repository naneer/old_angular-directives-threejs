'use strict';

/**
 * @ngdoc service
 * @name ng3App.ng3Setup
 * @description
 * # ng3Setup
 * Factory in the ng3App.
 */
angular.module('ng3App')
  .factory('ng3Setup', ['$window', 'ng3Sceneservice', 'ng3Cameraservice', 'ng3Renderservice', 'ng3Kontrolsservice', function($window, n3SS, n3CS, n3RS, n3KS) {
    var controls, camera, ele;
    var _init = function(ele) {
      n3RS.renderer.setSize($window.innerWidth, $window.innerHeight);
      ele.appendChild(n3RS.renderer.domElement);
      camera = n3CS.perspectiveCamera();
      camera.position.set(300,100,300);
      var lightCamera = new THREE.PointLight( 0xffffff, 0.5 );
      camera.add(lightCamera);
      n3SS.scene.add(camera);
      controls = n3KS.getInstanceOrbit(camera);
      controls.maxPolarAngle = (Math.PI-0.1)/2;
      controls.maxDistance = 2850;
    };
    var _animate = function() {
      requestAnimationFrame(_animate);
      n3RS.renderer.render(n3SS.scene, camera);
      controls.update();
    };
    var _controllerChanger = function(value) {
      var light;
      var prevCamera = camera;
      camera = n3CS.perspectiveCamera();
      camera.position.copy( prevCamera.position );
      camera.rotation.copy( prevCamera.rotation );
      n3SS.scene.remove(prevCamera);
      if (value) {
        controls = n3KS.getInstanceTrackball(camera);
        light = new THREE.PointLight(0xffffff, 0.5);
        camera.add(light);
        n3SS.scene.add(camera);
      } else {
        controls = n3KS.getInstanceOrbit(camera);
        controls.maxPolarAngle = (Math.PI-0.1)/2;
        controls.maxDistance = 2850;
        light = new THREE.PointLight(0xffffff, 0.5);
        camera.add(light);
        n3SS.scene.add(camera);
      }
    };
    return {
      init: function(ele){
        return _init(ele);
      },
      animate: function(){
        return _animate();
      },
      controllerChanger: function(value) {
        return _controllerChanger(value);
      }
    };
  }]);
