angular.module("app")
.controller('productCtrl', function($scope, $stateParams, mainService, $rootScope) {
  $scope.sel = "des"
  var strapsArr = ["587e9f6110648c27aee6d521", "587ea2d8be9a8127b9337ede", "587ea2d8be9a8127b9337edf", "587ea2d8be9a8127b9337ee0", "587ea2d8be9a8127b9337ee1", "587ea2d8be9a8127b9337ee2", "587ea2d8be9a8127b9337ee3", "587ea2d8be9a8127b9337ee4"];
  if(strapsArr.indexOf($stateParams.id.toString()) == -1) {
    mainService.getWatches($stateParams.id)
    .then(function(response) {
      var thP = response[0];
      $rootScope.header = thP.name + " – Paul Valentine US";
      console.log(response[0])
      if(thP.inStock === true) {
        $scope.buttonText = "ADD TO BAG";
      }
      else {
        $scope.buttonText = "EMAIL ME WHEN AVAILABLE"
      }
      // thP.inStock = false;
      thP.background = "../.." + thP.background.slice(9);
      thP.gallery.forEach(function(pic, index, arr) {
        arr[index] = "../.." + pic.slice(9)

      })
      $scope.thP = thP;
    })
  }
  else {
    mainService.getStraps($stateParams.id)
    .then(function(response) {
      var thP = response[0];
      $rootScope.header = thP.name + " – Paul Valentine US";
      console.log(response[0])
      if(thP.inStock === true) {
        $scope.buttonText = "ADD TO BAG";
      }
      else {
        $scope.buttonText = "EMAIL ME WHEN AVAILABLE"
      }
      // thP.inStock = false;
      thP.background = "../.." + thP.background.slice(9);
      thP.gallery.forEach(function(pic, index, arr) {
        arr[index] = "../.." + pic.slice(9)

      })
      $scope.thP = thP;
    })
  }


  $(".photoZoomed").on('mousemove', function(e){
    var containerHeight = $(this).innerHeight();
    var mousePositionY = (event.pageY / containerHeight) * 300;

    $(this).css({'background-position-y': mousePositionY + '%'
    });
 });

});
