import React, { useEffect, useReducer, useState } from "react";
import Header from "../Component/Header";
import { MdNoteAdd } from "react-icons/md";
import TinyEditor from "../Component/TinyEditor";
import ExcelExportImport from "../Component/ImportExportExcel";
import { useDispatch } from "react-redux";
import { updateForm } from "../redux/formSlice";
import { useLocation, useNavigate } from "react-router-dom";
import HighchartsLine from "../Component/Analytics/HighchartsLine";
import HighchartsHistogram from "../Component/Analytics/HighchartsHistogram";
import HighchartsPareto from "../Component/Analytics/HighchartsPareto";
import HighchartsScatterPlot from "../Component/Analytics/HighchartsScatterPlot";
import HighchartsHistogram2 from "../Component/Analytics/HighchartsHistogram2";

import {
  ParacetamolAssayPlotLines,
  ParacetamolDisintegratePlotLines,
  ParacetamolDissolutionPlotLines,
  ParacetamolImpurityPlotLines,
  ParacetamolpHPlotLines,
  paracetamolAnnotations,
  paracetamolAssayZones,
  paracetamolDisinterationZones,
  paracetamolDissolutionZones,
  paracetamolImpurityZones,
  paracetamolpHZones,
} from "../Component/Analytics/ChartJsFunction";
import AnalyticsTable from "../Component/Table/AnalyticsTable";
import axios from "axios";
export default function APQR() {
  const [tab, setTab] = useState("GI");

  const phChartsConfig = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
      2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
      3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4,
      3.9, 3.4,
    ],
    lsl: 2,
    usl: 4,
    histoHeading: "Histogram Analysis",
    paretoHeading: "Pareto Analysis",
    scatterHeading: "Scatter Analysis",
    yAxisTitle: "Number of Batches",
    xAxisTitle: "pH Range",
    xAxisTitleScatter: "Batch Number",
    bins: { "1-2": 0, "2-3": 0, "3-4": 0, "4-5": 0 },
    plotLines: [
      { position: 0.5, label: "LSL", align: "right" },
      { position: 2.5, label: "USL", align: "left" },
    ],
  };

  const assayChartsConfig = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
      2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
      3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4,
      3.9, 3.4,
    ],
    lsl: 95,
    usl: 105,
    histoHeading: "Histogram Analysis",
    paretoHeading: "Pareto Analysis",
    scatterHeading: "Scatter Analysis",
    yAxisTitle: "Number of Batches",
    xAxisTitle: "pH Range",
    xAxisTitleScatter: "Batch Number",
    bins: {
      "80-95": 0,
      "95-100": 0,
      "100-105": 0,
      "105-120": 0,
    },
    plotLines: [
      { position: 0.5, label: "LSL", align: "right" },
      { position: 2.5, label: "USL", align: "left" },
    ],
    max: 120,
  };

  const impurityChartsConfig = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
      2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
      3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4,
      3.9, 3.4,
    ],
    lsl: 2,
    usl: 4,
    histoHeading: "Histogram Analysis",
    paretoHeading: "Pareto Analysis",
    scatterHeading: "Scatter Analysis",
    yAxisTitle: "Number of Batches",
    xAxisTitle: "pH Range",
    bins: { "1-2": 0, "2-3": 0, "3-4": 0, "4-5": 0 },
    plotLines: [
      { position: 0.5, label: "LSL", align: "right" },
      { position: 2.5, label: "USL", align: "left" },
    ],
  };

  const dissolutionChartsConfig = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
      2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
      3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4,
      3.9, 3.4,
    ],
    lsl: 2,
    usl: 4,
    histoHeading: "Histogram Analysis",
    paretoHeading: "Pareto Analysis",
    scatterHeading: "Scatter Analysis",
    yAxisTitle: "Number of Batches",
    xAxisTitle: "pH Range",
    xAxisTitleScatter: "Batch Number",
    bins: { "1-2": 0, "2-3": 0, "3-4": 0, "4-5": 0 },
    plotLines: [
      { position: 0.5, label: "LSL", align: "right" },
      { position: 2.5, label: "USL", align: "left" },
    ],
  };
  const disIntegrationChartsConfig = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
      2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
      3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4,
      3.9, 3.4,
    ],
    lsl: 95,
    usl: 105,
    histoHeading: "Histogram Analysis",
    paretoHeading: "Pareto Analysis",
    scatterHeading: "Scatter Analysis",
    yAxisTitle: "Number of Batches",
    xAxisTitle: "pH Range",
    xAxisTitleScatter: "Batch Number",
    bins: {
      "80-95": 0,
      "95-100": 0,
      "100-105": 0,
      "105-120": 0,
    },
    plotLines: [
      { position: 0.5, label: "LSL", align: "right" },
      { position: 2.5, label: "USL", align: "left" },
    ],
    max: 120,
  };

  const phOfParacetamolScatter = {
    data: [
      2.9, 1.75, 3.45, 2.85, 4.05, 3.2, 2.1, 4.1, 1.9, 2.8, 3.3, 4.0, 2.25, 3.5, 2.3, 4.1, 1.65,
      3.35, 2.95, 3.4, 2.0, 4.05, 1.8, 2.7, 4.0, 3.45, 2.85, 1.85, 4.1, 2.9, 3.5, 1.7, 3.25, 4.1,
      2.2, 3.3, 2.95, 1.75, 3.5, 4.1, 1.9, 2.8, 4.05, 2.15, 3.4, 1.75, 4.0, 2.8, 3.45, 4.05, 2.0,
    ],
    lsl: 95,
    usl: 105,
    heading: "Scatter Analysis",
    yAxisTitle: "pH",
    batchNumbers: [
      "Batch 1",
      "Batch 2",
      "Batch 3",
      "Batch 4",
      "Batch 5",
      "Batch 6",
      "Batch 7",
      "Batch 8",
      "Batch 9",
      "Batch 10",
      "Batch 11",
      "Batch 12",
      "Batch 13",
      "Batch 14",
      "Batch 15",
      "Batch 16",
      "Batch 17",
      "Batch 18",
      "Batch 19",
      "Batch 20",
      "Batch 21",
      "Batch 22",
      "Batch 23",
      "Batch 24",
      "Batch 25",
      "Batch 26",
      "Batch 27",
      "Batch 28",
      "Batch 29",
      "Batch 30",
      "Batch 31",
      "Batch 32",
      "Batch 33",
      "Batch 34",
      "Batch 35",
      "Batch 36",
      "Batch 37",
      "Batch 38",
      "Batch 39",
      "Batch 40",
      "Batch 41",
      "Batch 42",
      "Batch 43",
      "Batch 44",
      "Batch 45",
      "Batch 46",
      "Batch 47",
      "Batch 48",
      "Batch 49",
      "Batch 50",
    ],
  };

  const phOfParacetamolPareto = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
      2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
      3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 2.85,
      2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
      2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
      2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
    ],
    lsl: 2,
    usl: 4,
    heading: "Pareto Analysis",
    yAxisTitle: "Number of Batches",
  };
  const [data, setData] = useState(null);

  const [productCodes, setProductCodes] = useState([""]);

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
  const [tinyData, setTinyData] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
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
  const [gridDatas, setGridDatas] = useState({
    manufacturingStage: [],
    manufacturingSAPS: [],
    rawMRS: [],
    packingMRS: [],
    reviewOfASL: [],
    expiredRMD: [],
    expiredPMD: [],
    vendorQDORME: [],
    vendorQDOPPM: [],
    vendorQDPOG: [],
    codeTCTD: [],
    reviewORCEC: [],
    manufacturingSD: [],
    manufacturingSD2: [],
    bufferFSDPV: [],
    oosDetails: [],
    capaDetails: [],
    deviationDetails: [],
    ootResults: [],
    oolResults: [],
    ooaResults: [],
    reviewODSTR: [],
    reviewODSTR2: [],
    reviewODSTR3: [],
    reviewODSTR4: [],
    reviewODSTR5: [],
    reviewODSTR6: [],
    reviewODSTR7: [],
    reviewODSTR8: [],
    reviewODSTR9: [],
    reviewODSTR10: [],
    reviewODSTR11: [],
    reviewODSTR12: [],
    reviewODSTR13: [],
    reviewODSTR14: [],
    reviewODSTR15: [],
    reviewORMETR: [],
    reviewOPMTR: [],
    reviewODP: [],
    reviewODP2: [],
    reviewODP3: [],
    reviewODP4: [],
    reviewODP5: [],
    reviewODP6: [],
    reviewODP7: [],
    reviewODP8: [],
    reviewODP9: [],
    reviewODP10: [],
    reviewODPFPTR: [],
    summaryOOSS: [],
    stabilitySR: [],
    reviewOVIRS: [],
    hVACQStatus: [],
    dossierRR: [],
    dossierRRNma: [],
    sanitizationASDOU: [],
    compressedGas: [],
    currentRPQRN: [],
    unitOperation3: [],
    unitOperation4: [],
    unitOperation5: [],
    unitOperation6: [],
    unitOperation7: [],
    unitOperation8: [],
    unitOperation9: [],
    unitOperation10: [],
    reviewOfCPD: [],
    previewRPD: [],
    currentOOS: [],
    previewOOS: [],
    currentOOAC: [],
    previewOOAC: [],
    currentOOAL: [],
    previewOOAL: [],
    previewCC: [],
    currentCC: [],
    currentOOT: [],
    previewOOT: [],
    currentCC: [],
    previewCC: [],
    currentMC: [],
    previewMC: [],
    previewLabI: [],
    currentLabI: [],
    currentOOSA:[],
    previewOOSA:[],
  });

  const [pQRData, setPQRData] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      pqrNO: "",
      productName: "",
      genericName: "",
      reviewStartDate: "",
      reviewEndDate: "",
      mfgLicNo: "",
      processFlow: "",
      productDescription: "",
      totalBatchesManufactured: "",
      totalBatchesApprovedReleased: "",
      totalProcessValidationBatches: "",
      totalReprocessedBatches: "",
    }
  );

  const setTinyContent = (data, tinyNO) => {
    switch (tinyNO) {
      case 1:
        setTinyData({
          ...tinyData,
          tiny1: data,
        });
        break;
      case 2:
        setTinyData({
          ...tinyData,
          tiny2: data,
        });
        break;
      case 3:
        setTinyData({
          ...tinyData,
          tiny3: data,
        });
        break;
      case 4:
        setTinyData({
          ...tinyData,
          tiny4: data,
        });
        break;
      case 5:
        setTinyData({
          ...tinyData,
          tiny5: data,
        });
        break;
      case 6:
        setTinyData({
          ...tinyData,
          tiny6: data,
        });
        break;
      case 7:
        setTinyData({
          ...tinyData,
          tiny7: data,
        });
        break;
      case 8:
        setTinyData({
          ...tinyData,
          tiny8: data,
        });
        break;
      case 9:
        setTinyData({
          ...tinyData,
          tiny9: data,
        });
        break;
      case 10:
        setTinyData({
          ...tinyData,
          tiny10: data,
        });
        break;
      case 11:
        setTinyData({
          ...tinyData,
          tiny11: data,
        });
        break;
      case 12:
        setTinyData({
          ...tinyData,
          tiny12: data,
        });
        break;
      case 13:
        setTinyData({
          ...tinyData,
          tiny13: data,
        });
        break;
      case 14:
        setTinyData({
          ...tinyData,
          tiny14: data,
        });
        break;
      case 15:
        setTinyData({
          ...tinyData,
          tiny15: data,
        });
        break;
      case 16:
        setTinyData({
          ...tinyData,
          tiny16: data,
        });
        break;
      case 17:
        setTinyData({
          ...tinyData,
          tiny17: data,
        });
        break;
      case 18:
        setTinyData({
          ...tinyData,
          tiny18: data,
        });
        break;
      case 19:
        setTinyData({
          ...tinyData,
          tiny19: data,
        });
        break;
      case 20:
        setTinyData({
          ...tinyData,
          tiny20: data,
        });
        break;
      case 21:
        setTinyData({
          ...tinyData,
          tiny21: data,
        });
        break;
      case 22:
        setTinyData({
          ...tinyData,
          tiny22: data,
        });
        break;
      case 23:
        setTinyData({
          ...tinyData,
          tiny23: data,
        });
        break;
      case 24:
        setTinyData({
          ...tinyData,
          tiny24: data,
        });
        break;
      case 25:
        setTinyData({
          ...tinyData,
          tiny25: data,
        });
        break;
      case 26:
        setTinyData({
          ...tinyData,
          tiny26: data,
        });
        break;
      case 27:
        setTinyData({
          ...tinyData,
          tiny27: data,
        });
        break;
      case 28:
        setTinyData({
          ...tinyData,
          tiny28: data,
        });
        break;
      case 29:
        setTinyData({
          ...tinyData,
          tiny29: data,
        });
        break;
      case 30:
        setTinyData({
          ...tinyData,
          tiny30: data,
        });
        break;
      case 31:
        setTinyData({
          ...tinyData,
          tiny31: data,
        });
        break;
      case 32:
        setTinyData({
          ...tinyData,
          tiny32: data,
        });
        break;
      case 33:
        setTinyData({
          ...tinyData,
          tiny33: data,
        });
        break;
      case 34:
        setTinyData({
          ...tinyData,
          tiny34: data,
        });
        break;
      case 35:
        setTinyData({
          ...tinyData,
          tiny35: data,
        });
        break;
      case 36:
        setTinyData({
          ...tinyData,
          tiny36: data,
        });
        break;
      case 37:
        setTinyData({
          ...tinyData,
          tiny37: data,
        });
        break;
      case 38:
        setTinyData({
          ...tinyData,
          tiny38: data,
        });
        break;
      case 39:
        setTinyData({
          ...tinyData,
          tiny39: data,
        });
        break;
      case 40:
        setTinyData({
          ...tinyData,
          tiny40: data,
        });
        break;
      case 41:
        setTinyData({
          ...tinyData,
          tiny41: data,
        });
        break;
      case 42:
        setTinyData({
          ...tinyData,
          tiny42: data,
        });
        break;
      case 43:
        setTinyData({
          ...tinyData,
          tiny43: data,
        });
        break;
      case 44:
        setTinyData({
          ...tinyData,
          tiny44: data,
        });
        break;
      case 45:
        setTinyData({
          ...tinyData,
          tiny45: data,
        });
        break;
      case 46:
        setTinyData({
          ...tinyData,
          tiny46: data,
        });
        break;
      case 47:
        setTinyData({
          ...tinyData,
          tiny47: data,
        });
        break;
      case 48:
        setTinyData({
          ...tinyData,
          tiny48: data,
        });
        break;
      case 49:
        setTinyData({
          ...tinyData,
          tiny49: data,
        });
        break;
      case 50:
        setTinyData({
          ...tinyData,
          tiny50: data,
        });
        break;
      case 51:
        setTinyData({
          ...tinyData,
          tiny51: data,
        });
        break;
      case 52:
        setTinyData({
          ...tinyData,
          tiny52: data,
        });
        break;
      case 53:
        setTinyData({
          ...tinyData,
          tiny53: data,
        });
        break;
      case 54:
        setTinyData({
          ...tinyData,
          tiny54: data,
        });
        break;
      case 55:
        setTinyData({
          ...tinyData,
          tiny55: data,
        });
        break;
      case 56:
        setTinyData({
          ...tinyData,
          tiny56: data,
        });
        break;
      case 57:
        setTinyData({
          ...tinyData,
          tiny57: data,
        });
        break;
      case 58:
        setTinyData({
          ...tinyData,
          tiny58: data,
        });
        break;
      case 59:
        setTinyData({
          ...tinyData,
          tiny59: data,
        });
        break;
      case 60:
        setTinyData({
          ...tinyData,
          tiny60: data,
        });
        break;
      case 61:
        setTinyData({
          ...tinyData,
          tiny61: data,
        });
        break;
      case 62:
        setTinyData({
          ...tinyData,
          tiny62: data,
        });
        break;
      case 63:
        setTinyData({
          ...tinyData,
          tiny63: data,
        });
        break;
      case 64:
        setTinyData({
          ...tinyData,
          tiny64: data,
        });
        break;
      case 65:
        setTinyData({
          ...tinyData,
          tiny65: data,
        });
        break;
      case 66:
        setTinyData({
          ...tinyData,
          tiny66: data,
        });
        break;
      case 67:
        setTinyData({
          ...tinyData,
          tiny67: data,
        });
        break;
      case 68:
        setTinyData({
          ...tinyData,
          tiny68: data,
        });
        break;
      case 69:
        setTinyData({
          ...tinyData,
          tiny69: data,
        });
        break;
      case 70:
        setTinyData({
          ...tinyData,
          tiny70: data,
        });
        break;
      case 71:
        setTinyData({
          ...tinyData,
          tiny71: data,
        });
        break;
      case 72:
        setTinyData({
          ...tinyData,
          tiny72: data,
        });
        break;
      case 73:
        setTinyData({
          ...tinyData,
          tiny73: data,
        });
        break;
      case 74:
        setTinyData({
          ...tinyData,
          tiny74: data,
        });
        break;
      case 75:
        setTinyData({
          ...tinyData,
          tiny75: data,
        });
        break;
      case 76:
        setTinyData({
          ...tinyData,
          tiny76: data,
        });
        break;
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state;
  const getGraphData = (inputData) => {
    const outputData = {
      batchNumbers: [],
      observedValues: [],
    };

    inputData?.forEach((item) => {
      outputData.batchNumbers.push(item.batchNo);
      outputData.observedValues.push(parseFloat(item.observedValue));
    });

    return outputData;
  };
  const paracetamolpHDataH = getGraphData(gridDatas.reviewODSTR);
  const paracetamolAssayData = getGraphData(gridDatas.reviewODSTR2);
  const paracetamolImpurityData = getGraphData(gridDatas.reviewODSTR3);
  const paracetamolDissolutionData = getGraphData(gridDatas.reviewODSTR4);
  const paracetamolDisIntegrationData = getGraphData(gridDatas.reviewODSTR5);
  const terbinafinepHDataH = getGraphData(gridDatas.reviewODSTR6);
  const terbinafineAssayData = getGraphData(gridDatas.reviewODSTR7);
  const terbinafineImpurityData = getGraphData(gridDatas.reviewODSTR8);
  const terbinafineDissolutionData = getGraphData(gridDatas.reviewODSTR9);
  const terbinafineDisIntegrationData = getGraphData(gridDatas.reviewODSTR10);
  const pentoprazolepHDataH = getGraphData(gridDatas.reviewODSTR11);
  const pentoprazoleAssayData = getGraphData(gridDatas.reviewODSTR12);
  const pentoprazoleImpurityData = getGraphData(gridDatas.reviewODSTR13);
  const pentoprazoleDissolutionData = getGraphData(gridDatas.reviewODSTR14);
  const pentoprazoleDisIntegrationData = getGraphData(gridDatas.reviewODSTR15);

  const paracetamolpHData = gridDatas?.reviewODSTR?.map((item) => {
    return {
      "Batch No.": item.batchNo,
      "Observed Value": Number(item.observedValue),
    };
  });
  const paracetamolpHData2 = gridDatas?.reviewODSTR2?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData3 = gridDatas?.reviewODSTR3?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData4 = gridDatas?.reviewODSTR4?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData5 = gridDatas?.reviewODSTR5?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData6 = gridDatas?.reviewODSTR6?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData7 = gridDatas?.reviewODSTR7?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData8 = gridDatas?.reviewODSTR8?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData9 = gridDatas?.reviewODSTR9?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData10 = gridDatas?.reviewODSTR10?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData11 = gridDatas?.reviewODSTR11?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData12 = gridDatas?.reviewODSTR12?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData13 = gridDatas?.reviewODSTR13?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData14 = gridDatas?.reviewODSTR14?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });
  const paracetamolpHData15 = gridDatas?.reviewODSTR15?.map((item) => {
    return { "Batch No.": item.batchNo, "Observed Value": item.observedValue };
  });

  useEffect(() => {
    setTinyData({
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
  useEffect(() => {
    setPQRData({
      productCodes: productCodes,
    });
  }, [productCodes, data]);
  useEffect(() => {
    setPQRData({
      tinyData: tinyData,
    });
  }, [tinyData]);

  const handleUpdateAPQR = async () => {
    try {
      // Prepare the payload with all fields that need to be updated
      const payload = {
        pQRData,
        gridDatas,
        tinyData,
      };

      // Make the PUT request to update the data on the server
      const response = await axios.put(
        `http://localhost:4000/update-apqr/${editData.pqrId}`,
        payload
      );

      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/get-apqr/${editData.pqrId}`
      );
      // console.log(response.data,"data")
      setData(response.data);
      setTinyData(response.data.aPQRData.tinyData);
      const apiData = response.data.gridDatas;

      // Map each grid from API response to corresponding state
      setGridDatas({
        manufacturingStage: apiData.manufacturingStage?.data || {},
        manufacturingSAPS: apiData.manufacturingSAPS?.data || [],
        rawMRS: apiData.rawMRS?.data || [],
        packingMRS: apiData.packingMRS?.data || [],
        reviewOfASL: apiData.reviewOfASL?.data || [],
        expiredRMD: apiData.expiredRMD?.data || [],
        expiredPMD: apiData.expiredPMD?.data || [],
        vendorQDORME: apiData.vendorQDORME?.data || [],
        vendorQDOPPM: apiData.vendorQDOPPM?.data || [],
        vendorQDPOG: apiData.vendorQDPOG?.data || [],
        codeTCTD: apiData.codeTCTD?.data || [],
        reviewORCEC: apiData.reviewORCEC?.data || [],
        manufacturingSD: apiData.manufacturingSD?.data || [],
        manufacturingSD2: apiData.manufacturingSD2?.data || [],
        bufferFSDPV: apiData.bufferFSDPV?.data || [],
        oosDetails: apiData.oosDetails?.data || [],
        capaDetails: apiData.capaDetails?.data || [],
        deviationDetails: apiData.deviationDetails?.data || [],
        ootResults: apiData.ootResults?.data || [],
        oolResults: apiData.oolResults?.data || [],
        ooaResults: apiData.ooaResults?.data || [],
        reviewORMETR: apiData.reviewORMETR?.data || [],
        reviewOPMTR: apiData.reviewOPMTR?.data || [],
        reviewODP: apiData.reviewODP?.data || [],
        reviewODP2: apiData.reviewODP2?.data || [],
        reviewODP3: apiData.reviewODP3?.data || [],
        reviewODP4: apiData.reviewODP4?.data || [],
        reviewODP5: apiData.reviewODP5?.data || [],
        reviewODP6: apiData.reviewODP6?.data || [],
        reviewODP7: apiData.reviewODP7?.data || [],
        reviewODP8: apiData.reviewODP8?.data || [],
        reviewODP9: apiData.reviewODP9?.data || [],
        reviewODP10: apiData.reviewODP10?.data || [],
        reviewODPFPTR: apiData.reviewODPFPTR?.data || [],
        currentOOSA:apiData.currentOOSA?.data || [],
        previewOOSA:apiData.previewOOSA?.data||[],
        summaryOOSS: apiData.summaryOOSS?.data||[],
        stabilitySR: apiData.stabilitySR?.data || [],
        reviewOVIRS: apiData.reviewOVIRS?.data || [],
        hVACQStatus: apiData.hVACQStatus?.data || [],
        dossierRR: apiData.dossierRR?.data || [],
        dossierRRNma: apiData.dossierRRNma?.data || [],
        sanitizationASDOU: apiData.sanitizationASDOU?.data || [],
        compressedGas: apiData.compressedGas?.data || [],
        currentRPQRN: apiData.currentRPQRN?.data || [],
        unitOperation3: apiData.unitOperation3?.data || [],
        unitOperation4: apiData.unitOperation4?.data || [],
        unitOperation5: apiData.unitOperation5?.data || [],
        unitOperation6: apiData.unitOperation6?.data || [],
        unitOperation7: apiData.unitOperation7?.data || [],
        unitOperation8: apiData.unitOperation8?.data || [],
        unitOperation9: apiData.unitOperation9?.data || [],
        unitOperation10: apiData.unitOperation10?.data || [],
        reviewOfCPD: apiData.reviewOfCPD?.data || [],
        previewRPD: apiData.previewRPD?.data || [],
        currentOOS: apiData.currentOOS?.data || [],
        previewOOS: apiData.previewOOS?.data || [],
        currentOOAC: apiData.currentOOAC?.data || [],
        previewOOAC: apiData.previewOOAC?.data || [],
        currentOOAL: apiData.currentOOAL?.data || [],
        previewOOAL: apiData.previewOOAL?.data || [],
        // previewCC: apiData.previewCC?.data || [],
        // currentCC: apiData.currentCC?.data || [],
        currentOOT: apiData.currentOOT?.data || [],
        previewOOT: apiData.previewOOT?.data || [],
        currentCC: apiData.currentCC?.data || [],
        previewCC: apiData.previewCC?.data || [],
        currentMC: apiData.currentMC?.data || [],
        previewMC: apiData.previewMC?.data || [],
        previewLabI: apiData.previewLabI?.data || [],
        currentLabI: apiData.currentLabI?.data || [],
        reviewODSTR: apiData.reviewODSTR?.data || [],
        reviewODSTR2: apiData.reviewODSTR2?.data || [],
        reviewODSTR3: apiData.reviewODSTR3?.data || [],
        reviewODSTR4: apiData.reviewODSTR4?.data || [],
        reviewODSTR5: apiData.reviewODSTR5?.data || [],
        reviewODSTR6: apiData.reviewODSTR6?.data || [],
        reviewODSTR7: apiData.reviewODSTR7?.data || [],
        reviewODSTR8: apiData.reviewODSTR8?.data || [],
        reviewODSTR9: apiData.reviewODSTR9?.data || [],
        reviewODSTR10: apiData.reviewODSTR10?.data || [],
        reviewODSTR11: apiData.reviewODSTR11?.data || [],
        reviewODSTR12: apiData.reviewODSTR12?.data || [],
        reviewODSTR13: apiData.reviewODSTR13?.data || [],
        reviewODSTR14: apiData.reviewODSTR14?.data || [],
        reviewODSTR15: apiData.reviewODSTR15?.data || [],
        // Map all other grids here
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (editData && editData.pqrId) {
      fetchData();
    } else {
      console.log("editData or pqrId is missing");
    }
  }, [editData]);
  useEffect(() => {
    if (data) {
      setPQRData(data.aPQRData);
    }
  }, [data]);
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
    const processedData = processData(data, keyMapping);
    setGridDatas((prevData) => {
      switch (gridNo) {
        case 1:
          return {
            ...prevData,
            manufacturingStage: [
              ...prevData.manufacturingStage,
              ...processedData,
            ],
          };
        case 22:
          return {
            ...prevData,
            reviewODSTR: [...prevData.reviewODSTR, ...processedData],
          };
        case 23:
          return {
            ...prevData,
            reviewODSTR2: [...prevData.reviewODSTR2, ...processedData],
          };
        case 24:
          return {
            ...prevData,
            reviewODSTR3: [...prevData.reviewODSTR3, ...processedData],
          };
        case 25:
          return {
            ...prevData,
            reviewODSTR4: [...prevData.reviewODSTR4, ...processedData],
          };
        case 26:
          return {
            ...prevData,
            reviewODSTR5: [...prevData.reviewODSTR5, ...processedData],
          };
        case 27:
          return {
            ...prevData,
            reviewODSTR6: [...prevData.reviewODSTR6, ...processedData],
          };
        case 28:
          return {
            ...prevData,
            reviewODSTR7: [...prevData.reviewODSTR7, ...processedData],
          };
        case 29:
          return {
            ...prevData,
            reviewODSTR8: [...prevData.reviewODSTR8, ...processedData],
          };
        case 30:
          return {
            ...prevData,
            reviewODSTR9: [...prevData.reviewODSTR9, ...processedData],
          };
        case 31:
          return {
            ...prevData,
            reviewODSTR10: [...prevData.reviewODSTR10, ...processedData],
          };
        case 32:
          return {
            ...prevData,
            reviewODSTR11: [...prevData.reviewODSTR11, ...processedData],
          };
        case 33:
          return {
            ...prevData,
            reviewODSTR12: [...prevData.reviewODSTR12, ...processedData],
          };
        case 34:
          return {
            ...prevData,
            reviewODSTR13: [...prevData.reviewODSTR13, ...processedData],
          };
        case 35:
          return {
            ...prevData,
            reviewODSTR14: [...prevData.reviewODSTR14, ...processedData],
          };
        case 36:
          return {
            ...prevData,
            reviewODSTR15: [...prevData.reviewODSTR15, ...processedData],
          };
        default:
          return prevData;
      }
    });
    //
    //   setReviewOSTR2([...reviewODSTR2, ...processedData]);
    //   break;
    // case 24:
    //   setReviewOSTR3([...reviewODSTR3, ...processedData]);
    //   break;
    // case 25:
    //   setReviewOSTR4([...reviewODSTR4, ...processedData]);
    //   break;
    // case 26:
    //   setReviewOSTR5([...reviewODSTR5, ...processedData]);
    //   break;
    // case 27:
    //   setReviewOSTR6([...reviewODSTR6, ...processedData]);
    //   break;
    // case 28:
    //   setReviewOSTR7([...reviewODSTR7, ...processedData]);
    //   break;
    // case 29:
    //   setReviewOSTR8([...reviewODSTR8, ...processedData]);
    //   break;
    // case 30:
    //   setReviewOSTR9([...reviewODSTR9, ...processedData]);
    //   break;
    // case 31:
    //   setReviewOSTR10([...reviewODSTR10, ...processedData]);
    //   break;
    // case 32:
    //   setReviewOSTR11([...reviewODSTR11, ...processedData]);
    //   break;
    // case 33:
    //   setReviewOSTR12([...reviewODSTR12, ...processedData]);
    //   break;
    // case 34:
    //   setReviewOSTR13([...reviewODSTR13, ...processedData]);
    //   break;
    // case 35:
    //   setReviewOSTR14([...reviewODSTR14, ...processedData]);
    //   break;
    // case 36:
    //   setReviewOSTR15([...reviewODSTR15, ...processedData]);
    //   break;

    // setManufacturingStage([...manufacturingStage, ...processedData]);
  };

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
    setGridDatas({
      ...gridDatas,
      manufacturingStage: [...gridDatas.manufacturingStage, newRow],
    });
  };

  const addDossierRow = () => {
    const newRow = {
      agency: "",
      notificationNo: "",
      notificationtype: "",
      description: "",
    };
    setGridDatas({
      ...gridDatas,
      dossierRR: [...gridDatas.dossierRR, newRow],
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
    setGridDatas({
      ...gridDatas,
      dossierRRNma: [...gridDatas.dossierRRNma, newRow],
    });
  };

  const addManufacturingSAPSRow = () => {
    const newRow = {
      productName: "",
      batchCode: "",
      sFGCode: "",
      remarks: "",
    };
    setGridDatas({
      ...gridDatas,
      manufacturingSAPS: [...gridDatas.manufacturingSAPS, newRow],
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
    setGridDatas({
      ...gridDatas,
      rawMRS: [...gridDatas.rawMRS, newRow],
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
    setGridDatas({
      ...gridDatas,
      packingMRS: [...gridDatas.packingMRS, newRow],
    });
  };

  const addExpiredRMDRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      expiryDate: "",
    };
    setGridDatas({
      ...gridDatas,
      expiredRMD: [...gridDatas.expiredRMD, newRow],
    });
  };
  const addExpiredPMDRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      expiryDate: "",
    };
    setGridDatas({
      ...gridDatas,
      expiredPMD: [...gridDatas.expiredPMD, newRow],
    });
  };
  const addreviewOfASLRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      manufacturer: "",
      facility: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewOfASL: [...gridDatas.reviewOfASL, newRow],
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
    setGridDatas({
      ...gridDatas,
      vendorQDORME: [...gridDatas.vendorQDORME, newRow],
    });
  };

  const addvendorQDOPPMRow = () => {
    const newRow = {
      materialName: "",
      materialCode: "",
      manufacturerName: "",
      qualificationStatus: "",
    };
    setGridDatas({
      ...gridDatas,
      vendorQDORME: [...gridDatas.vendorQDORME, newRow],
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
    setGridDatas({
      ...gridDatas,
      vendorQDPOG: [...gridDatas.vendorQDPOG, newRow],
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
    setGridDatas({
      ...gridDatas,
      codeTCTD: [...gridDatas.codeTCTD, newRow],
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
    setGridDatas({
      ...gridDatas,
      reviewORCEC: [...gridDatas.reviewORCEC, newRow],
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
    setGridDatas({
      ...gridDatas,
      manufacturingSD: [...gridDatas.manufacturingSD, newRow],
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
    setGridDatas({
      ...gridDatas,
      bufferFSDPV: [...gridDatas.bufferFSDPV, newRow],
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
    setGridDatas({
      ...gridDatas,
      oosDetails: [...gridDatas.oosDetails, newRow],
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
    setGridDatas({
      ...gridDatas,
      capaDetails: [...gridDatas.capaDetails, newRow],
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
    setGridDatas({
      ...gridDatas,
      deviationDetails: [...gridDatas.deviationDetails, newRow],
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
    setGridDatas({
      ...gridDatas,
      ootResults: [...gridDatas.ootResults, newRow],
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
    setGridDatas({
      ...gridDatas,
      oolResults: [...gridDatas.oolResults, newRow],
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
    setGridDatas({
      ...gridDatas,
      ooaResults: [...gridDatas.ooaResults, newRow],
    });
  };

  const addReviewODSTRRow = () => {
    const newRow = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setPQRData({
      ...gridDatas,
      reviewODSTR: [...gridDatas.reviewODSTR, newRow],
    });
  };
  const addReviewODSTRRow2 = () => {
    const newRow2 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR2: [...gridDatas.reviewODSTR2, newRow2],
    });
  };
  const addReviewODSTRRow3 = () => {
    const newRow3 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR3: [...gridDatas.reviewODSTR3, newRow3],
    });
  };
  const addReviewODSTRRow4 = () => {
    const newRow4 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR4: [...gridDatas.reviewODSTR4, newRow4],
    });
  };
  const addReviewODSTRRow5 = () => {
    const newRow5 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR5: [...gridDatas.reviewODSTR5, newRow5],
    });
    setReviewOSTR5([...reviewODSTR5, newRow5]);
  };
  const addReviewODSTRRow6 = () => {
    const newRow6 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR6: [...gridDatas.reviewODSTR6, newRow6],
    });
  };
  const addReviewODSTRRow7 = () => {
    const newRow7 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR7: [...gridDatas.reviewODSTR7, newRow7],
    });
  };
  const addReviewODSTRRow8 = () => {
    const newRow8 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR8: [...gridDatas.reviewODSTR8, newRow8],
    });
  };
  const addReviewODSTRRow9 = () => {
    const newRow9 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR9: [...gridDatas.reviewODSTR9, newRow9],
    });
  };
  const addReviewODSTRRow10 = () => {
    const newRow10 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR10: [...gridDatas.reviewODSTR10, newRow10],
    });
  };

  const addReviewODSTRRow11 = () => {
    const newRow10 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR10: [...gridDatas.reviewODSTR11, newRow10],
    });
  };

  const addReviewODSTRRow12 = () => {
    const newRow10 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR10: [...gridDatas.reviewODSTR12, newRow10],
    });
  };

  const addReviewODSTRRow13 = () => {
    const newRow10 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR10: [...gridDatas.reviewODSTR13, newRow10],
    });
  };

  const addReviewODSTRRow14 = () => {
    const newRow10 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR10: [...gridDatas.reviewODSTR14, newRow10],
    });
  };

  const addReviewODSTRRow15 = () => {
    const newRow10 = {
      batchNo: "",
      testsParameter: "",
      observedValue: "",
      LSL: "",
      USL: "",
      LCL: "",
      UCL: "",
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODSTR10: [...gridDatas.reviewODSTR15, newRow10],
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
    setGridDatas({
      ...gridDatas,
      reviewORMETR: [...gridDatas.reviewORMETR, newRow],
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
    setGridDatas({
      ...gridDatas,
      reviewOPMTR: [...gridDatas.reviewOPMTR, newRow],
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
    setGridDatas({
      ...gridDatas,
      reviewODP: [...gridDatas.reviewODP, newRow],
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
    setGridDatas({
      ...gridDatas,
      reviewODP2: [...gridDatas.reviewODP2, newRow2],
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
    setGridDatas({
      ...gridDatas,
      reviewODP3: [...gridDatas.reviewODP3, newRow3],
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
    setGridDatas({
      ...gridDatas,
      reviewODP4: [...gridDatas.reviewODP4, newRow4],
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
    setGridDatas({
      ...gridDatas,
      reviewODP5: [...gridDatas.reviewODP5, newRow5],
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
    setGridDatas({
      ...gridDatas,
      reviewODP6: [...gridDatas.reviewODP6, newRow6],
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
    setGridDatas({
      ...gridDatas,
      reviewODP7: [...gridDatas.reviewODP7, newRow7],
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
    setGridDatas({
      ...gridDatas,
      reviewODP8: [...gridDatas.reviewODP8, newRow8],
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
    setGridDatas({
      ...gridDatas,
      reviewODP9: [...gridDatas.reviewODP9, newRow9],
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
    setGridDatas({
      ...gridDatas,
      reviewODP10: [...gridDatas.reviewODP10, newRow10],
    });
  };

  const addReviewODPFPTRRow = () => {
    const newRow = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setGridDatas({
      ...gridDatas,
      reviewODPFPTR: [...gridDatas.reviewODPFPTR, newRow],
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
    setGridDatas({
      ...gridDatas,
      summaryOOSS: [...gridDatas.summaryOOSS, newRow],
    });
  };

  const addStabilitySRRow = () => {
    const newRow = {
      batchNo: "",
      testingIntervalMonths: "",
      OOSNumber: "",
    };
    setGridDatas({
      ...gridDatas,
      stabilitySR: [...gridDatas.stabilitySR, newRow],
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
    setGridDatas({
      ...gridDatas,
      reviewOVIRS: [...gridDatas.reviewOVIRS, newRow],
    });
  };

  const addHVACQStatusRow = () => {
    const newRow = {
      testDescription: "",
      frequency: "",
      status: "",
    };
    setGridDatas({
      ...gridDatas,
      hVACQStatus: [...gridDatas.hVACQStatus, newRow],
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
    setGridDatas({
      ...gridDatas,
      reviewOfCPD: [...gridDatas.reviewOfCPD, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      previewRPD: [...gridDatas.previewRPD, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      currentOOS: [...gridDatas.currentOOS, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      previewOOS: [...gridDatas.previewOOS, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      currentOOAC: [...gridDatas.currentOOAC, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      previewOOAC: [...gridDatas.previewOOAC, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      currentOOAL: [...gridDatas.currentOOAL, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      previewOOAL: [...gridDatas.previewOOAL, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      currentOOSA: [...gridDatas.currentOOSA, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      previewOOSA: [...gridDatas.previewOOSA, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      currentOOT: [...gridDatas.currentOOT, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      previewOOT: [...gridDatas.previewOOT, newRow],
    });
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
    setGridDatas({ ...gridDatas, currentCC: [...gridDatas.currentCC, newRow] });
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
    setGridDatas({ ...gridDatas, previewCC: [...gridDatas.previewCC, newRow] });
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
    setGridDatas({ ...gridDatas, currentMC: [...gridDatas.currentMC, newRow] });
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
    setGridDatas({ ...gridDatas, previewMC: [...gridDatas.previewMC, newRow] });
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
    setGridDatas({
      ...gridDatas,
      currentLabI: [...gridDatas.currentLabI, newRow],
    });
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
    setGridDatas({
      ...gridDatas,
      previewLabI: [...gridDatas.previewLabI, newRow],
    });
  };

  const addSanitizationASDOURow = () => {
    const newRow = {
      equipmentName: "",
      frequency: "",
      status: "",
    };
    setGridDatas({
      ...gridDatas,
      sanitizationASDOU: [...gridDatas.sanitizationASDOU, newRow],
    });
  };

  const addCompressedGasesRow = () => {
    const newRow = {
      compressedGas: "",
      test: "",
      frequency: "",
      status: "",
    };
    setGridDatas({
      ...gridDatas,
      compressedGas: [...gridDatas.compressedGas, newRow],
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
    setGridDatas({
      ...gridDatas,
      currentRPQRN: [...gridDatas.currentRPQRN, newRow],
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
    setGridDatas({
      ...gridDatas,
      unitOperation3: [...gridDatas.unitOperation3, newRow],
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
    setGridDatas({
      ...gridDatas,
      unitOperation4: [...gridDatas.unitOperation4, newRow],
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
    setGridDatas({
      ...gridDatas,
      unitOperation5: [...gridDatas.unitOperation5, newRow],
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
    setGridDatas({
      ...gridDatas,
      unitOperation6: [...gridDatas.unitOperation6, newRow],
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
    setGridDatas({
      ...gridDatas,
      unitOperation7: [...gridDatas.unitOperation7, newRow],
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
    setGridDatas({
      ...gridDatas,
      unitOperation8: [...gridDatas.unitOperation8, newRow],
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
    setGridDatas({
      ...gridDatas,
      unitOperation9: [...gridDatas.unitOperation9, newRow],
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
    setGridDatas({
      ...gridDatas,
      unitOperation10: [...gridDatas.unitOperation10, newRow],
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
                <label>Initiate Date</label>
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
                    onChange={(e) => handleProductCodeChange(index, e.target.value)}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                {gridDatas?.manufacturingStage?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.productName}
                          onChange={(e) => {
                            const newData = [...gridDatas.manufacturingStage];
                            newData[index].productName = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              manufacturingStage: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.sFGCode}
                          onChange={(e) => {
                            const newData = [...gridDatas.manufacturingStage];
                            newData[index].sFGCode = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              manufacturingStage: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.fGCode}
                          onChange={(e) => {
                            const newData = [...gridDatas.manufacturingStage];
                            newData[index].fGCode = e.target.value;
                            setGridDatas({
                              ...gridDatas,
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
                editorContent={tinyData.tiny1}
                setEditorContent={setTinyContent}
                tinyNo={1}
              />
            </div>

            <div className="py-4">
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addManufacturingSAPSRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.manufacturingSAPS?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.productName}
                            onChange={(e) => {
                              const newData = [...gridDatas.manufacturingSAPS];
                              newData[index].productName = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                manufacturingSAPS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchCode}
                            onChange={(e) => {
                              const newData = [...gridDatas.manufacturingSAPS];
                              newData[index].batchCode = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                manufacturingSAPS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.sFGCode}
                            onChange={(e) => {
                              const newData = [...gridDatas.manufacturingSAPS];
                              newData[index].sFGCode = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                manufacturingSAPS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input
                            value={item.remarks}
                            onChange={(e) => {
                              const newData = [...gridDatas.manufacturingSAPS];
                              newData[index].remarks = e.target.value;
                              setGridDatas({
                                ...gridDatas,
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
              editorContent={tinyData.tiny2}
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
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                    // data={manufacturingStage}
                    // setimportedData={setimportedData}
                    // fileName="manufacturingStage.xlsx"
                    // gridNo={1}
                    />{" "}
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
                    {gridDatas?.rawMRS?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...gridDatas.rawMRS];
                                newData[index].materialCode = e.target.value;
                                setGridDatas({ ...gridDatas, rawMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...gridDatas.rawMRS];
                                newData[index].materialName = e.target.value;
                                setGridDatas({ ...gridDatas, rawMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...gridDatas.rawMRS];
                                newData[index].ARNo = e.target.value;
                                setGridDatas({ ...gridDatas, rawMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.reasonOfRejection}
                              onChange={(e) => {
                                const newData = [...gridDatas.rawMRS];
                                newData[index].reasonOfRejection = e.target.value;
                                setGridDatas({ ...gridDatas, rawMRS: newData });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.description}
                              onChange={(e) => {
                                const newData = [...gridDatas.rawMRS];
                                newData[index].description = e.target.value;
                                setGridDatas({ ...gridDatas, rawMRS: newData });
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
                    editorContent={tinyData.tiny3}
                    setEditorContent={setTinyContent}
                    tinyNo={3}
                  />
                </div>
              </div>

              <div className="pb-4">
                <h4 className="gridName"> Packing Materials Rejection Summary</h4>

                <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                  <div className="flex items-center">
                    <MdNoteAdd onClick={addPackingMRSRow} />
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                    // data={manufacturingStage}
                    // setimportedData={setimportedData}
                    // fileName="manufacturingStage.xlsx"
                    // gridNo={1}
                    />{" "}
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
                    {gridDatas?.packingMRS?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...gridDatas.packingMRS];
                                newData[index].materialCode = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  packingMRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...gridDatas.packingMRS];
                                newData[index].materialName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  packingMRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...gridDatas.packingMRS];
                                newData[index].ARNo = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  packingMRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.reasonForRepacking}
                              onChange={(e) => {
                                const newData = [...gridDatas.packingMRS];
                                newData[index].reasonForRepacking = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  packingMRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.description}
                              onChange={(e) => {
                                const newData = [...gridDatas.packingMRS];
                                newData[index].description = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  packingMRS: newData,
                                });
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
                <TinyEditor
                  editorContent={tinyData.tiny4}
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
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                    // data={manufacturingStage}
                    // setimportedData={setimportedData}
                    // fileName="manufacturingStage.xlsx"
                    // gridNo={1}
                    />{" "}
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
                    {gridDatas?.expiredRMD?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...gridDatas.expiredRMD];
                                newData[index].materialCode = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  expiredRMD: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...gridDatas.expiredRMD];
                                newData[index].materialName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  expiredRMD: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...gridDatas.expiredRMD];
                                newData[index].ARNo = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  expiredRMD: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.expiryDate}
                              onChange={(e) => {
                                const newData = [...gridDatas.expiredRMD];
                                newData[index].expiryDate = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  expiredRMD: newData,
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
                  <h4 className="gridName">Summary</h4>
                  <TinyEditor
                    editorContent={tinyData.tiny5}
                    setEditorContent={setTinyContent}
                    tinyNo={5}
                  />
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
                    // data={manufacturingStage}
                    // setimportedData={setimportedData}
                    // fileName="manufacturingStage.xlsx"
                    // gridNo={1}
                    />{" "}
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
                    {gridDatas?.expiredPMD?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...gridDatas.expiredPMD];
                                newData[index].materialCode = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  expiredPMD: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...gridDatas.expiredPMD];
                                newData[index].materialName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  expiredPMD: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.ARNo}
                              onChange={(e) => {
                                const newData = [...gridDatas.expiredPMD];
                                newData[index].ARNo = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  expiredPMD: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.expiryDate}
                              onChange={(e) => {
                                const newData = [...gridDatas.expiredPMD];
                                newData[index].expiryDate = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  expiredPMD: newData,
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
                  Summary of Review of Expired Raw Materials and Packaging Materials
                </h4>
                <TinyEditor
                  editorContent={tinyData.tiny6}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                    {gridDatas?.reviewOfASL?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOfASL];
                                newData[index].materialCode = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOfASL: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOfASL];
                                newData[index].materialName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOfASL: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturer}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOfASL];
                                newData[index].manufacturer = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOfASL: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.facility}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOfASL];
                                newData[index].facility = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
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
                <h4 className="gridName pt-4">Summary of Review of Approved Supplier List</h4>
                <TinyEditor
                  editorContent={tinyData.tiny7}
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
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                    // data={manufacturingStage}
                    // setimportedData={setimportedData}
                    // fileName="manufacturingStage.xlsx"
                    // gridNo={1}
                    />{" "}
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
                    {gridDatas?.vendorQDORME?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDORME];
                                newData[index].materialName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  vendorQDORME: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDORME];
                                newData[index].materialCode = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  vendorQDORME: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturerName}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDORME];
                                newData[index].manufacturerName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  vendorQDORME: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDORME];
                                newData[index].qualificationStatus = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  vendorQDORME: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.remarks}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDORME];
                                newData[index].remarks = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
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
                  Summary of Vendor Qualification Details of Raw Material Excipients
                </h4>
                <TinyEditor
                  editorContent={tinyData.tiny8}
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
                    <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                  </div>
                  <div className="flex gap-4 ">
                    <ExcelExportImport
                    // data={manufacturingStage}
                    // setimportedData={setimportedData}
                    // fileName="manufacturingStage.xlsx"
                    // gridNo={1}
                    />{" "}
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
                    {gridDatas?.vendorQDOPPM?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              value={item.materialName}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDOPPM];
                                newData[index].materialName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  vendorQDOPPM: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.materialCode}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDOPPM];
                                newData[index].materialCode = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  vendorQDOPPM: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.manufacturerName}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDOPPM];
                                newData[index].manufacturerName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  vendorQDOPPM: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDOPPM];
                                newData[index].qualificationStatus = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
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
                  Summary of Vendor Qualification Details of Primary Packing Materials
                </h4>
                <TinyEditor
                  editorContent={tinyData.tiny9}
                  setEditorContent={setTinyContent}
                  tinyNo={9}
                />
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
                    // data={manufacturingStage}
                    // setimportedData={setimportedData}
                    // fileName="manufacturingStage.xlsx"
                    // gridNo={1}
                    />{" "}
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
                    {gridDatas?.vendorQDPOG?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input
                              value={item.gasName}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDPOG];
                                newData[index].gasName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  vendorQDPOG: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.gasCode}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDPOG];
                                newData[index].gasCode = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
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
                                newData[index].manufacturerName = e.target.value;
                                setVendorQDPOG(newData);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDPOG];
                                newData[index].qualificationStatus = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
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
                  editorContent={tinyData.tiny10}
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
                <label>Total No. of batches manufactured during the current review period</label>
                <input
                  type="number"
                  value={pQRData.totalBatchesManufactured}
                  onChange={(e) => {
                    setPQRData({ totalBatchesManufactured: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Total No. of batches Approved & Released</label>
                <input
                  value={pQRData.totalBatchesApprovedReleased}
                  onChange={(e) => {
                    setPQRData({
                      totalBatchesApprovedReleased: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Total No. of Process Validation Batches</label>
                <input
                  value={pQRData.totalProcessValidationBatches}
                  onChange={(e) => {
                    setPQRData({
                      totalProcessValidationBatches: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Total No. of Reprocessed Batches</label>
                <input
                  value={pQRData.totalReprocessedBatches}
                  onChange={(e) => {
                    setPQRData({ totalReprocessedBatches: e.target.value });
                  }}
                />
              </div>
              <div className="group-input">
                <label>Process Validation Batches Details</label>
                <TinyEditor
                  editorContent={tinyData.tiny11}
                  setEditorContent={setTinyContent}
                  tinyNo={11}
                />
              </div>

              <div className="group-input">
                <label>Reprocessing Details</label>
                <TinyEditor
                  editorContent={tinyData.tiny12}
                  setEditorContent={setTinyContent}
                  tinyNo={12}
                />
              </div>
              <div className="group-input">
                <label>Microbial Excursion Details</label>
                <TinyEditor
                  editorContent={tinyData.tiny13}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.codeTCTD?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.codeTCTD];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({ ...gridDatas, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.existingCode}
                            onChange={(e) => {
                              const newData = [...gridDatas.codeTCTD];
                              newData[index].existingCode = e.target.value;
                              setGridDatas({ ...gridDatas, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.existingMarket}
                            onChange={(e) => {
                              const newData = [...gridDatas.codeTCTD];
                              newData[index].existingMarket = e.target.value;
                              setGridDatas({ ...gridDatas, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.proposedCode}
                            onChange={(e) => {
                              const newData = [...gridDatas.codeTCTD];
                              newData[index].proposedCode = e.target.value;
                              setGridDatas({ ...gridDatas, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.proposedMarket}
                            onChange={(e) => {
                              const newData = [...gridDatas.codeTCTD];
                              newData[index].proposedMarket = e.target.value;
                              setGridDatas({ ...gridDatas, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.transferQuality}
                            onChange={(e) => {
                              const newData = [...gridDatas.codeTCTD];
                              newData[index].transferQuality = e.target.value;
                              setGridDatas({ ...gridDatas, codeTCTD: newData });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.refNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.codeTCTD];
                              newData[index].refNo = e.target.value;
                              setGridDatas({ ...gridDatas, codeTCTD: newData });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h4 className="gridName pt-4">Summary of Code to Code Transfer Details</h4>
              <TinyEditor
                editorContent={tinyData.tiny14}
                setEditorContent={setTinyContent}
                tinyNo={14}
              />
            </div>
            <div className="sub-head">
              {" "}
              Review of Manufacturing Process, Packing Process and relevant Validation Status
            </div>
            <TinyEditor
              editorContent={tinyData.tiny15}
              setEditorContent={setTinyContent}
              tinyNo={15}
            />
            <div className="sub-head">
              Review of Reprocessing/Repacking/Reworking along with CAPA and Effectiveness Check
              Verification (if any)
            </div>
            <div className="dual-group-input">
              <div className="group-input">
                <label>Batch reprocessing/reworking process Details</label>
                <TinyEditor
                  editorContent={tinyData.tiny16}
                  setEditorContent={setTinyContent}
                  tinyNo={16}
                />
              </div>
              <div className="group-input">
                <label>Batch Repacking Details </label>
                <TinyEditor
                  editorContent={tinyData.tiny17}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  .
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewORCEC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.packingBatchNumber}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORCEC];
                              newData[index].packingBatchNumber = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORCEC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.manufacturingBatchNumber}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORCEC];
                              newData[index].repackingIssuedNumber = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORCEC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.repackingIssuedNumber}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORCEC];
                              newData[index].repackingIssuedNumber = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORCEC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.repackingFor}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORCEC];
                              newData[index].repackingFor = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORCEC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.qMS}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORCEC];
                              newData[index].qMS = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORCEC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.reasonForRepacking}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORCEC];
                              newData[index].reasonForRepacking = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORCEC: newData,
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
                editorContent={tinyData.tiny18}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.capaDetails?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.capaDetails];
                              newData[index].ARNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                capaDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.capaType}
                            onChange={(e) => {
                              const newData = [...gridDatas.capaDetails];
                              newData[index].capaType = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                capaDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.descriptionOfIssue}
                            onChange={(e) => {
                              const newData = [...gridDatas.capaDetails];
                              newData[index].descriptionOfIssue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                capaDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.rootCause}
                            onChange={(e) => {
                              const newData = [...gridDatas.capaDetails];
                              newData[index].rootCause = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                capaDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.capaVerification}
                            onChange={(e) => {
                              const newData = [...gridDatas.capaDetails];
                              newData[index].capaVerification = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                capaDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            value={item.chooseFile}
                            onChange={(e) => {
                              const newData = [...gridDatas.capaDetails];
                              newData[index].chooseFile = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                capaDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.remarks}
                            onChange={(e) => {
                              const newData = [...gridDatas.capaDetails];
                              newData[index].remarks = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                capaDetails: newData,
                              });
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
                editorContent={tinyData.tiny19}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.deviationDetails?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].ARNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.deviationRelatedTo}
                            onChange={(e) => {
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].deviationRelatedTo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.description}
                            onChange={(e) => {
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].description = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.rootCause}
                            onChange={(e) => {
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].rootCause = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.deviationObservedOn}
                            onChange={(e) => {
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].deviationObservedOn = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.deviationObservedBy}
                            onChange={(e) => {
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].deviationObservedBy = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.classificationOfDeviation}
                            onChange={(e) => {
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].classificationOfDeviation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
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
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].fileAttachment = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={item.remarks}
                            onChange={(e) => {
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].remarks = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                deviationDetails: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={item.status}
                            onChange={(e) => {
                              const newData = [...gridDatas.deviationDetails];
                              newData[index].status = e.target.value;
                              setGridDatas({
                                ...gridDatas,
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
                editorContent={tinyData.tiny20}
                setEditorContent={setTinyContent}
                tinyNo={20}
              />
            </div>

            <div className="sub-head">
              Review of all Batch Failures/Rejections along with CAPA and Effectiveness Check
              Verification (if any):
            </div>

            <h4 className="gridName">Batch Failures/Rejections Details </h4>
            <TinyEditor
              editorContent={tinyData.tiny21}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.oosDetails?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.oosDetails];
                              newData[index].ARNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oosDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfOos}
                            onChange={(e) => {
                              const newData = [...gridDatas.oosDetails];
                              newData[index].testNameOfOos = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oosDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...gridDatas.oosDetails];
                              newData[index].resultsObtained = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oosDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.oosDetails];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oosDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.detailsOfObviousError}
                            onChange={(e) => {
                              const newData = [...gridDatas.oosDetails];
                              newData[index].detailsOfObviousError = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oosDetails: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            value={item.fileAttachment}
                            onChange={(e) => {
                              const newData = [...gridDatas.oosDetails];
                              newData[index].fileAttachment = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oosDetails: newData,
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
                editorContent={tinyData.tiny22}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.ootResults?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.ootResults];
                              newData[index].ARNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ootResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfOot}
                            onChange={(e) => {
                              const newData = [...gridDatas.ootResults];
                              newData[index].testNameOfOot = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ootResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...gridDatas.ootResults];
                              newData[index].resultsObtained = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ootResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initialIntervalDetails}
                            onChange={(e) => {
                              const newData = [...gridDatas.ootResults];
                              newData[index].initialIntervalDetails = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ootResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.previousIntervalDetails}
                            onChange={(e) => {
                              const newData = [...gridDatas.ootResults];
                              newData[index].previousIntervalDetails = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ootResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.diffrenceOfResult}
                            onChange={(e) => {
                              const newData = [...gridDatas.ootResults];
                              newData[index].diffrenceOfResultrence = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ootResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.trendLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.ootResults];
                              newData[index].trendLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ootResults: newData,
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
                editorContent={tinyData.tiny23}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.ooaResults?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.ooaResults];
                              newData[index].ARNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ooaResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfAlert}
                            onChange={(e) => {
                              const newData = [...gridDatas.ooaResults];
                              newData[index].testNameOfAlert = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ooaResults: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...gridDatas.ooaResults];
                              newData[index].resultsObtained = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ooaResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initialIntervalDetails}
                            onChange={(e) => {
                              const newData = [...gridDatas.ooaResults];
                              newData[index].initialIntervalDetails = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ooaResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.previousIntervalDetails}
                            onChange={(e) => {
                              const newData = [...gridDatas.ooaResults];
                              newData[index].previousIntervalDetails = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ooaResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.diffrenceOfResult}
                            onChange={(e) => {
                              const newData = [...gridDatas.ooaResults];
                              newData[index].diffrenceOfResult = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ooaResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.trendLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.ooaResults];
                              newData[index].trendLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                ooaResults: newData,
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
                editorContent={tinyData.tiny24}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.oolResults?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.ARNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.oolResults];
                              newData[index].ARNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oolResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testNameOfAlert}
                            onChange={(e) => {
                              const newData = [...gridDatas.oolResults];
                              newData[index].testNameOfAlert = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oolResults: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.resultsObtained}
                            onChange={(e) => {
                              const newData = [...gridDatas.oolResults];
                              newData[index].resultsObtained = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oolResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initialIntervalDetails}
                            onChange={(e) => {
                              const newData = [...gridDatas.oolResults];
                              newData[index].initialIntervalDetails = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oolResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.previousIntervalDetails}
                            onChange={(e) => {
                              const newData = [...gridDatas.oolResults];
                              newData[index].previousIntervalDetails = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oolResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.diffrenceOfResult}
                            onChange={(e) => {
                              const newData = [...gridDatas.oolResults];
                              newData[index].diffrenceOfResult = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oolResults: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.trendLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.oolResults];
                              newData[index].trendLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                oolResults: newData,
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
                editorContent={tinyData.tiny25}
                setEditorContent={setTinyContent}
                tinyNo={25}
              />
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.bufferFSDPV?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            value={item.criticalProcessParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.bufferFSDPV];
                              newData[index].criticalProcessParameter = e.target.value;
                              setGridDatas({
                                ...pQRData,
                                bufferFSDPV: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.codes}
                            onChange={(e) => {
                              const newData = [...gridDatas.bufferFSDPV];
                              newData[index].codes = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                bufferFSDPV: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.acceptanceCriteria}
                            onChange={(e) => {
                              const newData = [...gridDatas.bufferFSDPV];
                              newData[index].acceptanceCriteria = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                bufferFSDPV: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.results.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.bufferFSDPV];
                              newData[index].results.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                bufferFSDPV: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.results.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.bufferFSDPV];
                              newData[index].results.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                bufferFSDPV: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.bufferFSDPV];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                bufferFSDPV: newData,
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
                // data={manufacturingStage}
                // setimportedData={setimportedData}
                // fileName="manufacturingStage.xlsx"
                // gridNo={1}
                />{" "}
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
                {gridDatas?.manufacturingSD?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...gridDatas.manufacturingSD];
                            newData[index].criticalProcessParameter = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...gridDatas.manufacturingSD];
                            newData[index].codes = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...gridDatas.manufacturingSD];
                            newData[index].acceptanceCriteria = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>

                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...gridDatas.manufacturingSD];
                            newData[index].results.minimum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...gridDatas.manufacturingSD];
                            newData[index].results.maximum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              manufacturingSD: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...gridDatas.manufacturingSD];
                            newData[index].compliesNotComplies = e.target.value;
                            setGridDatas({
                              ...gridDatas,
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
                {gridDatas?.unitOperation3?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation3];
                            newData[index].criticalProcessParameter = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation3: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation3];
                            newData[index].codes = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation3: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation3];
                            newData[index].acceptanceCriteria = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation3: newData,
                            });
                          }}
                        />
                      </td>

                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation3];
                            newData[index].results.minimum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation3: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation3];
                            newData[index].results.maximum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation3: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation3];
                            newData[index].compliesNotComplies = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation3: newData,
                            });
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
                {gridDatas?.unitOperation4?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation4];
                            newData[index].criticalProcessParameter = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation4: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation4];
                            newData[index].codes = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation4: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation4];
                            newData[index].acceptanceCriteria = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation4: newData,
                            });
                          }}
                        />
                      </td>

                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation4];
                            newData[index].results.minimum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation4: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation4];
                            newData[index].results.maximum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation4: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation4];
                            newData[index].compliesNotComplies = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation4: newData,
                            });
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
                {gridDatas?.unitOperation5?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation5];
                            newData[index].criticalProcessParameter = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation5: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation5];
                            newData[index].codes = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation5: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation5];
                            newData[index].acceptanceCriteria = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation5: newData,
                            });
                          }}
                        />
                      </td>

                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation5];
                            newData[index].results.minimum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation5: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation5];
                            newData[index].results.maximum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation5: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation5];
                            newData[index].compliesNotComplies = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation5: newData,
                            });
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
                {gridDatas?.unitOperation6?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation6];
                            newData[index].criticalProcessParameter = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation6: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation6];
                            newData[index].codes = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation6: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation6];
                            newData[index].acceptanceCriteria = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation6: newData,
                            });
                          }}
                        />
                      </td>

                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation6];
                            newData[index].results.minimum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation6: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation6];
                            newData[index].results.maximum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation6: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation6];
                            newData[index].compliesNotComplies = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation6: newData,
                            });
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
                {gridDatas?.unitOperation7?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation7];
                            newData[index].criticalProcessParameter = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation7: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation7];
                            newData[index].codes = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation7: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation7];
                            newData[index].acceptanceCriteria = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation7: newData,
                            });
                          }}
                        />
                      </td>

                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation7];
                            newData[index].results.minimum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation7: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation7];
                            newData[index].results.maximum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation7: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation7];
                            newData[index].compliesNotComplies = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation7: newData,
                            });
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
                {gridDatas?.unitOperation8?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation8];
                            newData[index].criticalProcessParameter = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation8: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation8];
                            newData[index].codes = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation8: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation8];
                            newData[index].acceptanceCriteria = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation8: newData,
                            });
                          }}
                        />
                      </td>

                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation8];
                            newData[index].results.minimum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation8: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation8];
                            newData[index].results.maximum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation8: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation8];
                            newData[index].compliesNotComplies = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation8: newData,
                            });
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
                {gridDatas?.unitOperation9?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation9];
                            newData[index].criticalProcessParameter = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation9: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation9];
                            newData[index].codes = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation9: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation9];
                            newData[index].acceptanceCriteria = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation9: newData,
                            });
                          }}
                        />
                      </td>

                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation9];
                            newData[index].results.minimum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation9: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation9];
                            newData[index].results.maximum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation9: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation9];
                            newData[index].compliesNotComplies = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation9: newData,
                            });
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
                {gridDatas?.unitOperation10?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          value={item.criticalProcessParameter}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation10];
                            newData[index].criticalProcessParameter = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.codes}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation10];
                            newData[index].codes = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.acceptanceCriteria}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation10];
                            newData[index].acceptanceCriteria = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>

                      <td>
                        <input
                          value={item.results.minimum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation10];
                            newData[index].results.minimum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.results.maximum}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation10];
                            newData[index].results.maximum = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              unitOperation10: newData,
                            });
                          }}
                        />
                      </td>
                      <td>
                        <input
                          value={item.compliesNotComplies}
                          onChange={(e) => {
                            const newData = [...gridDatas.unitOperation10];
                            newData[index].compliesNotComplies = e.target.value;
                            setGridDatas({
                              ...gridDatas,
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

            <div className="sub-head">Critical Process Parameters Review Summary</div>
            <div className="group-input">
              {/* <input placeholder="please insert flex" /> */}
              <TinyEditor
                editorContent={tinyData.tiny26}
                setEditorContent={setTinyContent}
                tinyNo={26}
              />
            </div>
          </div>
        ) : null}
        {tab === "LR" ? (
          <div className="p-4">
            <div className="sub-head"> Review of Drug Substance Test Results</div>
            <h1 className="gridName"> pH Of Paracetamol Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.reviewODSTR}
                    setimportedData={setimportedData}
                    fileName="Paracetamol pH Test Results.xlsx"
                    gridNo={22}
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
                  {gridDatas?.reviewODSTR?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR: newData,
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
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                pH Of Paracetamol Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analytics"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={6}
                  yMin={1}
                  yTickInterval={0.5}
                  plotLines={ParacetamolpHPlotLines}
                  zones={paracetamolpHZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  data={paracetamolpHDataH.observedValues}
                  lsl={phChartsConfig.lsl}
                  usl={phChartsConfig.usl}
                  heading={phChartsConfig.histoHeading}
                  yAxisTitle={phChartsConfig.yAxisTitle}
                  xAxisTitle={phChartsConfig.xAxisTitle}
                  bins={phChartsConfig.bins}
                  plotLines={phChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>4.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  data={paracetamolpHDataH.observedValues}
                  lsl={phChartsConfig.lsl}
                  usl={phChartsConfig.usl}
                  heading={phChartsConfig.paretoHeading}
                  yAxisTitle={phChartsConfig.yAxisTitle}
                  bins={phChartsConfig.bins}
                  plotLines={phChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={paracetamolpHDataH.observedValues}
                  batchNumbers={paracetamolpHDataH.batchNumbers}
                  lsl={phChartsConfig.lsl}
                  usl={phChartsConfig.usl}
                  heading={phChartsConfig.scatterHeading}
                  yAxisTitle={phChartsConfig.yAxisTitle}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName  pt-8">Assay Of Paracetamol Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow2} />
                  <div className="addrowinstruction pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR2}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR2.xlsx"
                  gridNo={23}
                  />{" "}
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
                  {gridDatas?.reviewODSTR2?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR2];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR2: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR2];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR2];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR2];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR2: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR2];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR2];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR2];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR2];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR2: newData,
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                Assay Of Paracetamol Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analytics"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={110}
                  yMin={86}
                  yTickInterval={3}
                  plotLines={ParacetamolAssayPlotLines}
                  zones={paracetamolAssayZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData2}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={paracetamolAssayData.observedValues}
                  lsl={assayChartsConfig.lsl}
                  usl={assayChartsConfig.usl}
                  heading={assayChartsConfig.histoHeading}
                  yAxisTitle={assayChartsConfig.yAxisTitle}
                  xAxisTitle={assayChartsConfig.xAxisTitle}
                  bins={assayChartsConfig.bins}
                  plotLines={assayChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <AnalyticsTable />
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={paracetamolAssayData.observedValues}
                  lsl={assayChartsConfig.lsl}
                  usl={assayChartsConfig.usl}
                  heading={assayChartsConfig.paretoHeading}
                  yAxisTitle={assayChartsConfig.yAxisTitle}
                  bins={assayChartsConfig.bins}
                  plotLines={assayChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={paracetamolAssayData.observedValues}
                  batchNumbers={paracetamolAssayData.batchNumbers}
                  lsl={assayChartsConfig.lsl}
                  usl={assayChartsConfig.usl}
                  heading={assayChartsConfig.scatterHeading}
                  yAxisTitle={assayChartsConfig.yAxisTitle}
                  max={assayChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Impurity Of Paracetamol Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow3} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR3}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR3.xlsx"
                  gridNo={24}
                  />{" "}
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
                  {gridDatas?.reviewODSTR3?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR3];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR3: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR3];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR3];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR3];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR3: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR3];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR3];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR3];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR3];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR3: newData,
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                Impurity Of Paracetamol Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analysis"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={7}
                  yMin={3}
                  yTickInterval={0.5}
                  plotLines={ParacetamolImpurityPlotLines}
                  zones={paracetamolImpurityZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData3}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={paracetamolImpurityData.observedValues}
                  lsl={impurityChartsConfig.lsl}
                  usl={impurityChartsConfig.usl}
                  heading={impurityChartsConfig.histoHeading}
                  yAxisTitle={impurityChartsConfig.yAxisTitle}
                  xAxisTitle={impurityChartsConfig.xAxisTitle}
                  bins={impurityChartsConfig.bins}
                  plotLines={impurityChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>4.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>6.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={paracetamolImpurityData.observedValues}
                  lsl={impurityChartsConfig.lsl}
                  usl={impurityChartsConfig.usl}
                  heading={impurityChartsConfig.paretoHeading}
                  yAxisTitle={impurityChartsConfig.yAxisTitle}
                  bins={impurityChartsConfig.bins}
                  plotLines={impurityChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={paracetamolImpurityData.observedValues}
                  batchNumbers={paracetamolImpurityData.batchNumbers}
                  lsl={impurityChartsConfig.lsl}
                  usl={impurityChartsConfig.usl}
                  heading={impurityChartsConfig.scatterHeading}
                  yAxisTitle={impurityChartsConfig.yAxisTitle}
                  max={impurityChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Dissolution Of Paracetamol Test Result</h1>
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
                  data={gridDatas.reviewODSTR4}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR4.xlsx"
                  gridNo={25}
                  />{" "}
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
                  {gridDatas?.reviewODSTR4?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR4];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR4: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR4];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR4];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR4];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR4: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR4];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR4];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR4];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR4];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR4: newData,
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                Dissolution Of Paracetamol Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analytics"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={6}
                  yMin={0}
                  yTickInterval={0.8}
                  plotLines={ParacetamolDissolutionPlotLines}
                  zones={paracetamolDissolutionZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData4}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={paracetamolDissolutionData.observedValues}
                  lsl={dissolutionChartsConfig.lsl}
                  usl={dissolutionChartsConfig.usl}
                  heading={dissolutionChartsConfig.histoHeading}
                  yAxisTitle={dissolutionChartsConfig.yAxisTitle}
                  xAxisTitle={dissolutionChartsConfig.xAxisTitle}
                  bins={dissolutionChartsConfig.bins}
                  plotLines={dissolutionChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>6.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={paracetamolDissolutionData.observedValues}
                  lsl={dissolutionChartsConfig.lsl}
                  usl={dissolutionChartsConfig.usl}
                  heading={dissolutionChartsConfig.paretoHeading}
                  yAxisTitle={dissolutionChartsConfig.yAxisTitle}
                  bins={dissolutionChartsConfig.bins}
                  plotLines={dissolutionChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={paracetamolDissolutionData.observedValues}
                  batchNumbers={paracetamolDissolutionData.batchNumbers}
                  lsl={dissolutionChartsConfig.lsl}
                  usl={dissolutionChartsConfig.usl}
                  heading={dissolutionChartsConfig.scatterHeading}
                  yAxisTitle={dissolutionChartsConfig.yAxisTitle}
                  max={dissolutionChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Disintegration Of Paracetamol Test Result</h1>
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
                  data={gridDatas.reviewODSTR5}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR5.xlsx"
                  gridNo={26}
                  />{" "}
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
                  {gridDatas?.reviewODSTR5?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR5];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR5: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR5];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR5];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR5];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR5: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR5];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR5];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR5];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR5];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR5: newData,
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                Disintegration Of Paracetamol Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={""}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={100}
                  yMin={75}
                  yTickInterval={7}
                  plotLines={ParacetamolDisintegratePlotLines}
                  zones={paracetamolDisinterationZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData5}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={paracetamolDisIntegrationData.observedValues}
                  lsl={disIntegrationChartsConfig.lsl}
                  usl={disIntegrationChartsConfig.usl}
                  heading={disIntegrationChartsConfig.histoHeading}
                  yAxisTitle={disIntegrationChartsConfig.yAxisTitle}
                  xAxisTitle={disIntegrationChartsConfig.xAxisTitle}
                  bins={disIntegrationChartsConfig.bins}
                  plotLines={disIntegrationChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>4.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={paracetamolDisIntegrationData.observedValues}
                  lsl={disIntegrationChartsConfig.lsl}
                  usl={disIntegrationChartsConfig.usl}
                  heading={disIntegrationChartsConfig.paretoHeading}
                  yAxisTitle={disIntegrationChartsConfig.yAxisTitle}
                  bins={disIntegrationChartsConfig.bins}
                  plotLines={disIntegrationChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={paracetamolDisIntegrationData.observedValues}
                  batchNumbers={paracetamolDisIntegrationData.batchNumbers}
                  lsl={disIntegrationChartsConfig.lsl}
                  usl={disIntegrationChartsConfig.usl}
                  heading={disIntegrationChartsConfig.scatterHeading}
                  yAxisTitle={disIntegrationChartsConfig.yAxisTitle}
                  max={disIntegrationChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">pH Of Terbinafine Test Result</h1>
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
                  data={gridDatas.reviewODSTR6}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR6.xlsx"
                  gridNo={27}
                  />{" "}
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
                  {gridDatas?.reviewODSTR6?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR6];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR6: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR6];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR6];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR6];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR6: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR6];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR6];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR6];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR6];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR6: newData,
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                pH Of Terbinafine Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analytics"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={6}
                  yMin={1}
                  yTickInterval={0.5}
                  plotLines={ParacetamolpHPlotLines}
                  zones={paracetamolpHZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData6}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  data={terbinafinepHDataH.observedValues}
                  lsl={phChartsConfig.lsl}
                  usl={phChartsConfig.usl}
                  heading={phChartsConfig.histoHeading}
                  yAxisTitle={phChartsConfig.yAxisTitle}
                  xAxisTitle={phChartsConfig.xAxisTitle}
                  bins={phChartsConfig.bins}
                  plotLines={phChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>4.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  data={terbinafinepHDataH.observedValues}
                  lsl={phChartsConfig.lsl}
                  usl={phChartsConfig.usl}
                  heading={phChartsConfig.paretoHeading}
                  yAxisTitle={phChartsConfig.yAxisTitle}
                  bins={phChartsConfig.bins}
                  plotLines={phChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={terbinafinepHDataH.observedValues}
                  batchNumbers={terbinafinepHDataH.batchNumbers}
                  lsl={phChartsConfig.lsl}
                  usl={phChartsConfig.usl}
                  heading={phChartsConfig.scatterHeading}
                  yAxisTitle={phChartsConfig.yAxisTitle}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Assay Of Terbinafine Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow7} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR7}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR7.xlsx"
                  gridNo={28}
                  />{" "}
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
                  {gridDatas?.reviewODSTR7?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR7];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR7: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR7];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR7];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR7];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR7: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR7];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR7];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR7];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR7];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR7: newData,
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                Assay Of Terbinafine Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analytics"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={110}
                  yMin={86}
                  yTickInterval={3}
                  plotLines={ParacetamolAssayPlotLines}
                  zones={paracetamolAssayZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData7}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={terbinafineAssayData.observedValues}
                  lsl={assayChartsConfig.lsl}
                  usl={assayChartsConfig.usl}
                  heading={assayChartsConfig.histoHeading}
                  yAxisTitle={assayChartsConfig.yAxisTitle}
                  xAxisTitle={assayChartsConfig.xAxisTitle}
                  bins={assayChartsConfig.bins}
                  plotLines={assayChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <AnalyticsTable />
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={terbinafineAssayData.observedValues}
                  lsl={assayChartsConfig.lsl}
                  usl={assayChartsConfig.usl}
                  heading={assayChartsConfig.paretoHeading}
                  yAxisTitle={assayChartsConfig.yAxisTitle}
                  bins={assayChartsConfig.bins}
                  plotLines={assayChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={terbinafineAssayData.observedValues}
                  batchNumbers={terbinafineAssayData.batchNumbers}
                  lsl={assayChartsConfig.lsl}
                  usl={assayChartsConfig.usl}
                  heading={assayChartsConfig.scatterHeading}
                  yAxisTitle={assayChartsConfig.yAxisTitle}
                  max={assayChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Impurity Of Terbinafine Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow8} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR8}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR8.xlsx"
                  gridNo={29}
                  />{" "}
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
                  {gridDatas?.reviewODSTR8?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR8];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR8: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR8];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR8];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR8];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR8: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR8];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR8];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR8];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR8];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR8: newData,
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                Impurity Of Terbinafine Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analysis"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={7}
                  yMin={3}
                  yTickInterval={0.5}
                  plotLines={ParacetamolImpurityPlotLines}
                  zones={paracetamolImpurityZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData8}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={terbinafineImpurityData.observedValues}
                  lsl={impurityChartsConfig.lsl}
                  usl={impurityChartsConfig.usl}
                  heading={impurityChartsConfig.histoHeading}
                  yAxisTitle={impurityChartsConfig.yAxisTitle}
                  xAxisTitle={impurityChartsConfig.xAxisTitle}
                  bins={impurityChartsConfig.bins}
                  plotLines={impurityChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>4.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>6.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={terbinafineImpurityData.observedValues}
                  lsl={impurityChartsConfig.lsl}
                  usl={impurityChartsConfig.usl}
                  heading={impurityChartsConfig.paretoHeading}
                  yAxisTitle={impurityChartsConfig.yAxisTitle}
                  bins={impurityChartsConfig.bins}
                  plotLines={impurityChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={terbinafineImpurityData.observedValues}
                  batchNumbers={terbinafineImpurityData.batchNumbers}
                  lsl={impurityChartsConfig.lsl}
                  usl={impurityChartsConfig.usl}
                  heading={impurityChartsConfig.scatterHeading}
                  yAxisTitle={impurityChartsConfig.yAxisTitle}
                  max={impurityChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Dissolution Of Terbinafine Test Result</h1>
            <div>
              {/* <div className="AddRows d-flex">
    <MdNoteAdd onClick={addReviewODSTRRow} />
    <div className="addrowinstruction"></div>
  </div> */}
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow9} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR9}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR9.xlsx"
                  gridNo={30}
                  />{" "}
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
                  {gridDatas?.reviewODSTR9?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR9];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR9: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR9];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR9];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR9];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR9: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR9];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR9];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR9];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR9];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR9: newData,
                              });
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                Dissolution Of Terbinafine Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analytics"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={6}
                  yMin={0}
                  yTickInterval={0.8}
                  plotLines={ParacetamolDissolutionPlotLines}
                  zones={paracetamolDissolutionZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData9}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={terbinafineDissolutionData.observedValues}
                  lsl={dissolutionChartsConfig.lsl}
                  usl={dissolutionChartsConfig.usl}
                  heading={dissolutionChartsConfig.histoHeading}
                  yAxisTitle={dissolutionChartsConfig.yAxisTitle}
                  xAxisTitle={dissolutionChartsConfig.xAxisTitle}
                  bins={dissolutionChartsConfig.bins}
                  plotLines={dissolutionChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>6.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={terbinafineDissolutionData.observedValues}
                  lsl={dissolutionChartsConfig.lsl}
                  usl={dissolutionChartsConfig.usl}
                  heading={dissolutionChartsConfig.paretoHeading}
                  yAxisTitle={dissolutionChartsConfig.yAxisTitle}
                  bins={dissolutionChartsConfig.bins}
                  plotLines={dissolutionChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={terbinafineDissolutionData.observedValues}
                  batchNumbers={terbinafineDissolutionData.batchNumbers}
                  lsl={dissolutionChartsConfig.lsl}
                  usl={dissolutionChartsConfig.usl}
                  heading={dissolutionChartsConfig.scatterHeading}
                  yAxisTitle={dissolutionChartsConfig.yAxisTitle}
                  max={dissolutionChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Disintegration Of Terbinafine Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow10} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR10}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR10.xlsx"
                  gridNo={31}
                  />{" "}
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
                  {gridDatas?.reviewODSTR10?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR10];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR10: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR10];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR10];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR10];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR10: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR10];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR10];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR10];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR10];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR10: newData,
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
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                Disintegration Of Terbinafine Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={""}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={100}
                  yMin={75}
                  yTickInterval={7}
                  plotLines={ParacetamolDisintegratePlotLines}
                  zones={paracetamolDisinterationZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData10}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={terbinafineDisIntegrationData.observedValues}
                  lsl={disIntegrationChartsConfig.lsl}
                  usl={disIntegrationChartsConfig.usl}
                  heading={disIntegrationChartsConfig.histoHeading}
                  yAxisTitle={disIntegrationChartsConfig.yAxisTitle}
                  xAxisTitle={disIntegrationChartsConfig.xAxisTitle}
                  bins={disIntegrationChartsConfig.bins}
                  plotLines={disIntegrationChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>4.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={terbinafineDisIntegrationData.observedValues}
                  lsl={disIntegrationChartsConfig.lsl}
                  usl={disIntegrationChartsConfig.usl}
                  heading={disIntegrationChartsConfig.paretoHeading}
                  yAxisTitle={disIntegrationChartsConfig.yAxisTitle}
                  bins={disIntegrationChartsConfig.bins}
                  plotLines={disIntegrationChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={terbinafineDisIntegrationData.observedValues}
                  batchNumbers={terbinafineDisIntegrationData.batchNumbers}
                  lsl={disIntegrationChartsConfig.lsl}
                  usl={disIntegrationChartsConfig.usl}
                  heading={disIntegrationChartsConfig.scatterHeading}
                  yAxisTitle={disIntegrationChartsConfig.yAxisTitle}
                  max={disIntegrationChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">pH Of Pentoprazole Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow11} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR11}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR11.xlsx"
                  gridNo={32}
                  />{" "}
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
                  {gridDatas?.reviewODSTR11?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR11];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR11: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR11];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR11: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR11];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR11: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR11];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR11: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR11];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR11: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR11];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR11: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR11];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR11: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR11];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR11: newData,
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
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                pH Of Pentoprazole Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analytics"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={6}
                  yMin={1}
                  yTickInterval={0.5}
                  plotLines={ParacetamolpHPlotLines}
                  zones={paracetamolpHZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData11}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  data={pentoprazolepHDataH.observedValues}
                  lsl={phChartsConfig.lsl}
                  usl={phChartsConfig.usl}
                  heading={phChartsConfig.histoHeading}
                  yAxisTitle={phChartsConfig.yAxisTitle}
                  xAxisTitle={phChartsConfig.xAxisTitle}
                  bins={phChartsConfig.bins}
                  plotLines={phChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>4.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  data={pentoprazolepHDataH.observedValues}
                  lsl={phChartsConfig.lsl}
                  usl={phChartsConfig.usl}
                  heading={phChartsConfig.paretoHeading}
                  yAxisTitle={phChartsConfig.yAxisTitle}
                  bins={phChartsConfig.bins}
                  plotLines={phChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={pentoprazolepHDataH.observedValues}
                  batchNumbers={pentoprazolepHDataH.batchNumbers}
                  lsl={phChartsConfig.lsl}
                  usl={phChartsConfig.usl}
                  heading={phChartsConfig.scatterHeading}
                  yAxisTitle={phChartsConfig.yAxisTitle}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Assay Of Pentoprazole Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow12} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR12}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR12.xlsx"
                  gridNo={33}
                  />{" "}
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
                  {gridDatas?.reviewODSTR12?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR12];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR12: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR12];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR12: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR12];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR12: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR12];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR12: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR12];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR12: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR12];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR12: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR12];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR12: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR12];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR12: newData,
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
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                Assay Of Pentoprazole Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analytics"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={110}
                  yMin={86}
                  yTickInterval={3}
                  plotLines={ParacetamolAssayPlotLines}
                  zones={paracetamolAssayZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData12}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={pentoprazoleAssayData.observedValues}
                  lsl={assayChartsConfig.lsl}
                  usl={assayChartsConfig.usl}
                  heading={assayChartsConfig.histoHeading}
                  yAxisTitle={assayChartsConfig.yAxisTitle}
                  xAxisTitle={assayChartsConfig.xAxisTitle}
                  bins={assayChartsConfig.bins}
                  plotLines={assayChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <AnalyticsTable />
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={pentoprazoleAssayData.observedValues}
                  lsl={assayChartsConfig.lsl}
                  usl={assayChartsConfig.usl}
                  heading={assayChartsConfig.paretoHeading}
                  yAxisTitle={assayChartsConfig.yAxisTitle}
                  bins={assayChartsConfig.bins}
                  plotLines={assayChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={pentoprazoleAssayData.observedValues}
                  batchNumbers={pentoprazoleAssayData.batchNumbers}
                  lsl={assayChartsConfig.lsl}
                  usl={assayChartsConfig.usl}
                  heading={assayChartsConfig.scatterHeading}
                  yAxisTitle={assayChartsConfig.yAxisTitle}
                  max={assayChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Impurity Of Pentoprazole Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow13} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR13}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR13.xlsx"
                  gridNo={34}
                  />{" "}
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
                  {gridDatas?.reviewODSTR13?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR13];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR13: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR13];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR13: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR13];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR13: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR13];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR13: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR13];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR13: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR13];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR13: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR13];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR13: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR13];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR13: newData,
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
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                Impurity Of Pentoprazole Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analysis"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={7}
                  yMin={3}
                  yTickInterval={0.5}
                  plotLines={ParacetamolImpurityPlotLines}
                  zones={paracetamolImpurityZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData13}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={pentoprazoleImpurityData.observedValues}
                  lsl={impurityChartsConfig.lsl}
                  usl={impurityChartsConfig.usl}
                  heading={impurityChartsConfig.histoHeading}
                  yAxisTitle={impurityChartsConfig.yAxisTitle}
                  xAxisTitle={impurityChartsConfig.xAxisTitle}
                  bins={impurityChartsConfig.bins}
                  plotLines={impurityChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>4.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>6.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={pentoprazoleImpurityData.observedValues}
                  lsl={impurityChartsConfig.lsl}
                  usl={impurityChartsConfig.usl}
                  heading={impurityChartsConfig.paretoHeading}
                  yAxisTitle={impurityChartsConfig.yAxisTitle}
                  bins={impurityChartsConfig.bins}
                  plotLines={impurityChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={pentoprazoleImpurityData.observedValues}
                  batchNumbers={pentoprazoleImpurityData.batchNumbers}
                  lsl={impurityChartsConfig.lsl}
                  usl={impurityChartsConfig.usl}
                  heading={impurityChartsConfig.scatterHeading}
                  yAxisTitle={impurityChartsConfig.yAxisTitle}
                  max={impurityChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Dissolution Of Pentoprazole Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow14} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR14}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR14.xlsx"
                  gridNo={35}
                  />{" "}
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
                  {gridDatas?.reviewODSTR14?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR14];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR14: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR14];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR14: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR14];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR14: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR14];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR14: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR14];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR14: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR14];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR14: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR14];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR14: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR14];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR14: newData,
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
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                Dissolution Of Pentoprazole Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={"Line Analytics"}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={6}
                  yMin={0}
                  yTickInterval={0.8}
                  plotLines={ParacetamolDissolutionPlotLines}
                  zones={paracetamolDissolutionZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData14}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={pentoprazoleDissolutionData.observedValues}
                  lsl={dissolutionChartsConfig.lsl}
                  usl={dissolutionChartsConfig.usl}
                  heading={dissolutionChartsConfig.histoHeading}
                  yAxisTitle={dissolutionChartsConfig.yAxisTitle}
                  xAxisTitle={dissolutionChartsConfig.xAxisTitle}
                  bins={dissolutionChartsConfig.bins}
                  plotLines={dissolutionChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>6.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={pentoprazoleDissolutionData.observedValues}
                  lsl={dissolutionChartsConfig.lsl}
                  usl={dissolutionChartsConfig.usl}
                  heading={dissolutionChartsConfig.paretoHeading}
                  yAxisTitle={dissolutionChartsConfig.yAxisTitle}
                  bins={dissolutionChartsConfig.bins}
                  plotLines={dissolutionChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={pentoprazoleDissolutionData.observedValues}
                  batchNumbers={pentoprazoleDissolutionData.batchNumbers}
                  lsl={dissolutionChartsConfig.lsl}
                  usl={dissolutionChartsConfig.usl}
                  heading={dissolutionChartsConfig.scatterHeading}
                  yAxisTitle={dissolutionChartsConfig.yAxisTitle}
                  max={dissolutionChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <h1 className="gridName pt-8">Disintegration Of Pentoprazole Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow15} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  data={gridDatas.reviewODSTR15}
                  setimportedData={setimportedData}
                  fileName="reviewODSTR15.xlsx"
                  gridNo={36}
                  />{" "}
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
                  {gridDatas?.reviewODSTR15?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <input
                          value={item.batchNo}
                          onChange={(e) => {
                            const newData = [...gridDatas.reviewODSTR15];
                            newData[index].batchNo = e.target.value;
                            setGridDatas({
                              ...gridDatas,
                              reviewODSTR15: newData,
                            });
                          }}
                        />
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR15];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR15: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.LSL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR15];
                              newData[index].LSL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR15: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.USL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR15];
                              newData[index].USL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR15: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            type="number"
                            value={item.LCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR15];
                              newData[index].LCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR15: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.UCL}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR15];
                              newData[index].UCL = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR15: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.observedValue}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR15];
                              newData[index].observedValue = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR15: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODSTR15];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODSTR15: newData,
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
            <div className=" grid grid-cols-10 shadow-md shadow-gray-700/30 my-20 bg-slate-700 p-4 gap-4 mx-[-30px]">
              <div className="py-2 col-span-10 cursor-pointer text-gray-100 text-[22px] flex justify-center items-center">
                {" "}
                Disintegration Of Pentoprazole Analysis
              </div>
              <div className="col-span-4 row-span-1 mb-10 max-h-38 ">
                <HighchartsLine
                  heading={""}
                  xHeading={"Batch No."}
                  yHeading={"Observed Value"}
                  yMax={100}
                  yMin={75}
                  yTickInterval={7}
                  plotLines={ParacetamolDisintegratePlotLines}
                  zones={paracetamolDisinterationZones}
                  annotations={paracetamolAnnotations}
                  highchartData={paracetamolpHData15}
                />
              </div>
              <div className="col-span-4 row-span-1">
                <HighchartsHistogram
                  // phOfParacetamol={phChartsConfig}
                  data={pentoprazoleDisIntegrationData.observedValues}
                  lsl={disIntegrationChartsConfig.lsl}
                  usl={disIntegrationChartsConfig.usl}
                  heading={disIntegrationChartsConfig.histoHeading}
                  yAxisTitle={disIntegrationChartsConfig.yAxisTitle}
                  xAxisTitle={disIntegrationChartsConfig.xAxisTitle}
                  bins={disIntegrationChartsConfig.bins}
                  plotLines={disIntegrationChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-2 row-span-2 bg-white">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>4.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-4">
                <HighchartsPareto
                  // phOfParacetamol={phOfParacetamolPareto}
                  data={pentoprazoleDisIntegrationData.observedValues}
                  lsl={disIntegrationChartsConfig.lsl}
                  usl={disIntegrationChartsConfig.usl}
                  heading={disIntegrationChartsConfig.paretoHeading}
                  yAxisTitle={disIntegrationChartsConfig.yAxisTitle}
                  bins={disIntegrationChartsConfig.bins}
                  plotLines={disIntegrationChartsConfig.plotLines}
                />
              </div>
              <div className="col-span-4">
                <HighchartsScatterPlot
                  // phOfParacetamol={phOfParacetamolScatter}
                  data={pentoprazoleDisIntegrationData.observedValues}
                  batchNumbers={pentoprazoleDisIntegrationData.batchNumbers}
                  lsl={disIntegrationChartsConfig.lsl}
                  usl={disIntegrationChartsConfig.usl}
                  heading={disIntegrationChartsConfig.scatterHeading}
                  yAxisTitle={disIntegrationChartsConfig.yAxisTitle}
                  max={disIntegrationChartsConfig.max}
                />
              </div>
              <div className="py-2 flex justify-end col-span-10 ">
                <button className="p-2 bg-emerald-400 text-white rounded"> Launch Deviation</button>
              </div>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tinyData.tiny27}
                setEditorContent={setTinyContent}
                tinyNo={27}
              />
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewORMETR?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.material}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOPMTR];
                              newData[index].material = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOPMTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORMETR];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORMETR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORMETR];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORMETR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORMETR];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORMETR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORMETR];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORMETR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewORMETR];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewORMETR: newData,
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
                editorContent={tinyData.tiny28}
                setEditorContent={setTinyContent}
                tinyNo={28}
              />
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewOPMTR?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.material}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOPMTR];
                              newData[index].material = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOPMTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOPMTR];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOPMTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOPMTR];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOPMTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOPMTR];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOPMTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOPMTR];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOPMTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOPMTR];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOPMTR: newData,
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
                editorContent={tinyData.tiny29}
                setEditorContent={setTinyContent}
                tinyNo={29}
              />
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOPMTR];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOPMTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP: newData,
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP2?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP2];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP2];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP2];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP2];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP2];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP2];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP2: newData,
                              });
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP3?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP3];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP3];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP3];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP3];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP3];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP3];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP3: newData,
                              });
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP4?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP4];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP4];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP4];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP4];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP4];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP4];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP4: newData,
                              });
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP5?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP5];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP5];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP5];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP5];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP5];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP5];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP5: newData,
                              });
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP6?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP6];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP6];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP6];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP6];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP6];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP6: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP6];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP6: newData,
                              });
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP7?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP7];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP7];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP7];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP7];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP7];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP7: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP7];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP7: newData,
                              });
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP8?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP8];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP8];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP8];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP8];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP8];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP8: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP8];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP8: newData,
                              });
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP9?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP9];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP9];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP9];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP9];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP9];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP9: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP9];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP9: newData,
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODP10?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP10];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stage}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP10];
                              newData[index].stage = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP10];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP10];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP10];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP10: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODP10];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODP10: newData,
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
                editorContent={tinyData.tiny30}
                setEditorContent={setTinyContent}
                tinyNo={30}
              />
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.reviewODPFPTR?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.testsParameter}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODPFPTR];
                              newData[index].testsParameter = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODPFPTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.specificationLimit}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODPFPTR];
                              newData[index].specificationLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODPFPTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.minimum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODPFPTR];
                              newData[index].obtainedValue.minimum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODPFPTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.obtainedValue.maximum}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODPFPTR];
                              newData[index].obtainedValue.maximum = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODPFPTR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.compliesNotComplies}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewODPFPTR];
                              newData[index].compliesNotComplies = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewODPFPTR: newData,
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
                editorContent={tinyData.tiny31}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.summaryOOSS?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.summaryOOSS];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                summaryOOSS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.type}
                            onChange={(e) => {
                              const newData = [...gridDatas.summaryOOSS];
                              newData[index].type = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                summaryOOSS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.storageCondition}
                            onChange={(e) => {
                              const newData = [...gridDatas.summaryOOSS];
                              newData[index].storageCondition = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                summaryOOSS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testingInterval}
                            onChange={(e) => {
                              const newData = [...gridDatas.summaryOOSS];
                              newData[index].testingInterval = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                summaryOOSS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.stabilityProtocolNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.summaryOOSS];
                              newData[index].stabilityProtocolNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                summaryOOSS: newData,
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
                <h4 className="gridName mt-5">Summary</h4>
                <TinyEditor
                  editorContent={tinyData.tiny32}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.stabilitySR?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.stabilitySR];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                stabilitySR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.testingIntervalMonths}
                            onChange={(e) => {
                              const newData = [...gridDatas.stabilitySR];
                              newData[index].testingIntervalMonths = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                stabilitySR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.OOSNumber}
                            onChange={(e) => {
                              const newData = [...gridDatas.stabilitySR];
                              newData[index].OOSNumber = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                stabilitySR: newData,
                              });
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
                editorContent={tinyData.tiny33}
                setEditorContent={setTinyContent}
                tinyNo={33}
              />

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
                    // data={manufacturingStage}
                    // setimportedData={setimportedData}
                    // fileName="manufacturingStage.xlsx"
                    // gridNo={1}
                    />{" "}
                  </div>
                </div>
                <table>
                  <thead>
                    <th className="text-center" colSpan={9}>
                      Batch Numbers
                    </th>
                  </thead>
                  <tbody>
                    {gridDatas?.reviewOVIRS?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.column1}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOVIRS];
                                newData[index].column1 = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOVIRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column2}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOVIRS];
                                newData[index].column2 = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOVIRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column3}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOVIRS];
                                newData[index].column3 = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOVIRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column4}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOVIRS];
                                newData[index].column4 = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOVIRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column5}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOVIRS];
                                newData[index].column5 = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOVIRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column6}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOVIRS];
                                newData[index].column6 = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOVIRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column7}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOVIRS];
                                newData[index].column7 = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOVIRS: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.column8}
                              onChange={(e) => {
                                const newData = [...gridDatas.reviewOVIRS];
                                newData[index].column8 = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  reviewOVIRS: newData,
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
              <h4 className="gridName mt-4">Summary</h4>
              <TinyEditor
                editorContent={tinyData.tiny34}
                setEditorContent={setTinyContent}
                tinyNo={34}
              />
              <h4 className="gridName pt-4">Review of Analytical Method Validations</h4>
              <TinyEditor
                editorContent={tinyData.tiny35}
                setEditorContent={setTinyContent}
                tinyNo={35}
              />
              <h4 className="gridName pt-4">Review of Contract Testing Laboratories</h4>
              <TinyEditor
                editorContent={tinyData.tiny36}
                setEditorContent={setTinyContent}
                tinyNo={36}
              />
              <h4 className="gridName pt-4">
                Review of Environmental Monitoring Trend and water trends Reports
              </h4>
              <TinyEditor
                editorContent={tinyData.tiny37}
                setEditorContent={setTinyContent}
                tinyNo={37}
              />
              <h4 className="gridName pt-4">Laboratory Review Summary</h4>
              <TinyEditor
                editorContent={tinyData.tiny38}
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
              editorContent={tinyData.tiny39}
              setEditorContent={setTinyContent}
              tinyNo={39}
            />
            <h4 className="gridName pt-4"> Qualification details</h4>
            <TinyEditor
              editorContent={tinyData.tiny40}
              setEditorContent={setTinyContent}
              tinyNo={40}
            />
            <h4 className="gridName pt-4"> Calibration Details</h4>
            <TinyEditor
              editorContent={tinyData.tiny41}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.hVACQStatus?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.testDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.hVACQStatus];
                              newData[index].testDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                hVACQStatus: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.frequency}
                            onChange={(e) => {
                              const newData = [...gridDatas.hVACQStatus];
                              newData[index].frequency = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                hVACQStatus: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.status}
                            onChange={(e) => {
                              const newData = [...gridDatas.hVACQStatus];
                              newData[index].status = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                hVACQStatus: newData,
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
                editorContent={tinyData.tiny42}
                setEditorContent={setTinyContent}
                tinyNo={42}
              />
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.sanitizationASDOU?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.equipmentName}
                            onChange={(e) => {
                              const newData = [...gridDatas.sanitizationASDOU];
                              newData[index].equipmentName = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                sanitizationASDOU: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.frequency}
                            onChange={(e) => {
                              const newData = [...gridDatas.sanitizationASDOU];
                              newData[index].frequency = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                sanitizationASDOU: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.status}
                            onChange={(e) => {
                              const newData = [...gridDatas.sanitizationASDOU];
                              newData[index].status = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                sanitizationASDOU: newData,
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
            <h4 className="gridName pt-4">Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny43}
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
                    Compressed gases testing performed as per the scheduled frequency and results
                    were found to be satisfactory, system is in qualified state
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.compressedGas?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.compressedGas}
                            onChange={(e) => {
                              const newData = [...gridDatas.compressedGas];
                              newData[index].compressedGas = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                compressedGas: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.test}
                            onChange={(e) => {
                              const newData = [...gridDatas.compressedGas];
                              newData[index].test = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                compressedGas: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.frequency}
                            onChange={(e) => {
                              const newData = [...gridDatas.compressedGas];
                              newData[index].frequency = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                compressedGas: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.status}
                            onChange={(e) => {
                              const newData = [...gridDatas.compressedGas];
                              newData[index].status = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                compressedGas: newData,
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
            <h4 className="gridName pt-4">Engineering Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny44}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.reviewOfCPD?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOfCPD];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOfCPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOfCPD];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOfCPD: newData,
                              });
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
                              const newData = [...gridDatas.reviewOfCPD];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOfCPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOfCPD];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOfCPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOfCPD];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOfCPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOfCPD];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOfCPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOfCPD];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOfCPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.reviewOfCPD];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                reviewOfCPD: newData,
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
            <div className="gridName pt-4">Previous Review Period Deviations</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewRPD} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.previewRPD?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewRPD];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewRPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewRPD];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewRPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewRPD];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewRPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewRPD];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewRPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewRPD];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewRPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewRPD];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewRPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewRPD];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewRPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewRPD];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewRPD: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewRPD];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewRPD: newData,
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
            <h4 className="gridName pt-4">Deviation Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny45}
              setEditorContent={setTinyContent}
              tinyNo={45}
            />
            <div className="sub-head"> Review of OOS (Microbiological)</div>
            <div className="gridName">Current Review Period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOS} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.currentOOS?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOS];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOS];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOS];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOS];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOS];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOS];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOS];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOS];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOS];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOS: newData,
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
            <div className="gridName pt-4">Previous Review Period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOS} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.previewOOS?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOS];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOS: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOS];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOS];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOS];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOS];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOS];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOS];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOS: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOS];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOS: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOS];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOS: newData,
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
            <h4 className="gridName pt-4">OOS Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny46}
              setEditorContent={setTinyContent}
              tinyNo={46}
            />
            <div className="sub-head"> Review of OOAC (Microbiological)</div>
            <div className="gridName">Current Review Period OOAC</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOAC} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.currentOOAC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAC];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAC];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAC];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAC];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAC];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAC];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAC];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAC];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAC];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAC: newData,
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
            <div className="gridName pt-4">Previous Review Period OOAC</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOAC} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.previewOOAC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAC];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAC: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAC];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAC];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAC];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAC];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAC];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAC];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAC];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAC: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAC];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAC: newData,
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
            <h4 className="gridName pt-4">OOAC Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny47}
              setEditorContent={setTinyContent}
              tinyNo={47}
            />
            <div className="sub-head"> Review of OOAL(Microbiological)</div>
            <div className="gridName">Current Review Period OOAL</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOAL} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.currentOOAL?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAL];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAL];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAL];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAL];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAL];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAL];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAL];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAL];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOAL];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOAL: newData,
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
            <div className="gridName pt-4">Previous Review Period OOAL</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOAL} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.previewOOAL?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAL];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAL: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAL];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAL];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAL];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAL];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAL];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAL];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAL: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAL];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAL: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOAL];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOAL: newData,
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
            <h4 className="gridName pt-4">OOAL Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny48}
              setEditorContent={setTinyContent}
              tinyNo={48}
            />
            <div className="sub-head">Review of OOS (Analytical)</div>
            <div className="gridName">Current review period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOSA} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.currentOOSA?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOSA];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOSA];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOSA];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOSA];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOSA];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOSA];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOSA];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOSA];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOSA];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOSA: newData,
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
            <div className="gridName pt-4">Previous review period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOSA} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.previewOOSA?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOSA];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOSA: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOSA];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOSA];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOSA];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOSA];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOSA];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOSA];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOSA: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOSA];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOSA: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOSA];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOSA: newData,
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
            <h4 className="gridName pt-4">OOSA Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny49}
              setEditorContent={setTinyContent}
              tinyNo={49}
            />
            <div className="sub-head">Review of OOT (Analytical)</div>
            <div className="gridName pt-4">Current Review Period OOT</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentOOT} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.currentOOT?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOT];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOT];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOT];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOT];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOT];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOT];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOT];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOT];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentOOT];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentOOT: newData,
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
            <div className="gridName pt-4">Previous review period OOS</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewOOT} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.previewOOT?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOT];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOT: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOT];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOT];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOT];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOT];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOT];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOT];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOT: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOT];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOT: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewOOT];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewOOT: newData,
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
            <h4 className="gridName pt-4">OOT Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny50}
              setEditorContent={setTinyContent}
              tinyNo={50}
            />
            <div className="sub-head">Review of Change Controls</div>
            <div className="gridName pt-4">Current Review Period Change Controls</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentCC} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.currentCC.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentCC];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentCC];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentCC];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentCC];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentCC];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentCC];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentCC];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentCC];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentCC];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentCC: newData,
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
            <div className="gridName pt-4">Previous Review Period Change Controls</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewCC} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.previewCC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewCC];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewCC: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewCC];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewCC];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewCC];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewCC];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewCC];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewCC];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewCC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewCC];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewCC: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewCC];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewCC: newData,
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
            <h4 className="gridName pt-4">Change Control Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny51}
              setEditorContent={setTinyContent}
              tinyNo={51}
            />
            <div className="sub-head">Review of Lab Incident</div>
            <div className="gridName pt-4">Current Review Lab Incident</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentLabI} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.currentLabI?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentLabI];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentLabI];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentLabI];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentLabI];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentLabI];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentLabI];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentLabI];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentLabI];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentLabI];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentLabI: newData,
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
            <div className="gridName pt-4">Previous Review Lab Incident</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewLabI} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.previewLabI.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewLabI];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewLabI: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewLabI];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewLabI];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewLabI];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewLabI];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewLabI];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewLabI];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewLabI: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewLabI];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewLabI: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewLabI];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewLabI: newData,
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
            <h4 className="gridName pt-4">Lab Incident Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny52}
              setEditorContent={setTinyContent}
              tinyNo={52}
            />
            <div className="sub-head">Review of Market Complaints</div>
            <div className="gridName pt-4">Current Review Period Complaints</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addCurrentMC} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.currentMC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentMC];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentMC];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentMC];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentMC];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentMC];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentMC];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentMC];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentMC];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentMC];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentMC: newData,
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
            <div className="gridName pt-4">Previous Review Period Complaints</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addPreviewMC} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
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
                  {gridDatas?.previewMC?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.dateOfInitiation}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewMC];
                              newData[index].dateOfInitiation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewMC: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.recordNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewMC];
                              newData[index].recordNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.siteDivision}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewMC];
                              newData[index].siteDivision = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.department}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewMC];
                              newData[index].department = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.initiator}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewMC];
                              newData[index].initiator = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.shortDescription}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewMC];
                              newData[index].shortDescription = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewMC];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewMC: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.dueDate}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewMC];
                              newData[index].dueDate = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewMC: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.currentStatus}
                            onChange={(e) => {
                              const newData = [...gridDatas.previewMC];
                              newData[index].currentStatus = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                previewMC: newData,
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
            <h4 className="gridName pt-4">Market Complaints Summary</h4>
            <TinyEditor
              editorContent={tinyData.tiny53}
              setEditorContent={setTinyContent}
              tinyNo={53}
            />
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
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.currentRPQRN?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentRPQRN: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.qualityRelatedNotification.no}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].qualityRelatedNotification.no = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentRPQRN: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.qualityRelatedNotification.description}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].qualityRelatedNotification.description =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentRPQRN: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.qualityRelatedNotification.impact}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].qualityRelatedNotification.impact = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentRPQRN: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.qualityRelatedNotification.status}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].qualityRelatedNotification.status = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentRPQRN: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.cAPA.descriptionNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].cAPA.descriptionNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentRPQRN: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.cAPA.status}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].cAPA.status = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentRPQRN: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.cAPA.eC}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].cAPA.eC = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                currentRPQRN: newData,
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
            <h4 className="gridName pt-4">previous Review Period Quality Related Notification</h4>
            <TinyEditor
              editorContent={tinyData.tiny54}
              setEditorContent={setTinyContent}
              tinyNo={54}
            />
            <h4 className="gridName pt-4">Review of Product Recalls</h4>
            <TinyEditor
              editorContent={tinyData.tiny55}
              setEditorContent={setTinyContent}
              tinyNo={55}
            />{" "}
            <h4 className="gridName pt-4">Review of Returned Products</h4>
            <TinyEditor
              editorContent={tinyData.tiny56}
              setEditorContent={setTinyContent}
              tinyNo={56}
            />{" "}
            <h4 className="gridName pt-4">Review of Salvaged Drugs</h4>
            <TinyEditor
              editorContent={tinyData.tiny57}
              setEditorContent={setTinyContent}
              tinyNo={57}
            />{" "}
            <h4 className="gridName pt-4">Review of previous PQR recommendations</h4>
            <TinyEditor
              editorContent={tinyData.tiny58}
              setEditorContent={setTinyContent}
              tinyNo={58}
            />{" "}
            <h4 className="gridName pt-4">Review of Quality Agreements</h4>
            <TinyEditor
              editorContent={tinyData.tiny59}
              setEditorContent={setTinyContent}
              tinyNo={59}
            />{" "}
            <h4 className="gridName pt-4">Review of Manufacturing Authorizations</h4>
            <TinyEditor
              editorContent={tinyData.tiny60}
              setEditorContent={setTinyContent}
              tinyNo={60}
            />{" "}
            <h4 className="gridName pt-4">Review of Open Validations</h4>
            <TinyEditor
              editorContent={tinyData.tiny61}
              setEditorContent={setTinyContent}
              tinyNo={61}
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
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                  // data={manufacturingStage}
                  // setimportedData={setimportedData}
                  // fileName="manufacturingStage.xlsx"
                  // gridNo={1}
                  />{" "}
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
                  {gridDatas?.dossierRR?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.agency}
                            onChange={(e) => {
                              const newData = [...gridDatas.dossierRR];
                              newData[index].agency = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                dossierRR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.notificationNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.dossierRR];
                              newData[index].notificationNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                dossierRR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.notificationType}
                            onChange={(e) => {
                              const newData = [...gridDatas.dossierRR];
                              newData[index].notificationType = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                dossierRR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.description}
                            onChange={(e) => {
                              const newData = [...gridDatas.dossierRR];
                              newData[index].description = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                dossierRR: newData,
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
                <h4 className="gridName mt-5">Summary</h4>
                <TinyEditor
                  editorContent={tinyData.tiny62}
                  setEditorContent={setTinyContent}
                  tinyNo={62}
                />
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
                    // data={manufacturingStage}
                    // setimportedData={setimportedData}
                    // fileName="manufacturingStage.xlsx"
                    // gridNo={1}
                    />{" "}
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
                    {gridDatas?.dossierRRNma?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input
                              value={item.countryName}
                              onChange={(e) => {
                                const newData = [...gridDatas.dossierRRNma];
                                newData[index].countryName = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  dossierRRNma: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.descriptionOfPacking}
                              onChange={(e) => {
                                const newData = [...gridDatas.dossierRRNma];
                                newData[index].descriptionOfPacking = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  dossierRRNma: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.dateOfApplication}
                              onChange={(e) => {
                                const newData = [...gridDatas.dossierRRNma];
                                newData[index].dateOfApplication = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  dossierRRNma: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.statusOfApplication}
                              onChange={(e) => {
                                const newData = [...gridDatas.dossierRRNma];
                                newData[index].statusOfApplication = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  dossierRRNma: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.dateOfAuthorization}
                              onChange={(e) => {
                                const newData = [...gridDatas.dossierRRNma];
                                newData[index].dateOfAuthorization = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  dossierRRNma: newData,
                                });
                              }}
                            />
                          </td>{" "}
                          <td>
                            <input
                              value={item.remarks}
                              onChange={(e) => {
                                const newData = [...gridDatas.dossierRRNma];
                                newData[index].remarks = e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  dossierRRNma: newData,
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
                  <h4 className="gridName mt-5">Summary</h4>
                  <TinyEditor
                    editorContent={tinyData.tiny63}
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
                editorContent={tinyData.tiny64}
                setEditorContent={setTinyContent}
                tinyNo={64}
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
                editorContent={tinyData.tiny65}
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
                  editorContent={tinyData.tiny66}
                  setEditorContent={setTinyContent}
                  tinyNo={66}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 2</h4>
                <TinyEditor
                  editorContent={tinyData.tiny67}
                  setEditorContent={setTinyContent}
                  tinyNo={67}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 3</h4>
                <TinyEditor
                  editorContent={tinyData.tiny68}
                  setEditorContent={setTinyContent}
                  tinyNo={68}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 4</h4>
                <TinyEditor
                  editorContent={tinyData.tiny69}
                  setEditorContent={setTinyContent}
                  tinyNo={69}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 5</h4>
                <TinyEditor
                  editorContent={tinyData.tiny70}
                  setEditorContent={setTinyContent}
                  tinyNo={70}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 6</h4>
                <TinyEditor
                  editorContent={tinyData.tiny71}
                  setEditorContent={setTinyContent}
                  tinyNo={71}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 7</h4>
                <TinyEditor
                  editorContent={tinyData.tiny72}
                  setEditorContent={setTinyContent}
                  tinyNo={72}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 8</h4>
                <TinyEditor
                  editorContent={tinyData.tiny73}
                  setEditorContent={setTinyContent}
                  tinyNo={73}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 9</h4>
                <TinyEditor
                  editorContent={tinyData.tiny74}
                  setEditorContent={setTinyContent}
                  tinyNo={74}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 10</h4>
                <TinyEditor
                  editorContent={tinyData.tiny75}
                  setEditorContent={setTinyContent}
                  tinyNo={75}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 11</h4>
                <TinyEditor
                  editorContent={tinyData.tiny76}
                  setEditorContent={setTinyContent}
                  tinyNo={76}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 12</h4>
                <TinyEditor
                  editorContent={tinyData.tiny77}
                  setEditorContent={setTinyContent}
                  tinyNo={77}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 13</h4>
                <TinyEditor
                  editorContent={tinyData.tiny78}
                  setEditorContent={setTinyContent}
                  tinyNo={78}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 14</h4>
                <TinyEditor
                  editorContent={tinyData.tiny79}
                  setEditorContent={setTinyContent}
                  tinyNo={79}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 15</h4>
                <TinyEditor
                  editorContent={tinyData.tiny80}
                  setEditorContent={setTinyContent}
                  tinyNo={80}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 16</h4>
                <TinyEditor
                  editorContent={tinyData.tiny81}
                  setEditorContent={setTinyContent}
                  tinyNo={81}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 17</h4>
                <TinyEditor
                  editorContent={tinyData.tiny82}
                  setEditorContent={setTinyContent}
                  tinyNo={82}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 18</h4>
                <TinyEditor
                  editorContent={tinyData.tiny83}
                  setEditorContent={setTinyContent}
                  tinyNo={83}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 19</h4>
                <TinyEditor
                  editorContent={tinyData.tiny84}
                  setEditorContent={setTinyContent}
                  tinyNo={84}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 20</h4>
                <TinyEditor
                  editorContent={tinyData.tiny85}
                  setEditorContent={setTinyContent}
                  tinyNo={85}
                />
              </div>
            </div>
          </>
        ) : null}
      </div>
      {/* <div className="w-full h-18 z-[999] bg-slate-200 p-10 py-2   flex justify-between align-middle fixed bottom-0  ">
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
              handleUpdateAPQR();
              // dispatch(updateForm(gridDatas));
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
      </div> */}
     <div className="fixed top-3/4 right-0 z-10 flex flex-col">
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
            
              "
             onClick={() => {
              handleUpdateAPQR();
              // dispatch(updateForm(gridDatas));
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
                rounded-l-full
                shadow-md
                hover:bg-teal-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-teal-500
              "

              onClick={() => {
              navigate("/dashboard");
            }}
          >
            Exit
          </button>
        </div>
    </>
  );
}
