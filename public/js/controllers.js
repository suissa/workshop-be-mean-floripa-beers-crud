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
  controller('BeerIndexController', ['$scope', '$http', function ($scope, $http) {
    var url = '/api/beers';

    console.log('Beer Index');

    $http({
      method: 'GET',
      url: url
    }).
    success(function(data){
      console.log('SUCESSO', data);
      $scope.beers = data;
      $scope.msg = 'Listagem das cervejas: ';
    }).
    error(function(data){
      console.log('ERRO', data);
      $scope.msg = 'Erro na listagem: ' + data;
    });


  }]).
  controller('BeerNewController', ['$scope', '$http', function ($scope, $http) {

    var msg = 'Cadastre uma breja ai manolo!';
    $scope.msg = msg;

    $scope.create = function(form){
      var dados = form;
      var url = '/api/beers';

      $http({
        method: 'POST',
        url: url,
        data: dados
      }).
      success(function(data){
        var msg = 'Cerveja CADASTRADA';
        console.log(msg);
        $scope.msg = msg;
      }).
      error(function(data){
        var msg = 'Cerveja NAO CADASTRADA';
        console.log(msg);
        $scope.msg = msg;
      });

    }
  }]).
  controller('BeerUpdateController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    var msg = 'Altere uma breja ai manolo!';
    $scope.msg = msg;

    var id = $routeParams.id;
    var url = '/api/beers/' + id;
    
    $scope.form = {};

    $http({
      method: 'GET',
      url: url
    }).
    success(function(data){
      console.log(data);
      delete data._id;

      $scope.form = data;
      $scope.msg = 'Listagem das cervejas: ';
    }).
    error(function(data){
      console.log('ERRO', data);
      $scope.msg = 'Erro na listagem: ' + data;
    });


    $scope.save = function(form){
      var dados = form;

      $http({
        method: 'PUT',
        url: url,
        data: dados
      }).
      success(function(data){
        var msg = 'Cerveja ALTERADA';
        console.log(msg);
        $scope.msg = msg;
      }).
      error(function(data){
        var msg = 'Cerveja NAO ALTERADA';
        console.log(msg);
        $scope.msg = msg;
      });

    }


    $scope.delete = function(){

      $http({
        method: 'DELETE',
        url: url
      }).
      success(function(data){
        var msg = 'Cerveja DELETADA';
        console.log(msg);
        $scope.msg = msg;
      }).
      error(function(data){
        var msg = 'Cerveja NAO DELETADA';
        console.log(msg);
        $scope.msg = msg;
      });

    }

  }]).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
