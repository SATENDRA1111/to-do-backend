import express from "express";
import { getmyprofile,  login,  register, logout  } from "../controller/user.js";
import { isauthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/new", register);

router.post("/login",login);

router.get("/me",isauthenticated,getmyprofile);

router.get("/logout",logout);


export default router;
