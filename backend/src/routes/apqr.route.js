import express from "express";
import { createApqr } from "../controllers/apqr.controller.js";
const apqrRouter = express.Router();

apqrRouter.post("/create-apqr", createApqr);
export default apqrRouter;
