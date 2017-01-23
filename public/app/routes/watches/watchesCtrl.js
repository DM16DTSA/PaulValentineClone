angular.module("app")
.controller('watchesCtrl', function($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Watches – Paul Valentine US";
  mainService.getWatches()
  .then(function(response) {
    $scope.collWatches = response.data;
    console.log(response.data)
  })

});
