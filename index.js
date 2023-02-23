const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const postRoute=require('./route/Post');
const cors=require('cors')
const app=express();
const uri=process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

  app.use(cors());

  app.use(bodyParser.json());

  app.use('/',postRoute)

app.listen(3000,()=>{
    console.log("server is live...")
})
