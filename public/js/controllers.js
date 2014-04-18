'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  }).
  controller('BeerIndexController', 
    ['$scope', '$http', function ($scope, $http) {
    
    var url = '/api/beers';

    $scope.msg = 'Workshop Be MEAN';

    $http({
      method: 'GET',
      url: url
    }).
    success(function(data){
      console.log('SUCESSO!!!!');
      $scope.cervejas = data; 
      $scope.msg = 'Listagem das cervejas:';

    }).
    error(function(data){
      console.log('ERRO CARAIO!!!');
      $scope.msg = 'Nenhuma cerveja listada, sorry!';

    });


  }]);








