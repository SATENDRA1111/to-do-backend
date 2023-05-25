import mongoose from "mongoose";

 export const connectdb=()=>{
mongoose.connect(process.env.MONGO_URI,{
dbName:"backendapi",})
.then(()=> console.count("database connected"))
.catch((e)=> console.log(e))
}

// if want to change cloud url then change here---MONGO_URI="mongodb://127.0.0.1:27017"(in config.env)