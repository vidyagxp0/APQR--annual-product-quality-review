import express from "express";
import { createApqr, getAllAPQRData } from "../controllers/apqr.controller.js";
const apqrRouter = express.Router();

apqrRouter.post("/create-apqr", createApqr);
apqrRouter.get("/get-apqr",getAllAPQRData)
export default apqrRouter;
