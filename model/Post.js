const mongoose=require('mongoose');

const Post=mongoose.Schema({
    name: String,
    location: String,
    likes: Number,
    description: String,
    PostImage: String,
},
{Date: true});

module.exports=mongoose.model("Post" ,Post);