import React, { useEffect, useReducer, useState } from "react";
import Header from "../../Component/Header";
import { MdNoteAdd } from "react-icons/md";
import TinyEditor from "../../Component/TinyEditor";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExcelExportImport from "../../Component/ImportExportExcel";
import ComplexCommonTable from "../../Component/New_APQR/ComplexCommonTable";

import axios from "axios";
import ActiveTab from "../../Component/New_APQR/ActiveTab";
import {
  TextRecognition,
  SpeechtoText,
} from "../../Component/New_APQR/TextRecoButtons";

import {
  Stageheaders,
  Stagefields,
  SAPSheaders,
  SAPSfields,
  expiredRMDheaders,
  expiredRMDfields,
  rawMRSfields,
  rawMRSheaders,
  packingMRSheaders,
  packingMRSfields,
  reviewOfASLheaders,
  reviewOfASLfields,
  expiredPMDheaders,
  expiredPMDfields,
  vendorQDORMEheaders,
  vendorQDORMEfields,
  vendorQDOPPMheaders,
  vendorQDOPPMfields,
  vendorQDPOGheaders,
  vendorQDPOGfields,
  codeTCTDheaders,
  codeTCTDfields,
  reviewORCECheaders,
  reviewORCECfields,
  capaDetailsheaders,
  capaDetailsfields,
  deviationDetailsheaders,
  deviationDetailsfields,
  oosDetailsheaders,
  oosDetailsfields,
  ootResultsheaders,
  ootResultsfields,
  reviewODSTRheaders,
  reviewODSTRfields,
  ooaResultsheaders,
  ooaResultsfields,
  oolResultsheaders,
  oolResultsfields,
  bufferFSDPVfields,
  bufferFSDPVheaders,
  manufacturingSDheaders,
  manufacturingSDfields

} from "./NewApqrFunctions";

import GridContainer from "../../Component/New_APQR/GridContainer";

