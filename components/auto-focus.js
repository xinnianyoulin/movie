(function(){
	var module_focus=angular.module('movieApp.autoFocus', []);

	module_focus.directive('autoFocus', ['$location', function($location){
		// Runs during compile
		var path=$location.path();
		// console.log(path);
		return {
			restrict: 'A',
			link: function($scope, iElm, iAttrs, controller) {
				$scope.$location=$location;
				$scope.$watch('$location.path()',function(now){
					var aLink=iElm.children().attr('href').split('/')[1];
					// console.log(aLink);
					if(now.startsWith('/'+aLink)){
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					}
				});
			}
		};
	}]);
})();