import express from "express"
import { createRoom, deleteRoom, getRoom, getallRoom, updatedRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create//////////////////////////////////////////////////

router.post("/:hotelid",verifyAdmin, createRoom);
  

//update//////////////////////////////////////////////////

router.put("/:id",verifyAdmin, updatedRoom)

//Delete////////////////////////////////////////////////////

router.delete("/:id/:hotelid",verifyAdmin, deleteRoom)

//Get by id////////////////////////////////////////////////

router.get("/:id", getRoom) 

//Get all/////////////////////////////////////////////////

router.get("/", getallRoom) 


export default router;