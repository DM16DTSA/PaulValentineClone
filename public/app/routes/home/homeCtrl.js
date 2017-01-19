angular.module("app")
.controller('homeCtrl', function($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Paul Valentine | badass watches for babes all over the world – Paul Valentine US";
  mainService.getWatches()
  .then(function(response) {
    $scope.mainWatches = response.data;
    console.log($scope.mainWatches)
  })

});
