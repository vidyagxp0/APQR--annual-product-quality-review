import React, { useEffect, useReducer, useState } from "react";
import Header from "../Component/Header";
import { MdNoteAdd } from "react-icons/md";
import TinyEditor from "../Component/TinyEditor";
import ExcelExport from "../Component/Exports/Excel/ExcelExport";
import ExcelExportImport from "../Component/ImportExportExcel";
import { useDispatch } from "react-redux";
import { updateForm } from "../redux/formSlice";
import { useLocation, useNavigate } from "react-router-dom";
import HighchartsChart from "../Component/Chart/HighchartsChart";
import { ParacetamolpHPlotLines, paracetamolAnnotations, paracetamolpHZones } from "../Component/Chart/ChartJsFunction";
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
      account: "Stock of Work In Progress",
      code: "1530",
      debit: "$0.00",
      credit: "$100.00",
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
      tiny1: "",
      tiny2: "",
      tiny3: "",
      tiny4: "",
      tiny5: "",
      tiny6: "",
      tiny7: "",
      tiny8: "",
      tiny9: "",
      tiny10: "",
      tiny11: "",
      tiny12: "",
      tiny13: "",
      tiny14: "",
      tiny15: "",
      tiny16: "",
      tiny17: "",
      tiny18: "",
      tiny19: "",
      tiny20: "",
      tiny21: "",
      tiny22: "",
      tiny23: "",
      tiny24: "",
      tiny25: "",
      tiny26: "",
      tiny27: "",
      tiny28: "",
      tiny29: "",
      tiny30: "",
      tiny31: "",
      tiny32: "",
      tiny33: "",
      tiny34: "",
      tiny35: "",
      tiny36: "",
      tiny37: "",
      tiny38: "",
      tiny39: "",
      tiny40: "",
      tiny41: "",
      tiny42: "",
      tiny43: "",
      tiny44: "",
      tiny45: "",
      tiny46: "",
      tiny47: "",
      tiny48: "",
      tiny49: "",
      tiny50: "",
      tiny51: "",
      tiny52: "",
      tiny53: "",
      tiny54: "",
      tiny55: "",
      tiny56: "",
      tiny57: "",
      tiny58: "",
      tiny59: "",
      tiny60: "",
      tiny61: "",
      tiny62: "",
      tiny63: "",
      tiny64: "",
      tiny65: "",
      tiny66: "",
      tiny67: "",
      tiny68: "",
      tiny69: "",
      tiny70: "",
      tiny71: "",
      tiny72: "",
      tiny73: "",
      tiny74: "",
      tiny75: "",
      tiny76: "",
    }
  );

  const setTinyContent = (data, tinyNO) => {
    switch (tinyNO) {
      case 1:
        setPQRData({
          ...pQRData,
          tiny1: data,
        });
        break;
      case 2:
        setPQRData({
          ...pQRData,
          tiny2: data,
        });
        break;
      case 3:
        setPQRData({
          ...pQRData,
          tiny3: data,
        });
        break;
      case 4:
        setPQRData({
          ...pQRData,
          tiny4: data,
        });
        break;
      case 5:
        setPQRData({
          ...pQRData,
          tiny5: data,
        });
        break;
      case 6:
        setPQRData({
          ...pQRData,
          tiny6: data,
        });
        break;
      case 7:
        setPQRData({
          ...pQRData,
          tiny7: data,
        });
        break;
      case 8:
        setPQRData({
          ...pQRData,
          tiny8: data,
        });
        break;
      case 9:
        setPQRData({
          ...pQRData,
          tiny9: data,
        });
        break;
      case 10:
        setPQRData({
          ...pQRData,
          tiny10: data,
        });
        break;
      case 11:
        setPQRData({
          ...pQRData,
          tiny11: data,
        });
        break;
      case 12:
        setPQRData({
          ...pQRData,
          tiny12: data,
        });
        break;
      case 13:
        setPQRData({
          ...pQRData,
          tiny13: data,
        });
        break;
      case 14:
        setPQRData({
          ...pQRData,
          tiny14: data,
        });
        break;
      case 15:
        setPQRData({
          ...pQRData,
          tiny15: data,
        });
        break;
      case 16:
        setPQRData({
          ...pQRData,
          tiny16: data,
        });
        break;
      case 17:
        setPQRData({
          ...pQRData,
          tiny17: data,
        });
        break;
      case 18:
        setPQRData({
          ...pQRData,
          tiny18: data,
        });
        break;
      case 19:
        setPQRData({
          ...pQRData,
          tiny19: data,
        });
        break;
      case 20:
        setPQRData({
          ...pQRData,
          tiny20: data,
        });
        break;
      case 21:
        setPQRData({
          ...pQRData,
          tiny21: data,
        });
        break;
      case 22:
        setPQRData({
          ...pQRData,
          tiny22: data,
        });
        break;
      case 23:
        setPQRData({
          ...pQRData,
          tiny23: data,
        });
        break;
      case 24:
        setPQRData({
          ...pQRData,
          tiny24: data,
        });
        break;
      case 25:
        setPQRData({
          ...pQRData,
          tiny25: data,
        });
        break;
      case 26:
        setPQRData({
          ...pQRData,
          tiny26: data,
        });
        break;
      case 27:
        setPQRData({
          ...pQRData,
          tiny27: data,
        });
        break;
      case 28:
        setPQRData({
          ...pQRData,
          tiny28: data,
        });
        break;
      case 29:
        setPQRData({
          ...pQRData,
          tiny29: data,
        });
        break;
      case 30:
        setPQRData({
          ...pQRData,
          tiny30: data,
        });
        break;
      case 31:
        setPQRData({
          ...pQRData,
          tiny31: data,
        });
        break;
      case 32:
        setPQRData({
          ...pQRData,
          tiny32: data,
        });
        break;
      case 33:
        setPQRData({
          ...pQRData,
          tiny33: data,
        });
        break;
      case 34:
        setPQRData({
          ...pQRData,
          tiny34: data,
        });
        break;
      case 35:
        setPQRData({
          ...pQRData,
          tiny35: data,
        });
        break;
      case 36:
        setPQRData({
          ...pQRData,
          tiny36: data,
        });
        break;
      case 37:
        setPQRData({
          ...pQRData,
          tiny37: data,
        });
        break;
      case 38:
        setPQRData({
          ...pQRData,
          tiny38: data,
        });
        break;
      case 39:
        setPQRData({
          ...pQRData,
          tiny39: data,
        });
        break;
      case 40:
        setPQRData({
          ...pQRData,
          tiny40: data,
        });
        break;
      case 41:
        setPQRData({
          ...pQRData,
          tiny41: data,
        });
        break;
      case 42:
        setPQRData({
          ...pQRData,
          tiny42: data,
        });
        break;
      case 43:
        setPQRData({
          ...pQRData,
          tiny43: data,
        });
        break;
      case 44:
        setPQRData({
          ...pQRData,
          tiny44: data,
        });
        break;
      case 45:
        setPQRData({
          ...pQRData,
          tiny45: data,
        });
        break;
      case 46:
        setPQRData({
          ...pQRData,
          tiny46: data,
        });
        break;
      case 47:
        setPQRData({
          ...pQRData,
          tiny47: data,
        });
        break;
      case 48:
        setPQRData({
          ...pQRData,
          tiny48: data,
        });
        break;
      case 49:
        setPQRData({
          ...pQRData,
          tiny49: data,
        });
        break;
      case 50:
        setPQRData({
          ...pQRData,
          tiny50: data,
        });
        break;
      case 51:
        setPQRData({
          ...pQRData,
          tiny51: data,
        });
        break;
      case 52:
        setPQRData({
          ...pQRData,
          tiny52: data,
        });
        break;
      case 53:
        setPQRData({
          ...pQRData,
          tiny53: data,
        });
        break;
      case 54:
        setPQRData({
          ...pQRData,
          tiny54: data,
        });
        break;
      case 55:
        setPQRData({
          ...pQRData,
          tiny55: data,
        });
        break;
      case 56:
        setPQRData({
          ...pQRData,
          tiny56: data,
        });
        break;
      case 57:
        setPQRData({
          ...pQRData,
          tiny57: data,
        });
        break;
      case 58:
        setPQRData({
          ...pQRData,
          tiny58: data,
        });
        break;
      case 59:
        setPQRData({
          ...pQRData,
          tiny59: data,
        });
        break;
      case 60:
        setPQRData({
          ...pQRData,
          tiny60: data,
        });
        break;
      case 61:
        setPQRData({
          ...pQRData,
          tiny61: data,
        });
        break;
      case 62:
        setPQRData({
          ...pQRData,
          tiny62: data,
        });
        break;
      case 63:
        setPQRData({
          ...pQRData,
          tiny63: data,
        });
        break;
      case 64:
        setPQRData({
          ...pQRData,
          tiny64: data,
        });
        break;
      case 65:
        setPQRData({
          ...pQRData,
          tiny65: data,
        });
        break;
      case 66:
        setPQRData({
          ...pQRData,
          tiny66: data,
        });
        break;
      case 67:
        setPQRData({
          ...pQRData,
          tiny67: data,
        });
        break;
      case 68:
        setPQRData({
          ...pQRData,
          tiny68: data,
        });
        break;
      case 69:
        setPQRData({
          ...pQRData,
          tiny69: data,
        });
        break;
      case 70:
        setPQRData({
          ...pQRData,
          tiny70: data,
        });
        break;
      case 71:
        setPQRData({
          ...pQRData,
          tiny71: data,
        });
        break;
      case 72:
        setPQRData({
          ...pQRData,
          tiny72: data,
        });
        break;
      case 73:
        setPQRData({
          ...pQRData,
          tiny73: data,
        });
        break;
      case 74:
        setPQRData({
          ...pQRData,
          tiny74: data,
        });
        break;
      case 75:
        setPQRData({
          ...pQRData,
          tiny75: data,
        });
        break;
      case 76:
        setPQRData({
          ...pQRData,
          tiny76: data,
        });
        break;
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state;
  const paracetamolpHData = editData?.reviewODSTR?.map((item)=>{
    return {"Batch No.":item.batchNo,"Observed Value":item.observedValue}
  })
  console.log(paracetamolpHData)
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
      previewCC: previewCC,
      currentMC: currentMC,
      previewMC: previewMC,
      currentLabI: currentLabI,
      previewLabI: previewLabI,
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
    editData,
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
    previewLabI,
    currentLabI,
  ]);

  useEffect(() => {
    if (editData) {
      setPQRData(editData);
    }
  }, [editData]);
  // useEffect(() => {
  //   console.log("tiny1:", tiny1);
  // }, [tiny1]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPQRData({
      ...pQRData,
      [name]: value,
    });
  };
  const addManufacturingStageRow = () => {
    const newRow = {
      productName: "",
      sFGCode: "",
      fGCode: "",
    };
    setPQRData({
      ...pQRData,
      manufacturingStage: [...pQRData.manufacturingStage, newRow],
    });
  };

  const addDossierRow = () => {
    const newRow = {
      agency: "",
      notificationNo: "",
      notificationtype: "",
      description: "",
    };
    setPQRData({
      ...pQRData,
      dossierRR: [...pQRData.dossierRR, newRow],
    });
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
    setPQRData({
      ...pQRData,
      dossierRRNma: [...pQRData.dossierRRNma, newRow],
    });
  };

  const addManufacturingSAPSRow = () => {
    const newRow = {
      productName: "",
      batchCode: "",
      sFGCode: "",
      remarks: "",
    };
    setPQRData({
      ...pQRData,
      manufacturingSAPS: [...pQRData.manufacturingSAPS, newRow],
    });
  };

  const addRawMRSRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      reasonOfRejection: "",
      description: "",
    };
    setPQRData({
      ...pQRData,
      rawMRS: [...pQRData.rawMRS, newRow],
    });
  };

  const addPackingMRSRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      reasonOfRejection: "",
      description: "",
    };
    setPQRData({
      ...pQRData,
      packingMRS: [...pQRData.packingMRS, newRow],
    });
  };

  const addExpiredRMDRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      expiryDate: "",
    };
    setPQRData({
      ...pQRData,
      expiredRMD: [...pQRData.expiredRMD, newRow],
    });
  };
  const addExpiredPMDRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      expiryDate: "",
    };
    setPQRData({
      ...pQRData,
      expiredPMD: [...pQRData.expiredPMD, newRow],
    });
  };
  const addreviewOfASLRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      manufacturer: "",
      facility: "",
    };
    setPQRData({
      ...pQRData,
      reviewOfASL: [...pQRData.reviewOfASL, newRow],
    });
  };

  const addvendorQDORMERow = () => {
    const newRow = {
      materialName: "",
      materialCode: "",
      manufacturerName: "",
      qualificationStatus: "",
      remarks: "",
    };
    setPQRData({
      ...pQRData,
      vendorQDORME: [...pQRData.vendorQDORME, newRow],
    });
  };

  const addvendorQDOPPMRow = () => {
    const newRow = {
      materialName: "",
      materialCode: "",
      manufacturerName: "",
      qualificationStatus: "",
    };
    setPQRData({
      ...pQRData,
      vendorQDORME: [...pQRData.vendorQDORME, newRow],
    });
    setVendorQDOPPM([...vendorQDOPPM, newRow]);
  };

  const addvendorQDPOGRow = () => {
    const newRow = {
      gasName: "",
      gasCode: "",
      manufacturerName: "",
      qualificationStatus: "",
    };
    setPQRData({
      ...pQRData,
      vendorQDPOG: [...pQRData.vendorQDPOG, newRow],
    });
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
    setPQRData({
      ...pQRData,
      codeTCTD: [...pQRData.codeTCTD, newRow],
    });
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
    setPQRData({
      ...pQRData,
      reviewORCEC: [...pQRData.reviewORCEC, newRow],
    });
  };

  const addmanufacturingSDRow = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      manufacturingSD: [...pQRData.manufacturingSD, newRow],
    });
  };

  const addBufferFSDPVRow = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      bufferFSDPV: [...pQRData.bufferFSDPV, newRow],
    });
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
    setPQRData({
      ...pQRData,
      oosDetails: [...pQRData.oosDetails, newRow],
    });
  };

  const capaDetailsRow = () => {
    const newRow = {
      ARNo: "",
      capaType: "",
      descriptionOfIssue: "",
      rootCause: "",
      capaVerification: "",
      chooseFile: "",
      remarks: "",
    };
    setPQRData({
      ...pQRData,
      capaDetails: [...pQRData.capaDetails, newRow],
    });
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
    setPQRData({
      ...pQRData,
      deviationDetails: [...pQRData.deviationDetails, newRow],
    });
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
    setPQRData({
      ...pQRData,
      ootResults: [...pQRData.ootResults, newRow],
    });
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
    setPQRData({
      ...pQRData,
      oolResults: [...pQRData.oolResults, newRow],
    });
  };
  const ooaResultsRow = () => {
    const newRow = {
      testNameOfAlert: "",
      resultsObtained: "",
      specificationLimit: "",
      detailsOfObviousError: "",
      chooseFile: "",
    };
    setPQRData({
      ...pQRData,
      ooaResults: [...pQRData.ooaResults, newRow],
    });
  };

  const addReviewODSTRRow = () => {
    const newRow = {
      batchNo:"",
      testsParameter: "",
      observedValue: "",
     LSL:"",
     USL:"",
     LCL:"",
     UCL:"",
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR: [...pQRData.reviewODSTR, newRow],
    });
  };
  const addReviewODSTRRow2 = () => {
    const newRow2 = {
      batchNo:"",
      testsParameter: "",
      observedValue: "",
     LSL:"",
     USL:"",
     LCL:"",
     UCL:"",
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR2: [...pQRData.reviewODSTR2, newRow2],
    });
  };
  const addReviewODSTRRow3 = () => {
    const newRow3 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR3: [...pQRData.reviewODSTR3, newRow3],
    });
  };
  const addReviewODSTRRow4 = () => {
    const newRow4 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR4: [...pQRData.reviewODSTR4, newRow4],
    });
  };
  const addReviewODSTRRow5 = () => {
    const newRow5 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR5: [...pQRData.reviewODSTR5, newRow5],
    });
    setReviewOSTR5([...reviewODSTR5, newRow5]);
  };
  const addReviewODSTRRow6 = () => {
    const newRow6 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR6: [...pQRData.reviewODSTR6, newRow6],
    });
  };
  const addReviewODSTRRow7 = () => {
    const newRow7 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR7: [...pQRData.reviewODSTR7, newRow7],
    });
  };
  const addReviewODSTRRow8 = () => {
    const newRow8 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR8: [...pQRData.reviewODSTR8, newRow8],
    });
  };
  const addReviewODSTRRow9 = () => {
    const newRow9 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR9: [...pQRData.reviewODSTR9, newRow9],
    });
  };
  const addReviewODSTRRow10 = () => {
    const newRow10 = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODSTR10: [...pQRData.reviewODSTR10, newRow10],
    });
  };

  const addReviewORMETRRow = () => {
    const newRow = {
      material: "",
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewORMETR: [...pQRData.reviewORMETR, newRow],
    });
  };

  const addreviewOPMTRRow = () => {
    const newRow = {
      material: "",
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewOPMTR: [...pQRData.reviewOPMTR, newRow],
    });
  };

  const addReviewODPRow = () => {
    const newRow = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODP: [...pQRData.reviewODP, newRow],
    });
  };

  const addReviewODPRow2 = () => {
    const newRow2 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODP2: [...pQRData.reviewODP2, newRow2],
    });
  };
  const addReviewODPRow3 = () => {
    const newRow3 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODP3: [...pQRData.reviewODP3, newRow3],
    });
  };
  const addReviewODPRow4 = () => {
    const newRow4 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODP4: [...pQRData.reviewODP4, newRow4],
    });
  };
  const addReviewODPRow5 = () => {
    const newRow5 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODP5: [...pQRData.reviewODP5, newRow5],
    });
  };
  const addReviewODPRow6 = () => {
    const newRow6 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODP6: [...pQRData.reviewODP6, newRow6],
    });
  };
  const addReviewODPRow7 = () => {
    const newRow7 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODP7: [...pQRData.reviewODP7, newRow7],
    });
  };
  const addReviewODPRow8 = () => {
    const newRow8 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODP8: [...pQRData.reviewODP8, newRow8],
    });
  };
  const addReviewODPRow9 = () => {
    const newRow9 = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODP9: [...pQRData.reviewODP9, newRow9],
    });
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
    setPQRData({
      ...pQRData,
      reviewODP10: [...pQRData.reviewODP10, newRow10],
    });
  };

  const addReviewODPFPTRRow = () => {
    const newRow = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      reviewODPFPTR: [...pQRData.reviewODPFPTR, newRow],
    });
  };

  const addSummaryOOSSRow = () => {
    const newRow = {
      batchNo: "",
      type: "",
      storageCondition: "",
      testingInterval: "",
      stabilityProtocolNo: "",
    };
    setPQRData({
      ...pQRData,
      summaryOOSS: [...pQRData.summaryOOSS, newRow],
    });
  };

  const addStabilitySRRow = () => {
    const newRow = {
      batchNo: "",
      testingIntervalMonths: "",
      OOSNumber: "",
    };
    setPQRData({
      ...pQRData,
      stabilitySR: [...pQRData.stabilitySR, newRow],
    });
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
    setPQRData({
      ...pQRData,
      reviewOVIRS: [...pQRData.reviewOVIRS, newRow],
    });
  };

  const addHVACQStatusRow = () => {
    const newRow = {
      testDescription: "",
      frequency: "",
      status: "",
    };
    setPQRData({
      ...pQRData,
      hVACQStatus: [...pQRData.hVACQStatus, newRow],
    });
  };
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
    setPQRData({ ...pQRData, reviewOfCPD: [...pQRData.reviewOfCPD, newRow] });
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
    setPQRData({ ...pQRData, previewRPD: [...pQRData.previewRPD, newRow] });
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
    setPQRData({ ...pQRData, currentOOS: [...pQRData.currentOOS, newRow] });
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
    setPQRData({ ...pQRData, previewOOS: [...pQRData.previewOOS, newRow] });
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
    setPQRData({ ...pQRData, currentOOAC: [...pQRData.currentOOAC, newRow] });
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
    setPQRData({ ...pQRData, previewOOAC: [...pQRData.previewOOAC, newRow] });
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
    setPQRData({ ...pQRData, currentOOAL: [...pQRData.currentOOAL, newRow] });
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
    setPQRData({ ...pQRData, previewOOAL: [...pQRData.previewOOAL, newRow] });
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
    setPQRData({ ...pQRData, currentOOSA: [...pQRData.currentOOSA, newRow] });
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
    setPQRData({ ...pQRData, previewOOSA: [...pQRData.previewOOSA, newRow] });
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
    setPQRData({ ...pQRData, currentOOT: [...pQRData.currentOOT, newRow] });
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
    setPQRData({ ...pQRData, previewOOT: [...pQRData.previewOOT, newRow] });
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
    setPQRData({ ...pQRData, currentCC: [...pQRData.currentCC, newRow] });
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
    setPQRData({ ...pQRData, previewCC: [...pQRData.previewCC, newRow] });
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
    setPQRData({ ...pQRData, currentMC: [...pQRData.currentMC, newRow] });
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
    setPQRData({ ...pQRData, previewMC: [...pQRData.previewMC, newRow] });
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
    setPQRData({ ...pQRData, currentLabI: [...pQRData.currentLabI, newRow] });
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
    setPQRData({ ...pQRData, previewLabI: [...pQRData.previewLabI, newRow] });
  };

  const addSanitizationASDOURow = () => {
    const newRow = {
      equipmentName: "",
      frequency: "",
      status: "",
    };
    setPQRData({
      ...pQRData,
      sanitizationASDOU: [...pQRData.sanitizationASDOU, newRow],
    });
  };

  const addCompressedGasesRow = () => {
    const newRow = {
      compressedGas: "",
      test: "",
      frequency: "",
      status: "",
    };
    setPQRData({
      ...pQRData,
      compressedGas: [...pQRData.compressedGas, newRow],
    });
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
    setPQRData({
      ...pQRData,
      currentRPQRN: [...pQRData.currentRPQRN, newRow],
    });
  };

  const addUnitOperation3Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      unitOperation3: [...pQRData.unitOperation3, newRow],
    });
  };

  const addUnitOperation4Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      unitOperation4: [...pQRData.unitOperation4, newRow],
    });
  };

  const addUnitOperation5Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      unitOperation5: [...pQRData.unitOperation5, newRow],
    });
  };

  const addUnitOperation6Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      unitOperation6: [...pQRData.unitOperation6, newRow],
    });
  };

  const addUnitOperation7Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      unitOperation7: [...pQRData.unitOperation7, newRow],
    });
  };

  const addUnitOperation8Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      unitOperation8: [...pQRData.unitOperation8, newRow],
    });
  };

  const addUnitOperation9Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      unitOperation9: [...pQRData.unitOperation9, newRow],
    });
  };

  const addUnitOperation10Row = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setPQRData({
      ...pQRData,
      unitOperation10: [...pQRData.unitOperation10, newRow],
    });
  };

  const handleProductCodeChange = (index, value) => {
    const newProductCodes = [...pQRData.productCodes];
    newProductCodes[index] = value;
    setPQRData({
      ...pQRData,
      productCodes: newProductCodes,
    });
  };

  const addProductCodeInput = () => {
    setPQRData({
      ...pQRData,
      productCodes: [...pQRData.productCodes, ""],
    });
  };

  const removeProductCodeInput = (index) => {
    const newProductCodes = [...pQRData.productCodes];
    newProductCodes.splice(index, 1);
    setPQRData({
      ...pQRData,
      productCodes: newProductCodes,
    });
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
          <div
            className={`${tab === "GI" ? "active" : ""}`}
            onClick={() => setTab("GI")}
          >
            General Information
          </div>
          <div
            className={`${tab === "WR" ? "active" : ""}`}
            onClick={() => setTab("WR")}
          >
            Warehouse Review
          </div>
          <div
            className={`${tab === "MR" ? "active" : ""}`}
            onClick={() => setTab("MR")}
          >
            Manufacturing Review
          </div>
          <div
            className={`${tab === "LR" ? "active" : ""}`}
            onClick={() => setTab("LR")}
          >
            Laboratory Review
          </div>
          <div
            className={`${tab === "EAMR" ? "active" : ""}`}
            onClick={() => setTab("EAMR")}
          >
            Engineering And Maintenance Review
          </div>
          <div
            className={`${tab === "QSR" ? "active" : ""}`}
            onClick={() => setTab("QSR")}
          >
            Quality System Review
          </div>
          <div
            className={`${tab === "RR" ? "active" : ""}`}
            onClick={() => setTab("RR")}
          >
            Regulatory Review
          </div>
          <div
            className={`${tab === "R" ? "active" : ""}`}
            onClick={() => setTab("R")}
          >
            Recommendations{" "}
          </div>
          <div
            className={`${tab === "CAPA" ? "active" : ""}`}
            onClick={() => setTab("CAPA")}
          >
            CAPA
          </div>
          <div
            className={`${tab === "DEAC" ? "active" : ""}`}
            onClick={() => setTab("DEAC")}
          >
            Discussion, Evaluation And Conclusion
          </div>
          <div
            className={`${tab === "LOA" ? "active" : ""}`}
            onClick={() => setTab("LOA")}
          >
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
                  onChange={handleInputChange}
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
            {pQRData?.productCodes?.map((productCode, index) => (
              <div key={index} className="group-input">
                <label>Product Code {pQRData?.productCodes.length > 1 ? index + 1 : ""}</label>
                <div className="flex gap-4">
                  <input
                    value={productCode}
                    onChange={(e) =>
                      handleProductCodeChange(index, e.target.value)
                    }
                  />
                  {index === pQRData?.productCodes.length - 1 && (
                    <button
                      onClick={addProductCodeInput}
                      className="px-3 py-1 border bg-black text-white border-black rounded"
                    >
                      +
                    </button>
                  )}
                  {pQRData?.productCodes.length > 1 && (
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
              <div className="group-input ">
        <label>Dosage Form</label>
           <select
             value={pQRData.dosageForm}
             onChange={(e) => {
               setPQRData({ dosageForm: e.target.value });
             }}
           >
             <option value="">Select Dosage Form</option>
             <option value="Oral Solid">Oral Solid</option>
             <option value="Oral Liquid">Oral Liquid</option>
             <option value="Injectables">Injectables</option>
             <option value="Semisolid">Semisolid</option>
           </select>
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
                  />
                </div>
              </div>
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
                {pQRData?.manufacturingStage?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.productName}
                          onChange={(e) => {
                            const newData = [...pQRData.manufacturingStage];
                            newData[index].productName = e.target.value;
                            setPQRData({
                              ...pQRData,
                              manufacturingStage: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.sFGCode}
                          onChange={(e) => {
                            const newData = [...pQRData.manufacturingStage];
                            newData[index].sFGCode = e.target.value;
                            setPQRData({
                              ...pQRData,
                              manufacturingStage: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.fGCode}
                          onChange={(e) => {
                            const newData = [...pQRData.manufacturingStage];
                            newData[index].fGCode = e.target.value;
                            setPQRData({
                              ...pQRData,
                              manufacturingStage: newData,
                            });
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
              <TinyEditor
                editorContent={pQRData.tiny1}
                setEditorContent={setTinyContent}
                tinyNo={1}
              />
            </div>

            <div className="py-4">
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addManufacturingSAPSRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.manufacturingSAPS?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.productName}
                            onChange={(e) => {
                              const newData = [...pQRData.manufacturingSAPS];
                              newData[index].productName = e.target.value;
                              setPQRData({
                                ...pQRData,
                                manufacturingSAPS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchCode}
                            onChange={(e) => {
                              const newData = [...pQRData.manufacturingSAPS];
                              newData[index].batchCode = e.target.value;
                              setPQRData({
                                ...pQRData,
                                manufacturingSAPS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.sFGCode}
                            onChange={(e) => {
                              const newData = [...pQRData.manufacturingSAPS];
                              newData[index].sFGCode = e.target.value;
                              setPQRData({
                                ...pQRData,
                                manufacturingSAPS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input  />
                        </td>
                        <td>
                          <input
                            value={item.remarks}
                            onChange={(e) => {
                              const newData = [...pQRData.manufacturingSAPS];
                              newData[index].remarks = e.target.value;
                              setPQRData({
                                ...pQRData,
                                manufacturingSAPS: newData,
                              });
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
            <TinyEditor
              editorContent={pQRData.tiny2}
              setEditorContent={setTinyContent}
              tinyNo={2}
            />
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
               
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addRawMRSRow} />
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExport
                      data={balanceSheet}
                      fileName="balance-sheet-summary.xlsx"
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
                    {pQRData?.rawMRS?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...pQRData.rawMRS];
                                newData[index].materialCode = e.target.value;
                                setPQRData({ ...pQRData, rawMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...pQRData.rawMRS];
                                newData[index].materialName = e.target.value;
                                setPQRData({ ...pQRData, rawMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...pQRData.rawMRS];
                                newData[index].ARNo = e.target.value;
                                setPQRData({ ...pQRData, rawMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.reasonOfRejection}
                              onChange={(e) => {
                                const newData = [...pQRData.rawMRS];
                                newData[index].reasonOfRejection =
                                  e.target.value;
                                setPQRData({ ...pQRData, rawMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.description}
                              onChange={(e) => {
                                const newData = [...pQRData.rawMRS];
                                newData[index].description = e.target.value;
                                setPQRData({ ...pQRData, rawMRS: newData });
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
                    editorContent={pQRData.tiny3}
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
              
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addPackingMRSRow} />
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExport
                      data={balanceSheet}
                      fileName="balance-sheet-summary.xlsx"
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
                    {pQRData?.packingMRS?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...pQRData.packingMRS];
                                newData[index].materialCode = e.target.value;
                                setPQRData({ ...pQRData, packingMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...pQRData.packingMRS];
                                newData[index].materialName = e.target.value;
                                setPQRData({ ...pQRData, packingMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...pQRData.packingMRS];
                                newData[index].ARNo = e.target.value;
                                setPQRData({ ...pQRData, packingMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.reasonForRepacking}
                              onChange={(e) => {
                                const newData = [...pQRData.packingMRS];
                                newData[index].reasonForRepacking =
                                  e.target.value;
                                setPQRData({ ...pQRData, packingMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.description}
                              onChange={(e) => {
                                const newData = [...pQRData.packingMRS];
                                newData[index].description = e.target.value;
                                setPQRData({ ...pQRData, packingMRS: newData });
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <h5 className="gridName pt-4">
                  Summary of Review of Rejected Raw Materials and Packaging
                  Materials
                </h5>
                <TinyEditor
                  editorContent={pQRData.tiny4}
                  setEditorContent={setTinyContent}
                  tinyNo={4}
                />
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
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExport
                      data={balanceSheet}
                      fileName="balance-sheet-summary.xlsx"
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
                      <th>Expiry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pQRData?.expiredRMD?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...pQRData.expiredRMD];
                                newData[index].materialCode = e.target.value;
                                setPQRData({ ...pQRData, expiredRMD: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...pQRData.expiredRMD];
                                newData[index].materialName = e.target.value;
                                setPQRData({ ...pQRData, expiredRMD: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...pQRData.expiredRMD];
                                newData[index].ARNo = e.target.value;
                                setPQRData({ ...pQRData, expiredRMD: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.expiryDate}
                              onChange={(e) => {
                                const newData = [...pQRData.expiredRMD];
                                newData[index].expiryDate = e.target.value;
                                setPQRData({ ...pQRData, expiredRMD: newData });
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
                  <TinyEditor
                    editorContent={pQRData.tiny5}
                    setEditorContent={setTinyContent}
                    tinyNo={5}
                  />
                </div>
              </div>

              <div className="">
                <h4 className="gridName">
                  Expired Packaging Materials Details
                </h4>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addExpiredPMDRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addExpiredPMDRow} />
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExport
                      data={balanceSheet}
                      fileName="balance-sheet-summary.xlsx"
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
                      <th>Expiry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pQRData?.expiredPMD?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...pQRData.expiredPMD];
                                newData[index].materialCode = e.target.value;
                                setPQRData({ ...pQRData, expiredPMD: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...pQRData.expiredPMD];
                                newData[index].materialName = e.target.value;
                                setPQRData({ ...pQRData, expiredPMD: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...pQRData.expiredPMD];
                                newData[index].ARNo = e.target.value;
                                setPQRData({ ...pQRData, expiredPMD: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.expiryDate}
                              onChange={(e) => {
                                const newData = [...pQRData.expiredPMD];
                                newData[index].expiryDate = e.target.value;
                                setPQRData({ ...pQRData, expiredPMD: newData });
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <h4 className="gridName pt-4">
                  Summary of Review of Expired Raw Materials and Packaging
                  Materials
                </h4>
                <TinyEditor
                  editorContent={pQRData.tiny6}
                  setEditorContent={setTinyContent}
                  tinyNo={6}
                />
              </div>

              <div className="sub-head">Review of Approved Supplier List</div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addreviewOfASLRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addreviewOfASLRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                    {pQRData?.reviewOfASL?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...pQRData.reviewOfASL];
                                newData[index].materialCode = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  reviewOfASL: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...pQRData.reviewOfASL];
                                newData[index].materialName = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  reviewOfASL: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturer}
                              onChange={(e) => {
                                const newData = [...pQRData.reviewOfASL];
                                newData[index].manufacturer = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  reviewOfASL: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.facility}
                              onChange={(e) => {
                                const newData = [...pQRData.reviewOfASL];
                                newData[index].facility = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  reviewOfASL: newData,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="gridName pt-4">
                  Summary of Review of Approved Supplier List
                </h4>
                <TinyEditor
                  editorContent={pQRData.tiny7}
                  setEditorContent={setTinyContent}
                  tinyNo={7}
                />
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
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExport
                      data={balanceSheet}
                      fileName="balance-sheet-summary.xlsx"
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
                    {pQRData?.vendorQDORME?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDORME];
                                newData[index].materialName = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDORME: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDORME];
                                newData[index].materialCode = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDORME: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturerName}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDORME];
                                newData[index].manufacturerName =
                                  e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDORME: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDORME];
                                newData[index].qualificationStatus =
                                  e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDORME: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.remarks}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDORME];
                                newData[index].remarks = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDORME: newData,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="gridName pt-4">
                  Summary of Vendor Qualification Details of Raw Material
                  Excipients
                </h4>
                <TinyEditor
                  editorContent={pQRData.tiny8}
                  setEditorContent={setTinyContent}
                  tinyNo={8}
                />
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
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExport
                      data={balanceSheet}
                      fileName="balance-sheet-summary.xlsx"
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
                    {pQRData?.vendorQDOPPM?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDOPPM];
                                newData[index].materialName = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDOPPM: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDOPPM];
                                newData[index].materialCode = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDOPPM: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturerName}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDOPPM];
                                newData[index].manufacturerName =
                                  e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDOPPM: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDOPPM];
                                newData[index].qualificationStatus =
                                  e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDOPPM: newData,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="gridName pt-4">
                  Summary of Vendor Qualification Details of Primary Packing
                  Materials
                </h4>
                <TinyEditor
                  editorContent={pQRData.tiny9}
                  setEditorContent={setTinyContent}
                  tinyNo={9}
                />
              </div>

              <div className="sub-head">
                Vendor Qualification Details of Process Gases
              </div>
              <div>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addvendorQDPOGRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addvendorQDPOGRow} />
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExport
                      data={balanceSheet}
                      fileName="balance-sheet-summary.xlsx"
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
                    {pQRData?.vendorQDPOG?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              value={item.gasName}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDPOG];
                                newData[index].gasName = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDPOG: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.gasCode}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDPOG];
                                newData[index].gasCode = e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDPOG: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturerName}
                              onChange={(e) => {
                                const newData = [...vendorQDPOG];
                                newData[index].manufacturerName =
                                  e.target.value;
                                setVendorQDPOG(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...pQRData.vendorQDPOG];
                                newData[index].qualificationStatus =
                                  e.target.value;
                                setPQRData({
                                  ...pQRData,
                                  vendorQDPOG: newData,
                                });
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
                <TinyEditor
                  editorContent={pQRData.tiny10}
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
              <div className="group-input">
                <label>Product Description</label>
                <input
                  value={pQRData?.productDescription}
                  onChange={(e) => {
                    setPQRData({ productDescription: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Process Flow</label>
                <input
                  value={pQRData?.processFlow}
                  onChange={(e) => {
                    setPQRData({ processFlow: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="sub-head">Review of all Batches Manufactured</div>

            <div className="dual-group-input">
              <div className="group-input">
                <label>
                  Total No. of batches manufactured during the current review
                  period
                </label>
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
                <TinyEditor
                  editorContent={pQRData.tiny11}
                  setEditorContent={setTinyContent}
                  tinyNo={11}
                />
              </div>

              <div className="group-input">
                <label>Reprocessing Details</label>
                <TinyEditor
                  editorContent={pQRData.tiny12}
                  setEditorContent={setTinyContent}
                  tinyNo={12}
                />
              </div>
              <div className="group-input">
                <label>Microbial Excursion Details</label>
                <TinyEditor
                  editorContent={pQRData.tiny13}
                  setEditorContent={setTinyContent}
                  tinyNo={13}
                />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.codeTCTD?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.codeTCTD];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.existingCode}
                            onChange={(e) => {
                              const newData = [...pQRData.codeTCTD];
                              newData[index].existingCode = e.target.value;
                              setPQRData({ ...pQRData, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.existingMarket}
                            onChange={(e) => {
                              const newData = [...pQRData.codeTCTD];
                              newData[index].existingMarket = e.target.value;
                              setPQRData({ ...pQRData, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.proposedCode}
                            onChange={(e) => {
                              const newData = [...pQRData.codeTCTD];
                              newData[index].proposedCode = e.target.value;
                              setPQRData({ ...pQRData, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.proposedMarket}
                            onChange={(e) => {
                              const newData = [...pQRData.codeTCTD];
                              newData[index].proposedMarket = e.target.value;
                              setPQRData({ ...pQRData, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.transferQuality}
                            onChange={(e) => {
                              const newData = [...pQRData.codeTCTD];
                              newData[index].transferQuality = e.target.value;
                              setPQRData({ ...pQRData, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.refNo}
                            onChange={(e) => {
                              const newData = [...pQRData.codeTCTD];
                              newData[index].refNo = e.target.value;
                              setPQRData({ ...pQRData, codeTCTD: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h4 className="gridName pt-4">
                Summary of Code to Code Transfer Details
              </h4>
              <TinyEditor
                editorContent={pQRData.tiny14}
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
              editorContent={pQRData.tiny15}
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
                  editorContent={pQRData.tiny16}
                  setEditorContent={setTinyContent}
                  tinyNo={16}
                />
              </div>
              <div className="group-input">
                <label>Batch Repacking Details </label>
                <TinyEditor
                  editorContent={pQRData.tiny17}
                  setEditorContent={setTinyContent}
                  tinyNo={17}
                />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  .
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewORCEC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.packingBatchNumber}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewORCEC];
                              newData[index].packingBatchNumber =
                                e.target.value;
                              setPQRData({ ...pQRData, reviewORCEC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.manufacturingBatchNumber}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewORCEC];
                              newData[index].repackingIssuedNumber =
                                e.target.value;
                              setPQRData({ ...pQRData, reviewORCEC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.repackingIssuedNumber}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewORCEC];
                              newData[index].repackingIssuedNumber = e.target.value;
                              setPQRData({ ...pQRData, reviewORCEC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.repackingFor}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewORCEC];
                              newData[index].repackingFor = e.target.value;
                              setPQRData({ ...pQRData, reviewORCEC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.qMS}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewORCEC];
                              newData[index].qMS = e.target.value;
                              setPQRData({ ...pQRData, reviewORCEC: newData });
                            }}
                          />
                        </td>
                        <td>
                          
                          <input
                            value={item.reasonForRepacking}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewORCEC];
                              newData[index].reasonForRepacking =
                                e.target.value;
                              setPQRData({ ...pQRData, reviewORCEC: newData });
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
                editorContent={pQRData.tiny18}
                setEditorContent={setTinyContent}
                tinyNo={18}
              />
            </div>

          

            <h4 className="gridName">CAPA Details</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={capaDetailsRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.capaDetails?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...pQRData.capaDetails];
                              newData[index].ARNo = e.target.value;
                              setPQRData({ ...pQRData, capaDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.capaType}
                            onChange={(e) => {
                              const newData = [...pQRData.capaDetails];
                              newData[index].capaType = e.target.value;
                              setPQRData({ ...pQRData, capaDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.descriptionOfIssue}
                            onChange={(e) => {
                              const newData = [...pQRData.capaDetails];
                              newData[index].descriptionOfIssue =
                                e.target.value;
                              setPQRData({ ...pQRData, capaDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.rootCause}
                            onChange={(e) => {
                              const newData = [...pQRData.capaDetails];
                              newData[index].rootCause = e.target.value;
                              setPQRData({ ...pQRData, capaDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.capaVerification}
                            onChange={(e) => {
                              const newData = [...pQRData.capaDetails];
                              newData[index].capaVerification = e.target.value;
                              setPQRData({ ...pQRData, capaDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            value={item.chooseFile}
                            onChange={(e) => {
                              const newData = [...pQRData.capaDetails];
                              newData[index].chooseFile = e.target.value;
                              setPQRData({ ...pQRData, capaDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.remarks}
                            onChange={(e) => {
                              const newData = [...pQRData.capaDetails];
                              newData[index].remarks = e.target.value;
                              setPQRData({ ...pQRData, capaDetails: newData });
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
              <TinyEditor
                editorContent={pQRData.tiny19}
                setEditorContent={setTinyContent}
                tinyNo={19}
              />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.deviationDetails?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].ARNo = e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.deviationRelatedTo}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].deviationRelatedTo =
                                e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.description}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].description = e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.rootCause}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].rootCause = e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.deviationObservedOn}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].deviationObservedOn =
                                e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.deviationObservedBy}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].deviationObservedBy =
                                e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.classificationOfDeviation}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].classificationOfDeviation =
                                e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            value={item.fileAttachment}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].fileAttachment = e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={item.remarks}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].remarks = e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={item.status}
                            onChange={(e) => {
                              const newData = [...pQRData.deviationDetails];
                              newData[index].status = e.target.value;
                              setPQRData({
                                ...pQRData,
                                deviationDetails: newData,
                              });
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
                editorContent={pQRData.tiny20}
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
              editorContent={pQRData.tiny21}
              setEditorContent={setTinyContent}
              tinyNo={21}
            />

            <h4 className="gridName">OOS Details</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={oosDetailsRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
                  />
                </div>
              </div>
              <table className="mb-4">
                <thead>
                  <tr>
                    <th rowSpan={2}>AR No.</th>
                    <th rowSpan={2}>Test Name Of OOS</th>
                    <th rowSpan={2}>Results Obtained</th>
                    <th>Specification Limit</th>
                    <th rowSpan={2}>Details of Obvious error</th>
                    <th>File Attachment</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.oosDetails?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...pQRData.oosDetails];
                              newData[index].ARNo = e.target.value;
                              setPQRData({ ...pQRData, oosDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfOos}
                            onChange={(e) => {
                              const newData = [...pQRData.oosDetails];
                              newData[index].testNameOfOos = e.target.value;
                              setPQRData({ ...pQRData, oosDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...pQRData.oosDetails];
                              newData[index].resultsObtained = e.target.value;
                              setPQRData({ ...pQRData, oosDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...pQRData.oosDetails];
                              newData[index].specificationLimit =
                                e.target.value;
                              setPQRData({ ...pQRData, oosDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.detailsOfObviousError}
                            onChange={(e) => {
                              const newData = [...pQRData.oosDetails];
                              newData[index].detailsOfObviousError =
                                e.target.value;
                              setPQRData({ ...pQRData, oosDetails: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            value={item.fileAttachment}
                            onChange={(e) => {
                              const newData = [...pQRData.oosDetails];
                              newData[index].fileAttachment = e.target.value;
                              setPQRData({ ...pQRData, oosDetails: newData });
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
                editorContent={pQRData.tiny22}
                setEditorContent={setTinyContent}
                tinyNo={22}
              />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.ootResults?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...pQRData.ootResults];
                              newData[index].ARNo = e.target.value;
                              setPQRData({ ...pQRData, ootResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfOot}
                            onChange={(e) => {
                              const newData = [...pQRData.ootResults];
                              newData[index].testNameOfOot = e.target.value;
                              setPQRData({ ...pQRData, ootResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...pQRData.ootResults];
                              newData[index].resultsObtained = e.target.value;
                              setPQRData({ ...pQRData, ootResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initialIntervalDetails}
                            onChange={(e) => {
                              const newData = [...pQRData.ootResults];
                              newData[index].initialIntervalDetails =
                                e.target.value;
                              setPQRData({ ...pQRData, ootResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.previousIntervalDetails}
                            onChange={(e) => {
                              const newData = [...pQRData.ootResults];
                              newData[index].previousIntervalDetails =
                                e.target.value;
                              setPQRData({ ...pQRData, ootResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.diffrenceOfResult}
                            onChange={(e) => {
                              const newData = [...pQRData.ootResults];
                              newData[index].diffrenceOfResultrence =
                                e.target.value;
                              setPQRData({ ...pQRData, ootResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.trendLimit}
                            onChange={(e) => {
                              const newData = [...pQRData.ootResults];
                              newData[index].trendLimit = e.target.value;
                              setPQRData({ ...pQRData, ootResults: newData });
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
                editorContent={pQRData.tiny23}
                setEditorContent={setTinyContent}
                tinyNo={23}
              />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.ooaResults?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...pQRData.ooaResults];
                              newData[index].ARNo = e.target.value;
                              setPQRData({ ...pQRData, ooaResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfAlert}
                            onChange={(e) => {
                              const newData = [...pQRData.ooaResults];
                              newData[index].testNameOfAlert = e.target.value;
                              setPQRData({ ...pQRData, ooaResults: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...pQRData.ooaResults];
                              newData[index].resultsObtained = e.target.value;
                              setPQRData({ ...pQRData, ooaResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initialIntervalDetails}
                            onChange={(e) => {
                              const newData = [...pQRData.ooaResults];
                              newData[index].initialIntervalDetails =
                                e.target.value;
                              setPQRData({ ...pQRData, ooaResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.previousIntervalDetails}
                            onChange={(e) => {
                              const newData = [...pQRData.ooaResults];
                              newData[index].previousIntervalDetails =
                                e.target.value;
                              setPQRData({ ...pQRData, ooaResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.diffrenceOfResult}
                            onChange={(e) => {
                              const newData = [...pQRData.ooaResults];
                              newData[index].diffrenceOfResult = e.target.value;
                              setPQRData({ ...pQRData, ooaResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.trendLimit}
                            onChange={(e) => {
                              const newData = [...pQRData.ooaResults];
                              newData[index].trendLimit = e.target.value;
                              setPQRData({ ...pQRData, ooaResults: newData });
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
                editorContent={pQRData.tiny24}
                setEditorContent={setTinyContent}
                tinyNo={24}
              />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.oolResults?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...pQRData.oolResults];
                              newData[index].ARNo = e.target.value;
                              setPQRData({ ...pQRData, oolResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfAlert}
                            onChange={(e) => {
                              const newData = [...pQRData.oolResults];
                              newData[index].testNameOfAlert = e.target.value;
                              setPQRData({ ...pQRData, oolResults: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...pQRData.oolResults];
                              newData[index].resultsObtained = e.target.value;
                              setPQRData({ ...pQRData, oolResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initialIntervalDetails}
                            onChange={(e) => {
                              const newData = [...pQRData.oolResults];
                              newData[index].initialIntervalDetails =
                                e.target.value;
                              setPQRData({ ...pQRData, oolResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.previousIntervalDetails}
                            onChange={(e) => {
                              const newData = [...pQRData.oolResults];
                              newData[index].previousIntervalDetails =
                                e.target.value;
                              setPQRData({ ...pQRData, oolResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.diffrenceOfResult}
                            onChange={(e) => {
                              const newData = [...pQRData.oolResults];
                              newData[index].diffrenceOfResult = e.target.value;
                              setPQRData({ ...pQRData, oolResults: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.trendLimit}
                            onChange={(e) => {
                              const newData = [...pQRData.oolResults];
                              newData[index].trendLimit = e.target.value;
                              setPQRData({ ...pQRData, oolResults: newData });
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
                editorContent={pQRData.tiny25}
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
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addBufferFSDPVRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
                  />
                </div>
              </div>
              <table className="mb-4">
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
                  {pQRData?.bufferFSDPV?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.criticalProcessParameter}
                            onChange={(e) => {
                              const newData = [...pQRData.bufferFSDPV];
                              newData[index].criticalProcessParameter =
                                e.target.value;
                              setPQRData({ ...pQRData, bufferFSDPV: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.codes}
                            onChange={(e) => {
                              const newData = [...pQRData.bufferFSDPV];
                              newData[index].codes = e.target.value;
                              setPQRData({ ...pQRData, bufferFSDPV: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.acceptanceCriteria}
                            onChange={(e) => {
                              const newData = [...pQRData.bufferFSDPV];
                              newData[index].acceptanceCriteria =
                                e.target.value;
                              setPQRData({ ...pQRData, bufferFSDPV: newData });
                            }}
                          />
                        </td>
                       
                        <td>
                          <input
                            value={item.results.minimum}
                            onChange={(e) => {
                              const newData = [...pQRData.bufferFSDPV];
                              newData[index].results.minimum = e.target.value;
                              setPQRData({ ...pQRData, bufferFSDPV: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.results.maximum}
                            onChange={(e) => {
                              const newData = [...pQRData.bufferFSDPV];
                              newData[index].results.maximum = e.target.value;
                              setPQRData({ ...pQRData, bufferFSDPV: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...pQRData.bufferFSDPV];
                              newData[index].compliesNotComplies = e.target.value;
                              setPQRData({ ...pQRData, bufferFSDPV: newData });
                            }}
                          />
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
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
                </div>
              </div>
              <div className="flex gap-4 ">
                <ExcelExport
                  data={balanceSheet}
                  fileName="balance-sheet-summary.xlsx"
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
                {pQRData?.manufacturingSD?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...pQRData.manufacturingSD];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setPQRData({
                              ...pQRData,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...pQRData.manufacturingSD];
                            newData[index].codes = e.target.value;
                            setPQRData({
                              ...pQRData,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...pQRData.manufacturingSD];
                            newData[index].acceptanceCriteria = e.target.value;
                            setPQRData({
                              ...pQRData,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>
                     
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.manufacturingSD];
                            newData[index].results.minimum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.manufacturingSD];
                            newData[index].results.maximum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.manufacturingSD];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({
                              ...pQRData,
                              manufacturingSD: newData,
                            });
                          }}
                        />
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
                {pQRData?.unitOperation3?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation3];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setPQRData({ ...pQRData, unitOperation3: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation3];
                            newData[index].codes = e.target.value;
                            setPQRData({ ...pQRData, unitOperation3: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation3];
                            newData[index].acceptanceCriteria = e.target.value;
                            setPQRData({ ...pQRData, unitOperation3: newData });
                          }}
                        />
                      </td>
                    
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation3];
                            newData[index].results.minimum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation3: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation3];
                            newData[index].results.maximum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation3: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation3];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({ ...pQRData, unitOperation3: newData });
                          }}
                        />
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
                {pQRData?.unitOperation4?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation4];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setPQRData({ ...pQRData, unitOperation4: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation4];
                            newData[index].codes = e.target.value;
                            setPQRData({ ...pQRData, unitOperation4: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation4];
                            newData[index].acceptanceCriteria = e.target.value;
                            setPQRData({ ...pQRData, unitOperation4: newData });
                          }}
                        />
                      </td>
                     
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation4];
                            newData[index].results.minimum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation4: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation4];
                            newData[index].results.maximum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation4: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation4];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({ ...pQRData, unitOperation4: newData });
                          }}
                        />
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
                {pQRData?.unitOperation5?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation5];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setPQRData({ ...pQRData, unitOperation5: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation5];
                            newData[index].codes = e.target.value;
                            setPQRData({ ...pQRData, unitOperation5: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation5];
                            newData[index].acceptanceCriteria = e.target.value;
                            setPQRData({ ...pQRData, unitOperation5: newData });
                          }}
                        />
                      </td>
                    
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation5];
                            newData[index].results.minimum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation5: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation5];
                            newData[index].results.maximum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation5: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation5];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({ ...pQRData, unitOperation5: newData });
                          }}
                        />
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
                {pQRData?.unitOperation6?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation6];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setPQRData({ ...pQRData, unitOperation6: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation6];
                            newData[index].codes = e.target.value;
                            setPQRData({ ...pQRData, unitOperation6: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation6];
                            newData[index].acceptanceCriteria = e.target.value;
                            setPQRData({ ...pQRData, unitOperation6: newData });
                          }}
                        />
                      </td>
                     
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation6];
                            newData[index].results.minimum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation6: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation6];
                            newData[index].results.maximum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation6: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation6];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({ ...pQRData, unitOperation6: newData });
                          }}
                        />
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
                {pQRData?.unitOperation7?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation7];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setPQRData({ ...pQRData, unitOperation7: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation7];
                            newData[index].codes = e.target.value;
                            setPQRData({ ...pQRData, unitOperation7: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation7];
                            newData[index].acceptanceCriteria = e.target.value;
                            setPQRData({ ...pQRData, unitOperation7: newData });
                          }}
                        />
                      </td>
                     
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation7];
                            newData[index].results.minimum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation7: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation7];
                            newData[index].results.maximum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation7: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation7];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({ ...pQRData, unitOperation7: newData });
                          }}
                        />
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
                {pQRData?.unitOperation8?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation8];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setPQRData({ ...pQRData, unitOperation8: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation8];
                            newData[index].codes = e.target.value;
                            setPQRData({ ...pQRData, unitOperation8: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation8];
                            newData[index].acceptanceCriteria = e.target.value;
                            setPQRData({ ...pQRData, unitOperation8: newData });
                          }}
                        />
                      </td>
                      
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation8];
                            newData[index].results.minimum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation8: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation8];
                            newData[index].results.maximum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation8: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation8];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({ ...pQRData, unitOperation8: newData });
                          }}
                        />
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
                {pQRData?.unitOperation9?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation9];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setPQRData({ ...pQRData, unitOperation9: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation9];
                            newData[index].codes = e.target.value;
                            setPQRData({ ...pQRData, unitOperation9: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation9];
                            newData[index].acceptanceCriteria = e.target.value;
                            setPQRData({ ...pQRData, unitOperation9: newData });
                          }}
                        />
                      </td>
                    
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation9];
                            newData[index].results.minimum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation9: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation9];
                            newData[index].results.maximum = e.target.value;
                            setPQRData({ ...pQRData, unitOperation9: newData });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation9];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({ ...pQRData, unitOperation9: newData });
                          }}
                        />
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
                {pQRData?.unitOperation10?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation10];
                            newData[index].criticalProcessParameter =
                              e.target.value;
                            setPQRData({
                              ...pQRData,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation10];
                            newData[index].codes = e.target.value;
                            setPQRData({
                              ...pQRData,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation10];
                            newData[index].acceptanceCriteria = e.target.value;
                            setPQRData({
                              ...pQRData,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>
                  
                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation10];
                            newData[index].results.minimum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation10];
                            newData[index].results.maximum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.unitOperation10];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({
                              ...pQRData,
                              unitOperation10: newData,
                            });
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
              {/* <input placeholder="please insert flex" /> */}
              <TinyEditor
                editorContent={pQRData.tiny26}
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
            <h1 className="gridName">Paracetamol pH Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODSTRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                  <th>Batch No</th>
                    <th>Tests parameter</th>
                    <th>LSL</th>
                    <th>USL</th>
                    <th>LCL</th>
                    <th>UCL</th>
                    <th>Observed Value</th>
                    <th>Complies/Does Not complies</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.reviewODSTR?.map((item, index) => {
                    return (
                      <tr key={index}>
                      
                        <input 
                          value={item.batchNo}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR];
                          newData[index].batchNo = e.target.value;
                          setPQRData({...pQRData,reviewODSTR:newData});
                        }}
                      />
                        <td>
                          <input 
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewODSTR];
                              newData[index].testsParameter = e.target.value;
                              setPQRData({
                                ...pQRData,
                                reviewODSTR: newData,
                              });
                            }} />
                        </td>
                        <td>
                          <input 
                           value={item.LSL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR];
                             newData[index].LSL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR: newData,
                             });
                           }}
                          />
                        </td>
                        <td>
                          <input 
                           value={item.USL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR];
                             newData[index].USL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR: newData,
                             });
                           }}
                          />
                        </td> <td>
                          <input 
                           value={item.LCL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR];
                             newData[index].LCL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR: newData,
                             });
                           }}
                          />
                        </td>
                        <td>
                          <input 
                           value={item.UCL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR];
                             newData[index].UCL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR: newData,
                             });
                           }}
                          />
                        </td>
                        <td>
                          <input 
                           value={item.observedValue}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR];
                             newData[index].observedValue = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR: newData,
                             });
                           }}
                          />
                        </td>

                        <td>
                          <input 
                           value={item.compliesNotComplies}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR];
                             newData[index].compliesNotComplies = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR: newData,
                             });
                           }} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              
            </div>
             <HighchartsChart
          heading={"Paracetamol pH Graph"}
          xHeading={"Batch No."}
          yHeading={"Observed Value"}
          yMax={6}
          yMin={0}
          yTickInterval={0.4}
          plotLines={ParacetamolpHPlotLines}
          zones={paracetamolpHZones}
          annotations={paracetamolAnnotations}
          highchartData={paracetamolpHData}
         /> 
            <h1 className="gridName  pt-8">Drug Substance 2 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow2} />
                  <div className="addrowinstruction pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                  <th>Batch No</th>
                    <th>Tests parameter</th>
                    <th>LSL</th>
                    <th>USL</th>
                    <th>LCL</th>
                    <th>UCL</th>
                    <th>Observed Value</th>
                    <th>Complies/Does Not complies</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.reviewODSTR2?.map((item, index) => {
                    return (
                      <tr key={index}>
                         <input 
                          value={item.batchNo}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR2];
                          newData[index].batchNo = e.target.value;
                          setPQRData({...pQRData,reviewODSTR2:newData});
                        }}
                      />
                        <td>
                          <input 
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewODSTR2];
                              newData[index].testsParameter = e.target.value;
                              setPQRData({
                                ...pQRData,
                                reviewODSTR2: newData,
                              });
                            }} />
                        </td>
                        <td>
                          <input 
                           value={item.LSL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR2];
                             newData[index].LSL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR2: newData,
                             });
                           }}
                          />
                        </td>
                        <td>
                          <input 
                           value={item.USL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR2];
                             newData[index].USL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR2: newData,
                             });
                           }}
                          />
                        </td> <td>
                          <input 
                           value={item.LCL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR2];
                             newData[index].LCL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR2: newData,
                             });
                           }}
                          />
                        </td>
                        <td>
                          <input 
                           value={item.UCL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR2];
                             newData[index].UCL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR2: newData,
                             });
                           }}
                          />
                        </td>
                        <td>
                          <input 
                           value={item.observedValue}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR2];
                             newData[index].observedValue = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR2: newData,
                             });
                           }}
                          />
                        </td>

                        <td>
                          <input 
                           value={item.compliesNotComplies}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR2];
                             newData[index].compliesNotComplies = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR2: newData,
                             });
                           }} />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                  <th>Batch No</th>
                    <th>Tests parameter</th>
                    <th>LSL</th>
                    <th>USL</th>
                    <th>LCL</th>
                    <th>UCL</th>
                    <th>Observed Value</th>
                    <th>Complies/Does Not complies</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.reviewODSTR3?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <input 
                       value={item.batchNo}
                       onChange={(e) => {
                       const newData = [...pQRData.reviewODSTR3];
                       newData[index].batchNo = e.target.value;
                       setPQRData({...pQRData,reviewODSTR3:newData});
                     }}
                   />
                     <td>
                       <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewODSTR3];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewODSTR3: newData,
                           });
                         }} />
                     </td>
                     <td>
                       <input 
                        value={item.LSL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR3];
                          newData[index].LSL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR3: newData,
                          });
                        }}
                       />
                     </td>
                     <td>
                       <input 
                        value={item.USL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR3];
                          newData[index].USL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR3: newData,
                          });
                        }}
                       />
                     </td> <td>
                       <input 
                        value={item.LCL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR3];
                          newData[index].LCL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR3: newData,
                          });
                        }}
                       />
                     </td>
                     <td>
                       <input 
                        value={item.UCL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR3];
                          newData[index].UCL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR3: newData,
                          });
                        }}
                       />
                     </td>
                     <td>
                       <input 
                        value={item.observedValue}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR3];
                          newData[index].observedValue = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR3: newData,
                          });
                        }}
                       />
                     </td>

                     <td>
                       <input 
                        value={item.compliesNotComplies}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR3];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR3: newData,
                          });
                        }} />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                  <th>Batch No</th>
                    <th>Tests parameter</th>
                    <th>LSL</th>
                    <th>USL</th>
                    <th>LCL</th>
                    <th>UCL</th>
                    <th>Observed Value</th>
                    <th>Complies/Does Not complies</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.reviewODSTR4?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <input 
                       value={item.batchNo}
                       onChange={(e) => {
                       const newData = [...pQRData.reviewODSTR4];
                       newData[index].batchNo = e.target.value;
                       setPQRData({...pQRData,reviewODSTR4:newData});
                     }}
                   />
                     <td>
                       <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewODSTR4];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewODSTR4: newData,
                           });
                         }} />
                     </td>
                     <td>
                       <input 
                        value={item.LSL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR4];
                          newData[index].LSL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR4: newData,
                          });
                        }}
                       />
                     </td>
                     <td>
                       <input 
                        value={item.USL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR4];
                          newData[index].USL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR4: newData,
                          });
                        }}
                       />
                     </td> <td>
                       <input 
                        value={item.LCL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR4];
                          newData[index].LCL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR4: newData,
                          });
                        }}
                       />
                     </td>
                     <td>
                       <input 
                        value={item.UCL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR4];
                          newData[index].UCL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR4: newData,
                          });
                        }}
                       />
                     </td>
                     <td>
                       <input 
                        value={item.observedValue}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR4];
                          newData[index].observedValue = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR4: newData,
                          });
                        }}
                       />
                     </td>

                     <td>
                       <input 
                        value={item.compliesNotComplies}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR4];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR4: newData,
                          });
                        }} />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                <tr>
                  <th>Batch No</th>
                    <th>Tests parameter</th>
                    <th>LSL</th>
                    <th>USL</th>
                    <th>LCL</th>
                    <th>UCL</th>
                    <th>Observed Value</th>
                    <th>Complies/Does Not complies</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.reviewODSTR5?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <input 
                       value={item.batchNo}
                       onChange={(e) => {
                       const newData = [...pQRData.reviewODSTR5];
                       newData[index].batchNo = e.target.value;
                       setPQRData({...pQRData,reviewODSTR5:newData});
                     }}
                   />
                     <td>
                       <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewODSTR5];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewODSTR5: newData,
                           });
                         }} />
                     </td>
                     <td>
                       <input 
                        value={item.LSL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR5];
                          newData[index].LSL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR5: newData,
                          });
                        }}
                       />
                     </td>
                     <td>
                       <input 
                        value={item.USL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR5];
                          newData[index].USL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR5: newData,
                          });
                        }}
                       />
                     </td> <td>
                       <input 
                        value={item.LCL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR5];
                          newData[index].LCL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR5: newData,
                          });
                        }}
                       />
                     </td>
                     <td>
                       <input 
                        value={item.UCL}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR5];
                          newData[index].UCL = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR5: newData,
                          });
                        }}
                       />
                     </td>
                     <td>
                       <input 
                        value={item.observedValue}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR5];
                          newData[index].observedValue = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR5: newData,
                          });
                        }}
                       />
                     </td>

                     <td>
                       <input 
                        value={item.compliesNotComplies}
                        onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR5];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({
                            ...pQRData,
                            reviewODSTR5: newData,
                          });
                        }} />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                <tr>
                  <th>Batch No</th>
                    <th>Tests parameter</th>
                    <th>LSL</th>
                    <th>USL</th>
                    <th>LCL</th>
                    <th>UCL</th>
                    <th>Observed Value</th>
                    <th>Complies/Does Not complies</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.reviewODSTR6?.map((item, index) => {
                    return (
                      <tr key={index}>
                         <input 
                          value={item.batchNo}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODSTR6];
                          newData[index].batchNo = e.target.value;
                          setPQRData({...pQRData,reviewODSTR6:newData});
                        }}
                      />
                        <td>
                          <input 
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewODSTR6];
                              newData[index].testsParameter = e.target.value;
                              setPQRData({
                                ...pQRData,
                                reviewODSTR6: newData,
                              });
                            }} />
                        </td>
                        <td>
                          <input 
                           value={item.LSL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR6];
                             newData[index].LSL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR6: newData,
                             });
                           }}
                          />
                        </td>
                        <td>
                          <input 
                           value={item.USL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR6];
                             newData[index].USL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR6: newData,
                             });
                           }}
                          />
                        </td> <td>
                          <input 
                           value={item.LCL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR6];
                             newData[index].LCL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR6: newData,
                             });
                           }}
                          />
                        </td>
                        <td>
                          <input 
                           value={item.UCL}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR6];
                             newData[index].UCL = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR6: newData,
                             });
                           }}
                          />
                        </td>
                        <td>
                          <input 
                           value={item.observedValue}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR6];
                             newData[index].observedValue = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR6: newData,
                             });
                           }}
                          />
                        </td>

                        <td>
                          <input 
                           value={item.compliesNotComplies}
                           onChange={(e) => {
                             const newData = [...pQRData.reviewODSTR6];
                             newData[index].compliesNotComplies = e.target.value;
                             setPQRData({
                               ...pQRData,
                               reviewODSTR6: newData,
                             });
                           }} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 7 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow7} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODSTR7?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewODSTR7];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewODSTR7: newData,
                           });
                         }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR7];
                            newData[index].specificationLimit = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR7: newData,
                            });
                          }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR7];
                            newData[index].obtainedValue.minimum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR7: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR7];
                            newData[index].obtainedValue.maximum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR7: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR7];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR7: newData,
                            });
                          }}/>
                      </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 8 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow8} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODSTR8?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewODSTR8];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewODSTR8: newData,
                           });
                         }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR8];
                            newData[index].specificationLimit = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR8: newData,
                            });
                          }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR8];
                            newData[index].obtainedValue.minimum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR8: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR8];
                            newData[index].obtainedValue.maximum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR8: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR8];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR8: newData,
                            });
                          }}/>
                      </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <h1 className="gridName pt-8">Drug Substance 9 Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow9} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODSTR9?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewODSTR9];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewODSTR9: newData,
                           });
                         }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR9];
                            newData[index].specificationLimit = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR9: newData,
                            });
                          }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR9];
                            newData[index].obtainedValue.minimum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR9: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR9];
                            newData[index].obtainedValue.maximum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR9: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR9];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR9: newData,
                            });
                          }}/>
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODSTR10?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewODSTR10];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewODSTR10: newData,
                           });
                         }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR10];
                            newData[index].specificationLimit = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR10: newData,
                            });
                          }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR10];
                            newData[index].obtainedValue.minimum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR10: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR10];
                            newData[index].obtainedValue.maximum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR10: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODSTR10];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODSTR10: newData,
                            });
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
              <TinyEditor
                editorContent={pQRData.tiny27}
                setEditorContent={setTinyContent}
                tinyNo={27}
              />
            </div>
            <div className="sub-head">
              Review of Raw Material Excipient Test Results
            </div>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewORMETRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewORMETRRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewORMETR?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewORMETR];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewORMETR: newData,
                           });
                         }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewORMETR];
                            newData[index].specificationLimit = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewORMETR: newData,
                            });
                          }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewORMETR];
                            newData[index].obtainedValue.minimum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewORMETR: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewORMETR];
                            newData[index].obtainedValue.maximum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewORMETR: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewORMETR];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewORMETR: newData,
                            });
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
              <TinyEditor
                editorContent={pQRData.tiny28}
                setEditorContent={setTinyContent}
                tinyNo={28}
              />
            </div>
            <div className="sub-head">
              Review of Packing Material Test Results
            </div>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addreviewOPMTRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addreviewOPMTRRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.reviewOPMTR?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewOPMTR];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewOPMTR: newData,
                           });
                         }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewOPMTR];
                            newData[index].specificationLimit = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewOPMTR: newData,
                            });
                          }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewOPMTR];
                            newData[index].obtainedValue.minimum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewOPMTR: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewOPMTR];
                            newData[index].obtainedValue.maximum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewOPMTR: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewOPMTR];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewOPMTR: newData,
                            });
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
              <TinyEditor
                editorContent={pQRData.tiny29}
                setEditorContent={setTinyContent}
                tinyNo={29}
              />
            </div>
            <div className="sub-head">
              Review of Drug Product – In process Test Results
            </div>
            <h4 className="gridName pt-2">Dilution Buffer 1 - Test Results</h4>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP?.map((item, index) => {
                    return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <input 
                         value={item.testsParameter}
                         onChange={(e) => {
                           const newData = [...pQRData.reviewODP];
                           newData[index].testsParameter = e.target.value;
                           setPQRData({
                             ...pQRData,
                             reviewODP: newData,
                           });
                         }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODP];
                            newData[index].specificationLimit = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODP: newData,
                            });
                          }} 
                        />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODP];
                            newData[index].obtainedValue.minimum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODP: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODP];
                            newData[index].obtainedValue.maximum = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODP: newData,
                            });
                          }} />
                      </td>
                      <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...pQRData.reviewODP];
                            newData[index].compliesNotComplies = e.target.value;
                            setPQRData({
                              ...pQRData,
                              reviewODP: newData,
                            });
                          }}/>
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP2?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                        <input 
                          value={item.testsParameter}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP2];
                          newData[index].testsParameter = e.target.value;
                          setPQRData({...pQRData,reviewODP2:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP2];
                          newData[index]. specificationLimit = e.target.value;
                          setPQRData({...pQRData,reviewODP2:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.stage}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP2];
                          newData[index].stage = e.target.value;
                          setPQRData({...pQRData,reviewODP2:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP2];
                          newData[index].obtainedValue.minimum = e.target.value;
                          setPQRData({...pQRData,reviewODP2:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP2];
                          newData[index].obtainedValue.maximum = e.target.value;
                          setPQRData({...pQRData,reviewODP2:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP2];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({...pQRData,reviewODP2:newData});
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP3?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                        <input 
                          value={item.testsParameter}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP3];
                          newData[index].testsParameter = e.target.value;
                          setPQRData({...pQRData,reviewODP3:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP3];
                          newData[index]. specificationLimit = e.target.value;
                          setPQRData({...pQRData,reviewODP3:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.stage}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP3];
                          newData[index].stage = e.target.value;
                          setPQRData({...pQRData,reviewODP3:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP3];
                          newData[index].obtainedValue.minimum = e.target.value;
                          setPQRData({...pQRData,reviewODP3:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP3];
                          newData[index].obtainedValue.maximum = e.target.value;
                          setPQRData({...pQRData,reviewODP3:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP3];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({...pQRData,reviewODP3:newData});
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP4?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                        <input 
                          value={item.testsParameter}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP4];
                          newData[index].testsParameter = e.target.value;
                          setPQRData({...pQRData,reviewODP4:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP4];
                          newData[index]. specificationLimit = e.target.value;
                          setPQRData({...pQRData,reviewODP4:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.stage}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP4];
                          newData[index].stage = e.target.value;
                          setPQRData({...pQRData,reviewODP4:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP4];
                          newData[index].obtainedValue.minimum = e.target.value;
                          setPQRData({...pQRData,reviewODP4:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP4];
                          newData[index].obtainedValue.maximum = e.target.value;
                          setPQRData({...pQRData,reviewODP4:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP4];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({...pQRData,reviewODP4:newData});
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP5?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                        <input 
                          value={item.testsParameter}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP5];
                          newData[index].testsParameter = e.target.value;
                          setPQRData({...pQRData,reviewODP5:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP5];
                          newData[index]. specificationLimit = e.target.value;
                          setPQRData({...pQRData,reviewODP5:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.stage}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP5];
                          newData[index].stage = e.target.value;
                          setPQRData({...pQRData,reviewODP5:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP5];
                          newData[index].obtainedValue.minimum = e.target.value;
                          setPQRData({...pQRData,reviewODP5:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP5];
                          newData[index].obtainedValue.maximum = e.target.value;
                          setPQRData({...pQRData,reviewODP5:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP5];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({...pQRData,reviewODP5:newData});
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP6?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                        <input 
                          value={item.testsParameter}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP6];
                          newData[index].testsParameter = e.target.value;
                          setPQRData({...pQRData,reviewODP6:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP6];
                          newData[index]. specificationLimit = e.target.value;
                          setPQRData({...pQRData,reviewODP6:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.stage}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP6];
                          newData[index].stage = e.target.value;
                          setPQRData({...pQRData,reviewODP6:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP6];
                          newData[index].obtainedValue.minimum = e.target.value;
                          setPQRData({...pQRData,reviewODP6:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP6];
                          newData[index].obtainedValue.maximum = e.target.value;
                          setPQRData({...pQRData,reviewODP6:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP6];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({...pQRData,reviewODP6:newData});
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP7?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                        <input 
                          value={item.testsParameter}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP7];
                          newData[index].testsParameter = e.target.value;
                          setPQRData({...pQRData,reviewODP7:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP7];
                          newData[index]. specificationLimit = e.target.value;
                          setPQRData({...pQRData,reviewODP7:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.stage}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP7];
                          newData[index].stage = e.target.value;
                          setPQRData({...pQRData,reviewODP7:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP7];
                          newData[index].obtainedValue.minimum = e.target.value;
                          setPQRData({...pQRData,reviewODP7:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP7];
                          newData[index].obtainedValue.maximum = e.target.value;
                          setPQRData({...pQRData,reviewODP7:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP7];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({...pQRData,reviewODP7:newData});
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP8?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                        <input 
                          value={item.testsParameter}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP8];
                          newData[index].testsParameter = e.target.value;
                          setPQRData({...pQRData,reviewODP8:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP8];
                          newData[index]. specificationLimit = e.target.value;
                          setPQRData({...pQRData,reviewODP8:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.stage}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP8];
                          newData[index].stage = e.target.value;
                          setPQRData({...pQRData,reviewODP8:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP8];
                          newData[index].obtainedValue.minimum = e.target.value;
                          setPQRData({...pQRData,reviewODP8:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP8];
                          newData[index].obtainedValue.maximum = e.target.value;
                          setPQRData({...pQRData,reviewODP8:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP8];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({...pQRData,reviewODP8:newData});
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP9?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                        <input 
                          value={item.testsParameter}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP9];
                          newData[index].testsParameter = e.target.value;
                          setPQRData({...pQRData,reviewODP9:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.specificationLimit}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP9];
                          newData[index]. specificationLimit = e.target.value;
                          setPQRData({...pQRData,reviewODP9:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.stage}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP9];
                          newData[index].stage = e.target.value;
                          setPQRData({...pQRData,reviewODP9:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.minimum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP9];
                          newData[index].obtainedValue.minimum = e.target.value;
                          setPQRData({...pQRData,reviewODP9:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.obtainedValue.maximum}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP9];
                          newData[index].obtainedValue.maximum = e.target.value;
                          setPQRData({...pQRData,reviewODP9:newData});
                        }}
                      />
                        </td>
                        <td>
                        <input 
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                          const newData = [...pQRData.reviewODP9];
                          newData[index].compliesNotComplies = e.target.value;
                          setPQRData({...pQRData,reviewODP9 :newData});
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODP10?.map((item, index) => {
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
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...reviewODPFPTR];
                              newData[index].testsParameter = e.target.value;
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
                editorContent={pQRData.tiny30}
                setEditorContent={setTinyContent}
                tinyNo={30}
              />
            </div>
            <div className="sub-head">
              Review of Drug Product –Finished Product Test Results
            </div>
            <div>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPFPTRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODPFPTRRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.reviewODPFPTR?.map((item, index) => {
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
                editorContent={pQRData.tiny31}
                setEditorContent={setTinyContent}
                tinyNo={31}
              />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.summaryOOSS?.map((item, index) => {
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
                              newData[index].stabilityProtocolNo =
                                e.target.value;
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
                <TinyEditor
                  editorContent={pQRData.tiny32}
                  setEditorContent={setTinyContent}
                  tinyNo={32}
                />
              </div>

              <h4 className="gridName pt-4">Stability Study Related OOS/OOT</h4>
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addStabilitySRRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addStabilitySRRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.stabilitySR?.map((item, index) => {
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
                              newData[index].testingIntervalMonths =
                                e.target.value;
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
              <TinyEditor
                editorContent={pQRData.tiny33}
                setEditorContent={setTinyContent}
                tinyNo={33}
              />

              <div className="sub-head">
                Review of Visual Inspection – Reserve Samples
              </div>
              <div>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addreviewOVIRSRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addreviewOVIRSRow} />
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExport
                      data={balanceSheet}
                      fileName="balance-sheet-summary.xlsx"
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
                    {pQRData?.reviewOVIRS?.map((item, index) => {
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
                editorContent={pQRData.tiny34}
                setEditorContent={setTinyContent}
                tinyNo={34}
              />
              <h4 className="gridName pt-4">
                Review of Analytical Method Validations
              </h4>
              <TinyEditor
                editorContent={pQRData.tiny35}
                setEditorContent={setTinyContent}
                tinyNo={35}
              />
              <h4 className="gridName pt-4">
                Review of Contract Testing Laboratories
              </h4>
              <TinyEditor
                editorContent={pQRData.tiny36}
                setEditorContent={setTinyContent}
                tinyNo={36}
              />
              <h4 className="gridName pt-4">
                Review of Environmental Monitoring Trend and water trends
                Reports
              </h4>
              <TinyEditor
                editorContent={pQRData.tiny37}
                setEditorContent={setTinyContent}
                tinyNo={37}
              />
              <h4 className="gridName pt-4">Laboratory Review Summary</h4>
              <TinyEditor
                editorContent={pQRData.tiny38}
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
              editorContent={pQRData.tiny39}
              setEditorContent={setTinyContent}
              tinyNo={39}
            />
            <h4 className="gridName pt-4"> Qualification details</h4>
            <TinyEditor
              editorContent={pQRData.tiny40}
              setEditorContent={setTinyContent}
              tinyNo={40}
            />
            <h4 className="gridName pt-4"> Calibration Details</h4>
            <TinyEditor
              editorContent={pQRData.tiny41}
              setEditorContent={setTinyContent}
              tinyNo={41}
            />

            <div className="sub-head">HVAC Qualification Status</div>
            <div>
              {/* <div className="AddRows">
                <MdNoteAdd onClick={addHVACQStatusRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addHVACQStatusRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.hVACQStatus?.map((item, index) => {
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
              <TinyEditor
                editorContent={pQRData.tiny42}
                setEditorContent={setTinyContent}
                tinyNo={42}
              />
            </div>

            <h4 className="gridName pt-4">
              Sanitization and Sterilization Details of Utilities
            </h4>
            <div>
              {/* <div className="AddRows">
                <MdNoteAdd onClick={addSanitizationASDOURow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addSanitizationASDOURow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.sanitizationASDOU?.map((item, index) => {
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
            <TinyEditor
              editorContent={pQRData.tiny43}
              setEditorContent={setTinyContent}
              tinyNo={43}
            />

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
                    Compressed gases testing performed as per the scheduled
                    frequency and results were found to be satisfactory, system
                    is in qualified state
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.compressedGas?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                          value={item.compressedGas}
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
            <TinyEditor
              editorContent={pQRData.tiny44}
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
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewOfCPD} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.reviewOfCPD?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewOfCPD];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, reviewOfCPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewOfCPD];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, reviewOfCPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...reviewOfCPD];
                              newData[index].siteDivision = e.target.value;
                              setReviewOFCPD(newData);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewOfCPD];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, reviewOfCPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewOfCPD];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, reviewOfCPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewOfCPD];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, reviewOfCPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewOfCPD];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, reviewOfCPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewOfCPD];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, reviewOfCPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.reviewOfCPD];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, reviewOfCPD: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gridName pt-4">
              Previous Review Period Deviations
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewRPD} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.previewRPD?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.previewRPD];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, previewRPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewRPD];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, previewRPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.previewRPD];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, previewRPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.previewRPD];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, previewRPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.previewRPD];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, previewRPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.previewRPD];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, previewRPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewRPD];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, previewRPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.previewRPD];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, previewRPD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.previewRPD];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, previewRPD: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">Deviation Summary</h4>
            <TinyEditor />
            <div className="sub-head"> Review of OOS (Microbiological)</div>
            <div className="gridName">Current Review Period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOS} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.currentOOS?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOS];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, currentOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOS];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOS];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, currentOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOS];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, currentOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOS];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, currentOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOS];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, currentOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOS];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOS];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, currentOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOS];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, currentOOS: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gridName pt-4">Previous Review Period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOS} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.previewOOS?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOS];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, previewOOS: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOS];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOS];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, previewOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOS];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, previewOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOS];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, previewOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOS];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, previewOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOS];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOS: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOS];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, previewOOS: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOS];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, previewOOS: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">OOS Summary</h4>
            <TinyEditor />
            <div className="sub-head"> Review of OOAC (Microbiological)</div>
            <div className="gridName">Current Review Period OOAC</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOAC} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.currentOOAC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAC];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, currentOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAC];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAC];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, currentOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAC];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, currentOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAC];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, currentOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAC];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, currentOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAC];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAC];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, currentOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAC];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, currentOOAC: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gridName pt-4">Previous Review Period OOAC</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOAC} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.previewOOAC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAC];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, previewOOAC: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAC];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAC];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, previewOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAC];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, previewOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAC];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, previewOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAC];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, previewOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAC];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOAC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAC];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, previewOOAC: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAC];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, previewOOAC: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">OOAC Summary</h4>
            <TinyEditor />
            <div className="sub-head"> Review of OOAL(Microbiological)</div>
            <div className="gridName">Current Review Period OOAL</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOAL} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.currentOOAL?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAL];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, currentOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAL];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAL];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, currentOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAL];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, currentOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAL];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, currentOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAL];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, currentOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAL];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAL];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, currentOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOAL];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, currentOOAL: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gridName pt-4">Previous Review Period OOAL</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOAL} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.previewOOAL?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAL];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, previewOOAL: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAL];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAL];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, previewOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAL];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, previewOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAL];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, previewOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAL];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, previewOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAL];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOAL: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAL];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, previewOOAL: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOAL];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, previewOOAL: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">OOAL Summary</h4>
            <TinyEditor />
            <div className="sub-head">Review of OOS (Analytical)</div>
            <div className="gridName">Current review period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOSA} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.currentOOSA?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOSA];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, currentOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOSA];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOSA];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, currentOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOSA];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, currentOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOSA];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, currentOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOSA];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, currentOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOSA];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOSA];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, currentOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOSA];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, currentOOSA: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gridName pt-4">Previous review period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOSA} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.previewOOSA?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOSA];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, previewOOSA: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOSA];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOSA];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, previewOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOSA];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, previewOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOSA];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, previewOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOSA];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, previewOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOSA];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOSA: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOSA];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, previewOOSA: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOSA];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, previewOOSA: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">OOSA Summary</h4>
            <TinyEditor />
            <div className="sub-head">Review of OOT (Analytical)</div>
            <div className="gridName pt-4">Current Review Period OOT</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOT} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.currentOOT?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOT];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, currentOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOT];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOT];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, currentOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOT];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, currentOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOT];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, currentOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOT];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, currentOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOT];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, currentOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOT];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, currentOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.currentOOT];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, currentOOT: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gridName pt-4">Previous review period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOT} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.previewOOT?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOT];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, previewOOT: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOT];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOT];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, previewOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOT];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, previewOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOT];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, previewOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOT];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, previewOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOT];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, previewOOT: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOT];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, previewOOT: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.previewOOT];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, previewOOT: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">OOT Summary</h4>
            <TinyEditor />
            <div className="sub-head">Review of Change Controls</div>
            <div className="gridName pt-4">
              Current Review Period Change Controls
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentCC} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.currentCC.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.currentCC];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, currentCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentCC];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, currentCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.currentCC];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, currentCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.currentCC];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, currentCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.currentCC];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, currentCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.currentCC];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, currentCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentCC];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, currentCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.currentCC];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, currentCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.currentCC];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, currentCC: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gridName pt-4">
              Previous Review Period Change Controls
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewCC} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.previewCC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.previewCC];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, previewCC: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewCC];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, previewCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.previewCC];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, previewCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.previewCC];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, previewCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.previewCC];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, previewCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.previewCC];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, previewCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewCC];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, previewCC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.previewCC];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, previewCC: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.previewCC];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, previewCC: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">Change Control Summary</h4>
            <TinyEditor />
            <div className="sub-head">Review of Lab Incident</div>
            <div className="gridName pt-4">Current Review Lab Incident</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentLabI} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.currentLabI?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.currentLabI];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, currentLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentLabI];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, currentLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.currentLabI];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, currentLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.currentLabI];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, currentLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.currentLabI];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, currentLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.currentLabI];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, currentLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentLabI];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, currentLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.currentLabI];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, currentLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.currentLabI];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, currentLabI: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gridName pt-4">Previous Review Lab Incident</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewLabI} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.previewLabI.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.previewLabI];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, previewLabI: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewLabI];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, previewLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.previewLabI];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, previewLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.previewLabI];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, previewLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.previewLabI];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, previewLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.previewLabI];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, previewLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewLabI];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, previewLabI: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.previewLabI];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, previewLabI: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.previewLabI];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, previewLabI: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">Lab Incident Summary</h4>
            <TinyEditor />
            <div className="sub-head">Review of Market Complaints</div>
            <div className="gridName pt-4">
              Current Review Period Complaints
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentMC} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.currentMC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.currentMC];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, currentMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentMC];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, currentMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.currentMC];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, currentMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.currentMC];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, currentMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.currentMC];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, currentMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.currentMC];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, currentMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.currentMC];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, currentMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.currentMC];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, currentMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.currentMC];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, currentMC: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="gridName pt-4">
              Previous Review Period Complaints
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewMC} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date Of Initiation</th>
                    <th>Record No</th>
                    <th>Site/Division</th>
                    <th>Department</th>
                    <th>Initiator</th>
                    <th>Short Description</th>
                    <th>Batch No</th>
                    <th>Due Date</th>
                    <th>Current Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pQRData?.previewMC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...pQRData.previewMC];
                              newData[index].dateOfInitiation = e.target.value;
                              setPQRData({ ...pQRData, previewMC: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewMC];
                              newData[index].recordNo = e.target.value;
                              setPQRData({ ...pQRData, previewMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...pQRData.previewMC];
                              newData[index].siteDivision = e.target.value;
                              setPQRData({ ...pQRData, previewMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...pQRData.previewMC];
                              newData[index].department = e.target.value;
                              setPQRData({ ...pQRData, previewMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...pQRData.previewMC];
                              newData[index].initiator = e.target.value;
                              setPQRData({ ...pQRData, previewMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...pQRData.previewMC];
                              newData[index].shortDescription = e.target.value;
                              setPQRData({ ...pQRData, previewMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...pQRData.previewMC];
                              newData[index].batchNo = e.target.value;
                              setPQRData({ ...pQRData, previewMC: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...pQRData.previewMC];
                              newData[index].dueDate = e.target.value;
                              setPQRData({ ...pQRData, previewMC: newData });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...pQRData.previewMC];
                              newData[index].currentStatus = e.target.value;
                              setPQRData({ ...pQRData, previewMC: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">Market Complaints Summary</h4>
            <TinyEditor />
            <div className="sub-head">Review of Deviations</div>
            <div className="sub-head">
              Current Review Period Quality Related Notification
            </div>
            <div>
              {/* <div className="AddRows">
                <MdNoteAdd onClick={addCurrentRPQRNRow} />
                <div className="addrowinstruction"></div>
              </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentRPQRNRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.currentRPQRN?.map((item, index) => {
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
              editorContent={pQRData.tiny45}
              setEditorContent={setTinyContent}
              tinyNo={45}
            />
            <h4 className="gridName pt-4">Review of Product Recalls</h4>
            <TinyEditor
              editorContent={pQRData.tiny46}
              setEditorContent={setTinyContent}
              tinyNo={46}
            />{" "}
            <h4 className="gridName pt-4">Review of Returned Products</h4>
            <TinyEditor
              editorContent={pQRData.tiny47}
              setEditorContent={setTinyContent}
              tinyNo={47}
            />{" "}
            <h4 className="gridName pt-4">Review of Salvaged Drugs</h4>
            <TinyEditor
              editorContent={pQRData.tiny48}
              setEditorContent={setTinyContent}
              tinyNo={48}
            />{" "}
            <h4 className="gridName pt-4">
              Review of previous PQR recommendations
            </h4>
            <TinyEditor
              editorContent={pQRData.tiny49}
              setEditorContent={setTinyContent}
              tinyNo={49}
            />{" "}
            <h4 className="gridName pt-4">Review of Quality Agreements</h4>
            <TinyEditor
              editorContent={pQRData.tiny50}
              setEditorContent={setTinyContent}
              tinyNo={50}
            />{" "}
            <h4 className="gridName pt-4">
              Review of Manufacturing Authorizations
            </h4>
            <TinyEditor
              editorContent={pQRData.tiny51}
              setEditorContent={setTinyContent}
              tinyNo={51}
            />{" "}
            <h4 className="gridName pt-4">Review of Open Validations</h4>
            <TinyEditor
              editorContent={pQRData.tiny52}
              setEditorContent={setTinyContent}
              tinyNo={52}
            />
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExport
                    data={balanceSheet}
                    fileName="balance-sheet-summary.xlsx"
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
                  {pQRData?.dossierRR?.map((item, index) => {
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
                              newData[index].notificationType = e.target.value;
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
                <TinyEditor
                  editorContent={pQRData.tiny53}
                  setEditorContent={setTinyContent}
                  tinyNo={53}
                />
              </div>

              <div className="gridName">New marketing authorisation</div>
              <div className="py-4">
                {/* <MdNoteAdd onClick={addDossierRowNma} />
                  <div className="addrowinstruction"></div> */}
                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addDossierRowNma} />
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExport
                      data={balanceSheet}
                      fileName="balance-sheet-summary.xlsx"
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
                    {pQRData?.dossierRRNma?.map((item, index) => {
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
                                newData[index].descriptionOfPacking =
                                  e.target.value;
                                setDossierRRNma(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.dateOfApplication}
                              onChange={(e) => {
                                const newData = [...dossierRRNma];
                                newData[index].dateOfApplication =
                                  e.target.value;
                                setDossierRRNma(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.statusOfApplication}
                              onChange={(e) => {
                                const newData = [...dossierRRNma];
                                newData[index].statusOfApplication =
                                  e.target.value;
                                setDossierRRNma(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.dateOfAuthorization}
                              onChange={(e) => {
                                const newData = [...dossierRRNma];
                                newData[index].dateOfAuthorization =
                                  e.target.value;
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
                    editorContent={pQRData.tiny54}
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
              <TinyEditor
                editorContent={pQRData.tiny55}
                setEditorContent={setTinyContent}
                tinyNo={55}
              />
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
              <TinyEditor
                editorContent={pQRData.tiny56}
                setEditorContent={setTinyContent}
                tinyNo={56}
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
                  editorContent={pQRData.tiny57}
                  setEditorContent={setTinyContent}
                  tinyNo={57}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 2</h4>
                <TinyEditor
                  editorContent={pQRData.tiny58}
                  setEditorContent={setTinyContent}
                  tinyNo={58}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 3</h4>
                <TinyEditor
                  editorContent={pQRData.tiny59}
                  setEditorContent={setTinyContent}
                  tinyNo={59}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 4</h4>
                <TinyEditor
                  editorContent={pQRData.tiny60}
                  setEditorContent={setTinyContent}
                  tinyNo={60}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 5</h4>
                <TinyEditor
                  editorContent={pQRData.tiny61}
                  setEditorContent={setTinyContent}
                  tinyNo={61}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 6</h4>
                <TinyEditor
                  editorContent={pQRData.tiny62}
                  setEditorContent={setTinyContent}
                  tinyNo={62}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 7</h4>
                <TinyEditor
                  editorContent={pQRData.tiny63}
                  setEditorContent={setTinyContent}
                  tinyNo={63}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 8</h4>
                <TinyEditor
                  editorContent={pQRData.tiny64}
                  setEditorContent={setTinyContent}
                  tinyNo={64}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 9</h4>
                <TinyEditor
                  editorContent={pQRData.tiny65}
                  setEditorContent={setTinyContent}
                  tinyNo={65}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 10</h4>
                <TinyEditor
                  editorContent={pQRData.tiny66}
                  setEditorContent={setTinyContent}
                  tinyNo={66}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 11</h4>
                <TinyEditor
                  editorContent={pQRData.tiny67}
                  setEditorContent={setTinyContent}
                  tinyNo={67}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 12</h4>
                <TinyEditor
                  editorContent={pQRData.tiny68}
                  setEditorContent={setTinyContent}
                  tinyNo={68}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 13</h4>
                <TinyEditor
                  editorContent={pQRData.tiny69}
                  setEditorContent={setTinyContent}
                  tinyNo={69}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 14</h4>
                <TinyEditor
                  editorContent={pQRData.tiny70}
                  setEditorContent={setTinyContent}
                  tinyNo={70}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 15</h4>
                <TinyEditor
                  editorContent={pQRData.tiny71}
                  setEditorContent={setTinyContent}
                  tinyNo={71}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 16</h4>
                <TinyEditor
                  editorContent={pQRData.tiny72}
                  setEditorContent={setTinyContent}
                  tinyNo={72}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 17</h4>
                <TinyEditor
                  editorContent={pQRData.tiny73}
                  setEditorContent={setTinyContent}
                  tinyNo={73}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 18</h4>
                <TinyEditor
                  editorContent={pQRData.tiny74}
                  setEditorContent={setTinyContent}
                  tinyNo={74}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 19</h4>
                <TinyEditor
                  editorContent={pQRData.tiny75}
                  setEditorContent={setTinyContent}
                  tinyNo={75}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 20</h4>
                <TinyEditor
                  editorContent={pQRData.tiny76}
                  setEditorContent={setTinyContent}
                  tinyNo={76}
                />
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
              dispatch(updateForm(pQRData));
              navigate("/dashboard");
              console.log(pQRData);
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