export default function NewAPQR() {
  const [tab, setTab] = useState("GI");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productCodes, setProductCodes] = useState([""]);

  const [manufacturingStage, setManufacturingStage] = useState([]);

  const [manufacturingSAPS, setManufacturingSAPS] = useState([]);

  const [rawMRS, setRawMRS] = useState([]);

  const [packingMRS, setPackingMRS] = useState([]);

  const [reviewOfASL, setReviewOfASL] = useState([]);

  const [expiredRMD, setExpiredRMD] = useState([]);

  const [expiredPMD, setExpiredPMD] = useState([]);

  const [vendorQDORME, setVendorQDORME] = useState([]);

  const [vendorQDOPPM, setVendorQDOPPM] = useState([]);

  const [vendorQDPOG, setVendorQDPOG] = useState([]);

  const [codeTCTD, setCodeTCTD] = useState([]);
  const [reviewORCEC, setReviewORCEC] = useState([]);
  const [manufacturingSD, setManufacturingSD] = useState([]);
  const [bufferFSDPV, setBufferFSDPV] = useState([]);

  const [oosDetails, setOosDetails] = useState([]);
  const [capaDetails, setCapaDetails] = useState([]);
  const [deviationDetails, setDeviationDetails] = useState([]);
  const [ootResults, setOotResults] = useState([]);
  const [oolResults, setOolResults] = useState([]);
  const [ooaResults, setOoaResults] = useState([]);
  const [reviewODSTR, setReviewOSTR] = useState([]);

  const [reviewODSTR2, setReviewOSTR2] = useState([]);
  const [reviewODSTR3, setReviewOSTR3] = useState([]);
  const [reviewODSTR4, setReviewOSTR4] = useState([]);
  const [reviewODSTR5, setReviewOSTR5] = useState([]);
  const [reviewODSTR6, setReviewOSTR6] = useState([]);
  const [reviewODSTR7, setReviewOSTR7] = useState([]);
  const [reviewODSTR8, setReviewOSTR8] = useState([]);
  const [reviewODSTR9, setReviewOSTR9] = useState([]);
  const [reviewODSTR10, setReviewOSTR10] = useState([]);
  const [reviewODSTR11, setReviewOSTR11] = useState([]);
  const [reviewODSTR12, setReviewOSTR12] = useState([]);
  const [reviewODSTR13, setReviewOSTR13] = useState([]);
  const [reviewODSTR14, setReviewOSTR14] = useState([]);
  const [reviewODSTR15, setReviewOSTR15] = useState([]);
  const [reviewORMETR, setReviewORMETR] = useState([]);
  const [reviewOPMTR, setReviewOPMTR] = useState([]);
  const [reviewODP, setReviewODP] = useState([]);
  const [reviewODP2, setReviewODP2] = useState([]);
  const [reviewODP3, setReviewODP3] = useState([]);
  const [reviewODP4, setReviewODP4] = useState([]);
  const [reviewODP5, setReviewODP5] = useState([]);
  const [reviewODP6, setReviewODP6] = useState([]);
  const [reviewODP7, setReviewODP7] = useState([]);
  const [reviewODP8, setReviewODP8] = useState([]);
  const [reviewODP9, setReviewODP9] = useState([]);
  const [reviewODP10, setReviewODP10] = useState([]);
  const [reviewODPFPTR, setReviewODPFPTR] = useState([]);
  const [summaryOOSS, setSummaryOOSS] = useState([]);
  const [stabilitySR, setStabilitySR] = useState([]);
  const [reviewOVIRS, setReviewOVIRS] = useState([]);
  const [hVACQStatus, setHVACQStatus] = useState([]);
  const [dossierRR, setDossierRR] = useState([]);
  const [dossierRRNma, setDossierRRNma] = useState([]);
  const [sanitizationASDOU, setSanitizationASDOU] = useState([]);
  const [compressedGas, setCompressedGas] = useState([]);
  const [currentRPQRN, setCurrentRPQRN] = useState([]);
  const [unitOperation3, setUnitOperation3] = useState([]);
  const [unitOperation4, setUnitOperation4] = useState([]);
  const [unitOperation5, setUnitOperation5] = useState([]);
  const [unitOperation6, setUnitOperation6] = useState([]);
  const [unitOperation7, setUnitOperation7] = useState([]);
  const [unitOperation8, setUnitOperation8] = useState([]);
  const [unitOperation9, setUnitOperation9] = useState([]);
  const [unitOperation10, setUnitOperation10] = useState([]);
  const [tiny1, setTiny1] = useState("");
  const [tiny2, setTiny2] = useState("");
  const [tiny3, setTiny3] = useState("");
  const [tiny4, setTiny4] = useState("");
  const [tiny5, setTiny5] = useState("");
  const [tiny6, setTiny6] = useState("");
  const [tiny7, setTiny7] = useState("");
  const [tiny8, setTiny8] = useState("");
  const [tiny9, setTiny9] = useState("");
  const [tiny10, setTiny10] = useState("");
  const [tiny11, setTiny11] = useState("");
  const [tiny12, setTiny12] = useState("");
  const [tiny13, setTiny13] = useState("");
  const [tiny14, setTiny14] = useState("");
  const [tiny15, setTiny15] = useState("");
  const [tiny16, setTiny16] = useState("");
  const [tiny17, setTiny17] = useState("");
  const [tiny18, setTiny18] = useState("");
  const [tiny19, setTiny19] = useState("");
  const [tiny20, setTiny20] = useState("");
  const [tiny21, setTiny21] = useState("");
  const [tiny22, setTiny22] = useState("");
  const [tiny23, setTiny23] = useState("");
  const [tiny24, setTiny24] = useState("");
  const [tiny25, setTiny25] = useState("");
  const [tiny26, setTiny26] = useState("");
  const [tiny27, setTiny27] = useState("");
  const [tiny28, setTiny28] = useState("");
  const [tiny29, setTiny29] = useState("");
  const [tiny30, setTiny30] = useState("");
  const [tiny31, setTiny31] = useState("");
  const [tiny32, setTiny32] = useState("");
  const [tiny33, setTiny33] = useState("");
  const [tiny34, setTiny34] = useState("");
  const [tiny35, setTiny35] = useState("");
  const [tiny36, setTiny36] = useState("");
  const [tiny37, setTiny37] = useState("");
  const [tiny38, setTiny38] = useState("");
  const [tiny39, setTiny39] = useState("");
  const [tiny40, setTiny40] = useState("");
  const [tiny41, setTiny41] = useState("");
  const [tiny42, setTiny42] = useState("");
  const [tiny43, setTiny43] = useState("");
  const [tiny44, setTiny44] = useState("");
  const [tiny45, setTiny45] = useState("");
  const [tiny46, setTiny46] = useState("");
  const [tiny47, setTiny47] = useState("");
  const [tiny48, setTiny48] = useState("");
  const [tiny49, setTiny49] = useState("");
  const [tiny50, setTiny50] = useState("");
  const [tiny51, setTiny51] = useState("");
  const [tiny52, setTiny52] = useState("");
  const [tiny53, setTiny53] = useState("");
  const [tiny54, setTiny54] = useState("");
  const [tiny55, setTiny55] = useState("");
  const [tiny56, setTiny56] = useState("");
  const [tiny57, setTiny57] = useState("");
  const [tiny58, setTiny58] = useState("");
  const [tiny59, setTiny59] = useState("");
  const [tiny60, setTiny60] = useState("");
  const [tiny61, setTiny61] = useState("");
  const [tiny62, setTiny62] = useState("");
  const [tiny63, setTiny63] = useState("");
  const [tiny64, setTiny64] = useState("");
  const [tiny65, setTiny65] = useState("");
  const [tiny66, setTiny66] = useState("");
  const [tiny67, setTiny67] = useState("");
  const [tiny68, setTiny68] = useState("");
  const [tiny69, setTiny69] = useState("");
  const [tiny70, setTiny70] = useState("");
  const [tiny71, setTiny71] = useState("");
  const [tiny72, setTiny72] = useState("");
  const [tiny73, setTiny73] = useState("");
  const [tiny74, setTiny74] = useState("");
  const [tiny75, setTiny75] = useState("");
  const [tiny76, setTiny76] = useState("");
  const [tiny77, setTiny77] = useState("");
  const [tiny78, setTiny78] = useState("");
  const [tiny79, setTiny79] = useState("");
  const [tiny80, setTiny80] = useState("");
  const [tiny81, setTiny81] = useState("");
  const [tiny82, setTiny82] = useState("");
  const [tiny83, setTiny83] = useState("");
  const [tiny84, setTiny84] = useState("");
  const [tiny85, setTiny85] = useState("");
  const [loading, setLoading] = useState(false);
  const [reviewOfCPD, setReviewOFCPD] = useState([]);
  const [previewRPD, setPreviewRPD] = useState([]);
  const [currentOOS, setCurrentOOS] = useState([]);
  const [previewOOS, setPreviewOOS] = useState([]);
  const [currentOOAC, setCurrentOOAC] = useState([]);
  const [previewOOAC, setPreviewOOAC] = useState([]);
  const [currentOOAL, setCurrentOOAL] = useState([]);
  const [previewOOAL, setPreviewOOAL] = useState([]);
  const [currentOOSA, setCurrentOOSA] = useState([]);
  const [previewOOSA, setPreviewOOSA] = useState([]);
  const [currentOOT, setCurrentOOT] = useState([]);
  const [previewOOT, setPreviewOOT] = useState([]);
  const [currentCC, setCurrentCC] = useState([]);
  const [previewCC, setPreviewCC] = useState([]);
  const [currentMC, setCurrentMC] = useState([]);
  const [previewMC, setPreviewMC] = useState([]);
  const [currentLabI, setCurrentLabI] = useState([]);
  const [previewLabI, setPreviewLabI] = useState([]);

  useEffect(() => { }, [reviewODSTR]);
  const sanitizeKey = (key) => {
    return key.replace(/\s+/g, "").replace(/[\n\r]+/g, "");
  };

  const trimValue = (value) => {
    return typeof value === "string" ? value.trim() : value;
  };

  const processData = (data, keyMapping) => {
    return data.map((item) => {
      let processedItem = {};
      for (let originalKey in item) {
        if (item.hasOwnProperty(originalKey)) {
          let sanitizedKey = sanitizeKey(originalKey);
          let newKey = keyMapping[sanitizedKey];
          if (newKey) {
            processedItem[newKey] = trimValue(item[originalKey]);
          }
        }
      }
      return processedItem;
    });
  };

  // Define the key mapping
  const keyMapping = {
    ProductName: "productName",
    SFGCode: "sFGCode",
    FGCode: "fGCode",
    BatchNo: "batchNo",
    Testsparameter: "testsParameter",
    // testsParameter: "Tests parameter",
    LSL: "LSL",
    USL: "USL",
    LCL: "LCL",
    UCL: "UCL",
    ObservedValue: "observedValue",
    // observedValue: "Observed Value",
    CompliesDoesNotComplies: "compliesNotComplies",
    // compliesNotComplies: "Complies/Does Not Complies",
  };

  const setimportedData = (data, gridNo) => {
    // console.log(data);
    const processedData = processData(data, keyMapping);
    console.log(processedData);

    switch (gridNo) {
      case 1:
        setManufacturingStage([...manufacturingStage, ...processedData]);
        break;
      case 22:
        setReviewOSTR([...reviewODSTR, ...processedData]);
        break;
      case 23:
        setReviewOSTR2([...reviewODSTR2, ...processedData]);
        break;
      case 24:
        setReviewOSTR3([...reviewODSTR3, ...processedData]);
        break;
      case 25:
        setReviewOSTR4([...reviewODSTR4, ...processedData]);
        break;
      case 26:
        setReviewOSTR5([...reviewODSTR5, ...processedData]);
        break;
      case 27:
        setReviewOSTR6([...reviewODSTR6, ...processedData]);
        break;
      case 28:
        setReviewOSTR7([...reviewODSTR7, ...processedData]);
        break;
      case 29:
        setReviewOSTR8([...reviewODSTR8, ...processedData]);
        break;
      case 30:
        setReviewOSTR9([...reviewODSTR9, ...processedData]);
        break;
      case 31:
        setReviewOSTR10([...reviewODSTR10, ...processedData]);
        break;
      case 32:
        setReviewOSTR11([...reviewODSTR11, ...processedData]);
        break;
      case 33:
        setReviewOSTR12([...reviewODSTR12, ...processedData]);
        break;
      case 34:
        setReviewOSTR13([...reviewODSTR13, ...processedData]);
        break;
      case 35:
        setReviewOSTR14([...reviewODSTR14, ...processedData]);
        break;
      case 36:
        setReviewOSTR15([...reviewODSTR15, ...processedData]);
        break;
      case 3:
        setManufacturingStage([...manufacturingStage, ...processedData]);
        break;
    }
    // setManufacturingStage([...manufacturingStage, ...processedData]);
  };

  const setTinyContent = (data, tinyNO) => {
    switch (tinyNO) {
      case 1:
        setTiny1(data);
        break;
      case 2:
        setTiny2(data);
        break;
      case 3:
        setTiny3(data);
        break;
      case 4:
        setTiny4(data);
        break;
      case 5:
        setTiny5(data);
        break;
      case 6:
        setTiny6(data);
        break;
      case 7:
        setTiny7(data);
        break;
      case 8:
        setTiny8(data);
        break;
      case 9:
        setTiny9(data);
        break;
      case 10:
        setTiny10(data);
        break;
      case 11:
        setTiny11(data);
        break;
      case 12:
        setTiny12(data);
        break;
      case 13:
        setTiny13(data);
        break;
      case 14:
        setTiny14(data);
        break;
      case 15:
        setTiny15(data);
        break;
      case 16:
        setTiny16(data);
        break;
      case 17:
        setTiny17(data);
        break;
      case 18:
        setTiny18(data);
        break;
      case 19:
        setTiny19(data);
        break;
      case 20:
        setTiny20(data);
        break;
      case 21:
        setTiny21(data);
        break;
      case 22:
        setTiny22(data);
        break;
      case 23:
        setTiny23(data);
        break;
      case 24:
        setTiny24(data);
        break;
      case 25:
        setTiny25(data);
        break;
      case 26:
        setTiny26(data);
        break;
      case 27:
        setTiny27(data);
        break;
      case 28:
        setTiny28(data);
        break;
      case 29:
        setTiny29(data);
        break;
      case 30:
        setTiny30(data);
        break;
      case 31:
        setTiny31(data);
        break;
      case 32:
        setTiny32(data);
        break;
      case 33:
        setTiny33(data);
        break;
      case 34:
        setTiny34(data);
        break;
      case 35:
        setTiny35(data);
        break;
      case 36:
        setTiny36(data);
        break;
      case 37:
        setTiny37(data);
        break;
      case 38:
        setTiny38(data);
        break;
      case 39:
        setTiny39(data);
        break;
      case 40:
        setTiny40(data);
        break;
      case 41:
        setTiny41(data);
        break;
      case 42:
        setTiny42(data);
        break;
      case 43:
        setTiny43(data);
        break;
      case 44:
        setTiny44(data);
        break;
      case 45:
        setTiny45(data);
        break;
      case 46:
        setTiny46(data);
        break;
      case 47:
        setTiny47(data);
        break;
      case 48:
        setTiny48(data);
        break;
      case 49:
        setTiny49(data);
        break;
      case 50:
        setTiny50(data);
        break;
      case 51:
        setTiny51(data);
        break;
      case 52:
        setTiny52(data);
        break;
      case 53:
        setTiny53(data);
        break;
      case 54:
        setTiny54(data);
        break;
      case 55:
        setTiny55(data);
        break;
      case 56:
        setTiny56(data);
        break;
      case 57:
        setTiny57(data);
        break;
      case 58:
        setTiny58(data);
        break;
      case 59:
        setTiny59(data);
        break;
      case 60:
        setTiny60(data);
        break;
      case 61:
        setTiny61(data);
        break;
      case 62:
        setTiny62(data);
        break;
      case 63:
        setTiny63(data);
        break;
      case 64:
        setTiny64(data);
        break;
      case 65:
        setTiny65(data);
        break;
      case 66:
        setTiny66(data);
        break;
      case 67:
        setTiny67(data);
        break;
      case 68:
        setTiny68(data);
        break;
      case 69:
        setTiny69(data);
        break;
      case 70:
        setTiny70(data);
        break;
      case 71:
        setTiny71(data);
        break;
      case 72:
        setTiny72(data);
        break;
      case 73:
        setTiny73(data);
        break;
      case 74:
        setTiny74(data);
        break;
      case 75:
        setTiny75(data);
        break;
      case 76:
        setTiny76(data);
        break;
      case 77:
        setTiny77(data);
        break;
      case 78:
        setTiny78(data);
        break;
      case 79:
        setTiny79(data);
        break;
      case 80:
        setTiny80(data);
        break;
      case 81:
        setTiny81(data);
        break;
      case 82:
        setTiny82(data);
        break;
      case 83:
        setTiny83(data);
        break;
      case 84:
        setTiny84(data);
        break;
      case 85:
        setTiny85(data);
        break;
    }
  };

  const [pQRData, setPQRData] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      initiator: "Amit Guru",
      initiateDate: "",
      pqrNO: "",
      productName: "",
      dosageForm: "",
      genericName: "",
      reviewStartDate: "",
      reviewEndDate: "",
      mfgLicNo: "",
      processFlow: "",
      productDescription: "",
      totalBatchesManufactured: 0,
      totalBatchesApprovedReleased: "",
      totalProcessValidationBatches: "",
      totalReprocessedBatches: "",
    }
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const APQRData = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/create-apqr",
        data
      );
      // console.log("Response:", response.data);
    } catch (error) {
      console.error("Error posting APQR data:", error);
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setPQRData({
      initiateDate: today,
      productCodes: productCodes,
      manufacturingStage: manufacturingStage,
      manufacturingSAPS: manufacturingSAPS,
      rawMRS: rawMRS,
      packingMRS: packingMRS,
      reviewOfASL: reviewOfASL,
      expiredRMD: expiredRMD,
      expiredPMD: expiredPMD,
      vendorQDORME: vendorQDORME,
      vendorQDOPPM: vendorQDOPPM,
      vendorQDPOG: vendorQDPOG,
      codeTCTD: codeTCTD,
      reviewORCEC: reviewORCEC,
      manufacturingSD: manufacturingSD,
      bufferFSDPV: bufferFSDPV,
      oosDetails: oosDetails,
      capaDetails: capaDetails,
      deviationDetails: deviationDetails,
      ootResults: ootResults,
      oolResults: oolResults,
      ooaResults: ooaResults,
      reviewODSTR: reviewODSTR,
      reviewODSTR2: reviewODSTR2,
      reviewODSTR3: reviewODSTR3,
      reviewODSTR4: reviewODSTR4,
      reviewODSTR5: reviewODSTR5,
      reviewODSTR6: reviewODSTR6,
      reviewODSTR7: reviewODSTR7,
      reviewODSTR8: reviewODSTR8,
      reviewODSTR9: reviewODSTR9,
      reviewODSTR10: reviewODSTR10,
      reviewODSTR11: reviewODSTR11,
      reviewODSTR12: reviewODSTR12,
      reviewODSTR13: reviewODSTR13,
      reviewODSTR14: reviewODSTR14,
      reviewODSTR15: reviewODSTR15,
      reviewORMETR: reviewORMETR,
      reviewOPMTR: reviewOPMTR,
      reviewODP: reviewODP,
      reviewODP2: reviewODP2,
      reviewODP3: reviewODP3,
      reviewODP4: reviewODP4,
      reviewODP5: reviewODP5,
      reviewODP6: reviewODP6,
      reviewODP7: reviewODP7,
      reviewODP8: reviewODP8,
      reviewODP9: reviewODP9,
      reviewODP10: reviewODP10,
      reviewODPFPTR: reviewODPFPTR,
      summaryOOSS: summaryOOSS,
      stabilitySR: stabilitySR,
      reviewOVIRS: reviewOVIRS,
      hVACQStatus: hVACQStatus,
      dossierRR: dossierRR,
      dossierRRNma: dossierRRNma,
      sanitizationASDOU: sanitizationASDOU,
      compressedGas: compressedGas,
      currentRPQRN: currentRPQRN,
      unitOperation3: unitOperation3,
      unitOperation4: unitOperation4,
      unitOperation5: unitOperation5,
      unitOperation6: unitOperation6,
      unitOperation7: unitOperation7,
      unitOperation8: unitOperation8,
      unitOperation9: unitOperation9,
      unitOperation10: unitOperation10,
      tiny1: tiny1,
      tiny2: tiny2,
      tiny3: tiny3,
      tiny4: tiny4,
      tiny5: tiny5,
      tiny6: tiny6,
      tiny7: tiny7,
      tiny8: tiny8,
      tiny9: tiny9,
      tiny10: tiny10,
      tiny11: tiny11,
      tiny12: tiny12,
      tiny13: tiny13,
      tiny14: tiny14,
      tiny15: tiny15,
      tiny16: tiny16,
      tiny17: tiny17,
      tiny18: tiny18,
      tiny19: tiny19,
      tiny20: tiny20,
      tiny21: tiny21,
      tiny22: tiny22,
      tiny23: tiny23,
      tiny24: tiny24,
      tiny25: tiny25,
      tiny26: tiny26,
      tiny27: tiny27,
      tiny28: tiny28,
      tiny29: tiny29,
      tiny30: tiny30,
      tiny31: tiny31,
      tiny32: tiny32,
      tiny33: tiny33,
      tiny34: tiny34,
      tiny35: tiny35,
      tiny36: tiny36,
      tiny37: tiny37,
      tiny38: tiny38,
      tiny39: tiny39,
      tiny40: tiny40,
      tiny41: tiny41,
      tiny42: tiny42,
      tiny43: tiny43,
      tiny44: tiny44,
      tiny45: tiny45,
      tiny46: tiny46,
      tiny47: tiny47,
      tiny48: tiny48,
      tiny49: tiny49,
      tiny50: tiny50,
      tiny51: tiny51,
      tiny52: tiny52,
      tiny53: tiny53,
      tiny54: tiny54,
      tiny55: tiny55,
      tiny56: tiny56,
      tiny57: tiny57,
      tiny58: tiny58,
      tiny59: tiny59,
      tiny60: tiny60,
      tiny61: tiny61,
      tiny62: tiny62,
      tiny63: tiny63,
      tiny64: tiny64,
      tiny65: tiny65,
      tiny66: tiny66,
      tiny67: tiny67,
      tiny68: tiny68,
      tiny69: tiny69,
      tiny70: tiny70,
      tiny71: tiny71,
      tiny72: tiny72,
      tiny73: tiny73,
      tiny74: tiny74,
      tiny75: tiny75,
      tiny76: tiny76,
      tiny77: tiny77,
      tiny78: tiny78,
      tiny79: tiny79,
      tiny80: tiny80,
      tiny81: tiny81,
      tiny82: tiny82,
      tiny83: tiny83,
      tiny84: tiny84,
      tiny85: tiny85,

      reviewOfCPD: reviewOfCPD,
      previewRPD: previewRPD,
      previewOOS: previewOOS,
      currentOOS: currentOOS,
      previewOOAC: previewOOAC,
      currentOOAC: currentOOAC,
      previewOOAL: previewOOAL,
      currentOOAL: currentOOAL,
      previewOOT: previewOOT,
      currentOOT: currentOOT,
      currentCC: currentCC,
      previewOOSA: previewOOSA,
      currentOOSA: currentOOSA,
      previewCC: previewCC,
      currentMC: currentMC,
      previewMC: previewMC,
      previewLabI: previewLabI,
      currentLabI: currentLabI,
    });
  }, [
    productCodes,
    manufacturingStage,
    manufacturingSAPS,
    rawMRS,
    packingMRS,
    reviewOfASL,
    expiredRMD,
    expiredPMD,
    vendorQDORME,
    vendorQDOPPM,
    vendorQDPOG,
    codeTCTD,
    reviewORCEC,
    manufacturingSD,
    bufferFSDPV,
    oosDetails,
    capaDetails,
    deviationDetails,
    ootResults,
    oolResults,
    ooaResults,
    reviewODSTR,
    reviewODSTR2,
    reviewODSTR3,
    reviewODSTR4,
    reviewODSTR5,
    reviewODSTR6,
    reviewODSTR7,
    reviewODSTR8,
    reviewODSTR9,
    reviewODSTR10,
    reviewODSTR11,
    reviewODSTR12,
    reviewODSTR13,
    reviewODSTR14,
    reviewODSTR15,
    reviewORMETR,
    reviewOPMTR,
    reviewODP,
    reviewODP2,
    reviewODP3,
    reviewODP4,
    reviewODP5,
    reviewODP6,
    reviewODP7,
    reviewODP8,
    reviewODP9,
    reviewODP10,
    reviewODPFPTR,
    summaryOOSS,
    stabilitySR,
    reviewOVIRS,
    hVACQStatus,
    dossierRR,
    dossierRRNma,
    sanitizationASDOU,
    compressedGas,
    currentRPQRN,
    unitOperation3,
    unitOperation4,
    unitOperation5,
    unitOperation6,
    unitOperation7,
    unitOperation8,
    unitOperation9,
    unitOperation10,
    tiny1,
    tiny2,
    tiny3,
    tiny4,
    tiny5,
    tiny6,
    tiny7,
    tiny8,
    tiny9,
    tiny10,
    tiny11,
    tiny12,
    tiny13,
    tiny14,
    tiny15,
    tiny16,
    tiny17,
    tiny18,
    tiny19,
    tiny20,
    tiny21,
    tiny22,
    tiny23,
    tiny24,
    tiny25,
    tiny26,
    tiny27,
    tiny28,
    tiny29,
    tiny30,
    tiny31,
    tiny32,
    tiny33,
    tiny34,
    tiny35,
    tiny36,
    tiny37,
    tiny38,
    tiny39,
    tiny40,
    tiny41,
    tiny42,
    tiny43,
    tiny44,
    tiny45,
    tiny46,
    tiny47,
    tiny48,
    tiny49,
    tiny50,
    tiny51,
    tiny52,
    tiny53,
    tiny54,
    tiny55,
    tiny56,
    tiny57,
    tiny58,
    tiny59,
    tiny60,
    tiny61,
    tiny62,
    tiny63,
    tiny64,
    tiny65,
    tiny66,
    tiny67,
    tiny68,
    tiny69,
    tiny70,
    tiny71,
    tiny72,
    tiny73,
    tiny74,
    tiny75,
    tiny76,
    tiny77,
    tiny78,
    tiny79,
    tiny80,
    tiny81,
    tiny82,
    tiny83,
    tiny84,
    tiny85,
    reviewOfCPD,
    previewRPD,
    currentOOS,
    previewOOS,
    currentOOAC,
    previewOOAC,
    currentOOAL,
    previewOOAL,
    previewCC,
    currentCC,
    currentOOT,
    previewOOT,
    currentCC,
    previewCC,
    currentMC,
    previewMC,
    currentOOSA,
    previewOOSA,
    currentLabI,
    previewLabI,
  ]);

  useEffect(() => { }, [tiny1]);

  

  const addmanufacturingSDRow = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setManufacturingSD([...manufacturingSD, newRow]);
  };
  const addBufferFSDPVRow = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setBufferFSDPV([...bufferFSDPV, newRow]);
  };
  // const oolResultsRow = () => {
  //   const newRow = {
  //     ARNo: "",
  //     testNameOfOot: "",
  //     resultsObtained: "",
  //     initialIntervalDetails: "",
  //     previousIntervalDetails: "",
  //     diffrenceOfResult: "",
  //     trendLimit: "",
  //   };
  //   setOolResults([...oolResults, newRow]);
  // };
  // const ooaResultsRow = () => {
  //   const newRow = {
  //     testNameOfAlert: "",
  //     resultsObtained: "",
  //     specificationLimit: "",
  //     detailsOfObviousError: "",
  //     chooseFile: "",
  //   };
  //   setOoaResults([...ooaResults, newRow]);
  // };

  const addDossierRowNma = () => {
    const newRow = {
      countryName: "",
      descriptionOfPacking: "",
      dateOfApplication: "",
      ststusOfApplication: "",
      dateOfAuthorization: "",
      remarks: "",
    };
    setDossierRRNma([...dossierRRNma, newRow]);
  };
  // const addReviewODSTRRow = () => {
  //   const newRow = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR([...reviewODSTR, newRow]);
  // };
  // const addReviewODSTRRow = () => {
  //   const newRow = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR([...reviewODSTR, newRow]);
  // };
  // const addReviewODSTRRow2 = () => {
  //   const newRow2 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR2([...reviewODSTR2, newRow2]);
  // };

  // const addReviewODSTRRow3 = () => {
  //   const newRow3 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR3([...reviewODSTR3, newRow3]);
  // };
  const addDossierRow = () => {
    const newRow = {
      agency: "",
      notificationNo: "",
      notificationtype: "",
      description: "",
    };
    setDossierRR([...dossierRR, newRow]);
  };
  // const addReviewODSTRRow4 = () => {
  //   const newRow4 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR4([...reviewODSTR4, newRow4]);
  // };
  // const addReviewODSTRRow5 = () => {
  //   const newRow5 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR5([...reviewODSTR5, newRow5]);
  // };
  // const addReviewODSTRRow6 = () => {
  //   const newRow6 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR6([...reviewODSTR6, newRow6]);
  // };
  // const addReviewODSTRRow7 = () => {
  //   const newRow7 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR7([...reviewODSTR7, newRow7]);
  // };
  // const addReviewODSTRRow8 = () => {
  //   const newRow8 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR8([...reviewODSTR8, newRow8]);
  // };
  // const addReviewODSTRRow9 = () => {
  //   const newRow9 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR9([...reviewODSTR9, newRow9]);
  // };
  // const addReviewODSTRRow10 = () => {
  //   const newRow10 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR10([...reviewODSTR10, newRow10]);
  // };
  // const addReviewODSTRRow11 = () => {
  //   const newRow10 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR11([...reviewODSTR11, newRow10]);
  // };
  // const addReviewODSTRRow12 = () => {
  //   const newRow10 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR12([...reviewODSTR12, newRow10]);
  // };
  // const addReviewODSTRRow13 = () => {
  //   const newRow10 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR13([...reviewODSTR13, newRow10]);
  // };
  // const addReviewODSTRRow14 = () => {
  //   const newRow10 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR14([...reviewODSTR14, newRow10]);
  // };

  // const addReviewODSTRRow15 = () => {
  //   const newRow10 = {
  //     batchNo: "",
  //     testsParameter: "",
  //     LSL: "",
  //     USL: "",
  //     LCL: "",
  //     UCL: "",
  //     observedValue: "",
  //     compliesNotComplies: "",
  //   };
  //   setReviewOSTR15([...reviewODSTR15, newRow10]);
  // };

  const addReviewORMETRRow = () => {
    const newRow = {
      material: "",
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewORMETR([...reviewORMETR, newRow]);
  };

  const addreviewOPMTRRow = () => {
    const newRow = {
      material: "",
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOPMTR([...reviewOPMTR, newRow]);
  };

  const addReviewODPRow = () => {
    const newRow = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP([...reviewODP, newRow]);
  };

  const addReviewODPRow2 = () => {
    const newRow2 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP2([...reviewODP2, newRow2]);
  };
  const addReviewODPRow3 = () => {
    const newRow3 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP3([...reviewODP3, newRow3]);
  };
  const addReviewODPRow4 = () => {
    const newRow4 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP4([...reviewODP4, newRow4]);
  };
  const addReviewODPRow5 = () => {
    const newRow5 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP5([...reviewODP5, newRow5]);
  };
  const addReviewODPRow6 = () => {
    const newRow6 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP6([...reviewODP6, newRow6]);
  };
  const addReviewODPRow7 = () => {
    const newRow7 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP7([...reviewODP7, newRow7]);
  };
  const addReviewODPRow8 = () => {
    const newRow8 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP8([...reviewODP8, newRow8]);
  };
  const addReviewODPRow9 = () => {
    const newRow9 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP9([...reviewODP9, newRow9]);
  };
  const addReviewODPRow10 = () => {
    const newRow10 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP10([...reviewODP10, newRow10]);
  };

  const addReviewODPFPTRRow = () => {
    const newRow = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODPFPTR([...reviewODPFPTR, newRow]);
  };

  // const addSummaryOOSSRow = () => {
  //   const newRow = {
  //     batchNo: "",
  //     type: "",
  //     storageCondition: "",
  //     testingInterval: "",
  //     stabilityProtocolNo: "",
  //   };
  //   setSummaryOOSS([...summaryOOSS, newRow]);
  // };

  // const addStabilitySRRow = () => {
  //   const newRow = {
  //     batchNo: "",
  //     testingIntervalMonths: "",
  //     OOSNumber: "",
  //   };
  //   setStabilitySR([...stabilitySR, newRow]);
  // };

  const addreviewOVIRSRow = () => {
    const newRow = {
      column1: "",
      column2: "",
      column3: "",
      column4: "",
      column5: "",
      column6: "",
      column7: "",
      column8: "",
    };
    setReviewOVIRS([...reviewOVIRS, newRow]);
  };

  // const addHVACQStatusRow = () => {
  //   const newRow = {
  //     testDescription: "",
  //     frequency: "",
  //     status: "",
  //   };
  //   setHVACQStatus([...hVACQStatus, newRow]);
  // };

  // const addSanitizationASDOURow = () => {
  //   const newRow = {
  //     equipmentName: "",
  //     frequency: "",
  //     status: "",
  //   };
  //   setSanitizationASDOU([...sanitizationASDOU, newRow]);
  // };

  const addReviewOfCPD = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setReviewOFCPD([...reviewOfCPD, newRow]);
  };

  const addPreviewRPD = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setPreviewRPD([...previewRPD, newRow]);
  };

  const addCurrentOOS = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setCurrentOOS([...currentOOS, newRow]);
  };

  const addPreviewOOS = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setPreviewOOS([...previewOOS, newRow]);
  };
  const addCurrentOOAC = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setCurrentOOAC([...currentOOAC, newRow]);
  };
  const addPreviewOOAC = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setPreviewOOAC([...previewOOAC, newRow]);
  };
  const addCurrentOOAL = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setCurrentOOAL([...currentOOAL, newRow]);
  };
  const addPreviewOOAL = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setPreviewOOAL([...previewOOAL, newRow]);
  };

  const addCurrentOOSA = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setCurrentOOSA([...currentOOSA, newRow]);
  };

  const addPreviewOOSA = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setPreviewOOSA([...previewOOSA, newRow]);
  };

  const addCurrentOOT = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setCurrentOOT([...currentOOT, newRow]);
  };

  const addPreviewOOT = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setPreviewOOT([...previewOOT, newRow]);
  };

  const addCurrentCC = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setCurrentCC([...currentCC, newRow]);
  };

  const addPreviewCC = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setPreviewCC([...previewCC, newRow]);
  };

  const addCurrentMC = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setCurrentMC([...currentMC, newRow]);
  };

  const addPreviewMC = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setPreviewMC([...previewMC, newRow]);
  };

  const addCurrentLabI = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setCurrentLabI([...currentLabI, newRow]);
  };

  const addPreviewLabI = () => {
    const newRow = {
      dateOfInitiation: "",
      recordNo: "",
      siteDivision: "",
      department: "",
      initiator: "",
      shortDescription: "",
      batchNo: "",
      dueDate: "",
      currentStatus: "",
    };
    setPreviewLabI([...previewLabI, newRow]);
  };
  // const addCompressedGasesRow = () => {
  //   const newRow = {
  //     compressedGas: "",
  //     test: "",
  //     frequency: "",
  //     status: "",
  //   };
  //   setCompressedGas([...compressedGas, newRow]);
  // };

  const addCurrentRPQRNRow = () => {
    const newRow = {
      batchNo: "",
      qualityRelatedNotification: {
        no: "",
        description: "",
        impact: "",
        status: "",
      },
      cAPA: { descriptionNo: "", status: "", eC: "" },
    };
    setCurrentRPQRN([...currentRPQRN, newRow]);
  };

  const addUnitOperation3Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setUnitOperation3([...unitOperation3, newRow]);
  };

  const addUnitOperation4Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setUnitOperation4([...unitOperation4, newRow]);
  };

  const addUnitOperation5Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setUnitOperation5([...unitOperation5, newRow]);
  };

  const addUnitOperation6Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setUnitOperation6([...unitOperation6, newRow]);
  };

  const addUnitOperation7Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setUnitOperation7([...unitOperation7, newRow]);
  };

  const addUnitOperation8Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setUnitOperation8([...unitOperation8, newRow]);
  };

  const addUnitOperation9Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setUnitOperation9([...unitOperation9, newRow]);
  };

  const addUnitOperation10Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setUnitOperation10([...unitOperation10, newRow]);
  };
  // const addreviewOfASLRow = () => {
  //   const newRow = {
  //     materialCode: "",
  //     materialName: "",
  //     manufacturer: "",
  //     facility: "",
  //   };
  //   setReviewOfASL([...reviewOfASL, newRow]);
  // };

  // const addDossierRow = () => {
  //   const newRow = {
  //     agency: "",
  //     notificationNo: "",
  //     notificationtype: "",
  //     description: "",
  //   };
  //   setDossierRR([...dossierRR, newRow]);
  // };
  // const addDossierRowNma = () => {
  //   const newRow = {
  //     countryName: "",
  //     descriptionOfPacking: "",
  //     dateOfApplication: "",
  //     ststusOfApplication: "",
  //     dateOfAuthorization: "",
  //     remarks: "",
  //   };
  //   setDossierRRNma([...dossierRRNma, newRow]);
  // };

  const handleProductCodeChange = (index, value) => {
    const newProductCodes = [...productCodes];
    newProductCodes[index] = value;
    setProductCodes(newProductCodes);
  };

  const addProductCodeInput = () => {
    setProductCodes([...productCodes, ""]); // Add an empty string initially
  };

  const removeProductCodeInput = (index) => {
    const newProductCodes = [...productCodes];
    newProductCodes.splice(index, 1);
    setProductCodes(newProductCodes);
  };

  return (
    <>
      <Header />
      <div className="inner-container pqrform-topdiv">
        <h1 className="text-2xl font-bold mb-4 border-l-8 border-lime-400  pl-10">
          Annual Product Quality Review
        </h1>
      </div>
      <div className="pqrform">
        <div className="form-tabs">
          <ActiveTab
            label="General Information"
            value="GI"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label="Warehouse Review"
            value="WR"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label="Manufacturing Review"
            value="MR"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label="Laboratory Review"
            value="LR"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label=" Engineering And Maintenance Review"
            value="EAMR"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label="Quality System Review"
            value="QSR"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label="Regulatory Review"
            value="RR"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label="Recommendations"
            value="R"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label="CAPA"
            value="CAPA"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label="Discussion, Evaluation And Conclusion"
            value="DEAC"
            activeTab={tab}
            setTab={setTab}
          />
          <ActiveTab
            label="List Of Annexures/Attachments"
            value="LOA"
            activeTab={tab}
            setTab={setTab}
          />
        </div>
        {tab === "GI" ? (
          <div className="  p-4">
            <div className="dual-group-input ">
              <div className="group-input">
                <label>Initiator </label>
                <input
                  disabled
                  value={pQRData.initiator}
                  onChange={(e) => {
                    setPQRData({ initiator: e.target.value });
                  }}
                />
              </div>

              <div className="group-input">
                <label>Initiate Date</label>
                <input
                  disabled
                  type="date"
                  value={pQRData.initiateDate}
                  onChange={(e) => {
                    setPQRData({ initiateDate: e.target.value });
                  }}
                />
              </div>

              <div className="group-input" style={{ position: "relative" }}>
                <label>Product Name</label>
                <input
                  value={pQRData.productName}
                  onChange={(e) => {
                    setPQRData({ productName: e.target.value });
                  }}
                  style={{ paddingRight: "60px" }}
                />

                <TextRecognition
                  setPQRData={setPQRData}
                  updateField="productName"
                />

                <SpeechtoText pQRData={pQRData} updateField="productName" />
              </div>
            </div>
            {productCodes?.map((productCode, index) => (
              <div key={index} className="group-input">
                <label>
                  Product Code {productCodes.length > 1 ? index + 1 : ""}
                </label>
                <div className="flex gap-4">
                  <input
                    value={productCode}
                    onChange={(e) =>
                      handleProductCodeChange(index, e.target.value)
                    }
                  />
                  {index === productCodes.length - 1 && (
                    <button
                      onClick={addProductCodeInput}
                      className="px-3 py-1 border bg-black text-white border-black rounded"
                    >
                      +
                    </button>
                  )}
                  {productCodes.length > 1 && (
                    <button
                      onClick={() => removeProductCodeInput(index)}
                      className="px-3 py-1 border border-red-500 rounded bg-red-500 text-white"
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="dual-group-input">
              <div className="group-input" style={{ position: "relative" }}>
                <label>Generic Name</label>
                <input
                  value={pQRData.genericName}
                  onChange={(e) => {
                    setPQRData({ genericName: e.target.value });
                  }}
                  style={{ paddingRight: "60px" }}
                />
                <TextRecognition
                  setPQRData={setPQRData}
                  updateField="genericName"
                />
                <SpeechtoText pQRData={pQRData} updateField="genericName" />
              </div>

              <div className="group-input">
                <label>Review Start Date</label>
                <input
                  type="date"
                  value={pQRData.reviewStartDate}
                  onClick={(e) => e.target.showPicker()}
                  onChange={(e) => {
                    setPQRData({ reviewStartDate: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Review End Date</label>
                <input
                  type="date"
                  onClick={(e) => e.target.showPicker()}
                  value={pQRData.reviewEndDate}
                  onChange={(e) => {
                    setPQRData({ reviewEndDate: e.target.value });
                  }}
                />
              </div>
              <div className="group-input ">
                <label>Dosage Form</label>
                <select
                  value={pQRData.dosageForm}
                  onChange={(e) => {
                    setPQRData({ ...pQRData, dosageForm: e.target.value });
                  }}
                >
                  <option value="">Select Dosage Form</option>
                  <option value="Oral Solid">Oral Solid</option>
                  <option value="Oral Liquid">Oral Liquid</option>
                  <option value="Injectables">Injectables</option>
                  <option value="Semisolid">Semisolid</option>
                </select>
              </div>
              <div className="group-input" style={{ position: "relative" }}>
                <label>MFG. LIC. No</label>
                <input
                  value={pQRData.mfgLicNo}
                  onChange={(e) => {
                    setPQRData({ mfgLicNo: e.target.value });
                  }}
                  style={{ paddingRight: "60px" }}
                />
                <TextRecognition
                  setPQRData={setPQRData}
                  updateField="mfgLicNo"
                />
                <SpeechtoText pQRData={pQRData} updateField="mfgLicNo" />
              </div>
            </div>

            <div className="sub-head">Manufacturing Site Address</div>
            <div className="">
            
            
              <GridContainer
                data={manufacturingStage}
                setData={setManufacturingStage}

                setimportedData={setimportedData}
                fileName="manufacturingStage.xlsx"
                gridNo={1}
                headers={Stageheaders}
                fields={Stagefields}
              />
            </div>
         
         
            <div>
              <h4 className="gridName mt-4">Summary</h4>
              <TinyEditor
                editorContent={tiny1}
                setEditorContent={setTinyContent}
                tinyNo={1}
              />
         
      
      
            </div>

            <div className="py-4">
              <GridContainer
                data={manufacturingSAPS}
                setData={setManufacturingSAPS}
                setimportedData={setimportedData}
                fileName="manufacturingSAPS.xlsx"
                headers={SAPSheaders}
                fields={SAPSfields}
              />
            </div>

            <h4 className="gridName">Summary of Manufacturing Site Address</h4>
            <TinyEditor
              editorContent={tiny2}
              setEditorContent={setTinyContent}
              tinyNo={2}
            />
          </div>
        ) : null}
        {tab === "WR" ? (
          <>
            <div className="p-4">
              <div className="sub-head">
                <p className="">
                  Review of Rejected Raw Materials and Packaging Materials
                </p>
              </div>
              <div className="pb-4">
                <h4 className="gridName">Raw Materials Rejection Summary</h4>
                <GridContainer
                  data={rawMRS}
                  setData={setRawMRS}
                  setimportedData={setimportedData}
                  fileName="manufacturingStage.xlsx"
                  headers={rawMRSheaders}
                  fields={rawMRSfields}
                />

                <div>
                  <h4 className="gridName mt-5">Summary</h4>
                  <TinyEditor
                    editorContent={tiny3}
                    setEditorContent={setTinyContent}
                    tinyNo={3}
                  />
                </div>
              </div>

              <div className="pb-4">
                <h4 className="gridName">
                  {" "}
                  Packing Materials Rejection Summary
                </h4>

                <GridContainer
                  data={packingMRS}
                  setData={setPackingMRS}
                  setimportedData={setimportedData}
                  fileName="packingMRS.xlsx"
                  headers={packingMRSheaders}
                  fields={packingMRSfields}
                />

                <h5 className="gridName pt-4">
                  Summary of Review of Rejected Raw Materials and Packaging
                  Materials
                </h5>
                <TinyEditor
                  editorContent={tiny4}
                  setEditorContent={setTinyContent}
                  tinyNo={4}
                />
              </div>
              <div className="sub-head">
                Review of Expired Raw Materials and Packaging Materials
              </div>
              <div className="pb-4">
                <h4 className="gridName">Expired Raw Materials Details</h4>

                <GridContainer
                  data={expiredRMD}
                  setData={setExpiredRMD}
                  setimportedData={setimportedData}
                  fileName="expiredRMD.xlsx"
                  gridNo={1}
                  headers={expiredRMDheaders}
                  fields={expiredRMDfields}
                />

                <div>
                  <h4 className="gridName">Summary</h4>
                  <TinyEditor
                    editorContent={tiny5}
                    setEditorContent={setTinyContent}
                    tinyNo={5}
                  />
                </div>
              </div>

              <div className="">
                <h4 className="gridName">
                  Expired Packaging Materials Details
                </h4>

                <GridContainer
                  data={expiredPMD}
                  setData={setExpiredPMD}
                  setimportedData={setimportedData}
                  fileName="expiredPMD.xlsx"
                  headers={expiredRMDheaders}
                  fields={expiredRMDfields}
                />

                <h4 className="gridName pt-4">
                  Summary of Review of Expired Raw Materials and Packaging
                  Materials
                </h4>
                <TinyEditor
                  editorContent={tiny6}
                  setEditorContent={setTinyContent}
                  tinyNo={6}
                />
              </div>

              <div className="sub-head">Review of Approved Supplier List</div>

              <GridContainer
                data={reviewOfASL}
                setData={setReviewOfASL}
                setimportedData={setimportedData}
                fileName="reviewOfASL.xlsx"
                headers={reviewOfASLheaders}
                fields={reviewOfASLfields}
              />

              <div>
                <h4 className="gridName pt-4">
                  Summary of Review of Approved Supplier List
                </h4>
                <TinyEditor
                  editorContent={tiny7}
                  setEditorContent={setTinyContent}
                  tinyNo={7}
                />
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Raw Material Excipients
              </div>
              <div>
                <GridContainer
                  data={vendorQDORME}
                  setData={setVendorQDORME}
                  setimportedData={setimportedData}
                  fileName="vendorQDORME.xlsx"
                  headers={vendorQDORMEheaders}
                  fields={vendorQDORMEfields}
                />

                <h4 className="gridName pt-4">
                  Summary of Vendor Qualification Details of Raw Material
                  Excipients
                </h4>
                <TinyEditor
                  editorContent={tiny8}
                  setEditorContent={setTinyContent}
                  tinyNo={8}
                />
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Primary Packing Materials
              </div>
              <div>
                <GridContainer
                  data={vendorQDOPPM}
                  setData={setVendorQDOPPM}
                  setimportedData={setimportedData}
                  fileName="vendorQDOPPM.xlsx"
                  headers={vendorQDOPPMheaders}
                  fields={vendorQDOPPMfields}
                />

                <h4 className="gridName pt-4">
                  Summary of Vendor Qualification Details of Primary Packing
                  Materials
                </h4>
                <TinyEditor
                  editorContent={tiny9}
                  setEditorContent={setTinyContent}
                  tinyNo={9}
                />
              </div>

              <div className="sub-head">
                Vendor Qualification Details of Process Gases
              </div>
              <div>
                <GridContainer
                  data={vendorQDPOG}
                  setData={setVendorQDPOG}
                  setimportedData={setimportedData}
                  fileName="vendorQDPOG.xlsx"
                  headers={vendorQDPOGheaders}
                  fields={vendorQDPOGfields}
                />

                <h4 className="gridName pt-4">
                  Summary of Vendor Qualification Details of Process Gases
                </h4>
                <TinyEditor
                  editorContent={tiny10}
                  setEditorContent={setTinyContent}
                  tinyNo={10}
                />
              </div>
            </div>
          </>
        ) : null}
        {tab === "MR" ? (
          <div className="p-4">
            <div className="dual-group-input">
              <div className="group-input" style={{ position: "relative" }}>
                <label>Product Description</label>
                <input
                  value={pQRData.productDescription}
                  onChange={(e) => {
                    setPQRData({ productDescription: e.target.value });
                  }}
                  style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                />
                <TextRecognition
                  setPQRData={setPQRData}
                  updateField="productDescription"
                />
                <SpeechtoText
                  pQRData={pQRData}
                  updateField="productDescription"
                />
              </div>

              <div className="group-input" style={{ position: "relative" }}>
                <label>Process Flow</label>
                <input
                  value={pQRData.processFlow}
                  onChange={(e) => {
                    setPQRData({ processFlow: e.target.value });
                  }}
                  style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                />
                <TextRecognition
                  setPQRData={setPQRData}
                  updateField="processFlow"
                />
                <SpeechtoText pQRData={pQRData} updateField="processFlow" />
              </div>
            </div>

            <div className="sub-head">Review of all Batches Manufactured</div>

            <div className="dual-group-input">
              <div className="group-input" style={{ position: "relative" }}>
                <label>
                  Total No. of batches manufactured during the current review
                  period
                </label>
                <input
                  type="number"
                  value={pQRData.totalBatchesManufactured}
                  onChange={(e) => {
                    setPQRData({ totalBatchesManufactured: e.target.value });
                  }}
                  style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                />
                <TextRecognition
                  setPQRData={setPQRData}
                  updateField="totalBatchesManufactured"
                />
                <SpeechtoText
                  pQRData={pQRData}
                  updateField="totalBatchesManufactured"
                />
              </div>

              <div className="group-input" style={{ position: "relative" }}>
                <label>Total No. of batches Approved & Released</label>
                <input
                  value={pQRData.totalBatchesApprovedReleased}
                  onChange={(e) => {
                    setPQRData({
                      totalBatchesApprovedReleased: e.target.value,
                    });
                  }}
                  style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                />
                <TextRecognition
                  setPQRData={setPQRData}
                  updateField="totalBatchesApprovedReleased"
                />
                <SpeechtoText
                  pQRData={pQRData}
                  updateField="totalBatchesApprovedReleased"
                />
              </div>

              <div className="group-input" style={{ position: "relative" }}>
                <label>Total No. of Process Validation Batches</label>
                <input
                  value={pQRData.totalProcessValidationBatches}
                  onChange={(e) => {
                    setPQRData({
                      totalProcessValidationBatches: e.target.value,
                    });
                  }}
                  style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                />
                <TextRecognition
                  setPQRData={setPQRData}
                  updateField="totalProcessValidationBatches"
                />
                <SpeechtoText
                  pQRData={pQRData}
                  updateField="totalProcessValidationBatches"
                />
              </div>

              <div className="group-input" style={{ position: "relative" }}>
                <label>Total No. of Reprocessed Batches</label>
                <input
                  value={pQRData.totalReprocessedBatches}
                  onChange={(e) => {
                    setPQRData({ totalReprocessedBatches: e.target.value });
                  }}
                  style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                />
                <TextRecognition
                  setPQRData={setPQRData}
                  updateField="totalReprocessedBatches"
                />
                <SpeechtoText
                  pQRData={pQRData}
                  updateField="totalReprocessedBatches"
                />
              </div>

              <div className="group-input">
                <label>Process Validation Batches Details</label>
                <TinyEditor
                  editorContent={tiny11}
                  setEditorContent={setTinyContent}
                  tinyNo={11}
                />
              </div>

              <div className="group-input">
                <label>Reprocessing Details</label>
                <TinyEditor
                  editorContent={tiny12}
                  setEditorContent={setTinyContent}
                  tinyNo={12}
                />
              </div>
              <div className="group-input">
                <label>Microbial Excursion Details</label>
                <TinyEditor
                  editorContent={tiny13}
                  setEditorContent={setTinyContent}
                  tinyNo={13}
                />
              </div>
            </div>
            <div className="gridName">Code to code transfer details</div>
            <div className="py-4">
              <GridContainer
                data={codeTCTD}
                setData={setCodeTCTD}
                setimportedData={setimportedData}
                fileName="codeTCTD.xlsx"
                headers={codeTCTDheaders}
                fields={codeTCTDfields}
              />

              <h4 className="gridName pt-4">
                Summary of Code to Code Transfer Details
              </h4>
              <TinyEditor
                editorContent={tiny14}
                setEditorContent={setTinyContent}
                tinyNo={14}
              />
            </div>
            <div className="sub-head">
              {" "}
              Review of Manufacturing Process, Packing Process and relevant
              Validation Status
            </div>
            <TinyEditor
              editorContent={tiny15}
              setEditorContent={setTinyContent}
              tinyNo={15}
            />

            <div className="sub-head">
              Review of Reprocessing/Repacking/Reworking along with CAPA and
              Effectiveness Check Verification (if any)
            </div>
            <div className="dual-group-input">
              <div className="group-input">
                <label>Batch reprocessing/reworking process Details</label>
                <TinyEditor
                  editorContent={tiny16}
                  setEditorContent={setTinyContent}
                  tinyNo={16}
                />
              </div>
              <div className="group-input">
                <label>Batch Repacking Details </label>
                <TinyEditor
                  editorContent={tiny17}
                  setEditorContent={setTinyContent}
                  tinyNo={17}
                />
              </div>
            </div>

            <div className="py-4">
              <GridContainer
                data={reviewORCEC}
                setData={setReviewORCEC}
                setimportedData={setimportedData}
                fileName="reviewORCEC.xlsx"
                headers={reviewORCECheaders}
                fields={reviewORCECfields}
              />
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny18}
                setEditorContent={setTinyContent}
                tinyNo={18}
              />
            </div>

            <h4 className="gridName">CAPA Details</h4>
            <div>
              <GridContainer
                data={capaDetails}
                setData={setCapaDetails}
                setimportedData={setimportedData}
                fileName="capaDetails.xlsx"
                headers={capaDetailsheaders}
                fields={capaDetailsfields}
              />
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny19}
                setEditorContent={setTinyContent}
                tinyNo={19}
              />
            </div>

            <h4 className="gridName">Deviation Details</h4>
            <div>
              <GridContainer
                data={deviationDetails}
                setData={setDeviationDetails}
                setimportedData={setimportedData}
                fileName="deviationDetails.xlsx"
                headers={deviationDetailsheaders}
                fields={deviationDetailsfields}
              />
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny20}
                setEditorContent={setTinyContent}
                tinyNo={20}
              />
            </div>

            <div className="sub-head">
              Review of all Batch Failures/Rejections along with CAPA and
              Effectiveness Check Verification (if any):
            </div>

            <h4 className="gridName">Batch Failures/Rejections Details </h4>
            <TinyEditor
              editorContent={tiny21}
              setEditorContent={setTinyContent}
              tinyNo={21}
            />

            <h4 className="gridName">OOS Details</h4>
            <div>
              <GridContainer
                data={oosDetails}
                setData={setOosDetails}
                setimportedData={setimportedData}
                fileName="oosDetails.xlsx"
                headers={oosDetailsheaders}
                fields={oosDetailsfields}
              />
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny22}
                setEditorContent={setTinyContent}
                tinyNo={22}
              />
            </div>

            <h4 className="gridName">OOT Results</h4>
            <div>
              <GridContainer
                data={ootResults}
                setData={setOotResults}
                setimportedData={setimportedData}
                fileName="ootResults.xlsx"
                headers={ootResultsheaders}
                fields={ootResultsfields}
              />
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny23}
                setEditorContent={setTinyContent}
                tinyNo={23}
              />
            </div>
            <h4 className="gridName">OOA Results</h4>
            <div>
              <GridContainer
                data={ooaResults}
                setData={setOoaResults}
                setimportedData={setimportedData}
                fileName="ooaResults.xlsx"
                headers={ooaResultsheaders}
                fields={ooaResultsfields}
              />
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny24}
                setEditorContent={setTinyContent}
                tinyNo={24}
              />
            </div>
            <h4 className="gridName">OOL Results</h4>
            <div>
              <GridContainer
                data={oolResults}
                setData={setOolResults}
                setimportedData={setimportedData}
                fileName="oolResults.xlsx"
                headers={oolResultsheaders}
                fields={oolResultsfields}
              />
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny25}
                setEditorContent={setTinyContent}
                tinyNo={25}
              />
            </div>

            <div className="sub-head">
              Review of Product Quality (Critical Process Parameters)
            </div>

            <h3 className="gridName">Unit Operation 1</h3>
            <h4 className="gridName">
              Buffer formulation summary details provided below
            </h4>
            <div>
              //Not Completed
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addBufferFSDPVRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={bufferFSDPV}
                    setimportedData={setimportedData}
                    fileName="bufferFSDPV.xlsx"
                  />
                </div>
              </div>
           
              <ComplexCommonTable
              data={bufferFSDPV}
              setdata={setBufferFSDPV}
              headers={bufferFSDPVheaders} 
              fields={bufferFSDPVfields}
              />

              {/* <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Critical Process Parameters</th>
                    <th rowSpan={2}>Codes</th>
                    <th rowSpan={2}>Acceptance criteria</th>
                    <th className="centerText" colSpan={2}>
                      Results
                    </th>
                    <th rowSpan={2}>Complies / Does not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {bufferFSDPV?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.criticalProcessParameter}
                            onChange={(e) => {
                              const newData = [...bufferFSDPV];
                              newData[index].criticalProcessParameter =
                                e.target.value;
                              setBufferFSDPV(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.codes}
                            onChange={(e) => {
                              const newData = [...bufferFSDPV];
                              newData[index].codes = e.target.value;
                              setBufferFSDPV(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.acceptanceCriteria}
                            onChange={(e) => {
                              const newData = [...bufferFSDPV];
                              newData[index].acceptanceCriteria =
                                e.target.value;
                              setBufferFSDPV(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.results.minimum}
                            onChange={(e) => {
                              const newData = [...bufferFSDPV];
                              newData[index].results.minimum = e.target.value;
                              setBufferFSDPV(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.results.maximum}
                            onChange={(e) => {
                              const newData = [...bufferFSDPV];
                              newData[index].results.maximum = e.target.value;
                              setBufferFSDPV(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...bufferFSDPV];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setBufferFSDPV(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> */}
            </div>
            <h3 className="gridName pt-4">Unit Operation 2</h3>
            <h4 className="gridName">Manufacturing summary details</h4>

            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addmanufacturingSDRow} />
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={manufacturingSD}
                  setimportedData={setimportedData}
                  fileName="manufacturingSD.xlsx"
                />
              </div>
            </div>
       <p>2</p>
            <ComplexCommonTable
              data={manufacturingSD}
              setdata={setManufacturingSD}
              headers={manufacturingSDheaders} 
              fields={manufacturingSDfields}
              />
            {/* <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th className="centerText" colSpan={2}>
                    Results
                  </th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {manufacturingSD?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setManufacturingSD(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].codes = e.target.value;
                            setManufacturingSD(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].acceptanceCriteria = e.target.value;
                            setManufacturingSD(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].results.minimum = e.target.value;
                            setManufacturingSD(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].results.maximum = e.target.value;
                            setManufacturingSD(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].compliesNotComplies = e.target.value;
                            setManufacturingSD(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table> */}

            <h3 className="gridName pt-4">Unit Operation 3</h3>
            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addUnitOperation3Row} />
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={unitOperation3}
                  setimportedData={setimportedData}
                  fileName="unitOperation3.xlsx"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th className="centerText" colSpan={2}>
                    Results
                  </th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation3?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setUnitOperation3(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].codes = e.target.value;
                            setUnitOperation3(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation3(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation3(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation3(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation3(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 4</h3>
            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addUnitOperation4Row} />
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={unitOperation4}
                  setimportedData={setimportedData}
                  fileName="unitOperation4.xlsx"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th className="centerText" colSpan={2}>
                    Results
                  </th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation4?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setUnitOperation4(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].codes = e.target.value;
                            setUnitOperation4(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation4(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation4(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation4(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation4(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 5</h3>
            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addUnitOperation5Row} />
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={unitOperation5}
                  setimportedData={setimportedData}
                  fileName="unitOperation5.xlsx"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th className="centerText" colSpan={2}>
                    Results
                  </th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation5?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setUnitOperation5(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].codes = e.target.value;
                            setUnitOperation5(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation5(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation5(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation5(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation5(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 6</h3>
            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addUnitOperation6Row} />
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={unitOperation6}
                  setimportedData={setimportedData}
                  fileName="unitOperation6.xlsx"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th className="centerText" colSpan={2}>
                    Results
                  </th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation6?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setUnitOperation6(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].codes = e.target.value;
                            setUnitOperation6(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation6(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation6(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation6(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation6(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 7</h3>
            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addUnitOperation7Row} />
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={unitOperation7}
                  setimportedData={setimportedData}
                  fileName="unitOperation7.xlsx"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th className="centerText" colSpan={2}>
                    Results
                  </th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation7?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setUnitOperation7(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].codes = e.target.value;
                            setUnitOperation7(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation7(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation7(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation7(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation7(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 8</h3>
            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addUnitOperation8Row} />
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={unitOperation8}
                  setimportedData={setimportedData}
                  fileName="unitOperation8.xlsx"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th className="centerText" colSpan={2}>
                    Results
                  </th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation8?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setUnitOperation8(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].codes = e.target.value;
                            setUnitOperation8(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation8(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation8(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation8(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation8(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 9</h3>
            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addUnitOperation9Row} />
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={unitOperation9}
                  setimportedData={setimportedData}
                  fileName="unitOperation9.xlsx"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th className="centerText" colSpan={2}>
                    Results
                  </th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation9?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setUnitOperation9(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].codes = e.target.value;
                            setUnitOperation9(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation9(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation9(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation9(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation9(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 10</h3>
            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addUnitOperation10Row} />
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={unitOperation10}
                  setimportedData={setimportedData}
                  fileName="unitOperation10.xlsx"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th className="centerText" colSpan={2}>
                    Results
                  </th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation10?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setUnitOperation10(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].codes = e.target.value;
                            setUnitOperation10(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation10(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation10(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation10(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation10(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="sub-head">
              Critical Process Parameters Review Summary
            </div>
            <div className="group-input">
              <TinyEditor
                editorContent={tiny26}
                setEditorContent={setTinyContent}
                tinyNo={26}
              />
            </div>
          </div>
        ) : null}
        {tab === "LR" ? (
          <div className="p-4">
            <div className="sub-head">
              {" "}
              Review of Drug Substance Test Results
            </div>
            <h1 className="gridName">pH Of Paracetamol Test Results</h1>
            <div>



              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR.xlsx"
                gridNo={22}
                headers={reviewODSTRheaders}
                data={reviewODSTR}
                setData={setReviewOSTR}
                fields={reviewODSTRfields}
              />



            </div>
            <h1 className="gridName  pt-8">
              Assay Of Paracetamol Test Results
            </h1>
            <div>


              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR2.xlsx"
                gridNo={23}
                headers={reviewODSTR2headers}
                data={reviewODSTR2}
                setData={setReviewOSTR2}
                fields={reviewODSTR2fields}
              />







            </div>{" "}
            <h1 className="gridName pt-8">
              Impurity Of Paracetamol Test Result
            </h1>
            <div>

              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR3.xlsx"
                gridNo={24}

                headers={reviewODSTR3headers}
                data={reviewODSTR3}
                setData={setReviewOSTR3}
                fields={reviewODSTR3fields}
              />







            </div>{" "}
            <h1 className="gridName pt-8">
              Dissolution Of Paracetamol Test Result
            </h1>
            <div>

              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR4.xlsx"
                gridNo={25}

                headers={reviewODSTR4headers}
                data={reviewODSTR4}
                setData={setReviewOSTR4}
                fields={reviewODSTR4fields}
              />



            </div>{" "}
            <h1 className="gridName pt-8">
              Disintegration Of Paracetamol Test Result
            </h1>
            <div>

              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR5.xlsx"
                gridNo={26}
                headers={reviewODSTR5headers}
                data={reviewODSTR5}
                setData={setReviewOSTR5}
                fields={reviewODSTR5fields}
              />




            </div>{" "}
            <h1 className="gridName pt-8">pH Of Terbinafine Test Result</h1>
            <div>



              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR6.xlsx"
                gridNo={27}
                headers={reviewODSTR6headers}
                data={reviewODSTR6}
                setData={setReviewOSTR6}
                fields={reviewODSTR6fields}
              />




            </div>{" "}
            <h1 className="gridName pt-8">Assay Of Terbinafine Test Result</h1>
            <div>

              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR6.xlsx"
                gridNo={27}
                headers={reviewODSTR7headers}
                data={reviewODSTR7}
                setData={setReviewOSTR7}
                fields={reviewODSTR7fields}
              />


            </div>{" "}
            <h1 className="gridName pt-8">
              Impurity Of Terbinafine Test Result
            </h1>
            <div>


              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR8.xlsx"
                gridNo={29}
                headers={reviewODSTR8headers}
                data={reviewODSTR8}
                setData={setReviewOSTR8}
                fields={reviewODSTR8fields}
              />






            </div>{" "}
            <h1 className="gridName pt-8">
              Dissolution Of Terbinafine Test Result
            </h1>
            <div>


              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR9.xlsx"
                gridNo={30}
                headers={reviewODSTR9headers}
                data={reviewODSTR9}
                setData={setReviewOSTR9}
                fields={reviewODSTR9fields}
              />



            </div>{" "}
            <h1 className="gridName pt-8">
              Disinteration Of Terbinafine Test Result
            </h1>
            <div>



              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR10.xlsx"
                gridNo={31}
                headers={reviewODSTR10headers}
                data={reviewODSTR10}
                setData={setReviewOSTR10}
                fields={reviewODSTR10fields}
              />

            </div>
            <h1 className="gridName pt-8">pH Of Pentoprazole Test Result</h1>
            <div>



              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR11.xlsx"
                gridNo={32}
                headers={reviewODSTR11headers}
                data={reviewODSTR11}
                setData={setReviewOSTR11}
                fields={reviewODSTR11fields}
              />

            </div>
            <h1 className="gridName pt-8">Assay Of Pentoprazole Test Result</h1>
            <div>


              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR12.xlsx"
                gridNo={33}
                headers={reviewODSTR12headers}
                data={reviewODSTR12}
                setData={setReviewOSTR12}
                fields={reviewODSTR12fields}
              />

            </div>
            <h1 className="gridName pt-8">
              Impurity Of Pentoprazole Test Result
            </h1>
            <div>



              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR13.xlsx"
                gridNo={34}
                headers={reviewODSTR13headers}
                data={reviewODSTR13}
                setData={setReviewOSTR13}
                fields={reviewODSTR13fields}
              />


            </div>
            <h1 className="gridName pt-8">
              Dissolution Of Pentoprazole Test Result
            </h1>
            <div>


              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR14.xlsx"
                gridNo={35}
                headers={reviewODSTR14headers}
                data={reviewODSTR14}
                setData={setReviewOSTR14}
                fields={reviewODSTR14fields}
              />



            </div>
            <h1 className="gridName pt-8">
              Disinteration Of Pentoprazole Test Result
            </h1>
            <div>


              <GridContainer
                setimportedData={setimportedData}
                fileName="reviewODSTR15.xlsx"
                gridNo={36}
                headers={reviewODSTR15headers}
                data={reviewODSTR15}
                setData={setReviewOSTR15}
                fields={reviewODSTR15fields}
              />



            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny27}
                setEditorContent={setTinyContent}
                tinyNo={27}
              />
            </div>
            <div className="sub-head">
              Review of Raw Material Excipient Test Results
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewORMETRRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewORMETR}
                    setimportedData={setimportedData}
                    fileName="reviewORMETR.xlsx"
                  />
                </div>
              </div>
              
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Primary Packing Material</th>
                    <th rowSpan={2}>Test parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewORMETR?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.material}
                            onChange={(e) => {
                              const newData = [...reviewORMETR];
                              newData[index].material = e.target.value;
                              setReviewORMETR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewORMETR];
                              newData[index].testsParameter = e.target.value;
                              setReviewORMETR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewORMETR];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewORMETR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewORMETR];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewORMETR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewORMETR];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewORMETR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewORMETR];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewORMETR(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny28}
                setEditorContent={setTinyContent}
                tinyNo={28}
              />
            </div>
            <div className="sub-head">
              Review of Packing Material Test Results
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addreviewOPMTRRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewOPMTR}
                    setimportedData={setimportedData}
                    fileName="reviewOPMTR.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Primary Packing Material</th>
                    <th rowSpan={2}>Test parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewOPMTR?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.material}
                            onChange={(e) => {
                              const newData = [...reviewOPMTR];
                              newData[index].material = e.target.value;
                              setReviewOPMTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewOPMTR];
                              newData[index].testsParameter = e.target.value;
                              setReviewOPMTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewOPMTR];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewOPMTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewOPMTR];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewOPMTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewOPMTR];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewOPMTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewOPMTR];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewOPMTR(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny29}
                setEditorContent={setTinyContent}
                tinyNo={29}
              />
            </div>
            <div className="sub-head">
              Review of Drug Product – In process Test Results
            </div>
            <h4 className="gridName pt-2">Dilution Buffer 1 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP}
                    setimportedData={setimportedData}
                    fileName="reviewODP.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP];
                              newData[index].stage = e.target.value;
                              setReviewODP(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-8 ">Dilution Buffer 2 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow2} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP2}
                    setimportedData={setimportedData}
                    fileName="reviewODP2.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP2?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP2];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP2];
                              newData[index].stage = e.target.value;
                              setReviewODP2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP2];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP2];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP2];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP2];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP2(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h4 className="gridName pt-8">Dilution Buffer 3 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow3} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP3}
                    setimportedData={setimportedData}
                    fileName="reviewODP3.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP3?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP3];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP3];
                              newData[index].stage = e.target.value;
                              setReviewODP3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP3];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP3];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP3];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP3];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP3(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h4 className="gridName pt-8">Dilution Buffer 4 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow4} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP4}
                    setimportedData={setimportedData}
                    fileName="reviewODP4.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP4?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP4];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP4];
                              newData[index].stage = e.target.value;
                              setReviewODP4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP4];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP4];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP4];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP4];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP4(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h4 className="gridName pt-8">Dilution Buffer 5 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow5} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP5}
                    setimportedData={setimportedData}
                    fileName="reviewODP5.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP5?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP5];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP5];
                              newData[index].stage = e.target.value;
                              setReviewODP5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP5];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP5];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP5];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP5];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP5(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h4 className="gridName pt-8">Dilution Buffer 6 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow6} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP6}
                    setimportedData={setimportedData}
                    fileName="reviewODP6.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP6.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP6];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP6];
                              newData[index].stage = e.target.value;
                              setReviewODP6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP6];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP6];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP6];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP6];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP6(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h4 className="gridName pt-8">Dilution Buffer 7 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow7} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP7}
                    setimportedData={setimportedData}
                    fileName="reviewODP7.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP7.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP7];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP7];
                              newData[index].stage = e.target.value;
                              setReviewODP7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP7];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP7];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP7];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h4 className="gridName pt-8">Dilution Buffer 8 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow8} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP8}
                    setimportedData={setimportedData}
                    fileName="reviewODP8.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP8.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP8];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP8];
                              newData[index].stage = e.target.value;
                              setReviewODP8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP8];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP8];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP8];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP8];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP8(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h4 className="gridName pt-8">Dilution Buffer 9 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow9} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP9}
                    setimportedData={setimportedData}
                    fileName="reviewODP9.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP9.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP9];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP9];
                              newData[index].stage = e.target.value;
                              setReviewODP9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP9];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP9];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP9];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP9];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP9(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-8">Dilution Buffer 10 - Test Results</h4>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow10} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODP10}
                    setimportedData={setimportedData}
                    fileName="reviewODP10.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP10.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].testsParameter = e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].stage = e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny30}
                setEditorContent={setTinyContent}
                tinyNo={30}
              />
            </div>
            <div className="sub-head">
              Review of Drug Product –Finished Product Test Results
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPFPTRRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewODPFPTR}
                    setimportedData={setimportedData}
                    fileName="reviewODPFPTR.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th className="centerText" colSpan={2}>
                      Obtained value
                    </th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODPFPTR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODPFPTR];
                              newData[index].testsParameter = e.target.value;
                              setReviewODPFPTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODPFPTR];
                              newData[index].specificationLimit =
                                e.target.value;
                              setReviewODPFPTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODPFPTR];
                              newData[index].obtainedValue.minimum =
                                e.target.value;
                              setReviewODPFPTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODPFPTR];
                              newData[index].obtainedValue.maximum =
                                e.target.value;
                              setReviewODPFPTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODPFPTR];
                              newData[index].compliesNotComplies =
                                e.target.value;
                              setReviewODPFPTR(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny31}
                setEditorContent={setTinyContent}
                tinyNo={31}
              />
            </div>
            <div className="sub-head">Summary of Ongoing Stability Studies</div>
            <div>
             
             
              <GridContainer
                setimportedData={setimportedData}
                fileName="summaryOOSS.xlsx"
                setData={setSummaryOOSS}
                data={summaryOOSS}
                headers={summaryOOSSheaders}
                fields={summaryOOSSfields}
              />


              <div>
                <h4 className="gridName mt-5">Summary</h4>
                <TinyEditor
                  editorContent={tiny32}
                  setEditorContent={setTinyContent}
                  tinyNo={32}
                />
              </div>

              <h4 className="gridName pt-4">Stability Study Related OOS/OOT</h4>


              <GridContainer
                setimportedData={setimportedData}
                fileName="stabilitySR.xlsx"
                setData={setStabilitySR}
                data={stabilitySR}
                headers={stabilitySRheaders}
                fields={stabilitySRfields}
              />
          
          

              <h4 className="gridName">Summary</h4>
              <TinyEditor
                editorContent={tiny33}
                setEditorContent={setTinyContent}
                tinyNo={33}
              />

              <div className="sub-head">
                Review of Visual Inspection – Reserve Samples
              </div>
              <div>
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addreviewOVIRSRow} />
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={reviewOVIRS}
                      setimportedData={setimportedData}
                      fileName="reviewOVIRS.xlsx"
                    />
                  </div>
                </div>
           
         
           
                <table>
                  <thead>
                    <th className="text-center" colSpan={9}>
                      Batch Numbers
                    </th>
                  </thead>
                  <tbody>
                    {reviewOVIRS.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.column1}
                              onChange={(e) => {
                                const newData = [...reviewOVIRS];
                                newData[index].column1 = e.target.value;
                                setReviewOVIRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column2}
                              onChange={(e) => {
                                const newData = [...reviewOVIRS];
                                newData[index].column2 = e.target.value;
                                setReviewOVIRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column3}
                              onChange={(e) => {
                                const newData = [...reviewOVIRS];
                                newData[index].column3 = e.target.value;
                                setReviewOVIRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column4}
                              onChange={(e) => {
                                const newData = [...reviewOVIRS];
                                newData[index].column4 = e.target.value;
                                setReviewOVIRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column5}
                              onChange={(e) => {
                                const newData = [...reviewOVIRS];
                                newData[index].column5 = e.target.value;
                                setReviewOVIRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column6}
                              onChange={(e) => {
                                const newData = [...reviewOVIRS];
                                newData[index].column6 = e.target.value;
                                setReviewOVIRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column7}
                              onChange={(e) => {
                                const newData = [...reviewOVIRS];
                                newData[index].column7 = e.target.value;
                                setReviewOVIRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column8}
                              onChange={(e) => {
                                const newData = [...reviewOVIRS];
                                newData[index].column8 = e.target.value;
                                setReviewOVIRS(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <h4 className="gridName mt-4">Summary</h4>
              <TinyEditor
                editorContent={tiny34}
                setEditorContent={setTinyContent}
                tinyNo={34}
              />

              <h4 className="gridName pt-4">
                Review of Analytical Method Validations
              </h4>
              <TinyEditor
                editorContent={tiny35}
                setEditorContent={setTinyContent}
                tinyNo={35}
              />

              <h4 className="gridName pt-4">
                Review of Contract Testing Laboratories
              </h4>
              <TinyEditor
                editorContent={tiny36}
                setEditorContent={setTinyContent}
                tinyNo={36}
              />

              <h4 className="gridName pt-4">
                Review of Environmental Monitoring Trend and water trends
                Reports
              </h4>
              <TinyEditor
                editorContent={tiny37}
                setEditorContent={setTinyContent}
                tinyNo={37}
              />

              <h4 className="gridName pt-4">Laboratory Review Summary</h4>
              <TinyEditor
                editorContent={tiny38}
                setEditorContent={setTinyContent}
                tinyNo={38}
              />
            </div>
          </div>
        ) : null}
        {tab === "EAMR" ? (
          <div>
            <h4 className="gridName">Preventive Maintenance Details</h4>
            <TinyEditor
              editorContent={tiny39}
              setEditorContent={setTinyContent}
              tinyNo={39}
            />

            <h4 className="gridName pt-4"> Qualification details</h4>
            <TinyEditor
              editorContent={tiny40}
              setEditorContent={setTinyContent}
              tinyNo={40}
            />

            <h4 className="gridName pt-4"> Calibration Details</h4>
            <TinyEditor
              editorContent={tiny41}
              setEditorContent={setTinyContent}
              tinyNo={41}
            />

            <div className="sub-head">HVAC Qualification Status</div>
            <div>
           
           
                <GridContainer
                setimportedData={setimportedData}
                fileName="hVACQStatus.xlsx"
                setData={setHVACQStatus}
                data={hVACQStatus}
                headers={hVACQStatusheaders}
                fields={hVACQStatusfields}
              />
             
           
           
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tiny42}
                setEditorContent={setTinyContent}
                tinyNo={42}
              />
            </div>

            <h4 className="gridName pt-4">
              Sanitization and Sterilization Details of Utilities
            </h4>
            <div>
           
           

              <GridContainer
                setimportedData={setimportedData}
                fileName="sanitizationASDOU.xlsx"
                setData={setSanitizationASDOU}
                data={sanitizationASDOU}
                headers={setSanitizationASDOUheaders}
                fields={setSanitizationASDOUfields}
              />
            
            
            </div>
            <h4 className="gridName pt-4">Summary</h4>
            <TinyEditor
              editorContent={tiny43}
              setEditorContent={setTinyContent}
              tinyNo={43}
            />

            <h4 className="gridName pt-4">Compressed Gases</h4>
            <div>
              
              
              <GridContainer
                setimportedData={setimportedData}
                fileName="compressedGas.xlsx"
                setData={setCompressedGas}
                data={compressedGas}
                headers={compressedGasheaders}
                fields={compressedGasfields}
              />
          
          
            </div>
            <h4 className="gridName pt-4">Engineering Summary</h4>
            <TinyEditor
              editorContent={tiny44}
              setEditorContent={setTinyContent}
              tinyNo={44}
            />
          </div>
        ) : null}
        {tab === "QSR" ? (
          <div>
            <div className="sub-head">Review of Deviations</div>

            <div className="gridName">Review of Current Period Deviations</div>
            <div>
        
        
              <GridContainer
                
                MdNoteAddfun ={addReviewOfCPD}
                setData={setReviewOFCPD}
                data={reviewOfCPD}
                headers={reviewOfCPDheaders}
                fields={reviewOfCPDfields}
              />
          
          
            </div>

            <div className="gridName pt-4">
              Previous Review Period Deviations
            </div>
            <div>
          
          
              <GridContainer
                MdNoteAddfun ={addPreviewRPD}
                setData={setPreviewRPD}
                data={previewRPD}
                headers={previewRPDheaders}
                fields={previewRPDfields}
              />
             
             
            </div>
            <h4 className="gridName pt-4">Deviation Summary</h4>
            <TinyEditor
              editorContent={tiny45}
              setEditorContent={setTinyContent}
              tinyNo={45}
            />

            <div className="sub-head"> Review of OOS (Microbiological)</div>

            <div className="gridName">Current Review Period OOS</div>

            <div>
           
           
                   
              <GridContainer
                MdNoteAddfun ={addCurrentOOS}
                setData={setCurrentOOS}
                data={currentOOS}
                headers={currentOOSheaders}
                fields={currentOOSfields}
              />

            
            
            </div>

            <div className="gridName pt-4">Previous Review Period OOS</div>

            <div>
           
           

              <GridContainer
                MdNoteAddfun ={addPreviewOOS}
                setData={setPreviewOOS}
                data={previewOOS}
                headers={previewOOSheaders}
                fields={previewOOSfields}
              />

             
             
            </div>
            <h4 className="gridName pt-4">OOS Summary</h4>
            <TinyEditor
              editorContent={tiny46}
              setEditorContent={setTinyContent}
              tinyNo={46}
            />

            <div className="sub-head"> Review of OOAC (Microbiological)</div>

            <div className="gridName">Current Review Period OOAC</div>

            <div>
         
         
              <GridContainer
                MdNoteAddfun ={addCurrentOOAC}
                setData={setCurrentOOAC}
                data={currentOOAC}
                headers={currentOOACheaders}
                fields={currentOOACfields}
              />

            
            
            </div>

            <div className="gridName pt-4">Previous Review Period OOAC</div>

            <div>
          
          
       
       
              <GridContainer
                MdNoteAddfun ={addPreviewOOAC}
                setData={setPreviewOOAC}
                data={previewOOAC}
                headers={previewOOACheaders}
                fields={previewOOACfields}
              />
            
            
            </div>
            <h4 className="gridName pt-4">OOAC Summary</h4>
            <TinyEditor
              editorContent={tiny47}
              setEditorContent={setTinyContent}
              tinyNo={47}
            />

            <div className="sub-head"> Review of OOAL(Microbiological)</div>

            <div className="gridName">Current Review Period OOAL</div>

            <div>
            
            
              <GridContainer
                MdNoteAddfun ={addCurrentOOAL}
                setData={setCurrentOOAL}
                data={currentOOAL}
                headers={currentOOALheaders}
                fields={currentOOALfields}
              />
          
          
            </div>

            <div className="gridName pt-4">Previous Review Period OOAL</div>

            <div>
        
        
              
              <GridContainer
                MdNoteAddfun ={addPreviewOOAL}
                setData={setPreviewOOAL}
                data={previewOOAL}
                headers={previewOOALheaders}
                fields={previewOOALfields}
              />
           
           
            </div>
            <h4 className="gridName pt-4">OOAL Summary</h4>
            <TinyEditor
              editorContent={tiny48}
              setEditorContent={setTinyContent}
              tinyNo={48}
            />

            <div className="sub-head">Review of OOS (Analytical)</div>

            <div className="gridName">Current review period OOS</div>

            <div>
           
           
            
              <GridContainer
                MdNoteAddfun ={addCurrentOOSA}
                setData={setCurrentOOSA}
                data={currentOOSA}
                headers={currentOOSAheaders}
                fields={currentOOSAfields}
              />
             
             
            </div>

            <div className="gridName pt-4">Previous review period OOS</div>

            <div>
          
          
           
           
              <GridContainer
                MdNoteAddfun ={addPreviewOOSA}
                setData={setPreviewOOSA}
                data={previewOOSA}
                headers={previewOOSAheaders}
                fields={previewOOSAfields}
              />
             
             
            </div>
            <h4 className="gridName pt-4">OOSA Summary</h4>
            <TinyEditor
              editorContent={tiny49}
              setEditorContent={setTinyContent}
              tinyNo={49}
            />

            <div className="sub-head">Review of OOT (Analytical)</div>

            <div className="gridName pt-4">Current Review Period OOT</div>
            <div>
           
           
             
             
              <GridContainer
                MdNoteAddfun ={addCurrentOOT}
                setData={setCurrentOOT}
                data={currentOOT}
                headers={currentOOTheaders}
                fields={currentOOTfields}
              />


            </div>

            <div className="gridName pt-4">Previous review period OOS</div>

            <div>
        
        
              <GridContainer
                MdNoteAddfun ={addPreviewOOT}
                setData={setPreviewOOT}
                data={previewOOT}
                headers={previewOOTheaders}
                fields={previewOOTfields}
              />
          
          
            </div>

            <h4 className="gridName pt-4">OOT Summary</h4>
            <TinyEditor
              editorContent={tiny50}
              setEditorContent={setTinyContent}
              tinyNo={50}
            />

            <div className="sub-head">Review of Change Controls</div>

            <div className="gridName pt-4">
              Current Review Period Change Controls
            </div>

            <div>
          
          
              <GridContainer
                MdNoteAddfun ={addCurrentCC}
                setData={setCurrentCC}
                data={currentCC}
                headers={currentCCheaders}
                fields={currretCCfields}
              />
           
           
            </div>

            <div className="gridName pt-4">
              Previous Review Period Change Controls
            </div>

            <div>
            
            
              <GridContainer
                MdNoteAddfun ={addPreviewCC}
                setData={setPreviewCC}
                data={previewCC}
                headers={previewCCheaders}
                fields={previewCCfields}
              />
         
         
            </div>

            <h4 className="gridName pt-4">Change Control Summary</h4>
            <TinyEditor
              editorContent={tiny51}
              setEditorContent={setTinyContent}
              tinyNo={51}
            />

            <div className="sub-head">Review of Lab Incident</div>

            <div className="gridName pt-4">Current Review Lab Incident</div>
            <div>


              <GridContainer
                MdNoteAddfun ={addCurrentLabI}
                setData={setCurrentLabI}
                data={currentLabI}
                headers={currentLabIheaders}
                fields={currentLabIfields}
              />
            
            
            </div>

            <div className="gridName pt-4">Previous Review Lab Incident</div>

            <div>
         
         
              <GridContainer
                MdNoteAddfun ={addPreviewLabI}
                setData={setPreviewLabI}
                data={previewLabI}
                headers={previewLabIheaders}
                fields={previewLabIfields}
             />
            </div>

            <h4 className="gridName pt-4">Lab Incident Summary</h4>
            <TinyEditor
              editorContent={tiny52}
              setEditorContent={setTinyContent}
              tinyNo={52}
            />

            <div className="sub-head">Review of Market Complaints</div>

            <div className="gridName pt-4">
              Current Review Period Complaints
            </div>
            <div>
             
             
              <GridContainer
                MdNoteAddfun ={addCurrentMC}
                setData={setCurrentMC}
                data={currentMC}
                headers={currentMCheaders}
                fields={currentMCfields}
              />
           
           
            </div>

            <div className="gridName pt-4">
              Previous Review Period Complaints
            </div>

            <div>
            
            
          
          
               <GridContainer
                MdNoteAddfun ={addPreviewMC}
                setData={setPreviewMC}
                data={previewMC}
                headers={previewMCheaders}
                fields={previewMCfields}
              />


            </div>

            <h4 className="gridName pt-4">Market Complaints Summary</h4>
            <TinyEditor
              editorContent={tiny53}
              setEditorContent={setTinyContent}
              tinyNo={53}
            />

            <div className="sub-head">Quality Related Notification</div>
            <div className="gridName pt-4">
              {" "}
              Current Review Period Quality Related Notification
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentRPQRNRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>SI. No.</th>
                    <th rowSpan={2}>Batch No.</th>
                    <th className="centerText" colSpan={4}>
                      Quality Related Notification
                    </th>
                    <th className="centerText" colSpan={3}>
                      CAPA
                    </th>
                  </tr>
                  <tr>
                    <th>No.</th>
                    <th>Description</th>
                    <th>Impact</th>
                    <th>Status</th>
                    <th>Description No.</th>
                    <th>Status</th>
                    <th>EC</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRPQRN.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].batchNo = e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.qualityRelatedNotification.no}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].qualityRelatedNotification.no =
                                e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.qualityRelatedNotification.description}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[
                                index
                              ].qualityRelatedNotification.description =
                                e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.qualityRelatedNotification.impact}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].qualityRelatedNotification.impact =
                                e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.qualityRelatedNotification.status}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].qualityRelatedNotification.status =
                                e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.cAPA.descriptionNo}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].cAPA.descriptionNo =
                                e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.cAPA.status}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].cAPA.status = e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.cAPA.eC}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].cAPA.eC = e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">
              previous Review Period Quality Related Notification
            </h4>
            <TinyEditor
              editorContent={tiny54}
              setEditorContent={setTinyContent}
              tinyNo={54}
            />

            <h4 className="gridName pt-4">Review of Product Recalls</h4>
            <TinyEditor
              editorContent={tiny55}
              setEditorContent={setTinyContent}
              tinyNo={55}
            />
            <h4 className="gridName pt-4">Review of Returned Products</h4>
            <TinyEditor
              editorContent={tiny56}
              setEditorContent={setTinyContent}
              tinyNo={56}
            />
            <h4 className="gridName pt-4">Review of Salvaged Drugs</h4>
            <TinyEditor
              editorContent={tiny57}
              setEditorContent={setTinyContent}
              tinyNo={57}
            />
            <h4 className="gridName pt-4">
              Review of previous PQR recommendations
            </h4>
            <TinyEditor
              editorContent={tiny58}
              setEditorContent={setTinyContent}
              tinyNo={58}
            />
            <h4 className="gridName pt-4">Review of Quality Agreements</h4>
            <TinyEditor
              editorContent={tiny59}
              setEditorContent={setTinyContent}
              tinyNo={59}
            />
            <h4 className="gridName pt-4">
              Review of Manufacturing Authorizations
            </h4>
            <TinyEditor
              editorContent={tiny60}
              setEditorContent={setTinyContent}
              tinyNo={60}
            />
            <h4 className="gridName pt-4">Review of Open Validations</h4>
            <TinyEditor
              editorContent={tiny61}
              setEditorContent={setTinyContent}
              tinyNo={61}
            />
          </div>
        ) : null}
        {tab === "RR" ? (
          <>
            <div className="gridName">Dossier variation details</div>
            <div className="py-4">
             
             
              <GridContainer
                MdNoteAddfun ={addDossierRow}
                setData={setDossierRR}
                data={dossierRR}
                headers={dossierRRheaders}
                fields={dossierRRfields}
              />
             
             

              <div>
                <h4 className="gridName mt-5">Summary</h4>
                <TinyEditor
                  editorContent={tiny62}
                  setEditorContent={setTinyContent}
                  tinyNo={62}
                />
              </div>

              <div className="gridName">New marketing authorisation</div>
              <div className="py-4">
              
             
             
                <GridContainer
                MdNoteAddfun ={addDossierRowNma}
                setData={setDossierRRNma}
                data={dossierRRNma}
                headers={dossierRRNmaheaders}
                fields={dossierRRNmafields}
              />
               
               
                <div>
                  <h4 className="gridName mt-5">Summary</h4>
                  <TinyEditor
                    editorContent={tiny63}
                    setEditorContent={setTinyContent}
                    tinyNo={63}
                  />
                </div>
              </div>
            </div>
          </>
        ) : null}
        {tab === "R" ? (
          <>
            <div>
              <h4 className="gridName">Recommendations Summary</h4>
              <TinyEditor
                editorContent={tiny64}
                setEditorContent={setTinyContent}
                tinyNo={64}
              />
            </div>
          </>
        ) : null}
        {tab === "CAPA" ? (
          <>


            <div className="flex items-center justify-center h-screen">
              <div className="text-3xl font-bold text-gray-600">
                No Data To Show Here.....
              </div>
            </div>
          </>
        ) : null}
        {tab === "DEAC" ? (
          <>
            <div>
              <h4 className="gridName">Discussion Evaluation and Conclusion</h4>
              <TinyEditor
                editorContent={tiny65}
                setEditorContent={setTinyContent}
                tinyNo={65}
              />
            </div>
          </>
        ) : null}
        {tab === "LOA" ? (
          <>
            <div className="container">
              <div>
                <h4 className="gridName">Annexure 1</h4>
                <TinyEditor
                  editorContent={tiny66}
                  setEditorContent={setTinyContent}
                  tinyNo={66}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 2</h4>
                <TinyEditor
                  editorContent={tiny67}
                  setEditorContent={setTinyContent}
                  tinyNo={67}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 3</h4>
                <TinyEditor
                  editorContent={tiny68}
                  setEditorContent={setTinyContent}
                  tinyNo={68}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 4</h4>
                <TinyEditor
                  editorContent={tiny69}
                  setEditorContent={setTinyContent}
                  tinyNo={69}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 5</h4>
                <TinyEditor
                  editorContent={tiny70}
                  setEditorContent={setTinyContent}
                  tinyNo={70}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 6</h4>
                <TinyEditor
                  editorContent={tiny71}
                  setEditorContent={setTinyContent}
                  tinyNo={71}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 7</h4>
                <TinyEditor
                  editorContent={tiny72}
                  setEditorContent={setTinyContent}
                  tinyNo={72}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 8</h4>
                <TinyEditor
                  editorContent={tiny73}
                  setEditorContent={setTinyContent}
                  tinyNo={73}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 9</h4>
                <TinyEditor
                  editorContent={tiny74}
                  setEditorContent={setTinyContent}
                  tinyNo={74}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 10</h4>
                <TinyEditor
                  editorContent={tiny75}
                  setEditorContent={setTinyContent}
                  tinyNo={75}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 11</h4>
                <TinyEditor
                  editorContent={tiny76}
                  setEditorContent={setTinyContent}
                  tinyNo={76}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 12</h4>
                <TinyEditor
                  editorContent={tiny77}
                  setEditorContent={setTinyContent}
                  tinyNo={77}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 13</h4>
                <TinyEditor
                  editorContent={tiny78}
                  setEditorContent={setTinyContent}
                  tinyNo={78}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 14</h4>
                <TinyEditor
                  editorContent={tiny79}
                  setEditorContent={setTinyContent}
                  tinyNo={79}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 15</h4>
                <TinyEditor
                  editorContent={tiny80}
                  setEditorContent={setTinyContent}
                  tinyNo={80}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 16</h4>
                <TinyEditor
                  editorContent={tiny81}
                  setEditorContent={setTinyContent}
                  tinyNo={81}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 17</h4>
                <TinyEditor
                  editorContent={tiny82}
                  setEditorContent={setTinyContent}
                  tinyNo={82}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 18</h4>
                <TinyEditor
                  editorContent={tiny83}
                  setEditorContent={setTinyContent}
                  tinyNo={83}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 19</h4>
                <TinyEditor
                  editorContent={tiny84}
                  setEditorContent={setTinyContent}
                  tinyNo={84}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 20</h4>
                <TinyEditor
                  editorContent={tiny85}
                  setEditorContent={setTinyContent}
                  tinyNo={85}
                />
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="flex justify-end gap-10 pr-10">
        <div className="fixed top-1/2 left-0 z-10 flex flex-col">


        </div>

        <div className="fixed top-3/4 right-0 z-10 flex flex-col">
          {/* Launch QMS Button */}
          <div>
           
           
            {isModalOpen && (
              <>
                <div className="fixed inset-0 flex items-center justify-end z-50">
                  <div className="bg-white p-5 rounded-lg shadow-lg mt-[70px] w-[250px] z-50 mr-[20px]  ">
                    <a href="https://sym.vidyagxp.com">
                      <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700">
                        Deviation
                      </button>
                    </a>
                    <a href="https://sym.vidyagxp.com">
                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
                        onClick={() => navigate("Sym.vidyagxp.com")}
                      >
                        Root Cause Analysis
                      </button>
                    </a>
                    <a href="https://sym.vidyagxp.com">
                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
                        onClick={() => navigate("Sym.vidyagxp.com")}
                      >
                        Action Items
                      </button>
                    </a>
                    <a href="https://sym.vidyagxp.com">
                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
                        onClick={() => navigate("Sym.vidyagxp.com")}
                      >
                        Lab Incident
                      </button>
                    </a>
                    <a href="https://sym.vidyagxp.com">
                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
                        onClick={() => navigate("Sym.vidyagxp.com")}
                      >
                        Risk Assissment
                      </button>
                    </a>

                    <button
                      className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
                      onClick={() => setIsModalOpen(false)} // Close modal on button click
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {/* Overlay */}
                <div
                  className="fixed inset-0 bg-black opacity-50 z-40"
                  onClick={() => setIsModalOpen(false)} // Close modal when clicking on overlay
                ></div>
              </>
            )}
          </div>

          {/* Save Button */}
          <button
            className="
          px-4
          py-2
          bg-teal-600
          text-white
          font-semibold
          rounded-l-full
          shadow-md
          hover:bg-teal-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-teal-500
          mb-5
          flex items-center justify-center
        "
            onClick={async () => {
              setLoading(true); // Set loading to true when clicking the button
              try {
                // Simulate the async operation
                await APQRData(pQRData);
                navigate("/dashboard");
              } catch (error) {
                console.error("Error saving data:", error);
              } finally {
                setLoading(false); // Set loading to false after completion
              }
            }}
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <div className="h-5 w-5 border-t-2 border-b-2 border-white animate-spin rounded-full mr-3"></div>
            ) : null}
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            className="
          px-4
          py-2
          bg-teal-600
          text-white
          font-semibold
          rounded-l-full
          shadow-md
          hover:bg-teal-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-teal-500
        "
          >
            Exit
          </button>
        </div>
      </div>
    </>
  );
}
