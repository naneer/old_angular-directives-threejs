'use strict';

/**
 * @ngdoc directive
 * @name ng3App.directive:ng3Skyboxselector
 * @description
 * # ng3Skyboxselector
 */
angular.module('ng3App')
  .directive('ng3Skyboxselector', ['ng3Toggle', function (n3T) {
    return {
      restrict: 'A',
      template: '<input  ng-repeat="skybox in skyboxes" type="radio" ng-model="console.skybox" value="{{skybox}}" ng-disabled="console.kontrols" />',
      replace: true,
      link: function(scope,ele,attrs){
        scope.$watch("console.skybox", function(newValue, oldValue){
          if (newValue != oldValue) skyChange();
        })
        var imagePrefix = "images/skybox/";
        var directions = ["lf", "rt", "up", "dn", "ft", "bk"];
        var imageSuffix = ".jpg";
        var skyGeometry = new THREE.BoxGeometry(5000,5000,5000);
        var materialArray = [];
        var skyMaterial, skyBox;
        function skyChange(){
          if (scope.console.skybox == "none" ) {
            n3T.toggle(false, skyBox);
          } else {
          n3T.toggle(false, skyBox);
          materialArray = [];
          for (var i = 0; i < 6; i++)
          materialArray.push( new THREE.MeshBasicMaterial({
              map: THREE.ImageUtils.loadTexture( imagePrefix + scope.console.skybox + "_" + directions[i] + imageSuffix ),
              side: THREE.BackSide
          }));
          skyMaterial = new THREE.MeshFaceMaterial( materialArray );
          skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
          n3T.toggle(true, skyBox);
          }
        }
      },
      controller: ['$scope', function($scope){
        $scope.console.skybox = "none";
        $scope.console.prevskybox = $scope.console.skybox;
        $scope.skyboxes = ["bluecloud", "browncloud", "graycloud", "yellowcloud", "none"];
      }]
    }
  }]);
