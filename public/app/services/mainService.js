angular.module("app")
	.service("mainService", function($http) {
		this.getWatches = function(x) {
			return $http.get('/watches')
			.then(function(response) {
				if(x) {
					return response.data.filter(function(el) {
						if(el._id == x) {
							return el;
							console.log(el)
						}
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
