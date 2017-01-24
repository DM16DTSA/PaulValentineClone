angular.module('app').service('contactSrvc', function($http){
  this.send = (obj)=>{
    return $http({
      method: 'POST',
      url: '/sendmail',
      data: obj
    }).then(function(res){
      console.log(res);
    });
  }
});//closing
