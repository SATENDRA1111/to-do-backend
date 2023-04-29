import mongoose from "mongoose";

 export const connectdb=()=>{
mongoose.connect(process.env.MONGO_URI,{
dbName:"backendapi",})
.then(()=> console.count("database connected"))
.catch((e)=> console.log(e))
}
