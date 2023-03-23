import express from "express";
import { createHotel, deleteHotel, getbyidHotel, getallHotel, updateHotel } from "../../controllers/hotelCont.js";

import hotels from "../modeles/hotels.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//create
router.post("/", async (req, res, next) => {
  const newHotel = new hotels(req.body);
  
    try {
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (err) {
      next(err);
    }
  });

//update

router.put("/:id", async (req, res, next) => {
  try {
    const updateHotel = await hotels.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json(updateHotel);
  } catch (err) {
    next(err);
  }
});

//delete

router.delete("/:id", async (req, res, next) => {
  console.log("hotel deleted");
  try {
    await hotels.findByIdAndDelete(req.params.id, {
      $set: req.body,
    });

    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
});

 //get by id

router.get("/:id", async (req, res, next) => {
  try {
    const getHotel = await hotels.findById(req.params.id);

    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
});

//getall

router.get("/", async (req, res, next) => {
  console.log("hotels show");
  try {
    const getallHotel = await hotels.find();
    res.status(200).json(getallHotel);
    console.log("hotel showed");
  } catch (err) {
    next(err);
  }
});

export default router;
