import express from "express"
import { deleteUser, getUser, getallUser, updatedUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken, (req,res,next)=>{
//     res.send("Hello user, Your are logged in")
// })

// router.get("/checkuser/:id",verifyUser, (req,res,next)=>{
//     res.send("Hello user, Your are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
//     res.send("Hello admin, Your are logged in and you can delete all accounts")
// })

//update//////////////////////////////////////////////////

router.put("/:id",verifyUser, updatedUser)

//Delete////////////////////////////////////////////////////

router.delete("/:id",verifyUser, deleteUser)

//Get by id////////////////////////////////////////////////

router.get("/:id",verifyUser, getUser) 

//Get all/////////////////////////////////////////////////

router.get("/",verifyAdmin, getallUser) 


export default router;