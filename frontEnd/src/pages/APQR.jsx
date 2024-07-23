import React, { useEffect, useReducer, useState } from "react";
import Header from "../Component/Header";
import { MdNoteAdd } from "react-icons/md";
import TinyEditor from "../Component/TinyEditor";
import ExcelExport from "../Component/Exports/Excel/ExcelExport";
import { useDispatch } from "react-redux";
import { addForm } from "../redux/formSlice";
import { useNavigate } from "react-router-dom";
import ExcelExportImport from "./temp/ImportExportExcel";
export default function APQR() {
  const [tab, setTab] = useState("GI");
  const balanceSheet = [
    {
      category: "Assets",
      account: "Checking Account",
      code: "1060",
      debit: "$280.00",
      credit: "$0.00",
    },
    {
      category: "Assets",
      account: "Transaction Account",
      code: "1044",
      debit: "$650.00",
      credit: "$0.00",
    },
  ];
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
  const [manufacturingSD2, setManufacturingSD2] = useState([]);
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

  const sanitizeKey = (key) => {
    return key.replace(/\s+/g, "").replace(/[\n\r]+/g, "");
  };

  const trimValue = (value) => {
    return value ? value.trim() : "";
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
  };

  const setimportedData = (data) => {
    const processedData = processData(data, keyMapping);
    switch (data.length) {
      case 1:
        setManufacturingStage([...manufacturingStage, ...processedData]);
        break;
      case 2:
        setManufacturingStage([...manufacturingStage, ...processedData]);
        break;
      case 3:
        setManufacturingStage([...manufacturingStage, ...processedData]);
        break;
    }
    setManufacturingStage([...manufacturingStage, ...processedData]);
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
    }
  };

  const [pQRData, setPQRData] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      form_id: Date.now(),
      initiator: "Pankaj Jat",
      initiateDate: Date.now(),
      pqrNO: "",
      productName: "",
      genericName: "",
      reviewStartDate: "",
      reviewEndDate: "",
      mfgLicNo: "",
      processFlow: "",
      productDescription: "",
      totalNOBM: "",
      totalNOBA: "",
      totalNOPVB: "",
      totalNORB: "",
    }
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("oolResults",pQRData)

  useEffect(() => {
    setPQRData({
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
      manufacturingSD2: manufacturingSD2,
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
    manufacturingSD2,
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
  ]);

  // console.log(pQRData);

  const addManufacturingStageRow = () => {
    const newRow = {
      productName: "",
      sFGCode: "",
      fGCode: "",
    };
    setManufacturingStage([...manufacturingStage, newRow]);
  };

  const addDossierRow = () => {
    const newRow = {
      agency: "",
      notificationNo: "",
      notificationtype: "",
      description: "",
    };
    setDossierRR([...dossierRR, newRow]);
  };

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

  const addManufacturingSAPSRow = () => {
    const newRow = {
      productName: "",
      batchCode: "",
      sFGCode: "",
      remarks: "",
    };
    setManufacturingSAPS([...manufacturingSAPS, newRow]);
  };

  const addRawMRSRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      reasonOfRejection: "",
      description: "",
    };
    setRawMRS([...rawMRS, newRow]);
  };

  const addPackingMRSRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      reasonOfRejection: "",
      description: "",
    };
    setPackingMRS([...packingMRS, newRow]);
  };

  const addExpiredRMDRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      description: "",
    };
    setExpiredRMD([...expiredRMD, newRow]);
  };
  const addExpiredPMDRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      description: "",
    };
    setExpiredPMD([...expiredPMD, newRow]);
  };
  const addreviewOfASLRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      manufacturer: "",
      facility: "",
    };
    setReviewOfASL([...reviewOfASL, newRow]);
  };

  const addvendorQDORMERow = () => {
    const newRow = {
      materialName: "",
      materialCode: "",
      manufacturerName: "",
      qualificationStatus: "",
      remarks: "",
    };
    setVendorQDORME([...vendorQDORME, newRow]);
  };

  const addvendorQDOPPMRow = () => {
    const newRow = {
      materialName: "",
      materialCode: "",
      manufacturerName: "",
      qualificationStatus: "",
    };
    setVendorQDOPPM([...vendorQDOPPM, newRow]);
  };

  const addvendorQDPOGRow = () => {
    const newRow = {
      gasName: "",
      gasCode: "",
      manufacturerName: "",
      qualificationStatus: "",
    };
    setVendorQDPOG([...vendorQDPOG, newRow]);
  };

  const addcodeTCTDRow = () => {
    const newRow = {
      batchNo: "",
      existingCode: "",
      existingMarket: "",
      proposedCode: "",
      proposedMarket: "",
      transferQuality: "",
      refNo: "",
    };
    setCodeTCTD([...codeTCTD, newRow]);
  };

  const addreviewORCECRow = () => {
    const newRow = {
      packingBatchNumber: "",
      manufacturingBatchNumber: "",
      repackingIssuedNumber: "",
      repackingFor: "",
      qMS: "",
      reasonForRepacking: "",
    };
    setReviewORCEC([...reviewORCEC, newRow]);
  };

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

  const addCapaDetailsRow=()=>{
    const newRow={
      ARNo:"",
      capaType:"",
      descriptionOfIssue:"",
      rootCause:"",
      capaVerification:"",
      fileAttachment:"",
      remarks:""
    }
    setCapaDetails([...capaDetails,newRow])
  }
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
  const oosDetailsRow = () => {
    const newRow = {
      ARNo: "",
      testNameOfOos: "",
      resultsObtained: "",
      specificationLimit: "",
      detailsOfObviousError: "",
      fileAttachment: "",
    };
    setOosDetails([...oosDetails, newRow]);
  };

  
  const deviationDetailsRow = () => {
    const newRow = {
      ARNo: "",
      deviationRelatedTo: "",
      description: "",
      rootCause: "",
      deviationObservedOn: "",
      deviationObservedBy: "",
      classificationOfDeviation: "",
      fileAttachment: "",
      remarks: "",
      status: "",
    };
    setDeviationDetails([...deviationDetails, newRow]);
  };

  const ootResultsRow = () => {
    const newRow = {
      ARNo: "",
      testNameOfOot: "",
      resultsObtained: "",
      initialIntervalDetails: "",
      previousIntervalDetails: "",
      diffrenceOfResult: "",
      trendLimit: "",
    };
    setOotResults([...ootResults, newRow]);
  };
  const oolResultsRow = () => {
    const newRow = {
      ARNo: "",
      testNameOfOot: "",
      resultsObtained: "",
      initialIntervalDetails: "",
      previousIntervalDetails: "",
      diffrenceOfResult: "",
      trendLimit: "",
    };
    setOolResults([...oolResults, newRow]);
  };
  const ooaResultsRow = () => {
    const newRow = {
      testNameOfAlert: "",
      resultsObtained: "",
      specificationLimit: "",
      detailsOfObviousError: "",
      chooseFile: "",
    };
    setOoaResults([...ooaResults, newRow]);
  };

  const addReviewODSTRRow = () => {
    const newRow = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR([...reviewODSTR, newRow]);
  };
  const addReviewODSTRRow2 = () => {
    const newRow2 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR2([...reviewODSTR2, newRow2]);
  };
  const addReviewODSTRRow3 = () => {
    const newRow3 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR3([...reviewODSTR3, newRow3]);
  };
  const addReviewODSTRRow4 = () => {
    const newRow4 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR4([...reviewODSTR4, newRow4]);
  };
  const addReviewODSTRRow5 = () => {
    const newRow5 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR5([...reviewODSTR5, newRow5]);
  };
  const addReviewODSTRRow6 = () => {
    const newRow6 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR6([...reviewODSTR6, newRow6]);
  };
  const addReviewODSTRRow7 = () => {
    const newRow7 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR7([...reviewODSTR7, newRow7]);
  };
  const addReviewODSTRRow8 = () => {
    const newRow8 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR8([...reviewODSTR8, newRow8]);
  };
  const addReviewODSTRRow9 = () => {
    const newRow9 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR9([...reviewODSTR9, newRow9]);
  };
  const addReviewODSTRRow10 = () => {
    const newRow10 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR10([...reviewODSTR10, newRow10]);
  };

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

  const addSummaryOOSSRow = () => {
    const newRow = {
      batchNo: "",
      type: "",
      storageCondition: "",
      testingInterval: "",
      stabilityProtocolNo: "",
    };
    setSummaryOOSS([...summaryOOSS, newRow]);
  };

  const addStabilitySRRow = () => {
    const newRow = {
      batchNo: "",
      testingIntervalMonths: "",
      OOSNumber: "",
    };
    setStabilitySR([...stabilitySR, newRow]);
  };

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

  const addHVACQStatusRow = () => {
    const newRow = {
      testDescription: "",
      frequency: "",
      status: "",
    };
    setHVACQStatus([...hVACQStatus, newRow]);
  };

  const addSanitizationASDOURow = () => {
    const newRow = {
      equipmentName: "",
      frequency: "",
      status: "",
    };
    setSanitizationASDOU([...sanitizationASDOU, newRow]);
  };

  const addCompressedGasesRow = () => {
    const newRow = {
      compressedGas: "",
      test: "",
      frequency: "",
      status: "",
    };
    setCompressedGas([...compressedGas, newRow]);
  };

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
          <div className={`${tab === "GI" ? "active" : ""}`} onClick={() => setTab("GI")}>
            General Information
          </div>
          <div className={`${tab === "WR" ? "active" : ""}`} onClick={() => setTab("WR")}>
            Warehouse Review
          </div>
          <div className={`${tab === "MR" ? "active" : ""}`} onClick={() => setTab("MR")}>
            Manufacturing Review
          </div>
          <div className={`${tab === "LR" ? "active" : ""}`} onClick={() => setTab("LR")}>
            Laboratory Review
          </div>
          <div className={`${tab === "EAMR" ? "active" : ""}`} onClick={() => setTab("EAMR")}>
            Engineering And Maintenance Review
          </div>
          <div className={`${tab === "QSR" ? "active" : ""}`} onClick={() => setTab("QSR")}>
            Quality System Review
          </div>
          <div className={`${tab === "RR" ? "active" : ""}`} onClick={() => setTab("RR")}>
            Regulatory Review
          </div>
          <div className={`${tab === "R" ? "active" : ""}`} onClick={() => setTab("R")}>
            Recommendations{" "}
          </div>
          <div className={`${tab === "CAPA" ? "active" : ""}`} onClick={() => setTab("CAPA")}>
            CAPA
          </div>
          <div className={`${tab === "DEAC" ? "active" : ""}`} onClick={() => setTab("DEAC")}>
            Discussion, Evaluation And Conclusion
          </div>
          <div className={`${tab === "LOA" ? "active" : ""}`} onClick={() => setTab("LOA")}>
            List Of Annexures/Attachments
          </div>
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
                <label>PQR No</label>
                <input
                  disabled
                  type="date"
                  value={pQRData.initiateDate}
                  onChange={(e) => {
                    setPQRData({ initiateDate: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>PQR No</label>
                <input
                  value={pQRData.pqrNO}
                  onChange={(e) => {
                    setPQRData({ pqrNO: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Product Name</label>
                <input
                  value={pQRData.productName}
                  onChange={(e) => {
                    setPQRData({ productName: e.target.value });
                  }}
                />
              </div>
            </div>
            {productCodes?.map((productCode, index) => (
              <div key={index} className="group-input">
                <label>Product Code {index.length > 0 ? index + 1 : ""}</label>
                <div className="flex gap-4">
                  <input
                    value={productCode}
                    onChange={(e) => handleProductCodeChange(index, e.target.value)}
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
              <div className="group-input">
                <label>Generic Name</label>
                <input
                  value={pQRData.genericName}
                  onChange={(e) => {
                    setPQRData({ genericName: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Review Start Date</label>
                <input
                  type="date"
                  value={pQRData.reviewStartDate}
                  onChange={(e) => {
                    setPQRData({ reviewStartDate: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Review End Date</label>
                <input
                  type="date"
                  value={pQRData.reviewEndDate}
                  onChange={(e) => {
                    setPQRData({ reviewEndDate: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>MFG. LIC. No</label>
                <input
                  value={pQRData.mfgLicNo}
                  onChange={(e) => {
                    setPQRData({ mfgLicNo: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="sub-head">Manufacturing Site Address</div>
            <div className="flex">
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addManufacturingStageRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              {/* <div className="w-1/2 flex justify-end px-8 py-4">
              </div> */}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>SFG Code</th>
                  <th>FG Code </th>
                </tr>
              </thead>
              <tbody>
                {manufacturingStage.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.productName}
                          onChange={(e) => {
                            const newData = [...manufacturingStage];
                            newData[index].productName = e.target.value;
                            setManufacturingStage(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.sFGCode}
                          onChange={(e) => {
                            const newData = [...manufacturingStage];
                            newData[index].sFGCode = e.target.value;
                            setManufacturingStage(newData);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.fGCode}
                          onChange={(e) => {
                            const newData = [...manufacturingStage];
                            newData[index].fGCode = e.target.value;
                            setManufacturingStage(newData);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div>
              <h4 className="gridName mt-4">Summary</h4>
              <TinyEditor editorContent={tiny1} setEditorContent={setTinyContent} tinyNo={1} />
            </div>

            <div className="py-4">
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addManufacturingSAPSRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addManufacturingSAPSRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingSAPS}
                    setimportedData={setimportedData}
                    fileName="manufacturingSAPS.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Batch Code</th>
                    <th>SFG Code</th>
                    <th></th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {manufacturingSAPS.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.productName}
                            onChange={(e) => {
                              const newData = [...manufacturingSAPS];
                              newData[index].productName = e.target.value;
                              setManufacturingSAPS(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchCode}
                            onChange={(e) => {
                              const newData = [...manufacturingSAPS];
                              newData[index].batchCode = e.target.value;
                              setManufacturingSAPS(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.sFGCode}
                            onChange={(e) => {
                              const newData = [...manufacturingSAPS];
                              newData[index].sFGCode = e.target.value;
                              setManufacturingSAPS(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                          // value={item.productName}
                          // onChange={(e) => {
                          //   const newData = [...manufacturingSAPS];
                          //   newData[index].productName = e.target.value;
                          //   setManufacturingSAPS(newData);
                          // }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.remarks}
                            onChange={(e) => {
                              const newData = [...manufacturingSAPS];
                              newData[index].remarks = e.target.value;
                              setManufacturingSAPS(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <h4 className="gridName">Summary of Manufacturing Site Address</h4>
            <TinyEditor editorContent={tiny2} setEditorContent={setTinyContent} tinyNo={2} />
          </div>
        ) : null}
        {tab === "WR" ? (
          <>
            <div className="p-4">
              <div className="sub-head">
                <p>Review of Rejected Raw Materials and Packaging Materials</p>
              </div>
              <div className="pb-4">
                <h4 className="gridName">Raw Materials Rejection Summary</h4>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addRawMRSRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addRawMRSRow} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={rawMRS}
                      setimportedData={setimportedData}
                      fileName="rawMRS.xlsx"
                    />
                  </div>
                </div>

                <table>
                  <thead>
                    <tr>
                      <th>SI. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Lot No./ A.R. No.</th>
                      <th>Reason for Rejection</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rawMRS.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...rawMRS];
                                newData[index].materialCode = e.target.value;
                                setRawMRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...rawMRS];
                                newData[index].materialName = e.target.value;
                                setRawMRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...rawMRS];
                                newData[index].ARNo = e.target.value;
                                setRawMRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.reasonOfRejection}
                              onChange={(e) => {
                                const newData = [...rawMRS];
                                newData[index].reasonOfRejection = e.target.value;
                                setRawMRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.description}
                              onChange={(e) => {
                                const newData = [...rawMRS];
                                newData[index].description = e.target.value;
                                setRawMRS(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div>
                  <h4 className="gridName mt-5">Summary</h4>
                  <TinyEditor editorContent={tiny3} setEditorContent={setTinyContent} tinyNo={3} />
                </div>
              </div>

              <div className="pb-4">
                <h4 className="gridName"> Packing Materials Rejection Summary</h4>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addPackingMRSRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addPackingMRSRow} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={packingMRS}
                      setimportedData={setimportedData}
                      fileName="packingMRS.xlsx"
                    />
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>SI. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Lot No./ A.R. No.</th>
                      <th>Reason for Rejection</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packingMRS.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...packingMRS];
                                newData[index].materialCode = e.target.value;
                                setPackingMRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...packingMRS];
                                newData[index].materialName = e.target.value;
                                setPackingMRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...packingMRS];
                                newData[index].ARNo = e.target.value;
                                setPackingMRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.reasonForRepacking}
                              onChange={(e) => {
                                const newData = [...packingMRS];
                                newData[index].reasonForRepacking = e.target.value;
                                setPackingMRS(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.description}
                              onChange={(e) => {
                                const newData = [...packingMRS];
                                newData[index].description = e.target.value;
                                setPackingMRS(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <h5 className="gridName pt-4">
                  Summary of Review of Rejected Raw Materials and Packaging Materials
                </h5>
                <TinyEditor editorContent={tiny4} setEditorContent={setTinyContent} tinyNo={4} />
              </div>
              <div className="sub-head">
                Review of Expired Raw Materials and Packaging Materials
              </div>
              <div className="pb-4">
                <h4 className="gridName">Expired Raw Materials Details</h4>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addExpiredRMDRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addExpiredRMDRow} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={expiredRMD}
                      setimportedData={setimportedData}
                      fileName="expiredRMD.xlsx"
                    />
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>SI. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Lot No./ A.R. No.</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expiredRMD.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...expiredRMD];
                                newData[index].materialCode = e.target.value;
                                setExpiredRMD(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...expiredRMD];
                                newData[index].materialName = e.target.value;
                                setExpiredRMD(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...expiredRMD];
                                newData[index].ARNo = e.target.value;
                                setExpiredRMD(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.description}
                              onChange={(e) => {
                                const newData = [...expiredRMD];
                                newData[index].description = e.target.value;
                                setExpiredRMD(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div>
                  <h4 className="gridName">Summary</h4>
                  <TinyEditor editorContent={tiny5} setEditorContent={setTinyContent} tinyNo={5} />
                </div>
              </div>

              <div className="">
                <h4 className="gridName">Expired Packaging Materials Details</h4>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addExpiredPMDRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addExpiredPMDRow} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={expiredPMD}
                      setimportedData={setimportedData}
                      fileName="expiredPMD.xlsx"
                    />
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>SI. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Lot No./ A.R. No.</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expiredPMD.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...expiredPMD];
                                newData[index].materialCode = e.target.value;
                                setExpiredPMD(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...expiredPMD];
                                newData[index].materialName = e.target.value;
                                setExpiredPMD(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...expiredPMD];
                                newData[index].ARNo = e.target.value;
                                setExpiredPMD(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.description}
                              onChange={(e) => {
                                const newData = [...expiredPMD];
                                newData[index].description = e.target.value;
                                setExpiredPMD(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <h4 className="gridName pt-4">
                  Summary of Review of Expired Raw Materials and Packaging Materials
                </h4>
                <TinyEditor editorContent={tiny6} setEditorContent={setTinyContent} tinyNo={6} />
              </div>

              <div className="sub-head">Review of Approved Supplier List</div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addreviewOfASLRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addreviewOfASLRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={reviewOfASL}
                    setimportedData={setimportedData}
                    fileName="reviewOfASL.xlsx"
                  />
                </div>
              </div>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Sl. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Manufacturer / Supplier / Vendor</th>
                      <th>Facility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviewOfASL.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...reviewOfASL];
                                newData[index].materialCode = e.target.value;
                                setReviewOfASL(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...reviewOfASL];
                                newData[index].materialName = e.target.value;
                                setReviewOfASL(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturer}
                              onChange={(e) => {
                                const newData = [...reviewOfASL];
                                newData[index].manufacturer = e.target.value;
                                setReviewOfASL(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.facility}
                              onChange={(e) => {
                                const newData = [...reviewOfASL];
                                newData[index].facility = e.target.value;
                                setReviewOfASL(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="gridName pt-4">Summary of Review of Approved Supplier List</h4>
                <TinyEditor editorContent={tiny7} setEditorContent={setTinyContent} tinyNo={7} />
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Raw Material Excipients
              </div>
              <div>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addvendorQDORMERow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addvendorQDORMERow} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={vendorQDORME}
                      setimportedData={setimportedData}
                      fileName="vendorQDORME.xlsx"
                    />
                  </div>
                </div>
                <table>
                  <thead>
                    <th>Material Name</th>
                    <th>Material Code</th>
                    <th>Manufacturer Name</th>
                    <th>Qualification Status</th>
                    <th>Remarks</th>
                  </thead>
                  <tbody>
                    {vendorQDORME.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...vendorQDORME];
                                newData[index].materialName = e.target.value;
                                setVendorQDORME(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...vendorQDORME];
                                newData[index].materialCode = e.target.value;
                                setVendorQDORME(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturerName}
                              onChange={(e) => {
                                const newData = [...vendorQDORME];
                                newData[index].manufacturerName = e.target.value;
                                setVendorQDORME(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...vendorQDORME];
                                newData[index].qualificationStatus = e.target.value;
                                setVendorQDORME(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.remarks}
                              onChange={(e) => {
                                const newData = [...vendorQDORME];
                                newData[index].remarks = e.target.value;
                                setVendorQDORME(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="gridName pt-4">
                  Summary of Vendor Qualification Details of Raw Material Excipients
                </h4>
                <TinyEditor editorContent={tiny8} setEditorContent={setTinyContent} tinyNo={8} />
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Primary Packing Materials
              </div>
              <div>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addvendorQDOPPMRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addvendorQDOPPMRow} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={vendorQDOPPM}
                      setimportedData={setimportedData}
                      fileName="vendorQDOPPM.xlsx"
                    />
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Material Name</th>
                      <th>Material Code</th>
                      <th>Manufacturer Name</th>
                      <th>Qualification Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendorQDOPPM.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...vendorQDOPPM];
                                newData[index].materialName = e.target.value;
                                setVendorQDOPPM(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...vendorQDOPPM];
                                newData[index].materialCode = e.target.value;
                                setVendorQDOPPM(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturerName}
                              onChange={(e) => {
                                const newData = [...vendorQDOPPM];
                                newData[index].manufacturerName = e.target.value;
                                setVendorQDOPPM(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...vendorQDOPPM];
                                newData[index].qualificationStatus = e.target.value;
                                setVendorQDOPPM(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="gridName pt-4">
                  Summary of Vendor Qualification Details of Primary Packing Materials
                </h4>
                <TinyEditor editorContent={tiny9} setEditorContent={setTinyContent} tinyNo={9} />
              </div>

              <div className="sub-head">Vendor Qualification Details of Process Gases</div>
              <div>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addvendorQDPOGRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addvendorQDPOGRow} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={vendorQDPOG}
                      setimportedData={setimportedData}
                      fileName="vendorQDPOG.xlsx"
                    />
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Gas Name</th>
                      <th>Gas Code</th>
                      <th>Manufacturer Name</th>
                      <th> Qualification Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendorQDPOG.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              value={item.gasName}
                              onChange={(e) => {
                                const newData = [...vendorQDPOG];
                                newData[index].gasName = e.target.value;
                                setVendorQDPOG(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.gasCode}
                              onChange={(e) => {
                                const newData = [...vendorQDPOG];
                                newData[index].gasCode = e.target.value;
                                setVendorQDPOG(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturerName}
                              onChange={(e) => {
                                const newData = [...vendorQDPOG];
                                newData[index].manufacturerName = e.target.value;
                                setVendorQDPOG(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...vendorQDPOG];
                                newData[index].qualificationStatus = e.target.value;
                                setVendorQDPOG(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="gridName pt-4">
                  Summary of Vendor Qualification Details of Process Gases
                </h4>
                <TinyEditor editorContent={tiny10} setEditorContent={setTinyContent} tinyNo={10} />
              </div>
            </div>
          </>
        ) : null}
        {tab === "MR" ? (
          <div className="p-4">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Product Description</label>
                <input
                  value={pQRData.productDescription}
                  onChange={(e) => {
                    setPQRData({ productDescription: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Process Flow</label>
                <input
                  value={pQRData.processFlow}
                  onChange={(e) => {
                    setPQRData({ processFlow: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="sub-head">Review of all Batches Manufactured</div>

            <div className="dual-group-input">
              <div className="group-input">
                <label>Total No. of batches manufactured during the current review period</label>
                <input
                  type="number"
                  value={pQRData.totalNOBM}
                  onChange={(e) => {
                    setPQRData({ totalNOBM: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Total No. of batches Approved & Released</label>
                <input
                  value={pQRData.totalNOBA}
                  onChange={(e) => {
                    setPQRData({ totalNOBA: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Total No. of Process Validation Batches</label>
                <input
                  value={pQRData.totalNOPVB}
                  onChange={(e) => {
                    setPQRData({ totalNOPVB: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Total No. of Reprocessed Batches</label>
                <input
                  value={pQRData.totalNORB}
                  onChange={(e) => {
                    setPQRData({ totalNORB: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Process Validation Batches Details</label>
                <TinyEditor editorContent={tiny11} setEditorContent={setTinyContent} tinyNo={11} />
              </div>

              <div className="group-input">
                <label>Reprocessing Details</label>
                <TinyEditor editorContent={tiny12} setEditorContent={setTinyContent} tinyNo={12} />
              </div>
              <div className="group-input">
                <label>Microbial Excursion Details</label>
                <TinyEditor editorContent={tiny13} setEditorContent={setTinyContent} tinyNo={13} />
              </div>
            </div>
            <div className="gridName">Code to code transfer details</div>
            <div className="py-4">
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addcodeTCTDRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addcodeTCTDRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={codeTCTD}
                    setimportedData={setimportedData}
                    fileName="codeTCTD.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SL. No.</th>
                    <th>Batch Number</th>
                    <th>Existing code</th>
                    <th>Existing market</th>
                    <th>Proposed code</th>
                    <th>Proposed Market</th>
                    <th>Transfer quantity</th>
                    <th>Ref. No.</th>
                  </tr>
                </thead>
                <tbody>
                  {codeTCTD.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...codeTCTD];
                              newData[index].batchNo = e.target.value;
                              setCodeTCTD(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.existingCode}
                            onChange={(e) => {
                              const newData = [...codeTCTD];
                              newData[index].existingCode = e.target.value;
                              setCodeTCTD(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.existingMarket}
                            onChange={(e) => {
                              const newData = [...codeTCTD];
                              newData[index].existingMarket = e.target.value;
                              setCodeTCTD(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.proposedCode}
                            onChange={(e) => {
                              const newData = [...codeTCTD];
                              newData[index].proposedCode = e.target.value;
                              setCodeTCTD(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.proposedMarket}
                            onChange={(e) => {
                              const newData = [...codeTCTD];
                              newData[index].proposedMarket = e.target.value;
                              setCodeTCTD(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.transferQuality}
                            onChange={(e) => {
                              const newData = [...codeTCTD];
                              newData[index].transferQuality = e.target.value;
                              setCodeTCTD(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.refNo}
                            onChange={(e) => {
                              const newData = [...codeTCTD];
                              newData[index].refNo = e.target.value;
                              setCodeTCTD(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h4 className="gridName pt-4">Summary of Code to Code Transfer Details</h4>
              <TinyEditor editorContent={tiny14} setEditorContent={setTinyContent} tinyNo={14} />
            </div>
            <div className="sub-head">
              {" "}
              Review of Manufacturing Process, Packing Process and relevant Validation Status
            </div>
            <TinyEditor editorContent={tiny15} setEditorContent={setTinyContent} tinyNo={15} />

            <div className="sub-head">
              Review of Reprocessing/Repacking/Reworking along with CAPA and Effectiveness Check
              Verification (if any)
            </div>
            <div className="dual-group-input">
              <div className="group-input">
                <label>Batch reprocessing/reworking process Details</label>
                <TinyEditor editorContent={tiny16} setEditorContent={setTinyContent} tinyNo={16} />
              </div>
              <div className="group-input">
                <label>Batch Repacking Details </label>
                <TinyEditor editorContent={tiny17} setEditorContent={setTinyContent} tinyNo={17} />
              </div>
            </div>

            <div className="py-4">
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addreviewORCECRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addreviewORCECRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  .
                  <ExcelExportImport
                    data={reviewORCEC}
                    setimportedData={setimportedData}
                    fileName="reviewORCEC.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SL. No.</th>
                    <th>Packing batch number</th>
                    <th>Manufacturing batch number</th>
                    <th>Repacking issued number</th>
                    <th>Repacking for</th>
                    <th>QMS</th>
                    <th>Reason for repacking</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewORCEC.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.packingBatchNumber}
                            onChange={(e) => {
                              const newData = [...reviewORCEC];
                              newData[index].packingBatchNumber = e.target.value;
                              setReviewORCEC(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.manufacturingBatchNumber}
                            onChange={(e) => {
                              const newData = [...reviewORCEC];
                              newData[index].manufacturingBatchNumber = e.target.value;
                              setReviewORCEC(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.repackingIssuedNumber}
                            onChange={(e) => {
                              const newData = [...reviewORCEC];
                              newData[index].repackingIssuedNumber = e.target.value;
                              setReviewORCEC(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.repackingFor}
                            onChange={(e) => {
                              const newData = [...reviewORCEC];
                              newData[index].repackingFor = e.target.value;
                              setReviewORCEC(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.qMS}
                            onChange={(e) => {
                              const newData = [...reviewORCEC];
                              newData[index].qMS = e.target.value;
                              setReviewORCEC(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.reasonForRepacking}
                            onChange={(e) => {
                              const newData = [...reviewORCEC];
                              newData[index].reasonForRepacking = e.target.value;
                              setReviewORCEC(newData);
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
              <TinyEditor editorContent={tiny18} setEditorContent={setTinyContent} tinyNo={18} />
            </div>

            <h1>Deviation Details - Grid CAPA Details – Grid</h1>

            <h4 className="gridName">CAPA Details</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCapaDetailsRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={capaDetails}
                    setimportedData={setimportedData}
                    fileName="capaDetails.xlsx"
                  />
                </div>
              </div>
              <table className="mb-4">
                <thead>
                  <tr>
                    <th>AR No.</th>
                    <th>CAPA Type</th>
                    <th>Description of Issue</th>
                    <th>Root Cause</th>
                    <th>CAPA Verification</th>
                    <th>File Attachment</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {capaDetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...capaDetails];
                              newData[index].ARNo = e.target.value;
                              setCapaDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.capaType}
                            onChange={(e) => {
                              const newData = [...capaDetails];
                              newData[index].capaType = e.target.value;
                              setCapaDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.descriptionOfIssue}
                            onChange={(e) => {
                              const newData = [...capaDetails];
                              newData[index].descriptionOfIssue = e.target.value;
                              setCapaDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.rootCause}
                            onChange={(e) => {
                              const newData = [...capaDetails];
                              newData[index].rootCause = e.target.value;
                              setCapaDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.capaVerification}
                            onChange={(e) => {
                              const newData = [...capaDetails];
                              newData[index].capaVerification = e.target.value;
                              setCapaDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            value={item.chooseFile}
                            onChange={(e) => {
                              const newData = [...capaDetails];
                              newData[index].chooseFile = e.target.value;
                              setCapaDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.remarks}
                            onChange={(e) => {
                              const newData = [...capaDetails];
                              newData[index].remarks = e.target.value;
                              setCapaDetails(newData);
                            }}
                          />
                        </td>{" "}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor editorContent={tiny19} setEditorContent={setTinyContent} tinyNo={19} />
            </div>

            <h4 className="gridName">Deviation Details</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={deviationDetailsRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={deviationDetails}
                    setimportedData={setimportedData}
                    fileName="deviationDetails.xlsx"
                  />
                </div>
              </div>
              <table className="mb-4">
                <thead>
                  <tr>
                    <th>AR No.</th>
                    <th>Deviation Related To</th>
                    <th>Description</th>
                    <th>Root Cause</th>
                    <th>Deviation Ovserved On</th>
                    <th>Deviation Ovserved By</th>
                    <th>Classification of Deviation</th>
                    <th>file Attachment</th>
                    <th>Remarks</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {deviationDetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].ARNo = e.target.value;
                              setDeviationDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.deviationRelatedTo}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].deviationRelatedTo = e.target.value;
                              setDeviationDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.description}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].description = e.target.value;
                              setDeviationDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.rootCause}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].rootCause = e.target.value;
                              setDeviationDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.deviationObservedOn}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].deviationObservedOn = e.target.value;
                              setDeviationDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.deviationObservedBy}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].deviationObservedBy = e.target.value;
                              setDeviationDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.classificationOfDeviation}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].classificationOfDeviation = e.target.value;
                              setDeviationDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            value={item.fileAttachment}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].fileAttachment = e.target.value;
                              setDeviationDetails(newData);
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={item.remarks}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].remarks = e.target.value;
                              setDeviationDetails(newData);
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={item.status}
                            onChange={(e) => {
                              const newData = [...deviationDetails];
                              newData[index].status = e.target.value;
                              setDeviationDetails(newData);
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
              <TinyEditor editorContent={tiny20} setEditorContent={setTinyContent} tinyNo={20} />
            </div>

            <div className="sub-head">
              Review of all Batch Failures/Rejections along with CAPA and Effectiveness Check
              Verification (if any):
            </div>

            <h4 className="gridName">Batch Failures/Rejections Details </h4>
            <TinyEditor editorContent={tiny21} setEditorContent={setTinyContent} tinyNo={21} />

            <h4 className="gridName">OOS Details</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={oosDetailsRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={oosDetails}
                    setimportedData={setimportedData}
                    fileName="oosDetails.xlsx"
                  />
                </div>
              </div>
              <table className="mb-4">
                <thead>
                  <tr>
                    <th rowSpan={2}>AR No.</th>
                    <th rowSpan={2}>Test Name Of OOS</th>
                    <th rowSpan={2}>Results Obtained</th>
                    <th >Specification Limit</th>
                    <th rowSpan={2}>Details of Obvious error</th>
                    <th>File Attachment</th>
                  </tr>
                </thead>
                <tbody>
                  {oosDetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...oosDetails];
                              newData[index].ARNo = e.target.value;
                              setOosDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfOos}
                            onChange={(e) => {
                              const newData = [...oosDetails];
                              newData[index].testNameOfOos = e.target.value;
                              setOosDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...oosDetails];
                              newData[index].resultsObtained = e.target.value;
                              setOosDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...oosDetails];
                              newData[index].specificationLimit = e.target.value;
                              setOosDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.detailsOfObviousError}
                            onChange={(e) => {
                              const newData = [...oosDetails];
                              newData[index].detailsOfObviousError = e.target.value;
                              setOosDetails(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            value={item.fileAttachment}
                            onChange={(e) => {
                              const newData = [...oosDetails];
                              newData[index].fileAttachment = e.target.value;
                              setOosDetails(newData);
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
              <TinyEditor editorContent={tiny22} setEditorContent={setTinyContent} tinyNo={22} />
            </div>

            <h4 className="gridName">OOT Results</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={ootResultsRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={ootResults}
                    setimportedData={setimportedData}
                    fileName="ootResults.xlsx"
                  />
                </div>
              </div>
              <table className="mb-4">
                <thead>
                  <tr>
                    <th>AR NO.</th>
                    <th>Test name of OOT</th>
                    <th>Result Obtained</th>
                    <th>Initial Interval Details</th>
                    <th>Previous Interval Details</th>
                    <th>% Diffrence of Results</th>
                    <th>Trend Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {ootResults.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...ootResults];
                              newData[index].ARNo = e.target.value;
                              setOotResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfOot}
                            onChange={(e) => {
                              const newData = [...ootResults];
                              newData[index].testNameOfOot = e.target.value;
                              setOotResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...ootResults];
                              newData[index].resultsObtained = e.target.value;
                              setOotResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initialIntervalDetails}
                            onChange={(e) => {
                              const newData = [...ootResults];
                              newData[index].initialIntervalDetails = e.target.value;
                              setOotResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.previousIntervalDetails}
                            onChange={(e) => {
                              const newData = [...ootResults];
                              newData[index].previousIntervalDetails = e.target.value;
                              setOotResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.diffrenceOfResult}
                            onChange={(e) => {
                              const newData = [...ootResults];
                              newData[index].diffrenceOfResult = e.target.value;
                              setOotResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.trendLimit}
                            onChange={(e) => {
                              const newData = [...ootResults];
                              newData[index].trendLimit = e.target.value;
                              setOotResults(newData);
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
              <TinyEditor editorContent={tiny23} setEditorContent={setTinyContent} tinyNo={23} />
            </div>
            <h4 className="gridName">OOA Results</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={ooaResultsRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={ooaResults}
                    setimportedData={setimportedData}
                    fileName="ooaResults.xlsx"
                  />
                </div>
              </div>
              <table className="mb-4">
                <thead>
                  <tr>
                    <th>AR NO.</th>
                    <th>Test name of Alert</th>
                    <th>Result Obtained</th>
                    <th>Initial Interval Details</th>
                    <th>Previous Interval Details</th>
                    <th>% Diffrence of Results</th>
                    <th>Trend Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {ooaResults.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...ooaResults];
                              newData[index].ARNo = e.target.value;
                              setOoaResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfAlert}
                            onChange={(e) => {
                              const newData = [...ooaResults];
                              newData[index].testNameOfAlert = e.target.value;
                              setOoaResults(newData);
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...ooaResults];
                              newData[index].resultsObtained = e.target.value;
                              setOoaResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initialIntervalDetails}
                            onChange={(e) => {
                              const newData = [...ooaResults];
                              newData[index].initialIntervalDetails = e.target.value;
                              setOoaResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.previousIntervalDetails}
                            onChange={(e) => {
                              const newData = [...ooaResults];
                              newData[index].previousIntervalDetails = e.target.value;
                              setOoaResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.diffrenceOfResult}
                            onChange={(e) => {
                              const newData = [...ooaResults];
                              newData[index].diffrenceOfResult = e.target.value;
                              setOoaResults(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.trendLimit}
                            onChange={(e) => {
                              const newData = [...ooaResults];
                              newData[index].trendLimit = e.target.value;
                              setOoaResults(newData);
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
              <TinyEditor editorContent={tiny24} setEditorContent={setTinyContent} tinyNo={24} />
            </div>
            <h4 className="gridName">OOL Results</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={oolResultsRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={oolResults}
                    setimportedData={setimportedData}
                    fileName="oolResults.xlsx"
                  />
                </div>
              </div>
              <table className="mb-4">
                <thead>
                  <tr>
                    <th>AR NO.</th>
                    <th>Test name of OOT</th>
                    <th>Result Obtained</th>
                    <th>Initial Interval Details</th>
                    <th>Previous Interval Details</th>
                    <th>% Diffrence of Results</th>
                    <th>Trend Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {oolResults.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                           <input value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...oolResults];
                              newData[index].ARNo = e.target.value;
                              setOolResults(newData);
                            }}/>
                        </td>
                        <td>
                           <input value={item.testNameOfOot}
                            onChange={(e) => {
                            const newData = [...oolResults];
                            newData[index].testNameOfOot = e.target.value;
                            setOolResults(newData);
                            }}/>
                        </td>
                        <td>
                           <input value={item.resultsObtained}
                            onChange={(e) => {
                            const newData = [...oolResults];
                            newData[index].resultsObtained = e.target.value;
                            setOolResults(newData);
                            }}/>
                        </td>
                        <td>
                        <input value={item.initialIntervalDetails}
                            onChange={(e) => {
                            const newData = [...oolResults];
                            newData[index].initialIntervalDetails = e.target.value;
                            setOolResults(newData);
                            }}/>
                        </td>
                        <td>
                        <input value={item.previousIntervalDetails}
                            onChange={(e) => {
                            const newData = [...oolResults];
                            newData[index].previousIntervalDetails = e.target.value;
                            setOolResults(newData);
                            }}/>
                        </td>
                        <td>
                        <input value={item.diffrenceOfResult}
                            onChange={(e) => {
                            const newData = [...oolResults];
                            newData[index].diffrenceOfResult = e.target.value;
                            setOolResults(newData);
                            }}/>
                        </td>{" "}
                        <td>
                        <input value={item.trendLimit}
                            onChange={(e) => {
                            const newData = [...oolResults];
                            newData[index].trendLimit = e.target.value;
                            setOolResults(newData);
                            }}/>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor editorContent={tiny25} setEditorContent={setTinyContent} tinyNo={25} />
            </div>

            <div className="sub-head">Review of Product Quality (Critical Process Parameters)</div>

            <h3 className="gridName">Unit Operation 1</h3>
            <h4 className="gridName">Buffer formulation summary details provided below</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addBufferFSDPVRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={capaDetails}
                    setimportedData={setimportedData}
                    fileName="capaDetails.xlsx"
                  />
                </div>
              </div>
              <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {bufferFSDPV.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                           <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...bufferFSDPV];
                            newData[index].criticalProcessParameter = e.target.value;
                            setBufferFSDPV(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...bufferFSDPV];
                            newData[index].codes = e.target.value;
                            setBufferFSDPV(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...bufferFSDPV];
                            newData[index].acceptanceCriteria = e.target.value;
                            setBufferFSDPV(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...bufferFSDPV];
                            newData[index].results.minimum = e.target.value;
                            setBufferFSDPV(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...bufferFSDPV];
                            newData[index].results.maximum = e.target.value;
                            setBufferFSDPV(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...bufferFSDPV];
                            newData[index].compliesNotComplies = e.target.value;
                            setBufferFSDPV(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
            <h3 className="gridName pt-4">Unit Operation 2</h3>
            <h4 className="gridName">Manufacturing summary details</h4>
            {/* <div className="AddRows d-flex">
              <MdNoteAdd onClick={addmanufacturingSDRow} />
              <div className="addrowinstruction"></div>
            </div> */}
            <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
              <div className="flex items-center">
                <MdNoteAdd onClick={addmanufacturingSDRow} />
                <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExportImport
                  data={manufacturingStage}
                  setimportedData={setimportedData}
                  fileName="manufacturingStage.xlsx"
                />
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {manufacturingSD.map((item, index) => {
                  return (
                    <tr key={index}>
                    <td>
                            <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].criticalProcessParameter = e.target.value;
                            setManufacturingSD(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].codes = e.target.value;
                            setManufacturingSD(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].acceptanceCriteria = e.target.value;
                            setManufacturingSD(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].results.minimum = e.target.value;
                            setManufacturingSD(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].results.maximum = e.target.value;
                            setManufacturingSD(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...manufacturingSD];
                            newData[index].compliesNotComplies = e.target.value;
                            setManufacturingSD(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 3</h3>
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addUnitOperation3Row} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation3.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                            <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].criticalProcessParameter = e.target.value;
                            setUnitOperation3(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].codes = e.target.value;
                            setUnitOperation3(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation3(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation3(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation3(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...unitOperation3];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation3(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 4</h3>
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addUnitOperation4Row} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation4.map((item, index) => {
                  return (
                    <tr key={index}>
                    <td>
                            <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].criticalProcessParameter = e.target.value;
                            setUnitOperation4(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].codes = e.target.value;
                            setUnitOperation4(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation4(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation4(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation4(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...unitOperation4];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation4(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 5</h3>
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addUnitOperation5Row} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation5.map((item, index) => {
                  return (
                    <tr key={index}>
                     <td>
                            <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].criticalProcessParameter = e.target.value;
                            setUnitOperation5(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].codes = e.target.value;
                            setUnitOperation5(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation5(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation5(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation5(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...unitOperation5];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation5(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 6</h3>
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addUnitOperation6Row} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation6.map((item, index) => {
                  return (
                    <tr key={index}>
                    <td>
                            <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].criticalProcessParameter = e.target.value;
                            setUnitOperation6(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].codes = e.target.value;
                            setUnitOperation6(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation6(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation6(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation6(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...unitOperation6];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation6(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 7</h3>
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addUnitOperation7Row} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation7.map((item, index) => {
                  return (
                    <tr key={index}>
                    <td>
                            <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].criticalProcessParameter = e.target.value;
                            setUnitOperation7(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].codes = e.target.value;
                            setUnitOperation7(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation7(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation7(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation7(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...unitOperation7];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation7(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 8</h3>
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addUnitOperation8Row} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation8.map((item, index) => {
                  return (
                    <tr key={index}>
                    <td>
                            <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].criticalProcessParameter = e.target.value;
                            setUnitOperation8(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].codes = e.target.value;
                            setUnitOperation8(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation8(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation8(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation8(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...unitOperation8];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation8(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 9</h3>
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addUnitOperation9Row} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation9.map((item, index) => {
                  return (
                    <tr key={index}>
                    <td>
                            <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].criticalProcessParameter = e.target.value;
                            setUnitOperation9(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].codes = e.target.value;
                            setUnitOperation9(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation9(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation9(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation9(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...unitOperation9];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation9(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <h3 className="gridName pt-4">Unit Operation 10</h3>
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addUnitOperation10Row} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
              <tbody>
                {unitOperation10.map((item, index) => {
                  return (
                    <tr key={index}>
                    <td>
                            <input value={item.criticalProcessParameter}
                            onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].criticalProcessParameter = e.target.value;
                            setUnitOperation10(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.codes}
                            onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].codes = e.target.value;
                            setUnitOperation10(newData);
                            }}/>
                      </td>
                      <td>
                            <input value={item.acceptanceCriteria}
                            onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].acceptanceCriteria = e.target.value;
                            setUnitOperation10(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.minimum}
                            onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].results.minimum = e.target.value;
                            setUnitOperation10(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.results.maximum}
                            onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].results.maximum = e.target.value;
                            setUnitOperation10(newData);
                            }}/>
                      </td>
                      <td>
                           <input value={item.compliesNotComplies}
                            onChange={(e) => {
                            const newData = [...unitOperation10];
                            newData[index].compliesNotComplies = e.target.value;
                            setUnitOperation10(newData);
                            }}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="sub-head">Critical Process Parameters Review Summary</div>
            <div className="group-input">
              {/* <input placeholder="please insert flex" /> */}
              <TinyEditor editorContent={tiny26} setEditorContent={setTinyContent} tinyNo={26} />
            </div>
          </div>
        ) : null}
        {tab === "LR" ? (
          <div className="p-4">
            <div className="sub-head"> Review of Drug Substance Test Results</div>
            <h1 className="gridName">Drug Substance 1 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODSTRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h1 className="gridName  pt-8">Drug Substance 2 Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow2} />
                  <div className="addrowinstruction pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR2.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR2];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR2];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR2];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR2];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR2];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR2(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 3 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow3} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR3.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR3];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR3];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR3];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR3];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR3];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR3(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 4 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow4} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR4.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR4];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR4];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR4];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR4];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR4];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR4(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 5 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow5} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR5.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR5];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR5];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR5];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR5];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR5];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR5(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 6 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow6} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR6.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR6];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR6];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR6];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR6];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR6];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR6(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 7 Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow7} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR7.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR7];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR7];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR7];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR7];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR7];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR7(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 8 Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow8} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR8.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR8];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR8];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR8];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR8];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR8];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR8(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 9 Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow9} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR9.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR9];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR9];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR9];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR9];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR9];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR9(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 10 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow10} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODSTR10.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODSTR10];
                              newData[index].testsParameter = e.target.value;
                              setReviewOSTR10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...reviewODSTR10];
                              newData[index].specificationLimit = e.target.value;
                              setReviewOSTR10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR10];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOSTR10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODSTR10];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOSTR10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODSTR10];
                              newData[index].compliesNotComplies = e.target.value;
                              setReviewOSTR10(newData);
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
              <TinyEditor editorContent={tiny27} setEditorContent={setTinyContent} tinyNo={27} />
            </div>
            <div className="sub-head">Review of Raw Material Excipient Test Results</div>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewORMETRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewORMETRRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Material</th>
                    <th rowSpan={2}>Test parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewORMETR.map((item, index) => {
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewORMETR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewORMETR];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewORMETR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewORMETR];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewORMETR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewORMETR];
                              newData[index].compliesNotComplies = e.target.value;
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
              <TinyEditor editorContent={tiny28} setEditorContent={setTinyContent} tinyNo={28} />
            </div>
            <div className="sub-head">Review of Packing Material Test Results</div>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addreviewOPMTRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addreviewOPMTRRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Material</th>
                    <th rowSpan={2}>Test parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewOPMTR.map((item, index) => {
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewOPMTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewOPMTR];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewOPMTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewOPMTR];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewOPMTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewOPMTR];
                              newData[index].compliesNotComplies = e.target.value;
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
              <TinyEditor editorContent={tiny29} setEditorContent={setTinyContent} tinyNo={29} />
            </div>
            <div className="sub-head">Review of Drug Product – In process Test Results</div>
            <h4 className="gridName pt-2">Dilution Buffer 1 - Test Results</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP.map((item, index) => {
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP];
                              newData[index].compliesNotComplies = e.target.value;
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow2} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP2.map((item, index) => {
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP2];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP2];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP2(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP2];
                              newData[index].compliesNotComplies = e.target.value;
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow3} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP3.map((item, index) => {
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP3];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP3];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP3(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP3];
                              newData[index].compliesNotComplies = e.target.value;
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow4} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP4.map((item, index) => {
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP4];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP4];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP4(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP4];
                              newData[index].compliesNotComplies = e.target.value;
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow5} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP5.map((item, index) => {
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP5];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP5];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP5(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP5];
                              newData[index].compliesNotComplies = e.target.value;
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow6} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP6];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP6];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP6(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP6];
                              newData[index].compliesNotComplies = e.target.value;
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow7} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP7];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP7];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP7(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].compliesNotComplies = e.target.value;
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow8} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP8];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP8];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP8(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP8];
                              newData[index].compliesNotComplies = e.target.value;
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow9} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP9];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP9];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP9(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP9];
                              newData[index].compliesNotComplies = e.target.value;
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow10} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODP10(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODP10];
                              newData[index].compliesNotComplies = e.target.value;
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
              <TinyEditor editorContent={tiny30} setEditorContent={setTinyContent} tinyNo={30} />
            </div>
            <div className="sub-head">Review of Drug Product –Finished Product Test Results</div>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPFPTRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPFPTRRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
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
                              newData[index].specificationLimit = e.target.value;
                              setReviewODPFPTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...reviewODPFPTR];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setReviewODPFPTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...reviewODPFPTR];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setReviewODPFPTR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...reviewODPFPTR];
                              newData[index].compliesNotComplies = e.target.value;
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
              <TinyEditor editorContent={tiny31} setEditorContent={setTinyContent} tinyNo={31} />
            </div>
            <div className="sub-head">Summary of Ongoing Stability Studies</div>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addSummaryOOSSRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addSummaryOOSSRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Batch No.</th>
                    <th>Type</th>
                    <th>Storage Condition</th>
                    <th>Testing Intervals Months completed</th>
                    <th>Stability Protocol No.</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryOOSS.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...summaryOOSS];
                              newData[index].batchNo = e.target.value;
                              setSummaryOOSS(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.type}
                            onChange={(e) => {
                              const newData = [...summaryOOSS];
                              newData[index].type = e.target.value;
                              setSummaryOOSS(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.storageCondition}
                            onChange={(e) => {
                              const newData = [...summaryOOSS];
                              newData[index].storageCondition = e.target.value;
                              setSummaryOOSS(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testingInterval}
                            onChange={(e) => {
                              const newData = [...summaryOOSS];
                              newData[index].testingInterval = e.target.value;
                              setSummaryOOSS(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stabilityProtocolNo}
                            onChange={(e) => {
                              const newData = [...summaryOOSS];
                              newData[index].stabilityProtocolNo = e.target.value;
                              setSummaryOOSS(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div>
                <h4 className="gridName mt-5">Summary</h4>
                <TinyEditor editorContent={tiny32} setEditorContent={setTinyContent} tinyNo={32} />
              </div>

              <h4 className="gridName pt-4">Stability Study Related OOS/OOT</h4>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addStabilitySRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addStabilitySRRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Batch number</th>
                    <th>Testing Intervals Months</th>
                    <th>OOS Number</th>
                  </tr>
                </thead>
                <tbody>
                  {stabilitySR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...stabilitySR];
                              newData[index].batchNo = e.target.value;
                              setStabilitySR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testingIntervalMonths}
                            onChange={(e) => {
                              const newData = [...stabilitySR];
                              newData[index].testingIntervalMonths = e.target.value;
                              setStabilitySR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.OOSNumber}
                            onChange={(e) => {
                              const newData = [...stabilitySR];
                              newData[index].OOSNumber = e.target.value;
                              setStabilitySR(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <h4 className="gridName">Summary</h4>
              <TinyEditor editorContent={tiny33} setEditorContent={setTinyContent} tinyNo={33} />

              <div className="sub-head">Review of Visual Inspection – Reserve Samples</div>
              <div>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addreviewOVIRSRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addreviewOVIRSRow} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={manufacturingStage}
                      setimportedData={setimportedData}
                      fileName="manufacturingStage.xlsx"
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
              <TinyEditor editorContent={tiny34} setEditorContent={setTinyContent} tinyNo={34} />

              <h4 className="gridName pt-4">Review of Analytical Method Validations</h4>
              <TinyEditor editorContent={tiny35} setEditorContent={setTinyContent} tinyNo={35} />

              <h4 className="gridName pt-4">Review of Contract Testing Laboratories</h4>
              <TinyEditor editorContent={tiny36} setEditorContent={setTinyContent} tinyNo={36} />

              <h4 className="gridName pt-4">
                Review of Environmental Monitoring Trend and water trends Reports
              </h4>
              <TinyEditor editorContent={tiny37} setEditorContent={setTinyContent} tinyNo={37} />

              <h4 className="gridName pt-4">Laboratory Review Summary</h4>
              <TinyEditor editorContent={tiny38} setEditorContent={setTinyContent} tinyNo={38} />
            </div>
          </div>
        ) : null}
        {tab === "EAMR" ? (
          <div>
            <h4 className="gridName">Preventive Maintenance Details</h4>
            <TinyEditor editorContent={tiny39} setEditorContent={setTinyContent} tinyNo={39} />

            <h4 className="gridName pt-4"> Qualification details</h4>
            <TinyEditor editorContent={tiny40} setEditorContent={setTinyContent} tinyNo={40} />

            <h4 className="gridName pt-4"> Calibration Details</h4>
            <TinyEditor editorContent={tiny41} setEditorContent={setTinyContent} tinyNo={41} />

            <div className="sub-head">HVAC Qualification Status</div>
            <div>
              {/* <div className="AddRows">
                <MdNoteAdd onClick={addHVACQStatusRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addHVACQStatusRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Test Description</th>
                    <th>Frequency</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {hVACQStatus.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.testDescription}
                            onChange={(e) => {
                              const newData = [...hVACQStatus];
                              newData[index].testDescription = e.target.value;
                              setHVACQStatus(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.frequency}
                            onChange={(e) => {
                              const newData = [...hVACQStatus];
                              newData[index].frequency = e.target.value;
                              setHVACQStatus(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.status}
                            onChange={(e) => {
                              const newData = [...hVACQStatus];
                              newData[index].status = e.target.value;
                              setHVACQStatus(newData);
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
              <TinyEditor editorContent={tiny42} setEditorContent={setTinyContent} tinyNo={42} />
            </div>

            <h4 className="gridName pt-4">Sanitization and Sterilization Details of Utilities</h4>
            <div>
              {/* <div className="AddRows">
                <MdNoteAdd onClick={addSanitizationASDOURow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addSanitizationASDOURow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Equipment Name</th>
                    <th>Frequency</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sanitizationASDOU.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.equipmentName}
                            onChange={(e) => {
                              const newData = [...sanitizationASDOU];
                              newData[index].equipmentName = e.target.value;
                              setSanitizationASDOU(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.frequency}
                            onChange={(e) => {
                              const newData = [...sanitizationASDOU];
                              newData[index].frequency = e.target.value;
                              setSanitizationASDOU(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.status}
                            onChange={(e) => {
                              const newData = [...sanitizationASDOU];
                              newData[index].status = e.target.value;
                              setSanitizationASDOU(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">Summary</h4>
            <TinyEditor editorContent={tiny43} setEditorContent={setTinyContent} tinyNo={43} />

            <h4 className="gridName pt-4">Compressed Gases</h4>
            <div>
              {/* <div className="AddRows">
                <MdNoteAdd onClick={addCompressedGasesRow} />
                <div className="addrowinstruction">
                  Compressed gases testing performed as per the scheduled
                  frequency and results were found to be satisfactory, system is
                  in qualified state
                </div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCompressedGasesRow} />
                  <div className="addrowinstruction  pl-2">
                    Compressed gases testing performed as per the scheduled frequency and results
                    were found to be satisfactory, system is in qualified state
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Compressed Gas</th>
                    <th>Test </th>
                    <th>Frequency</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {compressedGas.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            onChange={(e) => {
                              const newData = [...compressedGas];
                              newData[index].compressedGas = e.target.value;
                              setCompressedGas(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.test}
                            onChange={(e) => {
                              const newData = [...compressedGas];
                              newData[index].test = e.target.value;
                              setCompressedGas(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.frequency}
                            onChange={(e) => {
                              const newData = [...compressedGas];
                              newData[index].frequency = e.target.value;
                              setCompressedGas(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.status}
                            onChange={(e) => {
                              const newData = [...compressedGas];
                              newData[index].status = e.target.value;
                              setCompressedGas(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">Engineering Summary</h4>
            <TinyEditor editorContent={tiny44} setEditorContent={setTinyContent} tinyNo={44} />
          </div>
        ) : null}
        {tab === "QSR" ? (
          <div>
            <div className="sub-head">Review of Deviations</div>
            <div className="sub-head">Current Review Period Quality Related Notification</div>
            <div>
              {/* <div className="AddRows">
                <MdNoteAdd onClick={addCurrentRPQRNRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentRPQRNRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>SI. No.</th>
                    <th rowSpan={2}>Batch No.</th>
                    <th colSpan={4}>Quality Related Notification</th>
                    <th colSpan={3}>CAPA</th>
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
                              newData[index].qualityRelatedNotification.no = e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.qualityRelatedNotification.description}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].qualityRelatedNotification.description =
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
                              newData[index].qualityRelatedNotification.impact = e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.qualityRelatedNotification.status}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].qualityRelatedNotification.status = e.target.value;
                              setCurrentRPQRN(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.cAPA.descriptionNo}
                            onChange={(e) => {
                              const newData = [...currentRPQRN];
                              newData[index].cAPA.descriptionNo = e.target.value;
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
            <h4 className="gridName pt-4">previous Review Period Quality Related Notification</h4>
            <TinyEditor editorContent={tiny45} setEditorContent={setTinyContent} tinyNo={45} />

            <h4 className="gridName pt-4">Review of Product Recalls</h4>
            <TinyEditor editorContent={tiny46} setEditorContent={setTinyContent} tinyNo={46} />
            <h4 className="gridName pt-4">Review of Returned Products</h4>
            <TinyEditor editorContent={tiny47} setEditorContent={setTinyContent} tinyNo={47} />
            <h4 className="gridName pt-4">Review of Salvaged Drugs</h4>
            <TinyEditor editorContent={tiny48} setEditorContent={setTinyContent} tinyNo={48} />
            <h4 className="gridName pt-4">Review of previous PQR recommendations</h4>
            <TinyEditor editorContent={tiny49} setEditorContent={setTinyContent} tinyNo={49} />
            <h4 className="gridName pt-4">Review of Quality Agreements</h4>
            <TinyEditor editorContent={tiny50} setEditorContent={setTinyContent} tinyNo={50} />
            <h4 className="gridName pt-4">Review of Manufacturing Authorizations</h4>
            <TinyEditor editorContent={tiny51} setEditorContent={setTinyContent} tinyNo={51} />
            <h4 className="gridName pt-4">Review of Open Validations</h4>
            <TinyEditor editorContent={tiny52} setEditorContent={setTinyContent} tinyNo={52} />
          </div>
        ) : null}
        {tab === "RR" ? (
          <>
            <div className="gridName">Dossier variation details</div>
            <div className="py-4">
              {/* <MdNoteAdd onClick={addDossierRow} />
                <div className="addrowinstruction"></div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl ">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addDossierRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={manufacturingStage}
                    setimportedData={setimportedData}
                    fileName="manufacturingStage.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SL. No.</th>
                    <th>Agency</th>
                    <th>Notification No</th>
                    <th>Notification Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {dossierRR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.agency}
                            onChange={(e) => {
                              const newData = [...dossierRR];
                              newData[index].agency = e.target.value;
                              setDossierRR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.notificationNo}
                            onChange={(e) => {
                              const newData = [...dossierRR];
                              newData[index].notificationNo = e.target.value;
                              setDossierRR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.notificationType}
                            onChange={(e) => {
                              const newData = [...dossierRR];
                              newData[index].notificationTpe = e.target.value;
                              setDossierRR(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.description}
                            onChange={(e) => {
                              const newData = [...dossierRR];
                              newData[index].description = e.target.value;
                              setDossierRR(newData);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div>
                <h4 className="gridName mt-5">Summary</h4>
                <TinyEditor editorContent={tiny53} setEditorContent={setTinyContent} tinyNo={53} />
              </div>

              <div className="gridName">New marketing authorisation</div>
              <div className="py-4">
                {/* <MdNoteAdd onClick={addDossierRowNma} />
                  <div className="addrowinstruction"></div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addDossierRowNma} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                      data={manufacturingStage}
                      setimportedData={setimportedData}
                      fileName="manufacturingStage.xlsx"
                    />
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>SL. No.</th>
                      <th>Country Name</th>
                      <th>Description Of Packing</th>
                      <th>Date of Application</th>
                      <th>Status of Application</th>
                      <th>Date of Authorization</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dossierRRNma.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.countryName}
                              onChange={(e) => {
                                const newData = [...dossierRRNma];
                                newData[index].countryName = e.target.value;
                                setDossierRRNma(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.descriptionOfPacking}
                              onChange={(e) => {
                                const newData = [...dossierRRNma];
                                newData[index].descriptionOfPacking = e.target.value;
                                setDossierRRNma(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.dateOfApplication}
                              onChange={(e) => {
                                const newData = [...dossierRRNma];
                                newData[index].dateOfApplication = e.target.value;
                                setDossierRRNma(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.statusOfApplication}
                              onChange={(e) => {
                                const newData = [...dossierRRNma];
                                newData[index].statusOfApplication = e.target.value;
                                setDossierRRNma(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.dateOfAuthorization}
                              onChange={(e) => {
                                const newData = [...dossierRRNma];
                                newData[index].dateOfAuthorization = e.target.value;
                                setDossierRRNma(newData);
                              }}
                            />
                          </td>{" "}
                          <td>
                            <input
                              value={item.remarks}
                              onChange={(e) => {
                                const newData = [...dossierRRNma];
                                newData[index].remarks = e.target.value;
                                setDossierRRNma(newData);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div>
                  <h4 className="gridName mt-5">Summary</h4>
                  <TinyEditor
                    editorContent={tiny54}
                    setEditorContent={setTinyContent}
                    tinyNo={54}
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
              <TinyEditor editorContent={tiny55} setEditorContent={setTinyContent} tinyNo={55} />
            </div>
          </>
        ) : null}
        {tab === "CAPA" ? (
          <>
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin">
                    <span></span>
                    <br />
                  </div>
                </div>
              </div>
              <span className="text-[28px] pl-5 text-blue-500 font-semibold">
                Work In Progress. .........
              </span>
            </div>
          </>
        ) : null}
        {tab === "DEAC" ? (
          <>
            {/* <div className="flex items-center justify-center text-[28px] text-red-500 font-semibold animate-spin">
                Work In Progress. .........
              </div> */}
            <div>
              <h4 className="gridName">Discussion Evaluation and Conclusion</h4>
              <TinyEditor editorContent={tiny56} setEditorContent={setTinyContent} tinyNo={56} />
            </div>
          </>
        ) : null}
        {tab === "LOA" ? (
          <>
            <div className="container">
              <div>
                <h4 className="gridName">Annexure 1</h4>
                <TinyEditor editorContent={tiny57} setEditorContent={setTinyContent} tinyNo={57} />
              </div>
              <div>
                <h4 className="gridName">Annexure 2</h4>
                <TinyEditor editorContent={tiny58} setEditorContent={setTinyContent} tinyNo={58} />
              </div>
              <div>
                <h4 className="gridName">Annexure 3</h4>
                <TinyEditor editorContent={tiny59} setEditorContent={setTinyContent} tinyNo={59} />
              </div>
              <div>
                <h4 className="gridName">Annexure 4</h4>
                <TinyEditor editorContent={tiny60} setEditorContent={setTinyContent} tinyNo={60} />
              </div>
              <div>
                <h4 className="gridName">Annexure 5</h4>
                <TinyEditor editorContent={tiny61} setEditorContent={setTinyContent} tinyNo={61} />
              </div>
              <div>
                <h4 className="gridName">Annexure 6</h4>
                <TinyEditor editorContent={tiny62} setEditorContent={setTinyContent} tinyNo={62} />
              </div>
              <div>
                <h4 className="gridName">Annexure 7</h4>
                <TinyEditor editorContent={tiny63} setEditorContent={setTinyContent} tinyNo={63} />
              </div>
              <div>
                <h4 className="gridName">Annexure 8</h4>
                <TinyEditor editorContent={tiny64} setEditorContent={setTinyContent} tinyNo={64} />
              </div>
              <div>
                <h4 className="gridName">Annexure 9</h4>
                <TinyEditor editorContent={tiny65} setEditorContent={setTinyContent} tinyNo={65} />
              </div>
              <div>
                <h4 className="gridName">Annexure 10</h4>
                <TinyEditor editorContent={tiny66} setEditorContent={setTinyContent} tinyNo={66} />
              </div>
              <div>
                <h4 className="gridName">Annexure 11</h4>
                <TinyEditor editorContent={tiny67} setEditorContent={setTinyContent} tinyNo={67} />
              </div>
              <div>
                <h4 className="gridName">Annexure 12</h4>
                <TinyEditor editorContent={tiny68} setEditorContent={setTinyContent} tinyNo={68} />
              </div>
              <div>
                <h4 className="gridName">Annexure 13</h4>
                <TinyEditor editorContent={tiny69} setEditorContent={setTinyContent} tinyNo={69} />
              </div>
              <div>
                <h4 className="gridName">Annexure 14</h4>
                <TinyEditor editorContent={tiny70} setEditorContent={setTinyContent} tinyNo={70} />
              </div>
              <div>
                <h4 className="gridName">Annexure 15</h4>
                <TinyEditor editorContent={tiny71} setEditorContent={setTinyContent} tinyNo={71} />
              </div>
              <div>
                <h4 className="gridName">Annexure 16</h4>
                <TinyEditor editorContent={tiny72} setEditorContent={setTinyContent} tinyNo={72} />
              </div>
              <div>
                <h4 className="gridName">Annexure 17</h4>
                <TinyEditor editorContent={tiny73} setEditorContent={setTinyContent} tinyNo={73} />
              </div>
              <div>
                <h4 className="gridName">Annexure 18</h4>
                <TinyEditor editorContent={tiny74} setEditorContent={setTinyContent} tinyNo={74} />
              </div>
              <div>
                <h4 className="gridName">Annexure 19</h4>
                <TinyEditor editorContent={tiny75} setEditorContent={setTinyContent} tinyNo={75} />
              </div>
              <div>
                <h4 className="gridName">Annexure 20</h4>
                <TinyEditor editorContent={tiny76} setEditorContent={setTinyContent} tinyNo={76} />
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="w-full h-18 z-[999] bg-slate-200 p-10 py-2   flex justify-between align-middle fixed bottom-0  ">
        <div className="flex justify-end gap-10 pr-10"></div>
        <div className="flex justify-end gap-10 pr-10">
          <button
            className=" px-4 py-2 bg-teal-600 text-white
            font-semibold
            rounded-lg
            shadow-md
            hover:bg-teal-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-teal-500
          "
            onClick={() => {
              dispatch(addForm(pQRData));
              navigate("/dashboard");
            }}
          >
            Save
          </button>
          <button
            className="
            px-4
            py-2
            bg-teal-600
            text-white
            font-semibold
            rounded-lg
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
