const hotels = require("../src/modeles/hotels");

// import hotels from "../src/modeles/hotels.js";

//////////create//////////////////////////////////////////
// exports.createHotel = async (req, res, next) => {
// const newHotel = new hotels(req.body);

//   try {
//     const savedHotel = await newHotel.save();
//     res.status(200).json(savedHotel);
//   } catch (err) {
//     next(err);
//   }
// };

////update///////////////////////////////////////////
// exports.updateHotel = async (req, res, next) => {
//   try {
//     const updateHotel = await hotels.findByIdAndUpdate(req.params.id, {
//       $set: req.body,
//     });

//     res.status(200).json(updateHotel);
//   } catch (err) {
//     next(err);
//   }
// };

////////delete////////////////////////////////////////
// exports.deleteHotel = async (req, res, next) => {
//   console.log("hotel deleted");
//   try {
//     await hotels.findByIdAndDelete(req.params.id, {
//       $set: req.body,
//     });

//     res.status(200).json("Hotel has been deleted");
//   } catch (err) {
//     next(err);
//   }
// };

///////getbyid////////////////////////////////////////
// exports.getbyidHotel = async (req, res, next) => {
//   try {
//     const getHotel = await hotels.findById(req.params.id);

//     res.status(200).json(getHotel);
//   } catch (err) {
//     next(err);
//   }
// };

/////////getall////////////////////////////////////////
// exports.getallHotel = async (req, res, next) => {
//   console.log("hotels show");
//   try {
//     const getallHotel = await hotels.find();
//     res.status(200).json(getallHotel);
//     console.log("hotel showed");
//   } catch (err) {
//     next(err);
//   }
// };
