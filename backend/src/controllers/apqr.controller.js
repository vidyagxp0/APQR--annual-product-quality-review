import { APQR } from "../models/apqr.model.js";
import gridRef from "../models/gridRef.model.js";
import { sequelize } from '../config/db.js';

export const createApqr = async (req, res) => {
  const t = await sequelize.transaction(); 
  try {

    const newAPQR = await APQR.create(
      {
        pqrNo: req.body.pqrNo ,
        productName: req.body.productName,
        productCodes: req.body.productCodes || [],
        genericName: req.body.genericName,
        dosageForm: req.body.dosageForm,
        initiator: req.body.initiator,
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
        totalBatchesApprovedReleased: req.body.totalBatchesApprovedReleased ,
        totalProcessValidationBatches: req.body.totalProcessValidationBatches ,
        totalReprocessedBatches: req.body.totalReprocessedBatches ,
      },
      { transaction: t } 
    );

    const grids = [
      "manufacturingStage",
      "manufacturingSAPS",
      "packingMRS",
      "rawMRS",
      "reviewOfASL",
      "expiredRMD",
      "expiredPMD",
      "vendorQDORME",
      "vendorQDOPPM",
      "vendorQDPOG",
      "manufacturingSD",
      "reviewORCEC",
      "codeTCTD",
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
      "reviewOPMTR",
      "reviewORMETR",
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
      "previewOOAL"
    ];

    const gridData = [];

    for (let i = 0; i < grids.length; i++) {
      if (req.body[grids[i]]) {
        const newGridRef = await gridRef.create(
          {
            pqrId: newAPQR.pqrId,
            primaryKey: grids[i],
            data: req.body[grids[i]],
          },
          { transaction: t } 
        );

        console.log(newGridRef, 'Grid Reference Created');
        gridData.push(newGridRef);
      }
    }

    await t.commit(); 

    return res.json({
      newAPQR,
      gridData,
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
      include: [
        {
          model: gridRef,
        },
      ],
      
    });

    res.status(200).json(aPQRData);

  } catch (error) {
    console.error("Error fetching APQR data:", error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch APQR data"
    });
  }
};

export const getAPQRById = async (req, res) => {
  try {
    const apqrId = req.params.id;

    const aPQRData = await APQR.findOne({
      where: { pqrId: apqrId }
    });

    if (!aPQRData) {
      return res.status(404).json({ error: true, message: "APQR not found" });
    }

    let gridDatas = {};
    const grids = [
      "manufacturingStage",
      "manufacturingSAPS",
      "packingMRS",
      "rawMRS",
      "reviewOfASL",
      "expiredRMD",
      "expiredPMD",
      "vendorQDORME",
      "vendorQDOPPM",
      "vendorQDPOG",
      "manufacturingSD",
      "reviewORCEC",
      "codeTCTD",
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
      "reviewOPMTR",
      "reviewORMETR",
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
      "previewOOAL"
    ];

    for (let i = 0; i < grids.length; i++)
    {
      let gridData = await gridRef.findOne({
        where: { pqrId: apqrId, primaryKey: grids[i] }
      }); 

      gridDatas[grids[i]] = gridData;
    }

    let resObject = {
        aPQRData,
        gridDatas
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

    // Update APQR data
    await existingAPQR.update(
      {
        pqrNo: req.body.pqrNo || existingAPQR.pqrNo,
        productName: req.body.productName || existingAPQR.productName,
        productCodes: req.body.productCodes || existingAPQR.productCodes,
        genericName: req.body.genericName || existingAPQR.genericName,
        dosageForm: req.body.dosageForm || existingAPQR.dosageForm,
        initiator: req.body.initiator || existingAPQR.initiator,
        reviewStartDate: req.body.reviewStartDate
          ? new Date(req.body.reviewStartDate)
          : existingAPQR.reviewStartDate,
        reviewEndDate: req.body.reviewEndDate
          ? new Date(req.body.reviewEndDate)
          : existingAPQR.reviewEndDate,
        mfgLicNo: req.body.mfgLicNo || existingAPQR.mfgLicNo,
        productDescription: req.body.productDescription || existingAPQR.productDescription,
        processFlow: req.body.processFlow || existingAPQR.processFlow,
        totalBatchesManufactured: req.body.totalBatchesManufactured || existingAPQR.totalBatchesManufactured,
        totalBatchesApprovedReleased: req.body.totalBatchesApprovedReleased || existingAPQR.totalBatchesApprovedReleased,
        totalProcessValidationBatches: req.body.totalProcessValidationBatches || existingAPQR.totalProcessValidationBatches,
        totalReprocessedBatches: req.body.totalReprocessedBatches || existingAPQR.totalReprocessedBatches,
      },
      { transaction: t } 
    );

    const grids = [
      "manufacturingStage",
      "manufacturingSAPS",
      "packingMRS",
    ];

    for (let i = 0; i < grids.length; i++) {
      if (req.body[grids[i]]) {
        const existingGridRef = await gridRef.findOne({
          where: {
            pqrId: apqrId,
            primaryKey: grids[i],
          },
          transaction: t, 
        });

        if (existingGridRef) {
          await existingGridRef.update(
            {
              data: req.body[grids[i]],
            },
            { transaction: t }
          );
        } else {
          await gridRef.create(
            {
              pqrId: apqrId,
              primaryKey: grids[i],
              data: req.body[grids[i]],
            },
            { transaction: t }
          );
        }
      }
    }

    await t.commit(); 

    return res.json({
      message: "APQR updated successfully",
    });
  } catch (error) {
    await t.rollback(); 
    console.error("Error updating APQR:", error);
    return res.status(500).json({ error: error.message });
  }
};


