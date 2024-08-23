import { APQR } from "../models/apqr.model.js";

export const createApqr = async (req, res) => {
  console.log("req.body", req.body);

  try {
    const newAPQR = await APQR.create({
      productName: req.body.productName,
      genericName: req.body.genericName,
      initiator: req.body.initiator,
      reviewStartDate: new Date(req.body.reviewStartDate), // Use the current date/time
    });
    return res.json(newAPQR);
  } catch (error) {
    console.error("Error creating APQR:", error);
    return res.status(500).json({ error: error.message });  
  }
};

