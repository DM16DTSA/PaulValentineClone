angular.module("app")
.controller('contactCtrl', function($scope, $stateParams, contactSrvc, $rootScope) {
  // $rootScope.header = "Contact – Paul Valentine US";
  $scope.send = function(name,email,number,message){
    console.log('contactCtrl fired',name,email,number,message);
    let obj = {
      name: name,
      email: email,
      phone: number,
      message: message
    }
    contactSrvc.send(obj);
    $scope.name = '';
    $scope.email = '';
    $scope.number = '';
    $scope.message = '';
  };

});
