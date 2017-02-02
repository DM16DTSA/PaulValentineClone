module.exports = {
  //get full cart
  getCart: (req,res,next)=>{
    if(!req.session.cart){
      let total = 0;
      return res.status(200).send({cart:null,subTotal: total});
    }
    if(req.session.cart){
      for(let i = req.session.cart.length-1; i>=0; i--){
        if(req.session.cart[i].quantity <= 0){
          req.session.cart.splice(i,1);
        }
      }
      req.session.cart.forEach((element,index)=>{
        element.subPrice = element.quantity * element.price;
      });
      let total = 0;
      for(var i = req.session.cart.length-1; i>=0; i--){
        total += req.session.cart[i].subPrice;
      }
      return res.status(200).send({cart:req.session.cart,subTotal: total});
    }
  },
  //add item to cart
  postCart: (req,res,next)=>{
    if(!req.session.cart){
      req.session.cart = [];
      req.session.cart.push(req.body);
      return res.status(200).send(req.session.cart);
    }
    let found = false;
      req.session.cart.forEach((element,index)=>{
        if(element._id === req.body._id){
          element.quantity += 1;
          found = true;
        }
      });
      if(!found){
        req.session.cart.push(req.body);
        return res.status(200).send(req.session.cart);
      }
      if(found){
        return res.status(200).send(req.session.cart);
      }
  },
  //update quantity
  putCart: (req,res,next)=>{
    console.log(req.params.action);
    if(req.params.action === 'sub'){
      req.session.cart.forEach((element,index)=>{
        if(element._id === req.params.id){
          element.quantity -= 1;
        }
      });
      return res.status(200).send(req.session.cart);
    }
    if(req.params.action === 'add'){
      req.session.cart.forEach((element,index)=>{
        if(element._id === req.params.id){
          element.quantity += 1;
        }
      });
      return res.status(200).send(req.session.cart);
    }
  },
  //delete one item off of cart
  deleteCart: (req,res,next)=>{
    if(!req.session.cart){
      return res.status(200).send(null);
    }
      for(let i = req.session.cart.length-1; i >= 0; i--){
        if(req.session.cart[i]._id === req.params.id){
          req.session.cart.splice(i,1);
          return res.status(200).send(req.session.cart);
        }
      };
  },
  //empty out all items in cart
  destroyCart: (req,res,next)=>{
    req.session.cart = null;
    return res.status(200).send(req.session.cart);
  },

}//closing
