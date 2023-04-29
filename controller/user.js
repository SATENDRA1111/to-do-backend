import { User } from "../models/user.js";

// function
export  const getallusers=async(req,res)=>{
    const allusers= await User.find({})
    console.log(req.query);
    res.json({
    success: true,
     allusers,
    });
 }; 

 export const register=async(req,res)=>{
    const{name, email, password}=req.body;
     await User.create({
        name,
        email,
        password,
     });
    res.status(201).cookie("prouteri","lol").json({
     success: true,
     message: "registered succuseful",
    });
};
export const specialfunc=async(req,rew)=>{
    res.json({
       success:true,
       message:"just joking" 
    })
}

export const getuserdetail=async(req,res)=>{
    const {id}=req.params;
    const user=await User.findById(id);
    res.json({
        success: true,
        user,
    })
}
export const upadateuser=async(req,res)=>{
    const {id}=req.params;
    const user=await User.findById(id);
    res.json({
        success: true,
        message:"update"
    })
}

export const deleteuser=async(req,res)=>{
    const {id}=req.params;
    const user=await User.findById(id);
    // await user.remove();
    res.json({
        success: true,
        message:"delet"
    })
}


