angular.module("app")
	.service("mainService", function($http) {
		this.getWatches = function(x) {
			return $http.get('/watches')
			.then(function(response) {
				if(x) {
					return response.data.filter(function(x) {
						return id === x
					})
				}
				else {
				return response;
			}
			})
		};
		this.getStraps = function() {
			return $http.get('/straps')
			.then(function(response) {
				return response;
			})
		}
});
