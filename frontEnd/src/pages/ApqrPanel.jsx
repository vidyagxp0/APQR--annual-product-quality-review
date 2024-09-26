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
  YieldTrendS1PlotLines,
  YieldTrendS2PlotLines,
  YieldTrendS3PlotLines,
  YieldTrendS4PlotLines,
  YieldTrendS5PlotLines,
  TrendOfCriticalprocessS2PlotLines,
  TrendOfCriticalprocessS01PlotLines,
  TrendOfCriticalprocessS02PlotLines,
  TOIPIP_S01G1PlotLines,
  TOIPIP_S01G2PlotLines,
  TOIPIP_S02PlotLines,
  TOIPIP_S03PlotLines,
  TOIPIP_S04G1PlotLines,
  TOIPIP_S04G2PlotLines,
  TOIPIP_S04G3PlotLines,
  TOIPIP_S04G4PlotLines,
  TOIPIP_S04G5PlotLines,
  TOIPIP_S04G6PlotLines,
  TOIPIP_S05G1PlotLines,
  TOIPIP_S05G2PlotLines,
  TOIPIP_S05G3PlotLines,
  TOIPIP_S05G4PlotLines,
  TOIPIP_S05G5PlotLines,
  FPATUSPlotLines1,
  FPATUSPlotLines2,
  FPATUSPlotLines3,
  FPATUSPlotLines4,
  FPATUSPlotLines5,
  FPATUSPlotLines6,
  FPATPhEurlotLines1,
  FPATPhEurlotLines2,
  FPATPhEurlotLines3,
  FPATPhEurlotLines4,
  FPATPhEurlotLines5,
  FPATPhEurlotLines6,
  paracetamolAnnotations,
  paracetamolAssayZones,
  paracetamolDisinterationZones,
  paracetamolDissolutionZones,
  paracetamolImpurityZones,
  paracetamolpHZones,
  trend1,
} from "../Component/Analytics/ChartJsFunction";
import AnalyticsTable from "../Component/Table/AnalyticsTable";
import axios from "axios";
import { FaMicrophone } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
export default function APQR() {
  const [tab, setTab] = useState("GI");
  const [isSaving, setIsSaving] = useState(false);
  const phChartsConfig = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85,
      3.2, 4.15, 1.8, 2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5,
      4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1, 2.15, 2.9, 3.25, 4.0,
      1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4, 3.9, 3.4,
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
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85,
      3.2, 4.15, 1.8, 2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5,
      4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1, 2.15, 2.9, 3.25, 4.0,
      1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4, 3.9, 3.4,
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
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85,
      3.2, 4.15, 1.8, 2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5,
      4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1, 2.15, 2.9, 3.25, 4.0,
      1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4, 3.9, 3.4,
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
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85,
      3.2, 4.15, 1.8, 2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5,
      4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1, 2.15, 2.9, 3.25, 4.0,
      1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4, 3.9, 3.4,
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
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85,
      3.2, 4.15, 1.8, 2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5,
      4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1, 2.15, 2.9, 3.25, 4.0,
      1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4, 3.9, 3.4,
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
      2.9, 1.75, 3.45, 2.85, 4.05, 3.2, 2.1, 4.1, 1.9, 2.8, 3.3, 4.0, 2.25, 3.5,
      2.3, 4.1, 1.65, 3.35, 2.95, 3.4, 2.0, 4.05, 1.8, 2.7, 4.0, 3.45, 2.85,
      1.85, 4.1, 2.9, 3.5, 1.7, 3.25, 4.1, 2.2, 3.3, 2.95, 1.75, 3.5, 4.1, 1.9,
      2.8, 4.05, 2.15, 3.4, 1.75, 4.0, 2.8, 3.45, 4.05, 2.0,
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
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85,
      3.2, 4.15, 1.8, 2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5,
      4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1, 2.15, 2.9, 3.25, 4.0,
      1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 2.85, 2.85, 2.85,
      2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
      2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
      2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
    ],
    lsl: 2,
    usl: 4,
    heading: "Pareto Analysis",
    yAxisTitle: "Number of Batches",
  };
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state;
  const [productCodes, setProductCodes] = useState([""]);
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility

  const [loading, setLoading] = useState(false); // To manage loading state for Save button

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
      tiny77: "",
      tiny78: "",
      tiny79: "",
      tiny80: "",
      tiny81: "",
      tiny82: "",
      tiny83: "",
      tiny84: "",
      tiny85: "",
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
    currentOOSA: [],
    previewOOSA: [],
    yieldTOS1: [],
    yieldTOS2: [],
    yieldTOS3: [],
    yieldTOS4: [],
    yieldTOS5: [],
    trendingOCPPS1: [],
    trendingOCPPS2: [],
    trendingOCPPS3: [],
    trendingOCPPS4: [],
    trendingOIPIPS1: [],
    trendingOIPIPS2: [],
    trendingOIPIPS3: [],
    trendingOIPIPS4: [],
    trendingOIPIPS5: [],
    finishedPATUSP: [],
    finishedPHEUR: [],
  
  });

  const [pQRData, setPQRData] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      // pqrNO:
      //   "Corporate / APQR / " + editData.productName + " / " + editData.pqrId,
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

  const setTinyContent = (data, tinyNo) => {
    setTinyData({
      [`tiny${tinyNo}`]: data,
    });
  };

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
  const yieldTrendS1Data = gridDatas?.yieldTOS1?.map((item) => {
    return {
      "Batch No.": item.batchNo,
      "Observed Value": Number(item.actualOutput),
    };
  });
  const yieldTrendS2Data = gridDatas?.yieldTOS2?.map((item) => {
    return {
      "Batch No.": item.batchNo,
      "Observed Value": Number(item.actualOutput),
    };
  });
  const yieldTrendS3Data = gridDatas?.yieldTOS3?.map((item) => {
    return {
      "Batch No.": item.batchNo,
      "Observed Value": Number(item.actualOutput),
    };
  });
  const yieldTrendS4Data = gridDatas?.yieldTOS4?.map((item) => {
    return {
      "Batch No.": item.batchNo,
      "Observed Value": Number(item.actualOutput),
    };
  });
  const yieldTrendS5Data = gridDatas?.yieldTOS5?.map((item) => {
    return {
      "Batch No.": item.batchNo,
      "Observed Value": Number(item.actualOutput),
    };
  });
   
const trendingOCPPS2Data=gridDatas?.trendingOCPPS2.map((item)=>{
  return {
    "Batch No.": item.batchNo,
      "Observed Value": Number(item.criticalParameter3),
  }
});

const trendingOCP4Data1=gridDatas?.trendingOCPPS4.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.criticalParameter1.actualTemprature),
  }
})

const trendingOCP4Data2=gridDatas?.trendingOCPPS4.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.actualTemprature),
  }
})

const finishedPATUSPData1=gridDatas?.finishedPATUSP.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.specificRotation),
  }
})

const finishedPATUSPData2=gridDatas?.finishedPATUSP.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.lossOnDrying),
  }
})

const finishedPATUSPData3=gridDatas?.finishedPATUSP.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.chromatographicPurity.unspecifiedImpurities),
  }
})

const finishedPATUSPData4=gridDatas?.finishedPATUSP.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.chromatographicPurity.totalImpurities),
  }
})

const finishedPATUSPData5=gridDatas?.finishedPATUSP.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.assayByHPLC),
  }
})

const finishedPATUSPData6=gridDatas?.finishedPATUSP.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.residualSolventByGC.acetone),
  }
})

const finishedPHEURData1=gridDatas?.finishedPHEUR.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.specificRotation),
  }
})

const finishedPHEURData2=gridDatas?.finishedPHEUR.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.waterKF),
  }
})

const finishedPHEURData3=gridDatas?.finishedPHEUR.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.relatedSubstanceHPLC.impurityC),
  }
})

const finishedPHEURData4=gridDatas?.finishedPHEUR.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.relatedSubstanceHPLC.totalImpurities),
  }
})
const finishedPHEURData5=gridDatas?.finishedPHEUR.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.assay),
  }
})
const finishedPHEURData6=gridDatas?.finishedPHEUR.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.residualSolventByCG.acetone),
  }
})

const trendingOIPIPS1Data1=gridDatas?.trendingOIPIPS1.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.waterContentNmt),
  }
})

const trendingOIPIPS1Data2=gridDatas?.trendingOIPIPS1.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.chromatographicPurity.tCAStage),
  }
})

const trendingOIPIPS2Data=gridDatas?.trendingOIPIPS2.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.purityByHPLC),
  }
})

const trendingOIPIPS3Data=gridDatas?.trendingOIPIPS3.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.chromatographicPurity),
  }
})

const trendingOIPIPS4Data1=gridDatas?.trendingOIPIPS4.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.waterContent),
  }
})

const trendingOIPIPS4Data2=gridDatas?.trendingOIPIPS4.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.lossOnDrying),
  }
})

const trendingOIPIPS4Data3=gridDatas?.trendingOIPIPS4.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.relatedSubstanceByHPLC.impurityKNMT),
  }
})

const trendingOIPIPS4Data4=gridDatas?.trendingOIPIPS4.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.relatedSubstanceByHPLC.impurityDNMT),
  }
})

const trendingOIPIPS4Data5=gridDatas?.trendingOIPIPS4.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.relatedSubstanceByHPLC.unknownImpurity),
  }
})

const trendingOIPIPS4Data6=gridDatas?.trendingOIPIPS4.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.relatedSubstanceByHPLC.totalimpuriritie),
  }
})

const trendingOIPIPS5Data1=gridDatas?.trendingOIPIPS5.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.lossOfDrying),
  }
})

const trendingOIPIPS5Data2=gridDatas?.trendingOIPIPS5.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.chromatographicPurity.impurityKNMT),
  }
})

const trendingOIPIPS5Data3=gridDatas?.trendingOIPIPS5.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.chromatographicPurity.impurityNMT),
  }
})

