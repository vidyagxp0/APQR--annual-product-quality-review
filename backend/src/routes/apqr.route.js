import express from "express";
import {
  createApqr,
  getAPQRById,
  getAllAPQRData,
  updateAPQRById,
} from "../controllers/apqr.controller.js";
const apqrRouter = express.Router();
import { upload } from "../utils/multer.js";

apqrRouter.post("/create-apqr", upload.any(), createApqr);
apqrRouter.get("/get-all-apqr", getAllAPQRData);
apqrRouter.get("/get-apqr/:id", getAPQRById);
apqrRouter.put("/update-apqr/:id", updateAPQRById);
export default apqrRouter;
