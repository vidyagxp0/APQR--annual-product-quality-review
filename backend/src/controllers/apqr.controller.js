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
      { transaction: t } // Use transaction
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
      // "reviewODPFPTR",
      // "summaryOOSS",
      // "stabilitySR",
      // "reviewOVIRS",
      // "hVACQStatus",
      // "dossierRR",
      // "dossierRRNma",
      // "sanitizationASDOU",
      // "compressedGas",
      // "currentRPQRN",
      // "unitOperation3",
      // "unitOperation4",
      // "unitOperation5",
      // "unitOperation6",
      // "unitOperation7",
      // "unitOperation8",
      // "unitOperation9",
      // "unitOperation10",
      // "reviewOfCPD",
      // "previewRPD",
      // "currentOOS",
      // "previewOOS",
      // "currentOOAC",
      // "previewOOAC",
      // "currentOOAL",
      // "previewOOAL"
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
          { transaction: t } // Use transaction
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


