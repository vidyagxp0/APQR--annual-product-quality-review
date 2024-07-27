import express from "express";
import { generatePdf, viewReport } from "../controllers/report.controller.js";

const router = express.Router();

router.get("/generate-pdf", generatePdf);

router.get("/view-report", viewReport);
export default router;
