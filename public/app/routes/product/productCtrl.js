angular.module("app")
.controller('productCtrl', function($scope, $stateParams, mainService, $rootScope) {
  mainService.getWatches($stateParams.id)
  .then(function(response) {
    $scope.thisProduct = response[0];
    $rootScope.header = $scope.thisProduct.name + " – Paul Valentine US";
    console.log(response[0])
  })
});
