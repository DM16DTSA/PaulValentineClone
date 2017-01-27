angular.module('app').controller('cartCtrl',function($scope, $stateParams, $rootScope, cartSrvc, mainService){
  $scope.itemsInCart = (arr)=>{
    if(!arr || !arr[0]){
      return false;
    }else{
      return true;
    }
  }

  let totalCount = (arr)=>{
    if(arr[0] && arr[1]){
      $scope.total = arr.reduce((a,b)=>{
        return a.subPrice + b.subPrice;
      });
    }else if(arr[0] && !arr[1]){
      $scope.total = arr[0].subPrice;
    }else if(!arr[0] || !arr){
      $scope.total = 0;
    }
  };

  //get list of watches
  //comment out once cart Ctrl is ready
  mainService.getWatches().then(function(res){
    $scope.listWatches = res.data;
  });

  // function gets cart from session. If no cart then sets cart to null;
  $scope.getCart = ()=>{
    cartSrvc.getCart().then((res)=>{
      // for(let i=res.length-1; i >=0; i--){
      //   if(res[i].quantity === 0){
      //     res.splice(i,1);
      //   }
      // };
        $scope.cart = res;
        totalCount($scope.cart);
    });
  };
  //invoking get cart
  // $scope.getCart();


  //function updates cart for correct quantity
  $scope.putCart = (obj,str)=>{

    if(str.match(/sub/gi)){
      obj.quantity--;
      if(obj.quantity === 0){
        $scope.deleteCartItem(obj);
      }
    }
    if(str.match(/add/gi)){
      obj.quantity++;
    }

    cartSrvc.putCart(obj).then((res)=>{
      for(let i=res.length-1; i >=0; i--){
        if(res[i].quantity === 0){
          res.splice(i,1);
        }
      };
      $scope.cart = res;
      totalCount($scope.cart);
    });
  };


  //function post new item to cart
  $scope.postCart = (obj)=>{
    if(!obj.quantity || obj.quantity == 0){
      obj.quantity = 1;
      // obj.subPrice = (obj.quantity*obj.price);
    }
    console.log(obj.quantity);
    //find duplicates and just add to the quantity
    let postBool = false;
    for(let i = 0; i < $scope.cart.length; i++){
      if(obj._id === $scope.cart[i]._id){
        postBool = true;
      }
    };
    //if there is a duplicate then call put or just add to cart if no duplicate
    if(postBool){
      $scope.putCart(obj,'add');
    }else{
      cartSrvc.postCart(obj).then((res)=>{
        for(let i=res.length-1; i >=0; i--){
          if(res[i].quantity === 0){
            res.splice(i,1);
          }
        };
        $scope.cart = res;
        totalCount($scope.cart);
      });
    }
  };


  //delete one item off of cart
  $scope.deleteCartItem = (obj)=>{
    cartSrvc.deleteCartItem(obj).then((res)=>{
      for(let i=res.length-1; i >=0; i--){
        if(res[i].quantity === 0){
          res.splice(i,1);
        }
      };
      $scope.cart = res;
      totalCount($scope.cart);
    });
  };
  //delete all items in cart
  $scope.deleteAllCart = ()=>{
    cartSrvc.destroyCart().then((res)=>{
      for(let i=res.length-1; i >=0; i--){
        if(res[i].quantity === 0){
          res.splice(i,1);
        }
      };
      $scope.cart = res;
      totalCount($scope.cart);
    });

  }
  $scope.getCart();
});//closing
