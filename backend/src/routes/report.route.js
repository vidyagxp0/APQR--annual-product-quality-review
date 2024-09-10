import express from "express";
import { generatePdfbyId, viewReportByID } from "../controllers/report.controller.js";

const router = express.Router();

router.get("/generate-report/:id", generatePdfbyId);
router.get("/view-report/:id", viewReportByID);

export default router;
