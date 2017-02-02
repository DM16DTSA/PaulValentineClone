
angular.module('app').controller('cartCtrl',function($scope, $stateParams, $rootScope, cartSrvc, mainService){
  //get list of watches
  //comment out once cart Ctrl is ready
  mainService.getWatches().then(function(res){
    $scope.listWatches = res.data;
  });
  // function gets cart from session. If no cart then sets cart to null;
  let getCart = ()=>{
    cartSrvc.getCart().then((res)=>{
        $scope.cart = res.cart;
        $scope.total = res.subTotal;
    });
  };

  //function post new item to cart
  $scope.postCart = (obj)=>{
    //obj needs to be the watch obj from page
    cartSrvc.postCart(obj);
    //call getCart to render cart on DOM
    getCart();
  };

  //function updates cart for correct quantity
  $scope.putCart = (obj,str)=>{
    console.log(str);
    //string argument needs to be either 'add' or 'sub'
    cartSrvc.putCart(obj,str).then((res)=>{
      //call getCart to render cart on DOM
      getCart();
    });
  };

  //delete one item off of cart
  $scope.deleteCartItem = (obj)=>{
    cartSrvc.deleteCartItem(obj).then((res)=>{
      //call getCart to render cart on DOM
      getCart();
    });
  };
  //delete all items in cart
  $scope.deleteAllCart = ()=>{
    cartSrvc.destroyCart().then((res)=>{
      //call getCart to render cart on DOM
      getCart();
    });
  }
  // render cart on DOM when hitting page
  getCart();
});//closing
