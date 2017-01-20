angular.module('app').service('cartSrvc',($http)=>{
  //get all cart from session cart
  this.getCart = ()=>{
    return $http({
      method: 'GET',
      url: '/api/cart',
    }).then((res)=>{
      console.log('Cart service get cart', res.data);
      return res.data;
    });
  };
  //post new item to cart
  this.postCart = (obj)=>{
    return $http({
      method: 'POST',
      url: '/api/cart',
      data: obj
    }).then((res)=>{
      console.log('Cart service Post cart', res.data);
      return res.data;
    });
  }
  //put for cart, change quantity on cart. uses obj_id and obj.quantity
  this.putCart = (obj)=>{
    return $http({
      method: 'PUT',
      url: '/api/cart/'+obj._id+'/'+obj.quantity,
    }).then((res)=>{
      console.log('Cart service Post cart', res.data);
      return res.data;
    });
  }
  //delete item from cart. uses obj_id
  this.deleteCartItem = (obj)=>{
    return $http({
      method: 'DELETE',
      url: '/api/cart/'+obj._id,
    }).then((res)=>{
      console.log('Cart service Post cart', res.data);
      return res.data;
    });
  }
});//closing
