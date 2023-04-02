import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getallHotel, updatedHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


//create//////////////////////////////////////////////////

router.post("/",verifyAdmin, createHotel);
  

//update//////////////////////////////////////////////////

router.put("/:id",verifyAdmin, updatedHotel)

//Delete////////////////////////////////////////////////////

router.delete("/:id",verifyAdmin, deleteHotel)

//Get by id////////////////////////////////////////////////

router.get("/:id", getHotel) 

//Get all/////////////////////////////////////////////////

router.get("/", getallHotel) 



export default router;
