angular.module("app")
	.service("mainService", function($http) {
		this.getWatches = function(x) {
			return $http.get('/watches')
			.then(function(response) {
				if(x) {
					return response.data.filter(function(el) {
						if(el._id == x) {
							return el;

						}
					})
				} else {
				return response;
				}
			})
		};
		this.getStraps = function(y) {
			return $http.get('/straps')
			.then(function(response) {
				if(y) {
					return response.data.filter(function(el) {
						if(el._id == y) {
							return el;
						}
					})
				} else {
					return response;
				}
			})
		}
});
