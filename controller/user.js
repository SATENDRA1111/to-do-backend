import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import { sendcookie } from "../utils/feature.js";
import ErrorHandlere from "../middlewares/error.js";

// function
 export  const login=async(req,res,next)=>{
  
   try {
    const{email,password}=req.body;

    const user=await User.findOne({email}).select("+password");
 
    if(!user) return next (new ErrorHandlere("Invalid Email or Password",400));
 
    const ismatch = await bcrypt.compare(password, user.password);
  
    if(!ismatch) return next (new ErrorHandlere("Invalid Password",400));
 
    sendcookie(user, res, `Welcome back, ${user.name}`, 200);
  } 
    catch (error) {
    next(error);
   }
  };

 export const register=async(req,res,next)=>{
    try {
      const {name,email,password}=req.body;
    let user = await User.findOne({email});
   
    if(user) return next (new ErrorHandlere("User Already Exist",400));
   
    
    const hashedpassword = await  bcrypt.hash(password,10);
   user= await User.create({name,email, password: hashedpassword});

  sendcookie(user,res,"Registered Successfully",201)
    } catch (error) {
     next(error); 
    }
   
};


export const getmyprofile=(req,res)=>{
 
  res.status(200).json({
    success: true,
    user: req.user,
  });
}

  export const logout = (req,res)=>{
    res.status(200).cookie("token","",{expires:new Date(Date.now()),
      sameSite: process.env.NODE_ENV ? "lax" : "none",
      secure: process.env.NODE_ENV==="development"? false : true,
    })
    .json({
      success: true,
      user: req.user,
  })
};




