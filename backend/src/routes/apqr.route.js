import express from "express";
import { createApqr, getAPQRById, getAllAPQRData, updateAPQRById } from "../controllers/apqr.controller.js";
const apqrRouter = express.Router();

apqrRouter.post("/create-apqr", createApqr);
apqrRouter.get("/get-all-apqr",getAllAPQRData)
apqrRouter.get('/get-apqr/:id',getAPQRById)
apqrRouter.put('/update-apqr/:id',updateAPQRById)
export default apqrRouter;
