'use strict';

/**
 * @ngdoc directive
 * @name ng3App.directive:ng3Modelloader
 * @description
 * # ng3Modelloader
 */
angular.module('ng3App')
  .directive('ng3Modelloader', ['ng3Sceneservice', function(n3SS) {  // Directive that will add object to scene.
    return {
        restrict: 'A',
        template: '<input type="file" id="file" />',
        replace: true,
        link: function(scope, ele, attrs) {
          scope.$watch("console.model", function(newValue, oldValue){
            if (newValue != oldValue) loadModel(newValue);
          })
          var previous;
          function loadModel(model){
            if (previous) n3SS.scene.remove(previous);
            if (model != "NaN") {
              var load_me = new THREE.ObjectLoader();
              model = load_me.parse(model);
              n3SS.scene.add(model);
              previous = model;
            }
          }

            ele.bind('change', function() {
                readFile(ele[0], function(e){
                  var model = e.target.result;
                  model = JSON.parse(model);
                  scope.$apply(function() {
                    scope.console.model = model;
                  })
                });
                function readFile(file, onLoadCallback){
                    var reader = new FileReader();
                    reader.onload = onLoadCallback;
                    reader.readAsBinaryString(file.files[0]);
                }
            });
            
        },
        controller: ['$scope', function($scope) {
          $scope.console.model = "NaN";
        }]
    }
  }]);
