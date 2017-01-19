angular.module("app")
	.service("mainService", function($http) {
		this.getWatches = function() {
			return $http.get('/watches')
			.then(function(response) {
				return response;
			})
		};
		this.getStraps = function() {
			return $http.get('/straps')
			.then(function(response) {
				return response;
			})
		}
});
