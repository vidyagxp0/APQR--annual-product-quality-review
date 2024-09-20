import { APQR } from "../models/apqr.model.js";
import gridRef from "../models/gridRef.model.js";
import { sequelize } from "../config/db.js";
import { getImageUrl } from "../middleware/authentication.js";
import { FormAuditTrail } from "../models/formAuditTrail.js";
import { User } from "../models/user.model.js";

export const createApqr = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { userId, comments, declaration } = req.body;
    const newAPQR = await APQR.create(
      {
        pqrNo: req.body.pqrNo,
        productName: req.body.productName,
        productCodes: req.body.productCodes || [],
        genericName: req.body.genericName,
        dosageForm: req.body.dosageForm,
        initiator: req.body.initiator,
        initiateDate: req.body.initiateDate,
        reviewStartDate: req.body.reviewStartDate
          ? new Date(req.body.reviewStartDate)
          : null,
        reviewEndDate: req.body.reviewEndDate
          ? new Date(req.body.reviewEndDate)
          : null,
        mfgLicNo: req.body.mfgLicNo,
        productDescription: req.body.productDescription,
        processFlow: req.body.processFlow,
        totalBatchesManufactured: req.body.totalBatchesManufactured || 0,
        totalBatchesApprovedReleased: req.body.totalBatchesApprovedReleased,
        totalProcessValidationBatches: req.body.totalProcessValidationBatches,
        totalReprocessedBatches: req.body.totalReprocessedBatches,
        tinyData: {
          tiny1: req.body.tiny1,
          tiny2: req.body.tiny2,
          tiny3: req.body.tiny3,
          tiny4: req.body.tiny4,
          tiny5: req.body.tiny5,
          tiny6: req.body.tiny6,
          tiny7: req.body.tiny7,
          tiny8: req.body.tiny8,
          tiny9: req.body.tiny9,
          tiny10: req.body.tiny10,
          tiny11: req.body.tiny11,
          tiny12: req.body.tiny12,
          tiny13: req.body.tiny13,
          tiny14: req.body.tiny14,
          tiny15: req.body.tiny15,
          tiny16: req.body.tiny16,
          tiny17: req.body.tiny17,
          tiny18: req.body.tiny18,
          tiny19: req.body.tiny19,
          tiny20: req.body.tiny20,
          tiny21: req.body.tiny21,
          tiny22: req.body.tiny22,
          tiny23: req.body.tiny23,
          tiny24: req.body.tiny24,
          tiny25: req.body.tiny25,
          tiny26: req.body.tiny26,
          tiny27: req.body.tiny27,
          tiny28: req.body.tiny28,
          tiny29: req.body.tiny29,
          tiny30: req.body.tiny30,
          tiny31: req.body.tiny31,
          tiny32: req.body.tiny32,
          tiny33: req.body.tiny33,
          tiny34: req.body.tiny34,
          tiny35: req.body.tiny35,
          tiny36: req.body.tiny36,
          tiny37: req.body.tiny37,
          tiny38: req.body.tiny38,
          tiny39: req.body.tiny39,
          tiny40: req.body.tiny40,
          tiny41: req.body.tiny41,
          tiny42: req.body.tiny42,
          tiny43: req.body.tiny43,
          tiny44: req.body.tiny44,
          tiny45: req.body.tiny45,
          tiny46: req.body.tiny46,
          tiny47: req.body.tiny47,
          tiny48: req.body.tiny48,
          tiny49: req.body.tiny49,
          tiny50: req.body.tiny50,
          tiny51: req.body.tiny51,
          tiny52: req.body.tiny52,
          tiny53: req.body.tiny53,
          tiny54: req.body.tiny54,
          tiny55: req.body.tiny55,
          tiny56: req.body.tiny56,
          tiny57: req.body.tiny57,
          tiny58: req.body.tiny58,
          tiny59: req.body.tiny59,
          tiny60: req.body.tiny60,
          tiny61: req.body.tiny61,
          tiny62: req.body.tiny62,
          tiny63: req.body.tiny63,
          tiny64: req.body.tiny64,
          tiny65: req.body.tiny65,
          tiny66: req.body.tiny66,
          tiny67: req.body.tiny67,
          tiny68: req.body.tiny68,
          tiny69: req.body.tiny69,
          tiny70: req.body.tiny70,
          tiny71: req.body.tiny71,
          tiny72: req.body.tiny72,
          tiny73: req.body.tiny73,
          tiny74: req.body.tiny74,
          tiny75: req.body.tiny75,
          tiny76: req.body.tiny76,
          tiny77: req.body.tiny77,
          tiny78: req.body.tiny78,
          tiny79: req.body.tiny79,
          tiny80: req.body.tiny80,
          tiny81: req.body.tiny81,
          tiny82: req.body.tiny82,
          tiny83: req.body.tiny83,
          tiny84: req.body.tiny84,
          tiny85: req.body.tiny85,
        },
      },
      { transaction: t }
    );

    const grids = [
      "manufacturingStage",
      "manufacturingSAPS",
      "rawMRS",
      "packingMRS",
      "reviewOfASL",
      "expiredRMD",
      "expiredPMD",
      "vendorQDORME",
      "vendorQDOPPM",
      "vendorQDPOG",
      "codeTCTD",
      "reviewORCEC",
      "manufacturingSD",
      "bufferFSDPV",
      "oosDetails",
      "capaDetails",
      "deviationDetails",
      "ootResults",
      "oolResults",
      "ooaResults",
      "reviewODSTR",
      "reviewODSTR2",
      "reviewODSTR3",
      "reviewODSTR4",
      "reviewODSTR5",
      "reviewODSTR6",
      "reviewODSTR7",
      "reviewODSTR8",
      "reviewODSTR9",
      "reviewODSTR10",
      "reviewODSTR11",
      "reviewODSTR12",
      "reviewODSTR13",
      "reviewODSTR14",
      "reviewODSTR15",
      "reviewORMETR",
      "reviewOPMTR",
      "reviewODP",
      "reviewODP2",
      "reviewODP3",
      "reviewODP4",
      "reviewODP5",
      "reviewODP6",
      "reviewODP7",
      "reviewODP8",
      "reviewODP9",
      "reviewODP10",
      "reviewODPFPTR",
      "summaryOOSS",
      "stabilitySR",
      "reviewOVIRS",
      "hVACQStatus",
      "dossierRR",
      "dossierRRNma",
      "sanitizationASDOU",
      "compressedGas",
      "currentRPQRN",
      "unitOperation3",
      "unitOperation4",
      "unitOperation5",
      "unitOperation6",
      "unitOperation7",
      "unitOperation8",
      "unitOperation9",
      "unitOperation10",
      "reviewOfCPD",
      "previewRPD",
      "currentOOS",
      "previewOOS",
      "currentOOAC",
      "previewOOAC",
      "currentOOAL",
      "previewOOAL",
      "previewCC",
      "currentCC",
      "currentOOT",
      "previewOOT",
      "currentCC",
      "previewCC",
      "currentMC",
      "previewMC",
      "currentOOSA",
      "previewOOSA",
      "currentLabI",
      "previewLabI",
    ];

    const gridData = [];

    for (let i = 0; i < grids.length; i++) {
      const gridName = grids[i];
      const gridInfo = req.body[gridName];

      if (gridInfo) {
        let filePath = null;
        const files = req.files
          ? req.files.filter((f) => f.fieldname === gridName)
          : []; // Exact match between field name and grid name

        if (files && files.length > 0) {
          filePath = files.map((file) => ({
            // uniqueId: req.body.gridDatas[gridName],
            fileName: file.originalname,
            fileUrl: getImageUrl(file),
          }));
        }

        const newGridRef = await gridRef.create(
          {
            pqrId: newAPQR.pqrId,
            primaryKey: gridName,
            data: gridInfo, // Assuming JSON string is passed in request
            fileAttachment: filePath ? filePath : null, // Store file URL if uploaded
          },
          { transaction: t }
        );

        gridData.push(newGridRef);
      }
    }

    // Create audit trail
    const data = await FormAuditTrail.create(
      {
        pqrId: newAPQR.pqrId,
        changed_by: userId || 2,
        previous_value: null,
        new_value: newAPQR.pqrId,
        previous_status: "Not Applicable",
        new_status: "Under Initiation",
        declaration: declaration || "dec",
        comments: comments || "com",
        action: "APQR Created",
      },
      { transaction: t }
    );

    await t.commit();
    return res.status(200).json({
      newAPQR,
      gridData,
      data,
    });
  } catch (error) {
    await t.rollback();
    console.error("Error creating APQR:", error);
    return res.status(500).json({ error: error.message });
  }
};

