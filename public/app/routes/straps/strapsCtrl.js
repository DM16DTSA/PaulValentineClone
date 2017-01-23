angular.module("app")
.controller('strapsCtrl', function($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Straps – Paul Valentine US";
  mainService.getStraps()
  .then(function(response) {
    $scope.collStraps = response.data;
    // console.log(response.data)
  })

});
