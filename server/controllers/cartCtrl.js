module.exports = {
  //get full cart
  getCart: (req,res,next)=>{
    if(!req.session.cart){
      req.session.cart = null;
      res.status(200).send(req.session.cart);
    }else{
      req.session.cart.forEach((element,index)=>{
        element.subPrice = element.quantity * element.price;
      });
      for(let i = req.session.cart.length-1; i >= 0; i--){
        if(req.session.cart[i].quantity === 0){
          req.session.cart.splice(i,1);
        }
      };
      res.status(200).send(req.session.cart);
    }
  },
  //add item to cart
  postCart: (req,res,next)=>{
    if(!req.session.cart){
      req.session.cart = [];
      req.session.cart.push(req.body);
      req.session.cart.forEach((element,index)=>{
        element.subPrice = element.quantity * element.price;
      });
      for(let i = req.session.cart.length-1; i >= 0; i--){
        if(req.session.cart[i].quantity === 0){
          req.session.cart.splice(i,1);
        }
      };
      res.status(200).send(req.session.cart);
    }else{
      req.session.cart.push(req.body);
      req.session.cart.forEach((element,index)=>{
        element.subPrice = element.quantity * element.price;
      });
      for(let i = req.session.cart.length-1; i >= 0; i--){
        if(req.session.cart[i].quantity === 0){
          req.session.cart.splice(i,1);
        }
      };
      res.status(200).send(req.session.cart);
    }
  },
  //update quantity
  putCart: (req,res,next)=>{
    if(!req.session.cart){
      req.session.cart = null;
      res.status(200).send(req.session.cart);
    }else{
      //loop through array to find item;
      for(let i = req.session.cart.length-1; i >= 0; i--){
        if(req.session.cart[i]._id === req.params.id || req.session.cart[i].quantity === 0){
          req.session.cart.splice(i,1);
        }
      };
      req.session.cart.push(req.body);
      req.session.cart.forEach((element,index)=>{
        element.subPrice = element.quantity * element.price;
      });
      res.status(200).send(req.session.cart);
    }
  },
  //delete one item off of cart
  deleteCart: (req,res,next)=>{
    if(!req.session.cart){
      req.session.cart = null;
      res.status(200).send(req.session.cart);
    }else{
      for(let i = req.session.cart.length-1; i >= 0; i--){
        if(req.session.cart[i]._id === req.params.id){
          req.session.cart.splice(i,1);
        }
      };
      req.session.cart.forEach((element,index)=>{
        element.subPrice = element.quantity * element.price;
      });
      for(let i = req.session.cart.length-1; i >= 0; i--){
        if(req.session.cart[i].quantity === 0){
          req.session.cart.splice(i,1);
        }
      };
      res.status(200).send(req.session.cart);
    }
  },
  //empty out all items in cart
  destroyCart: (req,res,next)=>{
    req.session.cart = null;
    res.status(200).send(req.session.cart);
  },
  cartTotal: (req,res,next)=>{
    req.session.cartTotal = 0;
    req.session.cart.forEach((element,index)=>{
      req.session.cartTotal = (req.session.cartTotal + (parseFloat(element.price)*parseFloat(element.quantity)));
    });
    res.status(200).send(req.session.cartTotal);
  }
}//closing
