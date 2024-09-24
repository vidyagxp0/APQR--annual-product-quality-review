import express from "express";
import {
    chatPdf,
  generateAuditPdfbyId,
  generatePdfbyId,
  viewReportByID,
} from "../controllers/report.controller.js";

const router = express.Router();

router.get("/generate-report/:id", generatePdfbyId);
router.get("/chat-pdf/:id", chatPdf);
router.get("/view-report/:id", viewReportByID);
router.get("/audit-trail-report/:id", generateAuditPdfbyId);


export default router;