const trendingOIPIPS5Data4=gridDatas?.trendingOIPIPS5.map((item)=>{
  return {
    "Batch No.": item.batchNo,
    "Observed Value": Number(item.composite.chromatographicPurity.totalImpurityNMT),
  }
})


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

  //   setTinyData({
  //     tiny1: tiny1,
  //     tiny2: tiny2,
  //     tiny3: tiny3,
  //     tiny4: tiny4,
  //     tiny5: tiny5,
  //     tiny6: tiny6,
  //     tiny7: tiny7,
  //     tiny8: tiny8,
  //     tiny9: tiny9,
  //     tiny10: tiny10,
  //     tiny11: tiny11,
  //     tiny12: tiny12,
  //     tiny13: tiny13,
  //     tiny14: tiny14,
  //     tiny15: tiny15,
  //     tiny16: tiny16,
  //     tiny17: tiny17,
  //     tiny18: tiny18,
  //     tiny19: tiny19,
  //     tiny20: tiny20,
  //     tiny21: tiny21,
  //     tiny22: tiny22,
  //     tiny23: tiny23,
  //     tiny24: tiny24,
  //     tiny25: tiny25,
  //     tiny26: tiny26,
  //     tiny27: tiny27,
  //     tiny28: tiny28,
  //     tiny29: tiny29,
  //     tiny30: tiny30,
  //     tiny31: tiny31,
  //     tiny32: tiny32,
  //     tiny33: tiny33,
  //     tiny34: tiny34,
  //     tiny35: tiny35,
  //     tiny36: tiny36,
  //     tiny37: tiny37,
  //     tiny38: tiny38,
  //     tiny39: tiny39,
  //     tiny40: tiny40,
  //     tiny41: tiny41,
  //     tiny42: tiny42,
  //     tiny43: tiny43,
  //     tiny44: tiny44,
  //     tiny45: tiny45,
  //     tiny46: tiny46,
  //     tiny47: tiny47,
  //     tiny48: tiny48,
  //     tiny49: tiny49,
  //     tiny50: tiny50,
  //     tiny51: tiny51,
  //     tiny52: tiny52,
  //     tiny53: tiny53,
  //     tiny54: tiny54,
  //     tiny55: tiny55,
  //     tiny56: tiny56,
  //     tiny57: tiny57,
  //     tiny58: tiny58,
  //     tiny59: tiny59,
  //     tiny60: tiny60,
  //     tiny61: tiny61,
  //     tiny62: tiny62,
  //     tiny63: tiny63,
  //     tiny64: tiny64,
  //     tiny65: tiny65,
  //     tiny66: tiny66,
  //     tiny67: tiny67,
  //     tiny68: tiny68,
  //     tiny69: tiny69,
  //     tiny70: tiny70,
  //     tiny71: tiny71,
  //     tiny72: tiny72,
  //     tiny73: tiny73,
  //     tiny74: tiny74,
  //     tiny75: tiny75,
  //     tiny76: tiny76,
  //     tiny77: tiny77,
  //     tiny78: tiny78,
  //     tiny79: tiny79,
  //     tiny80: tiny80,
  //     tiny81: tiny81,
  //     tiny82: tiny82,
  //     tiny83: tiny83,
  //     tiny84: tiny84,
  //     tiny85: tiny85,

  //   });
  // }, [
  //   tiny1,
  //   tiny2,
  //   tiny3,
  //   tiny4,
  //   tiny5,
  //   tiny6,
  //   tiny7,
  //   tiny8,
  //   tiny9,
  //   tiny10,
  //   tiny11,
  //   tiny12,
  //   tiny13,
  //   tiny14,
  //   tiny15,
  //   tiny16,
  //   tiny17,
  //   tiny18,
  //   tiny19,
  //   tiny20,
  //   tiny21,
  //   tiny22,
  //   tiny23,
  //   tiny24,
  //   tiny25,
  //   tiny26,
  //   tiny27,
  //   tiny28,
  //   tiny29,
  //   tiny30,
  //   tiny31,
  //   tiny32,
  //   tiny33,
  //   tiny34,
  //   tiny35,
  //   tiny36,
  //   tiny37,
  //   tiny38,
  //   tiny39,
  //   tiny40,
  //   tiny41,
  //   tiny42,
  //   tiny43,
  //   tiny44,
  //   tiny45,
  //   tiny46,
  //   tiny47,
  //   tiny48,
  //   tiny49,
  //   tiny50,
  //   tiny51,
  //   tiny52,
  //   tiny53,
  //   tiny54,
  //   tiny55,
  //   tiny56,
  //   tiny57,
  //   tiny58,
  //   tiny59,
  //   tiny60,
  //   tiny61,
  //   tiny62,
  //   tiny63,
  //   tiny64,
  //   tiny65,
  //   tiny66,
  //   tiny67,
  //   tiny68,
  //   tiny69,
  //   tiny70,
  //   tiny71,
  //   tiny72,
  //   tiny73,
  //   tiny74,
  //   tiny75,
  //   tiny76,
  //   tiny77,
  //   tiny78,
  //   tiny78,
  //   tiny79,
  //   tiny80,
  //   tiny81,
  //   tiny82,
  //   tiny83,
  //   tiny84,
  //   tiny85,
  // ]);
  useEffect(() => {
    setPQRData({
      productCodes: productCodes,
    });
  }, [productCodes, data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loader after 20 seconds
    }, 10000); // 20 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);
  useEffect(() => {
    setPQRData({
      tinyData: tinyData,
    });
  }, [tinyData]);

  const handleUpdateAPQR = async () => {
    setLoading(true); // Start the spinner
    try {
      const payload = { pQRData, gridDatas, tinyData };

      const response = await axios.put(
        `http://localhost:4000/update-apqr/${editData.pqrId}`,
        payload
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating data:", error);
    } finally {
      setLoading(false); // Stop the spinner
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/get-apqr/${editData.pqrId}`
      );
      console.log(response.data, "data");
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
        currentOOSA: apiData.currentOOSA?.data || [],
        previewOOSA: apiData.previewOOSA?.data || [],
        summaryOOSS: apiData.summaryOOSS?.data || [],
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
        yieldTOS1: apiData.yieldTOS1?.data || [],
        yieldTOS2: apiData.yieldTOS2?.data || [],
        yieldTOS3: apiData.yieldTOS3?.data || [],
        yieldTOS4: apiData.yieldTOS4?.data || [],
        yieldTOS5: apiData.yieldTOS5?.data || [],
        trendingOCPPS1: apiData.trendingOCPPS1?.data || [],
        trendingOCPPS2: apiData.trendingOCPPS2?.data || [],
        trendingOCPPS3: apiData.trendingOCPPS3?.data || [],
        trendingOCPPS4: apiData.trendingOCPPS4?.data || [],
        trendingOIPIPS1: apiData.trendingOIPIPS1?.data || [],
        trendingOIPIPS2: apiData.trendingOIPIPS2?.data || [],
        trendingOIPIPS3: apiData.trendingOIPIPS3?.data || [],
        trendingOIPIPS4: apiData.trendingOIPIPS4?.data || [],
        trendingOIPIPS5: apiData.trendingOIPIPS5?.data || [],
        finishedPATUSP: apiData.finishedPATUSP?.data ||[],
        finishedPHEUR: apiData.finishedPHEUR?.data ||[],
        // Map all other grids here
      });
      setIsLoading(false);
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

    // setManufacturingStage([...manufacturingStage, ...processedData]);
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
      vendorQDOPPM: [...gridDatas.vendorQDOPPM, newRow],
    });
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
    setGridDatas({
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

  const formatDate = (dateString) => {
    if (!dateString) return ""; // Return an empty string if the date is invalid or missing
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ""; // Return an empty string for invalid dates
    return date.toISOString().split("T")[0]; // Convert to 'YYYY-MM-DD' format
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

  const addYieldTOS1Row = () => {
    const newRow = {
      batchNo: "",
      mfgMonth: "",
      actualInput: "",
      actualOutput: "",
      lLimit: "",
      uLimit: "",
      yield: "",
    };
    setGridDatas({
      ...gridDatas,
      yieldTOS1: [...gridDatas.yieldTOS1, newRow],
    });
  };

  const addYieldTOS2Row = () => {
    const newRow = {
      batchNo: "",
      mfgMonth: "",
      actualInput: "",
      actualOutput: "",
      lLimit: "",
      uLimit: "",
      yield: "",
    };
    setGridDatas({
      ...gridDatas,
      yieldTOS2: [...gridDatas.yieldTOS2, newRow],
    });
  };

  const addYieldTOS3Row = () => {
    const newRow = {
      batchNo: "",
      mfgMonth: "",
      actualInput: "",
      actualOutput: "",
      lLimit: "",
      uLimit: "",
      yield: "",
    };
    setGridDatas({
      ...gridDatas,
      yieldTOS3: [...gridDatas.yieldTOS3, newRow],
    });
  };

  const addYieldTOS4Row = () => {
    const newRow = {
      batchNo: "",
      mfgMonth: "",
      actualInput: "",
      actualOutput: "",
      lLimit: "",
      uLimit: "",
      yield: "",
    };
    setGridDatas({
      ...gridDatas,
      yieldTOS4: [...gridDatas.yieldTOS4, newRow],
    });
  };

  const addYieldTOS5Row = () => {
    const newRow = {
      batchNo: "",
      mfgMonth: "",
      actualInput: "",
      actualOutput: "",
      lLimit: "",
      uLimit: "",
      yield: "",
    };
    setGridDatas({
      ...gridDatas,
      yieldTOS5: [...gridDatas.yieldTOS5, newRow],
    });
  };

  const addTrendingOCPPS1Row = () => {
    const newRow = {
      batchNo: "",
      criticalParameter1: "",
      criticalParameter2: "",
      criticalParameter3: "",
    };

    setGridDatas({
      ...gridDatas,
      trendingOCPPS1: [...gridDatas.trendingOCPPS1, newRow],
    });
  };

  const addTrendingOCPPS2Row = () => {
    const newRow = {
      batchNo: "",
      criticalParameter1: "",
      criticalParameter2: "",
      criticalParameter3: "",
      actualpH: "",
      lowerLimit: "",
      upperLimit: "",
      criticalParameter4: "",
    };

    setGridDatas({
      ...gridDatas,
      trendingOCPPS2: [...gridDatas.trendingOCPPS2, newRow],
    });
  };

  const addTrendingOCPPS3Row = () => {
    const newRow = {
      batchNo: "",
      criticalParameter1: "",
      criticalParameter2: {
        actualQuantity: "",
        actualpH: "",
      },
      criticalParameter3: "",
      lowerLimit: "",
      upperLimit: "",
      criticalParameter4: "",
    };

    setGridDatas({
      ...gridDatas,
      trendingOCPPS3: [...gridDatas.trendingOCPPS3, newRow],
    });
  };

  const addTrendingOCPPS4Row = () => {
    const newRow = {
      batchNo: "",
      criticalParameter1: {
        actualTime: "",
        actualTemprature: "",
        lowerLimit: "",
        upperLimit: "",
      },
      criticalParameter2: "",
      lowerLimit: "",
      upperLimit: "",
    };

    setGridDatas({
      ...gridDatas,
      trendingOCPPS4: [...gridDatas.trendingOCPPS4, newRow],
    });
  };

  const addTrendingOIPIPS1Row = () => {
    const newRow = {
      batchNo: "",
      unreactedDiolone: "",
      limit: "",
      chromatographicPurity: "",
      unreactedTCA: "",
      purityForInformation: "",
      pH6: "",
      lLimit: "",
      uLimit: "",
      pH65: "",
      lLimit: "",
      uLimit: "",
      waterContent: "",
      wLimit: "",
      composite: {
        waterContentNmt: "",
        chromatographicPurity: {
          limit: "",
          tCAStage: "",
          tLimit: "",
          dryingHours: "",
        },
      },
    };
    // setTrendingOIPIPS1([...trendingOIPIPS1, newRow]);
    setGridDatas({
      ...gridDatas,
      trendingOIPIPS1: [...gridDatas.trendingOIPIPS1, newRow],
    });
  };
  const addTrendingOIPIPS2Row = () => {
    const newRow = {
      batchNo: "",
      unreactedDiolone: "",
      limit: "",
      chromatographicPurity: "",
      unreactedTCA: "",
      purityForInformation: "",
      pH6: "",
      lLimit: "",
      uLimit: "",
      pH65: "",
      lLimit: "",
      uLimit: "",
      waterContent: "",
      wLimit: "",
      composite: {
        waterContentNmt: "",
        chromatographicPurity: {
          limit: "",
          tCAStage: "",
          tLimit: "",
          dryingHours: "",
        },
      },
    };
    // setTrendingOIPIPS2([...trendingOIPIPS2, newRow]);
    setGridDatas({
      ...gridDatas,
      trendingOIPIPS2: [...gridDatas.trendingOIPIPS2, newRow],
    });
  };
  const addTrendingOIPIPS3Row = () => {
    const newRow = {
      batchNo: "",
      pH75: "",
      lLimit: "",
      uLimit: "",
      unreactedTCA: "",
      limit: "",
      chromatographic: "",
      pH5: "",
      lLimit2: "",
      uLimit2: "",

      composite: { chromatographicPurity: "", limit: "" },
    };
    // setTrendingOIPIPS3([...trendingOIPIPS3, newRow]);
    setGridDatas({
      ...gridDatas,
      trendingOIPIPS3: [...gridDatas.trendingOIPIPS3, newRow],
    });
  };
  const addTrendingOIPIPS4Row = () => {
    const newRow = {
      batchNo: "",
      waterContent: "",
      limit: "",
      composite: {
        waterContentNmt: "",
        limit: "",
        lossOnDrying: "",
        limitLoss: "",
        relatedSubstanceByHPLC: {
          impurityKNMT: "",
          limitNMT: "",
          impurityHNMT: "",
          impurityDNMT: "",
          limitDNMT: "",
          impurityINMT: "",
          unknownImpurity: "",
          limitUnknown: "",
          totalimpuriritie: "",
          limitTotal: "",
          dryingHours: "",
        },
      },
    };
    // setTrendingOIPIPS4([...trendingOIPIPS4, newRow]);
    setGridDatas({
      ...gridDatas,
      trendingOIPIPS4: [...gridDatas.trendingOIPIPS4, newRow],
    });
  };
  const addTrendingOIPIPS5Row = () => {
    const newRow = {
      batchNo: "",
      lossOfDrying: "",
      limit: "",

      composite: {
        lossOfDrying: "",
        chromatographicPurity: {
          limit: "",
          impurityKNMT: "",
          limitKNMT: "",
          impurityOfHNMT: "",
          impurityDNMT: "",
          impurityINMT: "",
          impurityNMT: "",
          limitNMT: "",
          totalImpurityNMT: "",
          limitTNMT: "",
        },
      },
    };
    // setTrendingOIPIPS5([...trendingOIPIPS5, newRow]);
    setGridDatas({
      ...gridDatas,
      trendingOIPIPS5: [...gridDatas.trendingOIPIPS5, newRow],
    });
  };

  const addFPATRow1 = () => {
    const newRow = {
      sNo: "",
      batchNo: "",
      specificRotation: "",
      lLimit: "",
      uLimit: "",
      lossOnDrying: "",
      chromatographicPurity: {
        limit: "",
        impurityK: "",
        impurityKLimit: "",
        impurityH: "",
        impurityD: "",
        impurityDLimit: "",
        impurityI: "",
        unspecifiedImpurities: "",
        unspecifiedImpuritiesLimit: "",
        totalImpurities: "",
        totalImpuritiesLimit: "",
      },
      assayByHPLC: "",
      assayLLimit: "",
      assayULimit: "",
      residualSolventByGC: {
        methanol: "",
        acetone: "",
        methyleneChloride: "",
        residualSolventLimit: "",
      },
      particleSize: {
        percent90LT10um: "",
        percent90LT10umLimit: "",
        percent995LT20um: "",
        percent995LT20umLimit: "",
      },
    };

    setGridDatas({
      ...gridDatas,
      finishedPATUSP: [...gridDatas.finishedPATUSP, newRow],
    });
  };

  const addFPATRow2 = () => {
    const newRow = {
      sNo: "",
      batchNo: "",
      specificRotation: "",
      lLimit: "",
      uLimit: "",
      relatedSubstanceHPLC: {
        impurityB: "",
        impurityBLimit: "",
        impurityC: "",
        impurityCLimit: "",
        unspecifiedImpurities: "",
        unspecifiedImpuritiesLimit: "",
        totalImpurities: "",
        totalImpuritiesLimit: "",
      },
      waterKF: "",
      waterKFLimit: "",
      assay: "",
      assayLimit: "",
      residualSolventByCG: {
        methyleneChloride: "",
        methanol: "",
        acetone: "",
        residualSolventLimit: "",
      },
      particleSizeMalvern: {
        particleSize90: "",
        particleSize90Limit: "",
        particleSize995: "",
        particleSize995Limit: "",
      },
    };

    setGridDatas({
      ...gridDatas,
      finishedPHEUR: [...gridDatas.finishedPHEUR, newRow],
    });
  };

  //  Speech functionality ----------------------------

  // Text-to-Speech functionality
  const handleTextToSpeech = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  // Speech-to-Text functionality
  const handleSpeechToText = (updater) => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US"; // Set language
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      updater(speechToText);
    };
    recognition.start();
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
          <div
            className={`${tab === "YTOS" ? "active" : ""}`}
            onClick={() => setTab("YTOS")}
          >
            Yield Trend Of Stage
          </div>
          <div
            className={`${tab === "TOCPP" ? "active" : ""}`}
            onClick={() => setTab("TOCPP")}
          >
            Trending of Critical Process Parameter
          </div>
          <div
            className={`${tab === "TOIIP" ? "active" : ""}`}
            onClick={() => setTab("TOIIP")}
          >
            Trending of In-process & Intermediate Parameter
          </div>
          <div
            className={`${tab === "FPAT" ? "active" : ""}`}
            onClick={() => setTab("FPAT")}
          >
            Finished Product Analytical Trend
          </div>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16">
                <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
              </div>
              <span className="text-[28px] pl-5 text-blue-500 font-semibold">
                Fetching data...
              </span>
            </div>
          </div>
        ) : (
          <>
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
                      value={formatDate(pQRData.initiateDate)}
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
                      disabled
                    />
                  </div>
                  <div className="group-input" style={{ position: "relative" }}>
                    <label>Product Name</label>
                    <input
                      value={pQRData.productName}
                      onChange={(e) => {
                        setPQRData({ productName: e.target.value });
                      }}
                      style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                    />
                    <button
                      onClick={() =>
                        handleSpeechToText((text) =>
                          setPQRData({ productName: text })
                        )
                      }
                      className="rounded-full border p-2 mr-3 bg-slate-100 hover:bg-slate-200"
                      style={{
                        position: "absolute",
                        right: "35px",
                        top: "68%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <FaMicrophone />
                    </button>
                    <button
                      onClick={() => handleTextToSpeech(pQRData.productName)}
                      className="rounded-full border p-2 bg-slate-100 hover:bg-slate-200"
                      style={{
                        position: "absolute",
                        right: "5px",
                        top: "68%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <AiFillSound />
                    </button>
                  </div>
                </div>
                {pQRData?.productCodes?.map((productCode, index) => (
                  <div key={index} className="group-input">
                    <label>
                      Product Code{" "}
                      {pQRData?.productCodes.length > 1 ? index + 1 : ""}
                    </label>
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
                  <div className="group-input" style={{ position: "relative" }}>
                    <label>Generic Name</label>
                    <input
                      value={pQRData.genericName}
                      onChange={(e) => {
                        setPQRData({ genericName: e.target.value });
                      }}
                      style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                    />
                    <button
                      onClick={() =>
                        handleSpeechToText((text) =>
                          setPQRData({ genericName: text })
                        )
                      }
                      className="rounded-full border p-2 mr-3 bg-slate-100 hover:bg-slate-200"
                      style={{
                        position: "absolute",
                        right: "35px",
                        top: "68%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <FaMicrophone />
                    </button>
                    <button
                      onClick={() => handleTextToSpeech(pQRData.genericName)}
                      className="rounded-full border p-2 bg-slate-100 hover:bg-slate-200"
                      style={{
                        position: "absolute",
                        right: "5px",
                        top: "68%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <AiFillSound />
                    </button>
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
                      value={formatDate(pQRData.reviewStartDate)}
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
                      value={formatDate(pQRData.reviewEndDate)}
                      onClick={(e) => e.target.showPicker()}
                      onChange={(e) => {
                        setPQRData({ reviewEndDate: e.target.value });
                      }}
                    />
                  </div>
                  <div className="group-input" style={{ position: "relative" }}>
                    <label>MFG. LIC. No</label>
                    <input
                      value={pQRData.mfgLicNo}
                      onChange={(e) => {
                        setPQRData({ mfgLicNo: e.target.value });
                      }}
                      style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                    />
                    <button
                      onClick={() =>
                        handleSpeechToText((text) =>
                          setPQRData({ mfgLicNo: text })
                        )
                      }
                      className="rounded-full border mr-3 p-2 bg-slate-100 hover:bg-slate-200"
                      style={{
                        position: "absolute",
                        right: "35px",
                        top: "68%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <FaMicrophone />
                    </button>
                    <button
                      onClick={() => handleTextToSpeech(pQRData.mfgLicNo)}
                      className="rounded-full border p-2 bg-slate-100 hover:bg-slate-200"
                      style={{
                        position: "absolute",
                        right: "5px",
                        top: "68%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <AiFillSound />
                    </button>
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
                                const newData = [
                                  ...gridDatas.manufacturingStage,
                                ];
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
                                const newData = [
                                  ...gridDatas.manufacturingStage,
                                ];
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
                                const newData = [
                                  ...gridDatas.manufacturingStage,
                                ];
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
                    setEditorContent={(data) => setTinyContent(data, 1)}
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
                        {/* <th></th> */}
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
                                  const newData = [
                                    ...gridDatas.manufacturingSAPS,
                                  ];
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
                                  const newData = [
                                    ...gridDatas.manufacturingSAPS,
                                  ];
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
                                  const newData = [
                                    ...gridDatas.manufacturingSAPS,
                                  ];
                                  newData[index].sFGCode = e.target.value;
                                  setGridDatas({
                                    ...gridDatas,
                                    manufacturingSAPS: newData,
                                  });
                                }}
                              />
                            </td>
                            {/* <td>
                              <input />
                            </td> */}
                            <td>
                              <input
                                value={item.remarks}
                                onChange={(e) => {
                                  const newData = [
                                    ...gridDatas.manufacturingSAPS,
                                  ];
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

                <h4 className="gridName">
                  Summary of Manufacturing Site Address
                </h4>
                <TinyEditor
                  editorContent={tinyData.tiny2} // Ensure the content matches the correct state property
                  setEditorContent={(data) => setTinyContent(data, 2)} // Passing the editor number and content
                  tinyNo={2}
                />
              </div>
            ) : null}
          </>
        )}
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
                                newData[index].reasonOfRejection =
                                  e.target.value;
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
                    setEditorContent={(data) => setTinyContent(data, 3)}
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
                                newData[index].reasonForRepacking =
                                  e.target.value;
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
                  Summary of Review of Rejected Raw Materials and Packaging
                  Materials
                </h5>
                <TinyEditor
                  editorContent={tinyData.tiny4}
                  setEditorContent={(data) => setTinyContent(data, 4)}
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
                    setEditorContent={(data) => setTinyContent(data, 5)}
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
                  Summary of Review of Expired Raw Materials and Packaging
                  Materials
                </h4>
                <TinyEditor
                  editorContent={tinyData.tiny6}
                  setEditorContent={(data) => setTinyContent(data, 6)}
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
                <h4 className="gridName pt-4">
                  Summary of Review of Approved Supplier List
                </h4>
                <TinyEditor
                  editorContent={tinyData.tiny7}
                  setEditorContent={(data) => setTinyContent(data, 7)}
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
                                newData[index].manufacturerName =
                                  e.target.value;
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
                                newData[index].qualificationStatus =
                                  e.target.value;
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
                  Summary of Vendor Qualification Details of Raw Material
                  Excipients
                </h4>
                <TinyEditor
                  editorContent={tinyData.tiny8}
                  setEditorContent={(data) => setTinyContent(data, 8)}
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
                                newData[index].manufacturerName =
                                  e.target.value;
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
                                newData[index].qualificationStatus =
                                  e.target.value;
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
                  Summary of Vendor Qualification Details of Primary Packing
                  Materials
                </h4>
                <TinyEditor
                  editorContent={tinyData.tiny9}
                  setEditorContent={(data) => setTinyContent(data, 9)}
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
                                const newData = [...gridDatas.vendorQDPOG];
                                newData[index].manufacturerName =
                                  e.target.value;
                                setGridDatas({
                                  ...gridDatas,
                                  vendorQDPOG: newData,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              value={item.qualificationStatus}
                              onChange={(e) => {
                                const newData = [...gridDatas.vendorQDPOG];
                                newData[index].qualificationStatus =
                                  e.target.value;
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
                  setEditorContent={(data) => setTinyContent(data, 10)}
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
                  value={pQRData?.productDescription}
                  onChange={(e) => {
                    setPQRData({ productDescription: e.target.value });
                  }}
                  style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                />
                <button
                  onClick={() =>
                    handleSpeechToText((text) =>
                      setPQRData({ productDescription: text })
                    )
                  }
                  className="rounded-full border mr-3 p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "35px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <FaMicrophone />
                </button>
                <button
                  onClick={() =>
                    handleTextToSpeech(pQRData?.productDescription)
                  }
                  className="rounded-full border p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <AiFillSound />
                </button>
              </div>

              <div className="group-input" style={{ position: "relative" }}>
                <label>Process Flow</label>
                <input
                  value={pQRData?.processFlow}
                  onChange={(e) => {
                    setPQRData({ processFlow: e.target.value });
                  }}
                  style={{ paddingRight: "60px" }} // Add padding to make space for the buttons
                />
                <button
                  onClick={() =>
                    handleSpeechToText((text) =>
                      setPQRData({ processFlow: text })
                    )
                  }
                  className="rounded-full border mr-3 p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "35px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <FaMicrophone />
                </button>
                <button
                  onClick={() => handleTextToSpeech(pQRData?.processFlow)}
                  className="rounded-full border p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <AiFillSound />
                </button>
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
                <button
                  onClick={() =>
                    handleSpeechToText((text) =>
                      setPQRData({ totalBatchesManufactured: text })
                    )
                  }
                  className="rounded-full border mr-3 p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "35px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <FaMicrophone />
                </button>
                <button
                  onClick={() =>
                    handleTextToSpeech(pQRData.totalBatchesManufactured)
                  }
                  className="rounded-full border p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <AiFillSound />
                </button>
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
                <button
                  onClick={() =>
                    handleSpeechToText((text) =>
                      setPQRData({ totalBatchesApprovedReleased: text })
                    )
                  }
                  className="rounded-full border mr-3 p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "35px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <FaMicrophone />
                </button>
                <button
                  onClick={() =>
                    handleTextToSpeech(pQRData.totalBatchesApprovedReleased)
                  }
                  className="rounded-full border p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <AiFillSound />
                </button>
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
                <button
                  onClick={() =>
                    handleSpeechToText((text) =>
                      setPQRData({ totalProcessValidationBatches: text })
                    )
                  }
                  className="rounded-full border mr-3 p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "35px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <FaMicrophone />
                </button>
                <button
                  onClick={() =>
                    handleTextToSpeech(pQRData.totalProcessValidationBatches)
                  }
                  className="rounded-full border p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <AiFillSound />
                </button>
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
                <button
                  onClick={() =>
                    handleSpeechToText((text) =>
                      setPQRData({ totalReprocessedBatches: text })
                    )
                  }
                  className="rounded-full border mr-3 p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "35px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <FaMicrophone />
                </button>
                <button
                  onClick={() =>
                    handleTextToSpeech(pQRData.totalReprocessedBatches)
                  }
                  className="rounded-full border p-2 bg-slate-100 hover:bg-slate-200"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "68%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <AiFillSound />
                </button>
              </div>

              <div className="group-input">
                <label>Process Validation Batches Details</label>
                <TinyEditor
                  editorContent={tinyData.tiny11}
                  setEditorContent={(data) => setTinyContent(data, 11)}
                  tinyNo={11}
                />
              </div>

              <div className="group-input">
                <label>Reprocessing Details</label>
                <TinyEditor
                  editorContent={tinyData.tiny12}
                  setEditorContent={(data) => setTinyContent(data, 12)}
                  tinyNo={12}
                />
              </div>
              <div className="group-input">
                <label>Microbial Excursion Details</label>
                <TinyEditor
                  editorContent={tinyData.tiny13}
                  setEditorContent={(data) => setTinyContent(data, 13)}
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
              <h4 className="gridName pt-4">
                Summary of Code to Code Transfer Details
              </h4>
              <TinyEditor
                editorContent={tinyData.tiny14}
                setEditorContent={(data) => setTinyContent(data, 14)}
                tinyNo={14}
              />
            </div>
            <div className="sub-head">
              {" "}
              Review of Manufacturing Process, Packing Process and relevant
              Validation Status
            </div>
            <TinyEditor
              editorContent={tinyData.tiny15}
              setEditorContent={(data) => setTinyContent(data, 15)}
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
                  editorContent={tinyData.tiny16}
                  setEditorContent={(data) => setTinyContent(data, 16)}
                  tinyNo={16}
                />
              </div>
              <div className="group-input">
                <label>Batch Repacking Details </label>
                <TinyEditor
                  editorContent={tinyData.tiny17}
                  setEditorContent={(data) => setTinyContent(data, 17)}
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
                              newData[index].packingBatchNumber =
                                e.target.value;
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
                              newData[index].manufacturingBatchNumber =
                                e.target.value;
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
                              newData[index].repackingIssuedNumber =
                                e.target.value;
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
                              newData[index].reasonForRepacking =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 18)}
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
                              newData[index].descriptionOfIssue =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 19)}
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
                              newData[index].deviationRelatedTo =
                                e.target.value;
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
                              newData[index].deviationObservedOn =
                                e.target.value;
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
                              newData[index].deviationObservedBy =
                                e.target.value;
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
                              newData[index].classificationOfDeviation =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 20)}
                tinyNo={20}
              />
            </div>

            <div className="sub-head">
              Review of all Batch Failures/Rejections along with CAPA and
              Effectiveness Check Verification (if any):
            </div>

            <h4 className="gridName">Batch Failures/Rejections Details </h4>
            <TinyEditor
              editorContent={tinyData.tiny21}
              setEditorContent={(data) => setTinyContent(data, 21)}
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].detailsOfObviousError =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 22)}
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
                              newData[index].initialIntervalDetails =
                                e.target.value;
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
                              newData[index].previousIntervalDetails =
                                e.target.value;
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
                              newData[index].diffrenceOfResult = e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 23)}
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
                              newData[index].initialIntervalDetails =
                                e.target.value;
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
                              newData[index].previousIntervalDetails =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 24)}
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
                              newData[index].initialIntervalDetails =
                                e.target.value;
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
                              newData[index].previousIntervalDetails =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 25)}
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
                              newData[index].criticalProcessParameter =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
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
                              newData[index].acceptanceCriteria =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <div className="addrowinstruction  pl-2">
                  Add Rows by clicking on (+) icon
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
                            newData[index].criticalProcessParameter =
                              e.target.value;
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
                            newData[index].criticalProcessParameter =
                              e.target.value;
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
                            newData[index].criticalProcessParameter =
                              e.target.value;
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
                            newData[index].criticalProcessParameter =
                              e.target.value;
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
                            newData[index].criticalProcessParameter =
                              e.target.value;
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
                            newData[index].criticalProcessParameter =
                              e.target.value;
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
                            newData[index].criticalProcessParameter =
                              e.target.value;
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
                            newData[index].criticalProcessParameter =
                              e.target.value;
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
                            newData[index].criticalProcessParameter =
                              e.target.value;
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

            <div className="sub-head">
              Critical Process Parameters Review Summary
            </div>
            <div className="group-input">
              {/* <input placeholder="please insert flex" /> */}
              <TinyEditor
                editorContent={tinyData.tiny26}
                setEditorContent={(data) => setTinyContent(data, 26)}
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
            <h1 className="gridName"> pH Of Paracetamol Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName  pt-8">Assay Of Paracetamol Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow2} />
                  <div className="addrowinstruction pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">
              Impurity Of Paracetamol Test Result
            </h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl mb-5">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow3} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">
              Dissolution Of Paracetamol Test Result
            </h1>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">
              Disintegration Of Paracetamol Test Result
            </h1>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">
              Impurity Of Terbinafine Test Result
            </h1>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">
              Dissolution Of Terbinafine Test Result
            </h1>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">
              Disintegration Of Terbinafine Test Result
            </h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow10} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">pH Of Pentoprazole Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow11} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">Assay Of Pentoprazole Test Result</h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow12} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">
              Impurity Of Pentoprazole Test Result
            </h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow13} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">
              Dissolution Of Pentoprazole Test Result
            </h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow14} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <h1 className="gridName pt-8">
              Disintegration Of Pentoprazole Test Result
            </h1>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addReviewODSTRRow15} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                <button className="p-2 bg-emerald-400 text-white rounded">
                  {" "}
                  Launch Deviation
                </button>
              </div>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor
                editorContent={tinyData.tiny27}
                setEditorContent={(data) => setTinyContent(data, 27)}
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 28)}
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 29)}
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 30)}
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
                              newData[index].specificationLimit =
                                e.target.value;
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
                              newData[index].obtainedValue.minimum =
                                e.target.value;
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
                              newData[index].obtainedValue.maximum =
                                e.target.value;
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
                              newData[index].compliesNotComplies =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 31)}
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
                              newData[index].stabilityProtocolNo =
                                e.target.value;
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
                  setEditorContent={(data) => setTinyContent(data, 32)}
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
                              newData[index].testingIntervalMonths =
                                e.target.value;
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
                setEditorContent={(data) => setTinyContent(data, 33)}
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
                setEditorContent={(data) => setTinyContent(data, 34)}
                tinyNo={34}
              />
              <h4 className="gridName pt-4">
                Review of Analytical Method Validations
              </h4>
              <TinyEditor
                editorContent={tinyData.tiny35}
                setEditorContent={(data) => setTinyContent(data, 35)}
                tinyNo={35}
              />
              <h4 className="gridName pt-4">
                Review of Contract Testing Laboratories
              </h4>
              <TinyEditor
                editorContent={tinyData.tiny36}
                setEditorContent={(data) => setTinyContent(data, 36)}
                tinyNo={36}
              />
              <h4 className="gridName pt-4">
                Review of Environmental Monitoring Trend and water trends
                Reports
              </h4>
              <TinyEditor
                editorContent={tinyData.tiny37}
                setEditorContent={(data) => setTinyContent(data, 37)}
                tinyNo={37}
              />
              <h4 className="gridName pt-4">Laboratory Review Summary</h4>
              <TinyEditor
                editorContent={tinyData.tiny38}
                setEditorContent={(data) => setTinyContent(data, 38)}
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
              setEditorContent={(data) => setTinyContent(data, 39)}
              tinyNo={39}
            />
            <h4 className="gridName pt-4"> Qualification details</h4>
            <TinyEditor
              editorContent={tinyData.tiny40}
              setEditorContent={(data) => setTinyContent(data, 40)}
              tinyNo={40}
            />
            <h4 className="gridName pt-4"> Calibration Details</h4>
            <TinyEditor
              editorContent={tinyData.tiny41}
              setEditorContent={(data) => setTinyContent(data, 41)}
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
                setEditorContent={(data) => setTinyContent(data, 42)}
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
              setEditorContent={(data) => setTinyContent(data, 43)}
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
              setEditorContent={(data) => setTinyContent(data, 44)}
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
              setEditorContent={(data) => setTinyContent(data, 45)}
              tinyNo={45}
            />
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
              setEditorContent={(data) => setTinyContent(data, 46)}
              tinyNo={46}
            />
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
              setEditorContent={(data) => setTinyContent(data, 47)}
              tinyNo={47}
            />
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
              setEditorContent={(data) => setTinyContent(data, 48)}
              tinyNo={48}
            />
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
              setEditorContent={(data) => setTinyContent(data, 49)}
              tinyNo={49}
            />
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
              setEditorContent={(data) => setTinyContent(data, 50)}
              tinyNo={50}
            />
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
              setEditorContent={(data) => setTinyContent(data, 51)}
              tinyNo={51}
            />
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
              setEditorContent={(data) => setTinyContent(data, 52)}
              tinyNo={52}
            />
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
              setEditorContent={(data) => setTinyContent(data, 53)}
              tinyNo={53}
            />
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
                              newData[index].qualityRelatedNotification.no =
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
                            value={item.qualityRelatedNotification.description}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[
                                index
                              ].qualityRelatedNotification.description =
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
                              newData[index].qualityRelatedNotification.impact =
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
                            value={item.qualityRelatedNotification.status}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].qualityRelatedNotification.status =
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
                            value={item.cAPA.descriptionNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.currentRPQRN];
                              newData[index].cAPA.descriptionNo =
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
            <h4 className="gridName pt-4">
              previous Review Period Quality Related Notification
            </h4>
            <TinyEditor
              editorContent={tinyData.tiny54}
              setEditorContent={(data) => setTinyContent(data, 54)}
              tinyNo={54}
            />
            <h4 className="gridName pt-4">Review of Product Recalls</h4>
            <TinyEditor
              editorContent={tinyData.tiny55}
              setEditorContent={(data) => setTinyContent(data, 55)}
              tinyNo={55}
            />{" "}
            <h4 className="gridName pt-4">Review of Returned Products</h4>
            <TinyEditor
              editorContent={tinyData.tiny56}
              setEditorContent={(data) => setTinyContent(data, 56)}
              tinyNo={56}
            />{" "}
            <h4 className="gridName pt-4">Review of Salvaged Drugs</h4>
            <TinyEditor
              editorContent={tinyData.tiny57}
              setEditorContent={(data) => setTinyContent(data, 57)}
              tinyNo={57}
            />{" "}
            <h4 className="gridName pt-4">
              Review of previous PQR recommendations
            </h4>
            <TinyEditor
              editorContent={tinyData.tiny58}
              setEditorContent={(data) => setTinyContent(data, 58)}
              tinyNo={58}
            />{" "}
            <h4 className="gridName pt-4">Review of Quality Agreements</h4>
            <TinyEditor
              editorContent={tinyData.tiny59}
              setEditorContent={(data) => setTinyContent(data, 59)}
              tinyNo={59}
            />{" "}
            <h4 className="gridName pt-4">
              Review of Manufacturing Authorizations
            </h4>
            <TinyEditor
              editorContent={tinyData.tiny60}
              setEditorContent={(data) => setTinyContent(data, 60)}
              tinyNo={60}
            />{" "}
            <h4 className="gridName pt-4">Review of Open Validations</h4>
            <TinyEditor
              editorContent={tinyData.tiny61}
              setEditorContent={(data) => setTinyContent(data, 61)}
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
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
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
                  setEditorContent={(data) => setTinyContent(data, 62)}
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
                    <div className="addrowinstruction  pl-2">
                      Add Rows by clicking on (+) icon
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
                                newData[index].descriptionOfPacking =
                                  e.target.value;
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
                                newData[index].dateOfApplication =
                                  e.target.value;
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
                                newData[index].statusOfApplication =
                                  e.target.value;
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
                                newData[index].dateOfAuthorization =
                                  e.target.value;
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
                    setEditorContent={(data) => setTinyContent(data, 63)}
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
                setEditorContent={(data) => setTinyContent(data, 64)}
                tinyNo={64}
              />
            </div>
          </>
        ) : null}
        {tab === "CAPA" ? (
          <>
            {/* <div className="flex items-center justify-center">
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
            </div> */}

            <div className="flex items-center justify-center h-screen">
              <div className="text-3xl font-bold text-gray-600">
                No Data To Show Here.....
              </div>
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
                setEditorContent={(data) => setTinyContent(data, 65)}
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
                  setEditorContent={(data) => setTinyContent(data, 66)}
                  tinyNo={66}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 2</h4>
                <TinyEditor
                  editorContent={tinyData.tiny67}
                  setEditorContent={(data) => setTinyContent(data, 67)}
                  tinyNo={67}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 3</h4>
                <TinyEditor
                  editorContent={tinyData.tiny68}
                  setEditorContent={(data) => setTinyContent(data, 68)}
                  tinyNo={68}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 4</h4>
                <TinyEditor
                  editorContent={tinyData.tiny69}
                  setEditorContent={(data) => setTinyContent(data, 69)}
                  tinyNo={69}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 5</h4>
                <TinyEditor
                  editorContent={tinyData.tiny70}
                  setEditorContent={(data) => setTinyContent(data, 70)}
                  tinyNo={70}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 6</h4>
                <TinyEditor
                  editorContent={tinyData.tiny71}
                  setEditorContent={(data) => setTinyContent(data, 71)}
                  tinyNo={71}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 7</h4>
                <TinyEditor
                  editorContent={tinyData.tiny72}
                  setEditorContent={(data) => setTinyContent(data, 72)}
                  tinyNo={72}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 8</h4>
                <TinyEditor
                  editorContent={tinyData.tiny73}
                  setEditorContent={(data) => setTinyContent(data, 73)}
                  tinyNo={73}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 9</h4>
                <TinyEditor
                  editorContent={tinyData.tiny74}
                  setEditorContent={(data) => setTinyContent(data, 74)}
                  tinyNo={74}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 10</h4>
                <TinyEditor
                  editorContent={tinyData.tiny75}
                  setEditorContent={(data) => setTinyContent(data, 75)}
                  tinyNo={75}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 11</h4>
                <TinyEditor
                  editorContent={tinyData.tiny76}
                  setEditorContent={(data) => setTinyContent(data, 76)}
                  tinyNo={76}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 12</h4>
                <TinyEditor
                  editorContent={tinyData.tiny77}
                  setEditorContent={(data) => setTinyContent(data, 77)}
                  tinyNo={77}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 13</h4>
                <TinyEditor
                  editorContent={tinyData.tiny78}
                  setEditorContent={(data) => setTinyContent(data, 78)}
                  tinyNo={78}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 14</h4>
                <TinyEditor
                  editorContent={tinyData.tiny79}
                  setEditorContent={(data) => setTinyContent(data, 79)}
                  tinyNo={79}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 15</h4>
                <TinyEditor
                  editorContent={tinyData.tiny80}
                  setEditorContent={(data) => setTinyContent(data, 80)}
                  tinyNo={80}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 16</h4>
                <TinyEditor
                  editorContent={tinyData.tiny81}
                  setEditorContent={(data) => setTinyContent(data, 81)}
                  tinyNo={81}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 17</h4>
                <TinyEditor
                  editorContent={tinyData.tiny82}
                  setEditorContent={(data) => setTinyContent(data, 82)}
                  tinyNo={82}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 18</h4>
                <TinyEditor
                  editorContent={tinyData.tiny83}
                  setEditorContent={(data) => setTinyContent(data, 83)}
                  tinyNo={83}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 19</h4>
                <TinyEditor
                  editorContent={tinyData.tiny84}
                  setEditorContent={(data) => setTinyContent(data, 84)}
                  tinyNo={84}
                />
              </div>
              <div>
                <h4 className="gridName">Annexure 20</h4>
                <TinyEditor
                  editorContent={tinyData.tiny85}
                  setEditorContent={(data) => setTinyContent(data, 85)}
                  tinyNo={85}
                />
              </div>
            </div>
          </>
        ) : null}
        {tab === "YTOS" ? (
          <>
            <div className="gridName pt-4">Yield Trend Of Stage-1</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addYieldTOS1Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SI. No.</th>
                    <th>Batch No.</th>
                    <th>Mfg. Month</th>
                    <th>Actual Input in (50.000 Kg)Kg</th>
                    <th>
                      Actual Output in Expected Output Range (50.000 – 57.000Kg)
                    </th>
                    <th>L Limit</th>
                    <th>U Limit</th>
                    <th>Yield %</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.yieldTOS1?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS1];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.mfgMonth}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS1];
                              newData[index].mfgMonth = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS1: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualInput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS1];
                              newData[index].actualInput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS1: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualOutput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS1];
                              newData[index].actualOutput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS1: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS1];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS1];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.yield}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS1];
                              newData[index].yield = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS1: newData,
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
            <div className="">
              <HighchartsLine
                heading={
                  "The Graphical Presentation of  Yield of  Intermediate (Stage-I) "
                }
                xHeading={"Batch No."}
                yHeading={"OutPut Range in Kg "}
                yMax={60}
                yMin={48}
                yTickInterval={1}
                plotLines={YieldTrendS1PlotLines}
                // zones={paracetamolpHZones}
                // annotations={paracetamolAnnotations}
                highchartData={yieldTrendS1Data}
              />
            </div>
            <div className="gridName pt-4">Yield Trend Of Stage-2</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addYieldTOS2Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas?.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SI. No.</th>
                    <th>Batch No.</th>
                    <th>Mfg. Month</th>
                    <th>Actual Input in (50.000 - 57.000 Kg)Kg</th>
                    <th>
                      Actual Output in Expected Output Range (54.000 – 78.000Kg)
                    </th>
                    <th>L Limit</th>
                    <th>U Limit</th>
                    <th>Yield %</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.yieldTOS2?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS2];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.mfgMonth}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS2];
                              newData[index].mfgMonth = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS2: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualInput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS2];
                              newData[index].actualInput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS2: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualOutput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS2];
                              newData[index].actualOutput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS2: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS2];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS2];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.yield}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS2];
                              newData[index].yield = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS2: newData,
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
            <div className="">
              <HighchartsLine
                heading={
                  "The Graphical Presentation of  Yield of  Intermediate (Stage-II) "
                }
                xHeading={"Batch No."}
                yHeading={"OutPut Range in Kg "}
                yMax={84}
                yMin={52}
                yTickInterval={2}
                plotLines={YieldTrendS2PlotLines}
                // zones={paracetamolpHZones}
                // annotations={paracetamolAnnotations}
                highchartData={yieldTrendS2Data}
              />
            </div>

            <div className="gridName pt-4">Yield Trend Of Stage-3</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addYieldTOS3Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas?.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SI. No.</th>
                    <th>Batch No.</th>
                    <th>Mfg. Month</th>
                    <th>Actual Input in (54.000 - 78.000 Kg)Kg</th>
                    <th>
                      Actual Output in Expected Output Range (37.500 – 50.000Kg)
                    </th>
                    <th>L Limit</th>
                    <th>U Limit</th>
                    <th>Yield %</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.yieldTOS3?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS3];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.mfgMonth}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS3];
                              newData[index].mfgMonth = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS3: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualInput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS3];
                              newData[index].actualInput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS3: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualOutput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS3];
                              newData[index].actualOutput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS3: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS3];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS3];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.yield}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS3];
                              newData[index].yield = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS3: newData,
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
            <div className="">
              <HighchartsLine
                heading={
                  "The Graphical Presentation of  Yield of  Intermediate (Stage-III) "
                }
                xHeading={"Batch No."}
                yHeading={"OutPut Range in Kg "}
                yMax={55}
                yMin={35}
                yTickInterval={2}
                plotLines={YieldTrendS3PlotLines}
                // zones={paracetamolpHZones}
                // annotations={paracetamolAnnotations}
                highchartData={yieldTrendS3Data}
              />
            </div>

            <div className="gridName pt-4">Yield Trend Of Stage-4</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addYieldTOS4Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas?.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SI. No.</th>
                    <th>Batch No.</th>
                    <th>Mfg. Month</th>
                    <th>Actual Input in (37.500 - 50.000 Kg)Kg</th>
                    <th>
                      Actual Output in Expected Output Range (34.000 – 40.000Kg)
                    </th>
                    <th>L Limit</th>
                    <th>U Limit</th>
                    <th>Yield %</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.yieldTOS4?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS4];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.mfgMonth}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS4];
                              newData[index].mfgMonth = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS4: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualInput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS4];
                              newData[index].actualInput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS4: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualOutput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS4];
                              newData[index].actualOutput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS4: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS4];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS4];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.yield}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS4];
                              newData[index].yield = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS4: newData,
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
            <div className="">
              <HighchartsLine
                heading={
                  "04 The Graphical Presentation of  Yield of  Intermediate (Stage-IV"
                }
                xHeading={"Batch No."}
                yHeading={"OutPut Range in Kg "}
                yMax={44}
                yMin={32}
                yTickInterval={2}
                plotLines={YieldTrendS4PlotLines}
                // zones={paracetamolpHZones}
                // annotations={paracetamolAnnotations}
                highchartData={yieldTrendS4Data}
              />
            </div>

            <div className="gridName pt-4">Yield Trend Of Stage-5</div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addYieldTOS5Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SI. No.</th>
                    <th>Batch No.</th>
                    <th>Mfg. Month</th>
                    <th>Actual Input in (34.000 40.000 Kg)Kg</th>
                    <th>
                      Actual Output in Expected Output Range (33.000 – 38.000Kg)
                    </th>
                    <th>L Limit</th>
                    <th>U Limit</th>
                    <th>Yield %</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.yieldTOS5?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS5];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.mfgMonth}
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS5];
                              newData[index].mfgMonth = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS5: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualInput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS5];
                              newData[index].actualInput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS5: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.actualOutput}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS5];
                              newData[index].actualOutput = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS5: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS5];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS5];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.yield}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.yieldTOS5];
                              newData[index].yield = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                yieldTOS5: newData,
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
            <div className="">
              <HighchartsLine
                heading={
                  "The Graphical Presentation of  Yield of  Intermediate (Stage-V) "
                }
                xHeading={"Batch No."}
                yHeading={"OutPut Range in Kg "}
                yMax={38}
                yMin={33}
                yTickInterval={1}
                plotLines={YieldTrendS5PlotLines}
                // zones={paracetamolpHZones}
                // annotations={paracetamolAnnotations}
                highchartData={yieldTrendS5Data}
              />
            </div>
          </>
        ) : null}
        {tab === "TOCPP" ? (
          <>
            <div className="gridName pt-4">
              Trending of Critical Process Parameter: Stage - I
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addTrendingOCPPS1Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>SI. No.</th>
                    <th>Batch No.</th>
                    <th>
                      Critical Parameter: 01 Nitrogen gas purging should be
                      carried out in advance in Acetonide formation reaction
                      (part I)
                    </th>
                    <th>
                      Critical Parameter: 02 In Bromination reaction (part II),
                      slow agitation is required during the reaction.
                    </th>
                    <th>
                      Critical Parameter: 03 Epoxydation reaction (part III)
                      required Argon gas bubbling to remove oxygen content from
                      the reaction mass.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.trendingOCPPS1?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS1];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter1}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS1];
                              newData[index].criticalParameter1 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS1: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.criticalParameter2}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS1];
                              newData[index].criticalParameter2 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS1: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.criticalParameter3}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS1];
                              newData[index].criticalParameter3 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS1: newData,
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

            <div className="gridName pt-4">
              Trending of Critical Process Parameter: Stage - II
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addTrendingOCPPS2Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>Batch No.</th>
                    <th>
                      Critical Parameter: 01 Nitrogen gas purging should be
                      carried out in advance in Acetonide formation reaction
                      (part I) Critical Parameter: 01 During handling of
                      Hydrofluoric Acid use necessary protective acid proof
                      mask, dress and shoes.
                    </th>
                    <th>
                      Critical Parameter: 02 In Bromination reaction (part II),
                      slow agitation is required during the reaction. Critical
                      Parameter: 02 Addition of the material should be done
                      portion wise during reaction. Std. Qty. in kg. ( 50.000 –
                      57.000)
                    </th>

                    <th>
                      Critical Parameter: 03 During addition of material,
                      exothermicity appears, so control the temperature (-40°C)
                      to (-30°C). Actual Temperature ºC (-40°C) to (-30°C){" "}
                    </th>
                    <th>Lower Limit</th>
                    <th>Upper Limit</th>
                    <th>
                      Critical Parameter: 04 Temperature should be within
                      specified range of (-20°C) to (-25°C) for timely
                      completion of reaction and controlled impurity level.
                      Actual Temperature ºC (-20°C) to (-25°C)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.trendingOCPPS2?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS2];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter1}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS2];
                              newData[index].criticalParameter1 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS2: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.criticalParameter2}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS2];
                              newData[index].criticalParameter2 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter3}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS2];
                              newData[index].criticalParameter3 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS2];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS2];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter4}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS2];
                              newData[index].criticalParameter4 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS2: newData,
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
            <div className="">
              <HighchartsLine
                heading={
                  "The Graphical Presentation of Tepmerature of CPP-03Stage-II "
                }
                xHeading={"Batch No."}
                yHeading={"OutPut Range in Kg "}
                yMax={10}
                yMin={-40}
                yTickInterval={10}
                plotLines={TrendOfCriticalprocessS2PlotLines}
                // zones={paracetamolpHZones}
                // annotations={paracetamolAnnotations}
                highchartData={trendingOCPPS2Data}
              />
            </div>

            <div className="gridName pt-4">
              Trending of Critical Process Parameter: Stage - III
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addTrendingOCPPS3Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>S. No.</th>
                    <th rowSpan={2}>Batch No.</th>
                    <th rowSpan={2}>
                      Critical Parameter: 01 addition of Sodium Hydroxide and
                      Methanol Solution in reaction mass, reaction mass and NaOH
                      / Methanol solution both should be oxygen free by Argon
                      bubbling.
                    </th>
                    <th colSpan={4} rowSpan={1}>
                      Critical Parameter: 02 : Adjust pH between 5.0-6.0 by
                      adding adequate quantity of Glacial acetic acid.
                    </th>
                    {/* <th >Critical Parameter: 03 Epoxydation reaction (part III) required Argon gas bubbling to remove oxygen content from the reaction mass. </th> */}
                  </tr>
                  <tr>
                    <th> Actual Qt. of Glacial Acetic acid</th>
                    <th>Actual pH (between 5.0 - 6.0)</th>
                    <th>Lower Limit</th>
                    <th>Upper Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.trendingOCPPS3?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS3];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter1}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS3];
                              newData[index].criticalParameter1 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS3: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.criticalParameter2.actualQuantity}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS3];
                              newData[index].criticalParameter2.actualQuantity =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS3: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.criticalParameter2.actualpH}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS3];
                              newData[index].criticalParameter2.actualpH =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS3];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS3];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS3: newData,
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

            <div className="gridName pt-4">
              Trending of Critical Process Parameter: Stage - IV
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addTrendingOCPPS4Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>S. No.</th>
                    <th rowSpan={2}>Batch No.</th>
                    <th rowSpan={1} colSpan={4}>
                      Critical Parameter: 01 The reaction mass should be
                      refluxed for 3-5 hour at temperature between 55 to 60° C.
                    </th>
                    <th rowSpan={2}>
                      Critical Parameter: 02 Crystallization of finished product
                      should be at 0°C to 5°C. Actual Temperature °C (0°C to
                      5°C)
                    </th>
                    <th rowSpan={2}>Lower Limit </th>
                    <th rowSpan={2}>Upper Limit</th>
                  </tr>
                  <tr>
                    <th>Actual Time (In hrs.) </th>
                    <th>Actual Temperature °C (55°C to 60°C)</th>
                    <th>Lower Limit</th>
                    <th>Upper Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.trendingOCPPS4?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS4];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter1.actualTime}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS4];
                              newData[index].criticalParameter1.actualTime =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter1.actualTemprature}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS4];
                              newData[
                                index
                              ].criticalParameter1.actualTemprature =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter1.lowerLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS4];
                              newData[index].criticalParameter1.lowerLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter1.upperLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS4];
                              newData[index].criticalParameter1.upperLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.criticalParameter2}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS4];
                              newData[index].criticalParameter2 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS4: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={item.lowerLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS4];
                              newData[index].lowerLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS4: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={item.upperLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOCPPS4];
                              newData[index].upperLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOCPPS4: newData,
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
            <div className="w-full shadow-lg flex-wrap mb-3 flex items-center justify-evenly mt-3  ">
              <div className="">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation off Tempearture of CPP-01Stage-IV "
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={64}
                  yMin={50}
                  yTickInterval={2}
                  plotLines={TrendOfCriticalprocessS01PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOCP4Data1}
                />
              </div>
              <div className="">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation off Tempearture of CPP-02Stage-IV "
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={7}
                  yMin={-1}
                  yTickInterval={1}
                  plotLines={TrendOfCriticalprocessS02PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOCP4Data2}
                />
              </div>
            </div>
          </>
        ) : null}
        {tab === "TOIIP" ? (
          <>
            <div className="gridName pt-4">
              Trending of In-process & Intermediate Parameter of U3TCAg -
              Stage-I{" "}
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addTrendingOIPIPS1Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={3}>S. No.</th>
                    <th rowSpan={3}>Batch No.</th>
                    <th rowSpan={3}>Unreacted Diolone Acetate NMT 0.5 %</th>
                    <th rowSpan={3}>Limit</th>
                    <th rowSpan={3}>
                      Chromatographic Purity (for information)
                    </th>
                    <th rowSpan={3}>Unreacted TCA Step – I B NMT 0.5 % </th>
                    <th rowSpan={3}>Purity (for information)</th>
                    <th rowSpan={3}>pH 6.0 – 6.5</th>
                    <th rowSpan={3}>L Limit</th>
                    <th rowSpan={3}>U Limit</th>
                    <th rowSpan={3}>pH 6.0 – 6.5</th>
                    <th rowSpan={3}>L Limit</th>
                    <th rowSpan={3}>U Limit</th>
                    <th rowSpan={3}>Water content NMT 1.0 % w/w</th>
                    <th rowSpan={3}>Limit</th>
                    <th rowSpan={1} colSpan={5}>
                      Composite{" "}
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={1} rowSpan={2}>
                      Water content NMT 1.0 % w/w
                    </th>
                    <th rowSpan={1} colSpan={4}>
                      Chromatographic purity in area % by HPLC
                    </th>
                  </tr>
                  <tr>
                    <th>Limit</th>
                    <th>TCA stage – I NLT 93.0 % </th>
                    <th>Limit</th>
                    <th>Drying Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.trendingOIPIPS1?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.unreactedDiolone}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].unreactedDiolone = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].limit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographicPurity}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].chromatographicPurity =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.unreactedTCA}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].unreactedTCA = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.purityForInformation}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].purityForInformation =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.pH6}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].pH6 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.pH65}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].pH65 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.waterContent}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].waterContent = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.wLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].wLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.waterContentNmt}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[index].composite.waterContentNmt =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.chromatographicPurity.limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[
                                index
                              ].composite.chromatographicPurity.limit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.tCAStage
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[
                                index
                              ].composite.chromatographicPurity.tCAStage =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={item.composite.chromatographicPurity.tLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[
                                index
                              ].composite.chromatographicPurity.tLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.dryingHours
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS1];
                              newData[
                                index
                              ].composite.chromatographicPurity.dryingHours =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS1: newData,
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
            <div className="w-full shadow-lg wrap flex items-center justify-between mt-3 gap-5">
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of  Water Content of Intermediate Stage-I"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={1.4}
                  yMin={0}
                  yTickInterval={0.0}
                  plotLines={TOIPIP_S01G1PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS1Data1}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of  Chromatographic Purity by HPLC of Intermediate Stage-I"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={100}
                  yMin={92}
                  yTickInterval={1}
                  plotLines={TOIPIP_S01G2PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS1Data2}
                />
              </div>
            </div>

            <div className="gridName pt-4">
              Trending of In-process & Intermediate Parameter of U3TCAg -
              Stage-II{" "}
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addTrendingOIPIPS2Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={3}>S. No.</th>
                    <th rowSpan={3}>Batch No.</th>
                    <th rowSpan={3}>
                      Unreacted TCA Stage – I by HPLC NMT 0.5 %
                    </th>
                    <th rowSpan={3}>Limit</th>
                    <th rowSpan={3}>
                      Unreacted Triamcinolone acetate by HPLC NMT 2.5 %
                    </th>
                    <th rowSpan={3}>Limit</th>
                    <th rowSpan={3}>Purity (for information)</th>
                    <th rowSpan={3}>pH 6.0 – 7.0</th>
                    <th rowSpan={3}>L Limit</th>
                    <th rowSpan={3}>U Limit</th>
                    <th rowSpan={3}>pH 6.0 – 7.0 (After ANFD)</th>
                    <th rowSpan={3}>L Limit</th>
                    <th rowSpan={3}>U Limit</th>
                    <th rowSpan={1} colSpan={4}>
                      Composite{" "}
                    </th>
                  </tr>

                  <tr>
                    <th>Purity by HPLC NLT 85.0 % </th>
                    <th>Limit </th>
                    <th>Unreacted TCA stage – I NMT 0.5 %</th>

                    <th>Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.trendingOIPIPS2?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.unreactedTCA}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].unreactedTCA = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.limit}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].limit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.unreactedTriamcilone}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].unreactedTriamcilone =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.limit2}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].limit2 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.purityForInformation}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].purityForInformation =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.pH6}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].pH6 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.pH67}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].pH67 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.lLimit2}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].lLimit2 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit2}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].uLimit2 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.purityByHPLC}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].composite.purityByHPLC =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.limit1}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].limit1 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.unreactedTca}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].composite.unreactedTca =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.limit2}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS2];
                              newData[index].composite.limit2 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS2: newData,
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
              <HighchartsLine
                heading={
                  "Graph - 08 The Graphical Presentation of Purity by HPLC Intermediate Stage-II"
                }
                xHeading={"Batch No."}
                yHeading={"OutPut Range in Kg "}
                yMax={98}
                yMin={82}
                yTickInterval={2}
                plotLines={TOIPIP_S02PlotLines}
                // zones={paracetamolpHZones}
                // annotations={paracetamolAnnotations}
                highchartData={yieldTrendS1Data}
              />
            </div>

            <div className="gridName pt-4">
              Trending of In-process & Intermediate Parameter of U3TCAg -
              Stage-III{" "}
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addTrendingOIPIPS3Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={3}>S. No.</th>
                    <th rowSpan={3}>Batch No.</th>
                    <th rowSpan={3}>pH 7.75 – 8.0</th>
                    <th rowSpan={3}>L Limit</th>
                    <th rowSpan={3}>U Limit</th>
                    <th rowSpan={3}>
                      Unreacted TCA Stage – II by HPLC NMT 0.5 %
                    </th>
                    <th rowSpan={3}>pH 5.0 – 6.0</th>
                    <th rowSpan={3}>L Limit</th>
                    <th rowSpan={3}>U Limit</th>

                    <th rowSpan={1} colSpan={5}>
                      Composite{" "}
                    </th>
                  </tr>

                  <tr>
                    <th>
                      Chromatographic purity in area % by HPLC Purity NLT 98.0 %
                    </th>
                    <th>Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.trendingOIPIPS3?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].limit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographicPurity}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].chromatographicPurity =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.pH75}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].pH75 = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.unreactedTCA}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].unreactedTCA = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographic}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].chromatographic = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.chromatographicPurity}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].composite.chromatographicPurity =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS3];
                              newData[index].composite.limit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS3: newData,
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
              <HighchartsLine
                heading={
                  "09 The Graphical Presentation of  Chromatographic Purity in area% Intermediate Stage-III "
                }
                xHeading={"Batch No."}
                yHeading={"OutPut Range in Kg "}
                yMax={104}
                yMin={94}
                yTickInterval={1}
                plotLines={TOIPIP_S03PlotLines}
                // zones={paracetamolpHZones}
                // annotations={paracetamolAnnotations}
                highchartData={yieldTrendS1Data}
              />
            </div>

            <div className="gridName pt-4">
              Trending of In-process & Intermediate Parameter of U3TCAg -
              Stage-IV{" "}
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addTrendingOIPIPS4Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={3}>S. No.</th>
                    <th rowSpan={3}>Batch No.</th>
                    <th rowSpan={3}>Water content NMT 1.0 % w/w</th>
                    <th rowSpan={3}>Limit</th>
                    <th rowSpan={1} colSpan={15}>
                      Composite{" "}
                    </th>
                  </tr>

                  <tr>
                    <th colSpan={1} rowSpan={2}>
                      Water content NMT 1.0 % w/w
                    </th>
                    <th colSpan={1} rowSpan={2}>
                      Limit
                    </th>
                    <th colSpan={1} rowSpan={2}>
                      Loss on drying NMT 1.0 % w/w
                    </th>
                    <th colSpan={1} rowSpan={2}>
                      Limit
                    </th>
                    <th rowSpan={1} colSpan={11}>
                      Related Substances by HPLC
                    </th>
                  </tr>
                  <tr>
                    {" "}
                    <th>Impurity K NMT 0.25%</th>
                    <th>Limit</th>
                    <th>Impurity H NMT 0.15%</th>
                    <th>Impurity D NMT 0.15%</th>
                    <th>Limit</th>
                    <th>Impurity I NMT 0.15%</th>
                    <th>Unknown Impurity NMT 0.15%</th>
                    <th>Limit</th>
                    <th>Total Impurities NMT 0.50%</th>
                    <th>Limit</th>
                    <th>Drying Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.trendingOIPIPS4?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.waterContent}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[index].waterContent = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[index].limit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.waterContentNMT}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[index].composite.waterContentNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[index].composite.limit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.lossOnDrying}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[index].composite.lossOnDrying =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.limitLoss}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[index].composite.limitLoss =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC.impurityKNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.impurityKNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC.limitNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.limitNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC.impurityHNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.impurityHNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC.impurityDNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.impurityDNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC.limitDNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.limitDNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC.impurityINMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.impurityINMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC
                                .unknownImpurity
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.unknownImpurity =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC.limitUnknown
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.limitUnknown =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC
                                .totalimpuriritie
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.totalimpuriritie =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC.limitTotal
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.limitTotal =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        <td>
                          <input
                            value={
                              item.composite.relatedSubstanceByHPLC.dryingHours
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.relatedSubstanceByHPLC.dryingHours =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td>{" "}
                        {/* <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.dryingHours
                            }
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS4];
                              newData[
                                index
                              ].composite.chromatographicPurity.dryingHours =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS4: newData,
                              });
                            }}
                          />
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="w-full shadow-lg flex-wrap mb-3 flex items-center justify-evenly mt-3  ">
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of Water Content Intermediate Stage-IV "
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={1.4}
                  yMin={0}
                  yTickInterval={0.2}
                  plotLines={TOIPIP_S04G1PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS4Data1}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of  Related Substances by HPLC Test - Impurity K  Intermediate Stage-IV"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.4}
                  yMin={0}
                  yTickInterval={0.1}
                  plotLines={TOIPIP_S04G2PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS4Data2}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of  Related Substances by HPLC Test - Unknown Impurity Intermediate Stage-IV"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.2}
                  yMin={0}
                  yTickInterval={0.5}
                  plotLines={TOIPIP_S04G3PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS4Data3}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "11 The Graphical Presentation of  Loss On Drying Intermediate Stage-IV "
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={1.4}
                  yMin={0}
                  yTickInterval={0.2}
                  plotLines={TOIPIP_S04G4PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS4Data4}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "13 The Graphical Presentation of  Related Substances by HPLC Test - Impurity D  Intermediate Stage-IV"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.4}
                  yMin={0}
                  yTickInterval={0.1}
                  plotLines={TOIPIP_S04G5PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS4Data5}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of  Related Substances by HPLC Test - Total Impurities Intermediate (Stage-IV)"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.8}
                  yMin={0}
                  yTickInterval={0.1}
                  plotLines={TOIPIP_S04G6PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS4Data6}
                />
              </div>
            </div>

            <div className="gridName pt-4">
              Trending of In-process & Intermediate Parameter of U3TCAg -
              Stage-V{" "}
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addTrendingOIPIPS5Row} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.currentRPQRN}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={3}>S. No.</th>
                    <th rowSpan={3}>Batch No.</th>
                    <th rowSpan={3}>Water content NMT 1.0 % w/w</th>
                    <th rowSpan={3}>Limit</th>

                    <th rowSpan={1} colSpan={15}>
                      Composite{" "}
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={1} rowSpan={2}>
                      Loss on drying NMT 1.0 % w/w
                    </th>
                    <th colSpan={10}>
                      Chromatographic purity by HPLC as per USP
                    </th>
                  </tr>
                  <tr>
                    <th>Limit</th>
                    <th>Impurity K NMT 0.25%</th>
                    <th>Limit</th>
                    <th>Impurity H NMT 0.10%</th>
                    <th>Impurity D NMT 0.10%</th>
                    <th>Impurity I NMT 0.10%</th>
                    <th>Unspecified Impurities NMT 0.10%</th>
                    <th>Limit</th>
                    <th>Total Impurities NMT 0.5%</th>
                    <th>Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.trendingOIPIPS5?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.lossOfDrying}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[index].lossOfDrying = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[index].limit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.lossOfDrying}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[index].composite.lossOfDrying =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.composite.chromatographicPurity.limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.limit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.impurityKNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.impurityKNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.limitKNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.limitKNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity
                                .impurityOfHNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.impurityOfHNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.impurityDNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.impurityDNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.impurityINMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.impurityINMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.impurityNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.impurityNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.limitNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.limitNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity
                                .totalImpurityNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.totalImpurityNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.composite.chromatographicPurity.limitTNMT
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.trendingOIPIPS5];
                              newData[
                                index
                              ].composite.chromatographicPurity.limitTNMT =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                trendingOIPIPS5: newData,
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
            <div className="w-full shadow-lg flex-wrap mb-3 flex items-center justify-evenly mt-3  gap-3 ">
              <div classname="w-1/2">
                <HighchartsLine
                  heading={
                    "16  The Graphical Presentation of Loss on Drying Intermediate Stage-V"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={2.0}
                  yMin={0}
                  yTickInterval={0.2}
                  plotLines={TOIPIP_S05G1PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS5Data1}
                />
              </div>
              <div classname="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of  Related Substances by HPLC As per USP Test - Unspecified Impurity Intermediate Stage-V "
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.2}
                  yMin={0}
                  yTickInterval={0.05}
                  plotLines={TOIPIP_S05G2PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS5Data2}
                />
              </div>
              <div classname="w-1/2">
                <HighchartsLine
                  heading={
                    "- 20 The Graphical Presentation of  Related Substances by HPLC As per PhEur 7.5 Test - Total Impurities Intermediate Stage-V "
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.8}
                  yMin={0}
                  yTickInterval={0.1}
                  plotLines={TOIPIP_S05G3PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS5Data3}
                />
              </div>
              <div classname="w-1/2">
                <HighchartsLine
                  heading={
                    "17 The Graphical Presentation of  Related Substances by HPLC As per USP Test - Impurity K Intermediate Stage-V"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.3}
                  yMin={0}
                  yTickInterval={0.5}
                  plotLines={TOIPIP_S05G4PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={trendingOIPIPS5Data4}
                />
              </div>
              {/* <div classname="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of  Related Substances by HPLC As per USP Test - Total Impurities Intermediate Stage-V"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.8}
                  yMin={0}
                  yTickInterval={0.1}
                  plotLines={TOIPIP_S05G5PlotLines}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={yieldTrendS1Data}
                />
              </div> */}
            </div>
          </>
        ) : null}
        {tab === "FPAT" ? (
          <>
            <div className="gridName pt-4">
              Finished Product Analytical Trend as per USP
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addFPATRow1} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.finishedPATUSP}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan="2">S. No.</th>
                    <th rowSpan="2">Batch No.</th>
                    <th rowSpan="2">Specific Rotation b/w +118° and +130° </th>
                    <th rowSpan="2">L Limit</th>
                    <th rowSpan="2">U Limit</th>
                    <th rowSpan="2">Loss on Drying NMT 1.5 % w/w</th>
                    <th colSpan="11">
                      Chromatographic purity by HPLC as per USP
                    </th>
                    <th rowSpan="2">
                      Assay (By HPLC) b/w 97.0 % and 102.0 % w/w{" "}
                    </th>
                    <th rowSpan="2">L Limit</th>
                    <th rowSpan="2">U Limit</th>
                    <th colSpan="4">Residual solvent By GC</th>
                    <th colSpan="4">Particle Size</th>
                  </tr>
                  <tr>
                    <th>Limit</th>
                    <th>Impurity K NMT 0.25%</th>
                    <th>Limit</th>
                    <th>Impurity H NMT 0.10%</th>
                    <th>Impurity D NMT 0.10%</th>
                    <th>Limit</th>
                    <th>Impurity I NMT 0.10%</th>
                    <th>Unspecified Impurities NMT 0.10%</th>
                    <th>Limit</th>
                    <th>Total Impurities NMT 0.5%</th>
                    <th>Limit</th>
                    <th>Methanol NMT 1500 ppm</th>
                    <th>Acetone NMT 2000 ppm</th>
                    <th>Methylene chloride NMT 400 ppm</th>
                    <th>Limit</th>
                    <th>{"90%  < 10 μm"}</th>
                    <th>Limit</th>
                    <th>{"99.5% < 20 μm"}</th>
                    <th>Limit</th>s
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.finishedPATUSP?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.specificRotation}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].specificRotation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.lossOnDrying}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].lossOnDrying = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.chromatographicPurity.limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].chromatographicPurity.limit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographicPurity.impurityK}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].chromatographicPurity.impurityK =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographicPurity.impurityKLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[
                                index
                              ].chromatographicPurity.impurityKLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographicPurity.impurityH}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].chromatographicPurity.impurityH =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographicPurity.impurityD}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].chromatographicPurity.impurityD =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographicPurity.impurityDLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[
                                index
                              ].chromatographicPurity.impurityDLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographicPurity.impurityI}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].chromatographicPurity.impurityI =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.chromatographicPurity.unspecifiedImpurities
                            }
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[
                                index
                              ].chromatographicPurity.unspecifiedImpurities =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.chromatographicPurity
                                .unspecifiedImpuritiesLimit
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[
                                index
                              ].chromatographicPurity.unspecifiedImpuritiesLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.chromatographicPurity.totalImpurities}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[
                                index
                              ].chromatographicPurity.totalImpurities =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.chromatographicPurity.totalImpuritiesLimit
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[
                                index
                              ].chromatographicPurity.totalImpuritiesLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.assayByHPLC}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].assayByHPLC = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.assayLLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].assayLLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.assayULimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].assayULimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.residualSolventByGC.methanol}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].residualSolventByGC.methanol =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.residualSolventByGC.acetone}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].residualSolventByGC.acetone =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.residualSolventByGC.methyleneChloride}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[
                                index
                              ].residualSolventByGC.methyleneChloride =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.residualSolventByGC.residualSolventLimit
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[
                                index
                              ].residualSolventByGC.residualSolventLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>

                        <td>
                          <input
                            value={item.particleSize.percent90LT10um}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].particleSize.percent90LT10um =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.particleSize.percent90LT10umLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].particleSize.percent90LT10umLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.particleSize.percent995LT20um}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[index].particleSize.percent995LT20um =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.particleSize.percent995LT20umLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPATUSP];
                              newData[
                                index
                              ].particleSize.percent995LT20umLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPATUSP: newData,
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
             <div className="w-full shadow-lg flex-wrap mb-3 flex items-center justify-evenly mt-3  ">
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "21 The Graphical Presentation of Specific Rotation Finished Product as per USP (Micronised)"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={134}
                  yMin={116}
                  yTickInterval={2}
                  plotLines={FPATUSPlotLines1}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPATUSPData1}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "22 The Graphical Presentation of Loss on Drying Finished Product as per USP (Micronised)"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={2.00}
                  yMin={0.00}
                  yTickInterval={0.20}
                  plotLines={FPATUSPlotLines2}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPATUSPData2}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of Chromatographic Purity by HPLC Unspecified Impurities Finished Product as per USP Micronised"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.14}
                  yMin={0.00}
                  yTickInterval={0.02}
                  plotLines={FPATUSPlotLines3}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPATUSPData3}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of Chromatographic Purity by HPLC Test - Total Impurities Finished Product as per USP Micronised"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.80}
                  yMin={0.00}
                  yTickInterval={0.10}
                  plotLines={FPATUSPlotLines4}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPATUSPData4}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "25 The Graphical Presentation of Assay Finished Product as per USP (Micronised)"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={104}
                  yMin={95}
                  yTickInterval={1}
                  plotLines={FPATUSPlotLines5}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPATUSPData5}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of Residual Solvents by GC Test - Acetone Finished Product as per USP Micronised"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={3000}
                  yMin={0}
                  yTickInterval={500}
                  plotLines={FPATUSPlotLines6}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPATUSPData6}
                />
              </div>
            </div> 
            

            <div className="gridName pt-4">
              Finished Product Analytical Trend As per PhEur Specification
              (Micronised)
            </div>
            <div>
              <div className="AddRows d-flex w-full justify-between items-center text-3xl">
                <div className="flex items-center">
                  <MdNoteAdd onClick={addFPATRow2} />
                  <div className="addrowinstruction  pl-2">
                    Add Rows by clicking on (+) icon
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <ExcelExportImport
                    data={gridDatas.finishedPHEUR}
                    setimportedData={setimportedData}
                    fileName="currentRPQRN.xlsx"
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan="2">S. No.</th>
                    <th rowSpan="2">Batch No.</th>
                    <th rowSpan="2">Specific Rotation b/w +110° and +117° </th>
                    <th rowSpan="2">L Limit</th>
                    <th rowSpan="2">U Limit</th>
                    <th colSpan="8">
                      Related substence (by HPLC) as per PhEur 11.0
                    </th>
                    <th rowSpan="2">Water (By KF) NMT 2.0 % w/w</th>
                    <th rowSpan="2">Limit</th>
                    <th rowSpan="2">
                      Assay (By HPLC) b/w 97.5 % and 102.0 % w/w
                    </th>
                    <th rowSpan="2">Limit</th>
                    <th colSpan="4">Residual solvent By GC</th>
                    <th colSpan="4">Particle Size Malvern (By Dry Method)</th>
                  </tr>
                  <tr>
                    <th>Impurity B NMT 0.2%</th>
                    <th>Limit</th>
                    <th>Impurity C NMT 0.15%</th>
                    <th>Limit</th>
                    <th>Unspecified Impurities NMT 0.10%</th>
                    <th>Limit</th>
                    <th>Total Impurities NMT 0.5%</th>
                    <th>Limit</th>

                    <th>Methylene chloride NMT 400 ppm</th>
                    <th>Methanol NMT 1500 ppm</th>
                    <th>Acetone NMT 2000 ppm</th>
                    <th>Limit</th>

                    <th>{"90%  < 10 μm"}</th>
                    <th>Limit</th>
                    <th>{"99.5% < 20 μm"}</th>
                    <th>Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {gridDatas?.finishedPHEUR?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        {/* Batch No */}
                        <td>
                          <input
                            value={item.batchNo}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].batchNo = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Specific Rotation */}
                        <td>
                          <input
                            value={item.specificRotation}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].specificRotation = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* L Limit */}
                        <td>
                          <input
                            value={item.lLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].lLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* U Limit */}
                        <td>
                          <input
                            value={item.uLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].uLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Related Substance HPLC: Impurity B */}
                        <td>
                          <input
                            value={item.relatedSubstanceHPLC.impurityB}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].relatedSubstanceHPLC.impurityB =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Related Substance HPLC: Impurity B Limit */}
                        <td>
                          <input
                            value={item.relatedSubstanceHPLC.impurityBLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].relatedSubstanceHPLC.impurityBLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Related Substance HPLC: Impurity C */}
                        <td>
                          <input
                            value={item.relatedSubstanceHPLC.impurityC}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].relatedSubstanceHPLC.impurityC =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Related Substance HPLC: Impurity C Limit */}
                        <td>
                          <input
                            value={item.relatedSubstanceHPLC.impurityCLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].relatedSubstanceHPLC.impurityCLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.relatedSubstanceHPLC.unspecifiedImpurities
                            }
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].relatedSubstanceHPLC.unspecifiedImpurities =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.relatedSubstanceHPLC
                                .unspecifiedImpuritiesLimit
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].relatedSubstanceHPLC.unspecifiedImpuritiesLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.relatedSubstanceHPLC.totalImpurities}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].relatedSubstanceHPLC.totalImpurities =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            value={
                              item.relatedSubstanceHPLC.totalImpuritiesLimit
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].relatedSubstanceHPLC.totalImpuritiesLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Water (By KF) */}
                        <td>
                          <input
                            value={item.waterKF}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].waterKF = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Water KF Limit */}
                        <td>
                          <input
                            value={item.waterKFLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].waterKFLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Assay (By HPLC) */}
                        <td>
                          <input
                            value={item.assay}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].assay = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Assay Limit */}
                        <td>
                          <input
                            value={item.assayLimit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].assayLimit = e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Residual Solvent By CG: Methylene Chloride */}
                        <td>
                          <input
                            value={item.residualSolventByCG.methyleneChloride}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].residualSolventByCG.methyleneChloride =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Residual Solvent By CG: Methanol */}
                        <td>
                          <input
                            value={item.residualSolventByCG.methanol}
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].residualSolventByCG.methanol =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Residual Solvent By CG: Acetone */}
                        <td>
                          <input
                            value={item.residualSolventByCG.acetone}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[index].residualSolventByCG.acetone =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Residual Solvent Limit */}
                        <td>
                          <input
                            value={
                              item.residualSolventByCG.residualSolventLimit
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].residualSolventByCG.residualSolventLimit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Particle Size Malvern: 90% < 10 μm */}
                        <td>
                          <input
                            value={item.particleSizeMalvern.particleSize90}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].particleSizeMalvern.particleSize90 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Particle Size Malvern: 90% Limit */}
                        <td>
                          <input
                            value={item.particleSizeMalvern.particleSize90Limit}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].particleSizeMalvern.particleSize90Limit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Particle Size Malvern: 99.5% < 20 μm */}
                        <td>
                          <input
                            value={item.particleSizeMalvern.particleSize995}
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].particleSizeMalvern.particleSize995 =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
                              });
                            }}
                          />
                        </td>

                        {/* Particle Size Malvern: 99.5% Limit */}
                        <td>
                          <input
                            value={
                              item.particleSizeMalvern.particleSize995Limit
                            }
                            type="number"
                            onChange={(e) => {
                              const newData = [...gridDatas.finishedPHEUR];
                              newData[
                                index
                              ].particleSizeMalvern.particleSize995Limit =
                                e.target.value;
                              setGridDatas({
                                ...gridDatas,
                                finishedPHEUR: newData,
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
            <div className="w-full shadow-lg flex-wrap mb-3 flex items-center justify-evenly mt-3  ">
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "27 The Graphical Presentation of Specific Optical Rotation Finished Product as per PhEur (Micronised) "
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={119}
                  yMin={105}
                  yTickInterval={2}
                  plotLines={FPATPhEurlotLines1}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPHEURData1}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "28 The Graphical Presentation of Water Content Finished Product as per PhEur (Micronised)"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.25}
                  yMin={0.00}
                  yTickInterval={0.05}
                  plotLines={FPATPhEurlotLines2}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPHEURData2}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "29 The Graphical Presentation of Impurity C Finished Product as per PhEur (Micronised)"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={105}
                  yMin={95}
                  yTickInterval={1}
                  plotLines={FPATPhEurlotLines3}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPHEURData3}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of Total impurities Finished Product as per PhEur (Micronised) "
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={3}
                  yMin={0}
                  yTickInterval={0.50}
                  plotLines={FPATPhEurlotLines4}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPHEURData4}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of Assay Finished Product as per PhEur (Micronised)"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={0.80}
                  yMin={0}
                  yTickInterval={0.1}
                  plotLines={FPATPhEurlotLines5}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPHEURData5}
                />
              </div>
              <div className="w-1/2">
                <HighchartsLine
                  heading={
                    "The Graphical Presentation of Residual Solvents by GC Test - Acetone Finished Product as per PhEur Micronised"
                  }
                  xHeading={"Batch No."}
                  yHeading={"OutPut Range in Kg "}
                  yMax={3000}
                  yMin={0}
                  yTickInterval={500}
                  plotLines={FPATPhEurlotLines6}
                  // zones={paracetamolpHZones}
                  // annotations={paracetamolAnnotations}
                  highchartData={finishedPHEURData6}
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
      <div className="flex justify-end gap-10 pr-10">
        <div className="fixed top-1/2 left-0 z-10 flex flex-col">
          {/* <button
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
                // mb-10
              "
            onClick={() => {
              dispatch(addForm(pQRData));
              navigate("/dashboard");
            }}
          >
            Save
          </button> */}
        </div>

        <div className="fixed top-3/4 right-0 z-10 flex flex-col">
          {/* Launch QMS Button */}
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
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
            >
              Launch QMS
            </button>

            {/* Modal */}
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
            onClick={handleUpdateAPQR}
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <div className="h-5 w-5 border-t-2 border-b-2 border-white animate-spin rounded-full mr-3"></div>
            ) : null}
            {loading ? "Saving..." : "Save"}
          </button>

          {/* Exit Button */}
          <button
            onClick={() => navigate("/dashboard")}
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
