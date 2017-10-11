'use strict';

var module=angular.module('movieApp.movieList', ['ngRoute'])

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:category/:page', {
    templateUrl: 'movieList/movieList.html',
    controller: 'movieListController'
  });
}])

module.controller('movieListController', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpService',
	function($scope,$route,$routeParams,HttpService) {
		// console.log($routeParams);
		var count=8;//每页展示的数目
		var page=parseInt($routeParams.page);//当前页码
		var start=(page-1)*count;//当前页开始的num
		$scope.title='Loading...';
		$scope.totalCount=0;
		$scope.curPage=page;
		$scope.totalPage=0;
		HttpService.jsonp(
			'http://api.douban.com/v2/movie/'+$routeParams.category,
			{start:start,count:count,q:$routeParams.q},
			function(data){
			// console.log(data);
			$scope.movieData=data.subjects;
			$scope.title=data.title;
			$scope.totalCount=data.total;
			$scope.totalPage=Math.ceil($scope.totalCount/count);
			console.log($routeParams);
			$scope.$apply();
		});

		$scope.switchPage=function(page){
			// console.log(page);
			if(page<1 || page>$scope.totalPage)return false;
			$route.updateParams({page:page});
		}

}]);
