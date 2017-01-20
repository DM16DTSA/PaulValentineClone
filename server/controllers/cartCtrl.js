module.exports = {
  getCart: (req,res,next)=>{
    if(!req.session.cart){
      res.status(200).send(false);
    }else{
      res.status(200).send(req.session.cart);
    }
  },
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
  putCart: (req,res,next)=>{
    if(!req.session.cart){
      res.status(200).send(false);
    }else{
      req.session.cart.forEach((element, index)=>{
        if(element._id === req.params.id){
          if(req.params.quantity == 0){
            req.session.cart.splice(index,1);
            res.status(200).send(req.session.cart);
          }
          element.quantity = req.params.quantity;
          res.status(200).send(req.session.cart);
        }
      });
    }
  },
  deleteCart: (req,res,next)=>{
    if(!req.session.cart){
      res.status(200).send(false);
    }else{
      req.session.cart.forEach((element, index)=>{
        if(element._id === req.params.id){
          req.session.cart.splice(index,1);
          res.status(200).send(req.session.cart);
        }
      });
    }
  },
  destroyCart: (req,res,next)=>{
    req.session.cart = [];
    res.status(200).send(req.session.cart);
  }
}//closing
