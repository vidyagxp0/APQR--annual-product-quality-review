import express from "express";
import {
  ReviewToOpen,
  createApqr,
  eSignature,
  getAPQRAuditTrail,
  getAPQRById,
  getAllAPQRData,
  getDivision,
  submitToCFTReview,
  submitToClosedReview,
  submitToHODReview,
  submitToInitiatorUpdateReview,
  submitToQAReview,
  submitToQA_HODReview,
  updateAPQRById,
} from "../controllers/apqr.controller.js";
const apqrRouter = express.Router();
import { upload } from "../utils/multer.js";
import {
  checkJwtToken,
  authorizeUserRole,
} from "../middleware/authentication.js";

apqrRouter.post("/create-apqr", upload.any(), createApqr);
apqrRouter.get("/get-all-apqr", getAllAPQRData);
apqrRouter.get("/get-apqr/:id", getAPQRById);
apqrRouter.put("/update-apqr/:id", updateAPQRById);
apqrRouter.get("/get-apqr-audit-trail/:id", getAPQRAuditTrail);
apqrRouter.get("/get-division", getDivision);
apqrRouter.post("/e-Signature", checkJwtToken, eSignature);
apqrRouter.post("/send-review-hod", checkJwtToken, submitToHODReview);
apqrRouter.post("/send-review-qa", checkJwtToken, submitToQAReview);
apqrRouter.post("/send-review-cft", checkJwtToken, submitToCFTReview);
apqrRouter.post(
  "/send-review-initiator-update",
  checkJwtToken,
  submitToInitiatorUpdateReview
);
apqrRouter.post("/send-review-qa-hod", checkJwtToken, submitToQA_HODReview);
apqrRouter.post("/send-review-closed", checkJwtToken, submitToClosedReview);
apqrRouter.post("/review-to-open", checkJwtToken, ReviewToOpen);
export default apqrRouter;
