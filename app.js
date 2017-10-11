'use strict';

// Declare app level module which depends on views, and components
var mainModule=angular.module('movieApp', [
  'ngRoute',
  'movieApp.movieDetails',
  'movieApp.movieList',
  'movieApp.service.http',
  'movieApp.autoFocus',
]);

mainModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);

mainModule.controller('searchController', [
	'$scope',
	'$route',
	'$routeParams',
	'$location',
	function($scope,$route,$routeParams,$location){
	$scope.inputText='';
	$scope.search=function(){
		$route.updateParams({category:'search',q:$scope.inputText});
	}
}])
