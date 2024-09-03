import express from "express";
import {
  generatePdf,
  generatePdfbyId,
  viewReport,
  viewReportByID,
} from "../controllers/report.controller.js";

const router = express.Router();

router.get("/generate-pdf", generatePdf);
router.get("/generate-pdf/:id", generatePdfbyId);

router.get("/view-report", viewReport);
router.get("/view-report/:id", viewReportByID);
export default router;
