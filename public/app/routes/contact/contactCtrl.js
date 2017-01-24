angular.module("app")
.controller('contactCtrl', function($scope, $stateParams, contactSrvc, $rootScope) {
  // $rootScope.header = "Contact – Paul Valentine US";
  $scope.send = function(name,email,number,message){
    console.log('contactCtrl fired',name,email,number,message);
    if(!name || !email || !number || !message){
      return swal('please fill out all fields');
    }
    if(!email.match(/@/gi)){
      return swal('please enter a valid email');
    }
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
  // return alert('Info sent');
});
