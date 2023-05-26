import express from "express"; 
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"; 

export const app =express();

config({
  path:"./data/config.env",  
})

// midlware
// express.json alwys use before routes
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
  origin:[process.env.FRONTEND_URL],
  methods: ["GET","POST","PUT","DELETE"],
  credentials:true,
})
);

app.get("/",(req,res)=>{
res.send("Nice working");
});

//  using routs
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);

// use errorMiddlewarea
app.use(errorMiddleware);
