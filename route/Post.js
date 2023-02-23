const express=require("express");

const router=express.Router();

const Post=require('../model/Post')

router.post('/add',(req,res)=>{

    const post=new Post(req.body);

    post.save((err,post)=>{
        res.send({post})
    });

});

module.exports=router;