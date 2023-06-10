import express  from "express";
import { deletetask, getmytask, newtask, updatetask } from "../controller/task.js";
import { isauthenticated } from "../middlewares/auth.js";

const router =express.Router();

router.post("/new",isauthenticated,newtask);

router.get("/my",isauthenticated,getmytask);

router.route("/:id")
.put(isauthenticated,updatetask)
.delete(isauthenticated,deletetask);

export default router;
