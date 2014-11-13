'use strict';

/**
 * @ngdoc directive
 * @name ng3App.directive:ng3Floorselector
 * @description
 * # ng3Floorselector
 */
angular.module('ng3App')
  .directive('ng3Floorselector', ['ng3Toggle', function (n3T) {
    return {
      retrict: 'A',
      template: '<input ng-repeat="floor in floors" type="radio" ng-model="console.floor" value="{{floor}}" ng-disabled="console.kontrols" />',
      replace: true,
      link: function(scope,ele,attrs){
        scope.$watch("console.floor", function(newValue, oldValue){
          if (newValue != oldValue) floorChange();
        })
        var floorTexture, floorMaterial, floorGeometry, floor;
        function floorChange(){
          if (scope.console.floor == "none") {
            n3T.toggle(false, floor);
          } else {
            n3T.toggle(false, floor);
            floorTexture = new THREE.ImageUtils.loadTexture('images/floortextures/' + scope.console.floor + '.jpg');
            floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
            floorTexture.repeat.set(10,10);
            floorMaterial = new THREE.MeshBasicMaterial( {map: floorTexture, side: THREE.DoubleSide});
            floorGeometry = new THREE.PlaneGeometry(5000,5000,10,10);
            floor = new THREE.Mesh(floorGeometry, floorMaterial);
            floor.position.y = 0;
            floor.rotation.x = Math.PI / 2;
            n3T.toggle(true, floor);
          }
        }
      },
      controller: ['$scope', function($scope){
        $scope.console.floor = "none";
        $scope.console.prevfloor = $scope.console.floor;
        $scope.floors = ["000001", "100_1184_seamless", "100_1377_seamless", "100_1449_seamless", "100_1453_seamless", "none"];
      }]
    }
  }]);
