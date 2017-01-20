angular.module('app').service('cartCtrl',($scope, $stateParams, $rootScope, cartSrvc)=>{
  //function gets cart from session. If no cart then sets cart to null;
  $scope.getCart = ()=>{
    cartSrvc.getCart().then((res)=>{
      if(res){
        $scope.cart = res;
        console.log('cartCtrl get', res);
      }else{
        $scope.cart = null;
        console.log('cartCtrl get', res);
      }
    });
  };
  //function post new item to cart
  $scope.postCart = (obj,quantity)=>{
    if(!obj.quantity && quantity === 0){
      obj.quantity = 1;
    }else{
      obj.quantity = quantity;
    }
    cartSrvc.postCart(obj).then((res)=>{
      $scope.cart = res;
      console.log('cartCtrl post', res);
    });
  };
  //function updates cart for correct quantity
  $scope.putCart = (obj,quantity)=>{
    if(!obj.quantity && quantity === 0){
      obj.quantity = 1;
    }else{
      obj.quantity = quantity;
    }
    cartSrvc.putCart(obj).then((res)=>{
      $scope.cart = res;
      console.log('cartCtrl put', res);
    });
  };
  //delete one item off of cart
  $scope.deleteCartItem = (obj)=>{
    cartSrvc.deleteCartItem(obj).then((res)=>{
      $scope.cart = res;
      console.log('cartCtrl delete', res);
    });
  };
  //delete all items in cart
  $scope.deleteAllCart = ()=>{
    cartSrvc.destroyCart().then((res)=>{
      $scope.cart = res;
      console.log('cartCtrl destroy', res);
    });
  }
});//closing
