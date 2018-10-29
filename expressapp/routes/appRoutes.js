var express = require('express');
var router = express.Router();
var User=require('../models/user');
router.post('/create', (req,res,next)=>{
  var newUser =new User({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    username:req.body.username,
    email:req.body.email



  });
  newUser.save((err,user)=>{
    if(err)
    res.status(500).json({errmsg:err});

      res.status(200).json({msg:user});
  });

});

router.get('/read', (req,res,next)=>{
  User.find({},(err,users)=>{
    if(err)
    res.status(500).json({errmsg:err});

      res.status(200).json({msg:users});
  });
});
router.put('/update', (req,res,next)=>{
User.findById(req.body._id,(err,user)=>{
  if(err)
  res.status(500).json({errmsg:err});
  user.firstname=req.body.firstname;
  user.lastname=req.body.lastname;
  user.username=req.body.username;
  user.email=req.body.email;
  user.save((err,user)=>{
    if(err)
    res.status(500).json({errmsg:err});

      res.status(200).json({msg:user});
  });
})
});
router.post('/delete/:id', (req,res,next)=>{
User.findOneAndRemove({_id:req.params.id},(err,user)=>{
  if(err)
  res.status(500).json({errmsg:err});

    res.status(200).json({msg:user});
});
});
module.exports=router;
