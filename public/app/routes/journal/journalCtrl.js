angular.module("app")
.controller('journalCtrl', function($scope, $stateParams, mainService, $rootScope) {
  $rootScope.header = "Journal – Paul Valentine US";
$scope.test = 'HELLOWORLD';

});
