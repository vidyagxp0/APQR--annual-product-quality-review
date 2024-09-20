import express from "express";
import {
  createApqr,
  getAPQRAuditTrail,
  getAPQRById,
  getAllAPQRData,
  updateAPQRById,
} from "../controllers/apqr.controller.js";
const apqrRouter = express.Router();
import { upload } from "../utils/multer.js";
// import {checkJwtToken, authorizeUserRole } from "../middleware/authentication.js";

apqrRouter.post("/create-apqr", upload.any(), createApqr);
apqrRouter.get("/get-all-apqr", getAllAPQRData);
apqrRouter.get("/get-apqr/:id", getAPQRById);
apqrRouter.put("/update-apqr/:id", updateAPQRById);
apqrRouter.get("/get-apqr-audit-trail/:id", getAPQRAuditTrail);
export default apqrRouter;
