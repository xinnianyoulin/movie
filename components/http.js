
(function(angular){
	var http=angular.module('movieApp.service.http', []);

	http.service('HttpService', ['$window','$document',function($window,$document){
		this.jsonp=function(url,data,callback){
			// 处理数据
			// data={id:1,name:'zhangsan'}
			var queryString=url.indexOf('?')==-1? '?':'&';
			for (var key in data) {//id=1&name=zhangsan
				queryString+=key+'='+data[key]+'&';
			}
			//jsonp_callback016486464945
			var cbName='jsonp_callback'+Math.random().toString().replace('.','');
			queryString+='callback='+cbName;
			
			var scriptEle=$document[0].createElement('script');
			scriptEle.src=url+queryString;
			$window[cbName]=function(data){
				callback(data);
				$document[0].body.removeChild(scriptEle);
			};
			$document[0].body.appendChild(scriptEle);
		}
	}]);

})(angular);