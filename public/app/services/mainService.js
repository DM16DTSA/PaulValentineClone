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
		};
		this.addWatchReview = function(review) {
			return $http.put('/watches', review)
			.then(function(response) {
			return response
			})
		};
		this.addStrapReview = function(review) {
			return $http.put('/straps', review)
			.then(function(response) {
			return response
			})
		};
		this.getMoreStraps = function(arr) {
			return $http.post('/morestraps', arr)
			.then(function(response) {
				return response
			})
		};
		this.getSimilar = function(coll) {
			return $http.get('/similarW/'+ coll)
			.then(function(response) {
				return response
			})
		};
		this.similarStraps = function() {
			return $http.get('/similarS')
			.then(function(response) {
				return response
			})
		}
});
