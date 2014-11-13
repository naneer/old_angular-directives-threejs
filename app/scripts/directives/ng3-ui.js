'use strict';

/**
 * @ngdoc directive
 * @name ng3App.directive:ng3Ui
 * @description
 * # ng3Ui
 */
angular.module('ng3App')
  .directive('ng3Ui', function () {
    return {
      retrict: 'A',
      templateUrl: 'views/ng3-ui.html',
      replace: false,
      controller: ['$scope', '$firebase', function($scope, $firebase){
          var ref = new Firebase("");
          var sync = $firebase(ref.child("itemlist"));
          var itemlistarray = sync.$asArray();
          $scope.submitForm = function(value){
            itemlistarray.$add({name: value.name }).then(function(xv){
              var ref = new Firebase("");
              var name = xv.name();
              var sync = $firebase(ref.child("items").child(name));
              sync.$set({
                                contents: {
                                        name: value.name,
                                        light: value.light,
                                        axes: value.axes,
                                        floor: value.floor,
                                        skybox: value.skybox,
                                        kontrols: value.kontrols,
                                        model: value.model
                                        }
                              })
              
            });
          }
      }]
    }
  });