export const getAllAPQRData = async (req, res) => {
  try {
    const aPQRData = await APQR.findAll({
      attributes: {
        exclude: ["tinyData"],
      },
    });

    res.status(200).json(aPQRData);
  } catch (error) {
    console.error("Error fetching APQR data:", error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch APQR data",
    });
  }
};

export const getAPQRById = async (req, res) => {
  try {
    const apqrId = req.params.id;

    const aPQRData = await APQR.findOne({
      where: { pqrId: apqrId },
    });

    if (!aPQRData) {
      return res.status(404).json({ error: true, message: "APQR not found" });
    }

    let gridDatas = {};
    const grids = [
      "manufacturingStage",
      "manufacturingSAPS",
      "rawMRS",
      "packingMRS",
      "reviewOfASL",
      "expiredRMD",
      "expiredPMD",
      "vendorQDORME",
      "vendorQDOPPM",
      "vendorQDPOG",
      "codeTCTD",
      "reviewORCEC",
      "manufacturingSD",
      "bufferFSDPV",
      "oosDetails",
      "capaDetails",
      "deviationDetails",
      "ootResults",
      "oolResults",
      "ooaResults",
      "reviewODSTR",
      "reviewODSTR2",
      "reviewODSTR3",
      "reviewODSTR4",
      "reviewODSTR5",
      "reviewODSTR6",
      "reviewODSTR7",
      "reviewODSTR8",
      "reviewODSTR9",
      "reviewODSTR10",
      "reviewODSTR11",
      "reviewODSTR12",
      "reviewODSTR13",
      "reviewODSTR14",
      "reviewODSTR15",
      "reviewORMETR",
      "reviewOPMTR",
      "reviewODP",
      "reviewODP2",
      "reviewODP3",
      "reviewODP4",
      "reviewODP5",
      "reviewODP6",
      "reviewODP7",
      "reviewODP8",
      "reviewODP9",
      "reviewODP10",
      "reviewODPFPTR",
      "summaryOOSS",
      "stabilitySR",
      "reviewOVIRS",
      "hVACQStatus",
      "dossierRR",
      "dossierRRNma",
      "sanitizationASDOU",
      "compressedGas",
      "currentRPQRN",
      "unitOperation3",
      "unitOperation4",
      "unitOperation5",
      "unitOperation6",
      "unitOperation7",
      "unitOperation8",
      "unitOperation9",
      "unitOperation10",
      "reviewOfCPD",
      "previewRPD",
      "currentOOS",
      "previewOOS",
      "currentOOAC",
      "previewOOAC",
      "currentOOAL",
      "previewOOAL",
      "previewCC",
      "currentCC",
      "currentOOT",
      "previewOOT",
      "currentCC",
      "previewCC",
      "currentMC",
      "previewMC",
      "currentOOSA",
      "previewOOSA",
      "currentLabI",
      "previewLabI",
    ];

    for (let i = 0; i < grids.length; i++) {
      let gridData = await gridRef.findOne({
        where: { pqrId: apqrId, primaryKey: grids[i] },
      });

      gridDatas[grids[i]] = gridData;
    }

    let resObject = {
      aPQRData,
      gridDatas,
    };

    res.status(200).json(resObject);
  } catch (error) {
    console.error("Error fetching APQR data by ID:", error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch APQR data",
    });
  }
};

