angular.module("app")
.controller('productCtrl', function($scope, $stateParams, mainService, $rootScope) {
  mainService.getWatches()
  .then(function(response) {
    $scope.collWatches = response.data;
    $rootScope.header = "Watches – Paul Valentine US";
    console.log(response.data)
  })

});
