const mongoose = require('mongoose');

mongoose.connect("mongo://localhost:27017/Econmmerce",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then((data)=>{
    console.log(`MongoDB connected to server : ${data.connection.host}`);
}).catch((err)=>{
    console.log(err);
})