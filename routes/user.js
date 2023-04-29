import express from "express";
import { User } from "../models/user.js";
import { deleteuser, getallusers, getuserdetail, register, specialfunc, upadateuser } from "../controller/user.js";

const router = express.Router();

router.get("/all", getallusers)

router.post("/new", register)

router.get("/userid/special", specialfunc)

// DYNAMIC API
router
.route("/userid/:id")
.get(getallusers)
.put(upadateuser)
.delete(deleteuser)

// router.get("/userid/:id", getuserdetail)

// router.put("/userid/:id", upadateuser)

// router.delete("/userid/:id", deleteuser)



export default router;