import { APQR } from "../models/apqr.model.js";

export const createApqr = async (req, res) => {
  try {
    const newAPQR = await APQR.create({
      pqrNo: req.body.pqrNo || 0,
      productName: req.body.productName,
      productCode: req.body.productCode || [],
      genericName: req.body.genericName,
      dosageForm: req.body.dosageForm,
      initiator: req.body.initiator,
      reviewStartDate: req.body.reviewStartDate ? new Date(req.body.reviewStartDate) : null,
      reviewEndDate: req.body.reviewEndDate ? new Date(req.body.reviewEndDate) : null,
      mfgLicNo: req.body.mfgLicNo,
      productDescription: req.body.productDescription,
      processFlow: req.body.processFlow,
      totalBatchesManufactured: req.body.totalBatchesManufactured || 0,
      totalBatchesApprovedReleased: req.body.totalBatchesApprovedReleased || 0,
      totalProcessValidationBatches: req.body.totalProcessValidationBatches || 0,
      totalReprocessedBatches: req.body.totalReprocessedBatches || 0,
    });

    return res.json(newAPQR);
  } catch (error) {
    console.error("Error creating APQR:", error);
    return res.status(500).json({ error: error.message });
  }
};
