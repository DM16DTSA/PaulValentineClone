angular.module("app")
.controller('returnsCtrl', function($scope, $stateParams, mainService, contactSrvc, $rootScope) {
  $rootScope.header = "Returns – Paul Valentine US";

  $scope.send = function(name,email,number,order,message){
    console.log('returnCtrl fired',name,email,number,order,message);
    if(!name || !email || !number || !order || !message){
      return swal('please fill out all fields');
    }
    if(!email.match(/@/gi)){
      return swal('please enter a valid email');
    }
    
    let obj = {
      name: name,
      email: email,
      phone: number,
      order: order,
      message: message
    }

    contactSrvc.send(obj);

    $scope.name = '';
    $scope.email = '';
    $scope.number = '';
    $scope.order = '';
    $scope.message = '';
  };

});
