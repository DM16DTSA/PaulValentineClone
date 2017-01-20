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
      for(let i = req.session.length-1; i >= 0; i--){
        if(req.session[i] === req.params.id){
          req.session.cart.splice(i,1);
        }
      };
      res.status(200).send(req.session.cart);
    }
  },
  deleteCart: (req,res,next)=>{
    if(!req.session.cart){
      res.status(200).send(false);
    }else{
      for(let i = req.session.length-1; i >= 0; i--){
        if(req.session[i]._id === req.params.id){
          req.session.cart.splice(i,1);
        }
      };
      res.status(200).send(req.session.cart);
    }
  },
  destroyCart: (req,res,next)=>{
    req.session.cart = [];
    res.status(200).send(req.session.cart);
  }
}//closing
