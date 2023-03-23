import express from "express";

const Users = require("../modeles/user");
import { createError } from "../utils/error.js";
import { verifAdmin, verifUser, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user you are Logged in!")
})


router.get("/checkuser/:id",verifUser,(req,res,next)=>{
    res.send("hello user you are Logged in  and can delete your account")
})

router.get("/checkadmin/:id",verifAdmin,(req,res,next)=>{
    res.send("hello admin you are Logged in  and can delete all account")
})

//update user

router.put("/:id", async (req, res, next) => {
  try {
    const updatUser = await Users.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json(updatUser);
  } catch (err) {
    next(err);
  }
});



//delete user

router.delete("/:id", async (req, res, next) => {
  try {
    await Users.findByIdAndDelete(req.params.id, {
      $set: req.body,
    });

    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
});

//get by id user

router.get("/:id", async (req, res, next) => {
  try {
    const getUser = await Users.findById(req.params.id);

    res.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
});

//getall user

router.get("/", async (req, res, next) => {
  try {
    const getallUser = await Users.find();
    res.status(200).json(getallUser);
    console.log("hotel showed");
  } catch (err) {
    next(err);
  }
});

export default router;
