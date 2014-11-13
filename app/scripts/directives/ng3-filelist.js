'use strict';

/**
 * @ngdoc directive
 * @name ng3App.directive:ng3Filelist
 * @description
 * # ng3Filelist
 */
angular.module('ng3App')
  .directive('ng3Filelist', function () {
    return {
      retrict: 'A',
      template: '<ul class="list-unstyled"><li ng-repeat="item in list"><a ng-click="isSelected(item.$id)" href="#">{{item.name}}</a></li></ul>',
      replace: false,
      controller: ['$scope', '$firebase', function($scope, $firebase){
          var ref = new Firebase("");
          var sync = $firebase(ref.child("itemlist"));
          var list = sync.$asArray();
          $scope.list = list;
          $scope.isSelected = function(id) {
            var sync = $firebase(ref.child("items").child(id).child("contents"));
            var obj = sync.$asObject();
            obj.$loaded().then(function(){
              $scope.console.name = obj.name;
              $scope.console.model = obj.model;
              $scope.console.floor = obj.floor;
              $scope.console.light = obj.light;
              $scope.console.axes = obj.axes;
              $scope.console.skybox = obj.skybox;
              $scope.console.kontrols = obj.kontrols;
              $scope.console.prevfloor = "none";
              $scope.console.prevskybox = "none";
            });
          }
      }]
    }
  });
