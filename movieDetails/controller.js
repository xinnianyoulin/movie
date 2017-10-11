'use strict';

var module=angular.module('movieApp.movieDetails', ['ngRoute'])

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/:id', {
    templateUrl: 'movieDetails/movieDetails.html',
    controller: 'movieDetailsController'
  });
}])

module.controller('movieDetailsController', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpService',
	function($scope,$route,$routeParams,HttpService) {
		// console.log($routeParams);
		$scope.title='Loading...';
		HttpService.jsonp(
			'http://api.douban.com/v2/movie/subject/'+$routeParams.id,
			{},
			function(data){
			console.log(data);
			$scope.data=data;
			$scope.title=data.title;
			$scope.$apply();
		});


}]);
