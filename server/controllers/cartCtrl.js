module.exports = {
  //get full cart
  getCart: (req,res,next)=>{
    if(!req.session.cart){
      res.status(200).send(null);
    }else{
      res.status(200).send(req.session.cart);
    }
  },
  //add item to cart
  postCart: (req,res,next)=>{
    if(!req.session.cart){
      req.session.cart = [];
      req.session.cart.push(req.body);
      res.status(200).send(req.session.cart);
    }else{
      req.session.cart.push(req.body);
      res.status(200).send(req.session.cart);
    }
  },
  //update quantity
  putCart: (req,res,next)=>{
    if(!req.session.cart){
      res.status(200).send(null);
    }else{
      //loop through array to find item;
      for(let i = req.session.cart.length-1; i >= 0; i--){
        if(req.session.cart[i]._id === req.params.id){
          req.session.cart[i].quantity = req.params.quantity;
        }
      };
      res.status(200).send(req.session.cart);
    }
  },
  //delete one item off of cart
  deleteCart: (req,res,next)=>{
    if(!req.session.cart){
      res.status(200).send(false);
    }else{
      for(let i = req.session.cart.length-1; i >= 0; i--){
        if(req.session.cart[i]._id === req.params.id){
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
  }
}//closing