export const updateAPQRById = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const apqrId = req.params.id;

    const existingAPQR = await APQR.findOne({
      where: { pqrId: apqrId },
      include: [
        {
          model: gridRef,
        },
      ],
    });

    if (!existingAPQR) {
      return res.status(404).json({ error: true, message: "APQR not found" });
    }
    const updateData = {
      pqrNo: req.body.pqrNo || existingAPQR.pqrNo,
      initiator: req.body.initiator || existingAPQR.initiator,
      initiateDate: req.body.initiateDate
        ? new Date(req.body.initiateDate)
        : undefined,
      reviewStartDate: req.body.reviewStartDate
        ? new Date(req.body.reviewStartDate)
        : undefined,
      reviewEndDate: req.body.reviewEndDate
        ? new Date(req.body.reviewEndDate)
        : undefined,
      productName: req.body.pQRData.productName || existingAPQR.productName,
      productCodes: req.body.pQRData.productCodes || existingAPQR.productCodes,
      genericName: req.body.pQRData.genericName || existingAPQR.genericName,
      dosageForm: req.body.pQRData.dosageForm || existingAPQR.dosageForm,
      mfgLicNo: req.body.pQRData.mfgLicNo || existingAPQR.mfgLicNo,
      productDescription:
        req.body.pQRData.productDescription || existingAPQR.productDescription,
      processFlow: req.body.pQRData.processFlow || existingAPQR.processFlow,
      totalBatchesManufactured:
        req.body.pQRData.totalBatchesManufactured ||
        existingAPQR.totalBatchesManufactured,
      totalBatchesApprovedReleased:
        req.body.pQRData.totalBatchesApprovedReleased ||
        existingAPQR.totalBatchesApprovedReleased,
      totalProcessValidationBatches:
        req.body.pQRData.totalProcessValidationBatches ||
        existingAPQR.totalProcessValidationBatches,
      totalReprocessedBatches:
        req.body.pQRData.totalReprocessedBatches ||
        existingAPQR.totalReprocessedBatches,
      tinyData: req.body.pQRData.tinyData || existingAPQR.pQRData.tinyData,
    };

    const auditTrailEntries = [];
    for (const field in updateData) {
      const oldValue = existingAPQR[field];
      const newValue = updateData[field];

      if (field == "tinyData") {
        const oldTinyData = existingAPQR.tinyData || {};
        const newTinyData = req.body.pQRData.tinyData || {};

        for (const tinyField in newTinyData) {
          if (oldTinyData[tinyField] !== newTinyData[tinyField]) {
            auditTrailEntries.push({
              pqrId: apqrId,
              changed_by: req.body.userId || 1,
              previous_value: JSON.stringify(oldTinyData[tinyField]),
              new_value: JSON.stringify(newTinyData[tinyField]),
              previous_status: "Not Applicable",
              new_status: "Under Initiation",
              declaration: `Changed ${tinyField}` || "dec-0",
              comments: req.body.comments || `${tinyField} updated` || "comm-0",
              action: "Updated",
            });
          }
        }
      } else if (
        field === "initiateDate" ||
        field === "reviewStartDate" ||
        field === "reviewEndDate"
      ) {
        if (
          oldValue &&
          newValue &&
          new Date(oldValue).getTime() !== new Date(newValue).getTime()
        ) {
          auditTrailEntries.push({
            pqrId: apqrId,
            changed_by: req.body.userId || 1,
            previous_value: oldValue.toISOString(),
            new_value: new Date(newValue).toISOString(),
            previous_status: "Not Applicable",
            new_status: "Under Initiation",
            declaration: `Changed ${field}`,
            comments: req.body.comments || `${field} updated`,
            action: "Updated",
          });
        }
      } else if (field === "productCodes") {
        const oldProductCodes = oldValue || [];
        const newProductCodes = newValue || [];

        if (
          JSON.stringify(oldProductCodes) !== JSON.stringify(newProductCodes)
        ) {
          auditTrailEntries.push({
            pqrId: apqrId,
            changed_by: req.body.userId || 1,
            previous_value: JSON.stringify(oldProductCodes),
            new_value: JSON.stringify(newProductCodes),
            previous_status: "Not Applicable",
            new_status: "Under Initiation",
            declaration: `Changed ${field}`,
            comments: req.body.comments || `${field} updated`,
            action: "Updated",
          });
        }
      } else if (newValue !== oldValue) {
        auditTrailEntries.push({
          pqrId: apqrId,
          changed_by: req.body.userId || 1,
          previous_value: JSON.stringify(oldValue),
          new_value: JSON.stringify(newValue),
          previous_status: "Not Applicable",
          new_status: "Under Initiation",
          declaration: `Changed ${field}` || "dec0",
          comments: req.body.comments || `${field} updated` || "comm0",
          action: "Updated",
        });
      }
    }
    // Update APQR data
    await existingAPQR.update(updateData, { transaction: t });

    // Update or create grid data
    const grids = [
      "manufacturingStage",
      "manufacturingSAPS",
      "rawMRS",
      "packingMRS",
      "reviewOfASL",
      "expiredRMD",
      "expiredPMD",
      "vendorQDORME",
      "vendorQDOPPM",
      "vendorQDPOG",
      "codeTCTD",
      "reviewORCEC",
      "manufacturingSD",
      "bufferFSDPV",
      "oosDetails",
      "capaDetails",
      "deviationDetails",
      "ootResults",
      "oolResults",
      "ooaResults",
      "reviewODSTR",
      "reviewODSTR2",
      "reviewODSTR3",
      "reviewODSTR4",
      "reviewODSTR5",
      "reviewODSTR6",
      "reviewODSTR7",
      "reviewODSTR8",
      "reviewODSTR9",
      "reviewODSTR10",
      "reviewODSTR11",
      "reviewODSTR12",
      "reviewODSTR13",
      "reviewODSTR14",
      "reviewODSTR15",
      "reviewORMETR",
      "reviewOPMTR",
      "reviewODP",
      "reviewODP2",
      "reviewODP3",
      "reviewODP4",
      "reviewODP5",
      "reviewODP6",
      "reviewODP7",
      "reviewODP8",
      "reviewODP9",
      "reviewODP10",
      "reviewODPFPTR",
      "summaryOOSS",
      "stabilitySR",
      "reviewOVIRS",
      "hVACQStatus",
      "dossierRR",
      "dossierRRNma",
      "sanitizationASDOU",
      "compressedGas",
      "currentRPQRN",
      "unitOperation3",
      "unitOperation4",
      "unitOperation5",
      "unitOperation6",
      "unitOperation7",
      "unitOperation8",
      "unitOperation9",
      "unitOperation10",
      "reviewOfCPD",
      "previewRPD",
      "currentOOS",
      "previewOOS",
      "currentOOAC",
      "previewOOAC",
      "currentOOAL",
      "previewOOAL",
      "previewCC",
      "currentCC",
      "currentOOT",
      "previewOOT",
      "currentCC",
      "previewCC",
      "currentMC",
      "previewMC",
      "currentOOSA",
      "previewOOSA",
      "currentLabI",
      "previewLabI",
    ];

    for (let i = 0; i < grids.length; i++) {
      if (req.body.gridDatas[grids[i]]) {
        const newGridData = req.body.gridDatas[grids[i]];

        const existingGridRef = await gridRef.findOne({
          where: {
            pqrId: apqrId,
            primaryKey: grids[i],
          },
          transaction: t,
        });

        if (existingGridRef) {
          const oldValue = existingGridRef.data;
          const oldGridDataString = JSON.stringify(oldValue);
          const newGridDataString = JSON.stringify(newGridData);

          // Check if data changed and log it in audit trail
          if (newGridDataString !== oldGridDataString) {
            auditTrailEntries.push({
              pqrId: apqrId,
              changed_by: req.body.userId || 1,
              previous_value: oldGridDataString,
              new_value: newGridDataString,
              previous_status: "Not Applicable",
              new_status: "Under Initiation",
              declaration: `Changed ${grids[i]} grid data`,
              comments: req.body.comments || `Grid ${grids[i]} updated`,
              action: "Updated",
            });
            await existingGridRef.update(
              { data: req.body.gridDatas[grids[i]] },
              { transaction: t }
            );
          }
        } else {
          await gridRef.create(
            {
              pqrId: apqrId,
              primaryKey: grids[i],
              data: newGridData,
            },
            { transaction: t }
          );
          auditTrailEntries.push({
            pqrId: apqrId,
            changed_by: req.body.userId || 1,
            previous_value: null,
            new_value: newGridData,
            previous_status: "Not Applicable",
            new_status: "Under Initiation",
            declaration: `Created ${grids[i]} grid data`,
            comments: req.body.comments || `Grid ${grids[i]} created`,
            action: "Created",
          });
        }
      }
    }

    // Insert all audit trail entries in bulk
    if (auditTrailEntries.length > 0) {
      await FormAuditTrail.bulkCreate(auditTrailEntries, {
        transaction: t,
      });
    }

    await t.commit();
    res.status(200).json({ message: "APQR updated successfully" });
  } catch (error) {
    if (!t.finished) {
      await t.rollback();
    }
    console.error("Error updating APQR:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getAPQRAuditTrail = async (req, res) => {
  try {
    const APQRId = req.params.id;

    if (!APQRId) {
      return res
        .status(400)
        .json({ error: true, message: "APQR ID is required." });
    }

    const auditTrail = await FormAuditTrail.findAll({
      where: { pqrId: APQRId },
      include: {
        model: User,
        attributes: ["user_id", "name"],
      },
      order: [["auditTrail_id", "DESC"]],
    });

    if (!auditTrail || auditTrail.length === 0) {
      return res.status(404).json({
        error: true,
        message: "No audit trail found for the given APQR ID.",
      });
    }

    return res.status(200).json({ error: false, auditTrail });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: `Error retrieving audit trail: ${error.message}`,
    });
  }
};
