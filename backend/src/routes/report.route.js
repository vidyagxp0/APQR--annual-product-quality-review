import express from "express";
import { generatePdf } from "../controllers/report.controller.js";

const router = express.Router();

router.get("/", generatePdf);

export default router;
