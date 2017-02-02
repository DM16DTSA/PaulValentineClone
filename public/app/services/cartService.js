angular.module('app').service('cartSrvc',function($http){
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
    console.log(obj);
    if(!obj.quantity){
      obj.quantity = 1;
    }
    console.log('Cart service Post cart', obj);
    return $http({
      method: 'POST',
      url: '/api/cart',
      data: obj
    }).then((res)=>{
      console.log('Cart service Post cart', res.data);
      return res.data;
    });
  };
  //put for cart, change quantity on cart. uses obj_id and obj.quantity
  this.putCart = (obj,str)=>{
    return $http({
      method: 'PUT',
      url: '/api/cart/'+obj._id+'/'+str
    }).then((res)=>{
      console.log('Cart service Put cart', res.data);
      return res.data;
    });
  };
  //delete item from cart. uses obj_id
  this.deleteCartItem = (obj)=>{
    return $http({
      method: 'DELETE',
      url: '/api/cart/'+obj._id,
    }).then((res)=>{
      console.log('Cart service delete cart', res.data);
      return res.data;
    });
  };
  this.destroyCart = ()=>{
    return $http({
      method: 'DELETE',
      url: '/api/destroy',
    }).then((res)=>{
      console.log('Cart service destroyCart', res.data);
      return res.data
    });
  };
});//closing
