import React, { useState } from "react";
import Header from "../Component/Header";
import { MdNoteAdd } from "react-icons/md";
import TinyEditor from "../Component/TinyEditor";
import ExcelExport from "../Component/Exports/Excel/ExcelExport";
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
    {
      category: "Assets",
      account: "Petty Cash",
      code: "1065",
      debit: "$0.00",
      credit: "$91,444.00",
    },
    {
      category: "Assets",
      account: "Account Receivables",
      code: "1200",
      debit: "$0.00",
      credit: "$8,125.00",
    },
    {
      category: "Assets",
      account: "Allowance for doubtful accounts",
      code: "1205",
      debit: "$0.00",
      credit: "$1,905.00",
    },
    {
      category: "Assets",
      account: "Inventory",
      code: "1510",
      debit: "$0.00",
      credit: "$1,550.00",
    },
    {
      category: "Assets",
      account: "Stock of Raw Materials",
      code: "1520",
      debit: "$0.00",
      credit: "$100.00",
    },
    {
      category: "Assets",
      account: "Stock of Work In Progress",
      code: "1530",
      debit: "$0.00",
      credit: "$100.00",
    },
    {
      category: "Assets",
      account: "Land and Buildings",
      code: "1810",
      debit: "$0.00",
      credit: "$150.00",
    },
    {
      category: "Liabilities",
      account: "Account Payable",
      code: "2100",
      debit: "$0.00",
      credit: "$60.00",
    },
    {
      category: "Liabilities",
      account: "Deferred Income",
      code: "2105",
      debit: "$0.00",
      credit: "$190.00",
    },
    {
      category: "Liabilities",
      account: "Accrued Franchise Tax",
      code: "2130",
      debit: "$0.00",
      credit: "$650.00",
    },
    {
      category: "Liabilities",
      account: "Vat Provision",
      code: "2140",
      debit: "$1,500.00",
      credit: "$0.00",
    },
    {
      category: "Liabilities",
      account: "Purchase Tax",
      code: "2145",
      debit: "$0.00",
      credit: "$140.00",
    },
    {
      category: "Liabilities",
      account: "Accrued Holiday Pay",
      code: "2230",
      debit: "$0.00",
      credit: "$140.00",
    },
    {
      category: "Equity",
      account: "Common Shares",
      code: "3350",
      debit: "$0.00",
      credit: "$0.00",
    },
    {
      category: "Equity",
      account: "Preferred Shares",
      code: "1089",
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

  const [pQRData, setPQRData] = useState({
    pqrNO: "",
    productName: "",
    productCode: "",
    genericName: "",
    reviewStartDate: "",
    reviewEndDate: "",
    mfgLicNo: "",
  });

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
      testNameOfOos: "",
      resultsObtained: "",
      specificationLimit: "",
      detailsOfObviousError: "",
      chooseFile: "",
    };
    setOosDetails([...oosDetails, newRow]);
  };

  const capaDetailsRow = () => {
    const newRow = {
      capaType: "",
      descriptionOfIssue: "",
      rootCause: "",
      capaVerification: "",
      chooseFile: "",
      remarks: "",
      submitBy: "",
      submitOn: "",
    };
    setCapaDetails([...capaDetails, newRow]);
  };
  const deviationDetailsRow = () => {
    const newRow = {
      capaType: "",
      descriptionOfIssue: "",
      rootCause: "",
      capaVerification: "",
      chooseFile: "",
      remarks: "",
      submitBy: "",
      submitOn: "",
    };
    setDeviationDetails([...deviationDetails, newRow]);
  };

  const ootResultsRow = () => {
    const newRow = {
      testNameOfOot: "",
      resultsObtained: "",
      initialIntervalDetails: "",
      previousIntervalDetails: "",
      diffrenceOfResult: "",
    };
    setOotResults([...ootResults, newRow]);
  };
  const oolResultsRow = () => {
    const newRow = {
      testNameOfOot: "",
      resultsObtained: "",
      initialIntervalDetails: "",
      previousIntervalDetails: "",
      diffrenceOfResult: "",
    };
    setOolResults([...oolResults, newRow]);
  };
  const ooaResultsRow = () => {
    const newRow = {
      testNameOfLimit: "",
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
      code: "",
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
      code7: "",
      code8: "",
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div>
              <h4 className="gridName mt-4">Summary</h4>
              <TinyEditor />
            </div>

            <div className="py-4">
              {/* <div className="AddRows d-flex">
                <MdNoteAdd onClick={addManufacturingSAPSRow} />
                <div className="addrowinstruction"></div>
              </div> */}
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
                  {manufacturingSAPS.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <h4 className="gridName">Summary of Manufacturing Site Address</h4>
            <TinyEditor />
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
                    {rawMRS.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div>
                  <h4 className="gridName mt-5">Summary</h4>
                  <TinyEditor />
                </div>
              </div>

              <div className="pb-4">
                <h4 className="gridName">
                  {" "}
                  Packing Materials Rejection Summary
                </h4>
                {/* <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addPackingMRSRow} />
                  <div className="addrowinstruction"></div>
                </div> */}
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
                    {packingMRS.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
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
                <TinyEditor />
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
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expiredRMD.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div>
                  <h4 className="gridName">Summary</h4>
                  <TinyEditor />
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
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expiredPMD.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
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
                <TinyEditor />
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
                    {reviewOfASL.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="gridName pt-4">
                  Summary of Review of Approved Supplier List
                </h4>
                <TinyEditor />
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
                    <tr>
                      <td>Sorbitol</td>
                      <td>600000405</td>
                      <td>Roquette Freres 62136, Lestrem France</td>
                      <td>Approved</td>
                      <td>Temporarily Blocked as a part of CN/21/062</td>
                    </tr>
                    {vendorQDORME.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
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
                <TinyEditor />
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
                    {vendorQDOPPM.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
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
                <TinyEditor />
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Process Gases
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
                    <tr>
                      <td>Argon Gas</td>
                      <td>300001985</td>
                      <td>Peenya Industrial Gases Pvt Ltd, Hosur</td>
                      <td>Approved</td>
                    </tr>
                    {vendorQDPOG.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <h4 className="gridName pt-4">
                  Summary of Vendor Qualification Details of Process Gases
                </h4>
                <TinyEditor />
              </div>
            </div>
          </>
        ) : null}
        {tab === "MR" ? (
          <div className="p-4">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Product Description</label>
                <input />
              </div>
              <div className="group-input">
                <label>Process Flow</label>
                <input />
              </div>
            </div>

            <div className="sub-head">Review of all Batches Manufactured</div>

            <div className="dual-group-input">
              <div className="group-input">
                <label>
                  Total No. of batches manufactured during the current review
                  period
                </label>
                <input type="number" />
              </div>
              <div className="group-input">
                <label>Total No. of batches Approved & Released</label>
                <input />
              </div>
              <div className="group-input">
                <label>Total No. of Process Validation Batches</label>
                <input />
              </div>
              <div className="group-input">
                <label>Total No. of Reprocessed Batches</label>
                <input />
              </div>
              <div className="group-input">
                <label>Process Validation Batches Details</label>
                <TinyEditor />
              </div>

              <div className="group-input">
                <label>Reprocessing Details</label>
                <TinyEditor />
              </div>
              <div className="group-input">
                <label>Microbial Excursion Details</label>
                <TinyEditor />
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
                  var(--second-color)
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
                  {codeTCTD.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h4 className="gridName pt-4">
                Summary of Code to Code Transfer Details
              </h4>
              <TinyEditor />
            </div>
            <div className="sub-head">
              {" "}
              Review of Manufacturing Process, Packing Process and relevant
              Validation Status
            </div>
            <TinyEditor />
            <div className="sub-head">
              Review of Reprocessing/Repacking/Reworking along with CAPA and
              Effectiveness Check Verification (if any)
            </div>
            <div className="dual-group-input">
              <div className="group-input">
                <label>Batch reprocessing/reworking process Details</label>
                <TinyEditor />
              </div>
              <div className="group-input">
                <label>Batch Repacking Details </label>
                <TinyEditor />
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
                  {reviewORCEC.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  <MdNoteAdd onClick={capaDetailsRow} />
                  <div className="addrowinstruction  pl-2">Add Rows by clicking on (+) icon</div>
                </div>
                <div className="flex gap-4 ">
                  <button
                    className="
                          px-4
                          
                          bg-green-500
                          text-white
                          font-semibold
                          rounded-lg
                          shadow-md
                          hover:bg-green-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-green-500
                          text-xl
                        "
                  >
                    Import
                  </button>
                  <ExcelExport data={balanceSheet} fileName="balance-sheet-summary.xlsx" />
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
                    <th>Submit by</th>
                    <th>Submit On</th>
                    <th>
                      <input type="file" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {capaDetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>{" "}
                        <td>
                          <input />
                        </td>{" "}
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  <button
                    className="
                          px-4
                          
                          bg-green-500
                          text-white
                          font-semibold
                          rounded-lg
                          shadow-md
                          hover:bg-green-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-green-500
                          text-xl
                        "
                  >
                    Import
                  </button>
                  <ExcelExport data={balanceSheet} fileName="balance-sheet-summary.xlsx" />
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
                    <th>
                      <input type="file" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {deviationDetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>{" "}
                        <td>
                          <input />
                        </td>{" "}
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
            </div>

            <div className="sub-head">
              Review of all Batch Failures/Rejections along with CAPA and Effectiveness Check
              Verification (if any):
            </div>

            <h4 className="gridName">Batch Failures/Rejections Details </h4>
            <TinyEditor />

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
                  <button
                    className="
                          px-4
                          
                          bg-green-500
                          text-white
                          font-semibold
                          rounded-lg
                          shadow-md
                          hover:bg-green-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-green-500
                          text-xl
                        "
                  >
                    Import
                  </button>
                  <ExcelExport data={balanceSheet} fileName="balance-sheet-summary.xlsx" />
                </div>
              </div>
              <table className="mb-4">
                <thead>
                  <tr>
                    <th rowSpan={2}>AR No.</th>
                    <th rowSpan={2}>Test Name Of OOS</th>
                    <th rowSpan={2}>Results Obtained</th>
                    <th colSpan={2}>Specification Limit</th>
                    <th rowSpan={2}>Details of Obvious error</th>
                    <th rowSpan={2}>
                      <input type="file" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {oosDetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  <button
                    className="
                          px-4
                          
                          bg-green-500
                          text-white
                          font-semibold
                          rounded-lg
                          shadow-md
                          hover:bg-green-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-green-500
                          text-xl
                        "
                  >
                    Import
                  </button>
                  <ExcelExport data={balanceSheet} fileName="balance-sheet-summary.xlsx" />
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  <button
                    className="
                          px-4
                          
                          bg-green-500
                          text-white
                          font-semibold
                          rounded-lg
                          shadow-md
                          hover:bg-green-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-green-500
                          text-xl
                        "
                  >
                    Import
                  </button>
                  <ExcelExport data={balanceSheet} fileName="balance-sheet-summary.xlsx" />
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>

                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  <button
                    className="
                          px-4
                          
                          bg-green-500
                          text-white
                          font-semibold
                          rounded-lg
                          shadow-md
                          hover:bg-green-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-green-500
                          text-xl
                        "
                  >
                    Import
                  </button>
                  <ExcelExport data={balanceSheet} fileName="balance-sheet-summary.xlsx" />
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>{" "}
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  <button
                    className="
                          px-4
                          
                          bg-green-500
                          text-white
                          font-semibold
                          rounded-lg
                          shadow-md
                          hover:bg-green-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-green-500
                          text-xl
                        "
                  >
                    Import
                  </button>
                  <ExcelExport data={balanceSheet} fileName="balance-sheet-summary.xlsx" />
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
                    <th>Submit by</th>
                    <th>Submit On</th>
                    <th>
                      <input type="file" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {capaDetails.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>{" "}
                        <td>
                          <input />
                        </td>{" "}
                        <td>
                          <input />
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
                <button
                  className="
                          px-4
                          
                          bg-green-500
                          text-white
                          font-semibold
                          rounded-lg
                          shadow-md
                          hover:bg-green-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-green-500
                          text-xl
                        "
                >
                  Import
                </button>
                <ExcelExport data={balanceSheet} fileName="balance-sheet-summary.xlsx" />
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
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
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
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
              <TinyEditor />
            </div>
          </div>
        ) : null}
        {tab === "LR" ? (
          <div className="p-4">
            <div className="sub-head">
              {" "}
              Review of Drug Substance Test Results
            </div>
            <h1 className="gridName">Drug Substance 1 Test Result</h1>
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODSTR7.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODSTR8.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODSTR9.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODSTR10.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  {reviewORMETR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  {reviewODP.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODP2.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODP3.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODP4.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODP5.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODP6.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODP7.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODP8.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODP9.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
                  {reviewODP10.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  {reviewODPFPTR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  {summaryOOSS.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div>
                <h4 className="gridName mt-5">Summary</h4>
                <TinyEditor />
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
                  {stabilitySR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <h4 className="gridName">Summary</h4>
              <TinyEditor />

              <div className="sub-head">
                {" "}
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
                    {reviewOVIRS.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <h4 className="gridName mt-4">Summary</h4>
              <TinyEditor />
              <h4 className="gridName pt-4">
                Review of Analytical Method Validations
              </h4>
              <TinyEditor />
              <h4 className="gridName pt-4">
                Review of Contract Testing Laboratories
              </h4>
              <TinyEditor />
              <h4 className="gridName pt-4">
                Review of Environmental Monitoring Trend and water trends
                Reports
              </h4>
              <TinyEditor />
              <h4 className="gridName pt-4">Laboratory Review Summary</h4>
              <TinyEditor />
            </div>
          </div>
        ) : null}
        {tab === "EAMR" ? (
          <div>
            <h4 className="gridName">Preventive Maintenance Details</h4>
            <TinyEditor />
            <h4 className="gridName pt-4"> Qualification details</h4>
            <TinyEditor />
            <h4 className="gridName pt-4"> Calibration Details</h4>
            <TinyEditor />

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
                  {hVACQStatus.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="gridName mt-5">Summary</h4>
              <TinyEditor />
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
                  {sanitizationASDOU.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">Summary</h4>
            <TinyEditor />

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
                  {compressedGas.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h4 className="gridName pt-4">Engineering Summary</h4>
            <TinyEditor />
          </div>
        ) : null}
        {tab === "QSR" ? (
          <div>
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
                  {currentRPQRN.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
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
            <TinyEditor />
            <h4 className="gridName pt-4">Review of Product Recalls</h4>
            <TinyEditor />{" "}
            <h4 className="gridName pt-4">Review of Returned Products</h4>
            <TinyEditor />{" "}
            <h4 className="gridName pt-4">Review of Salvaged Drugs</h4>
            <TinyEditor />{" "}
            <h4 className="gridName pt-4">
              Review of previous PQR recommendations
            </h4>
            <TinyEditor />{" "}
            <h4 className="gridName pt-4">Review of Quality Agreements</h4>
            <TinyEditor />{" "}
            <h4 className="gridName pt-4">
              Review of Manufacturing Authorizations
            </h4>
            <TinyEditor />{" "}
            <h4 className="gridName pt-4">Review of Open Validations</h4>
            <TinyEditor />
          </div>
        ) : null}
        {tab === "QSR" ? <></> : null}
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
                  {dossierRR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div>
                <h4 className="gridName mt-5">Summary</h4>
                <TinyEditor />
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
                    {dossierRRNma.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>{" "}
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div>
                  <h4 className="gridName mt-5">Summary</h4>
                  <TinyEditor />
                </div>
              </div>
            </div>
          </>
        ) : null}
        {tab === "R" ? (
          <>
            <div>
              <h4 className="gridName">Recommendations Summary</h4>
              <TinyEditor />
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
              <TinyEditor />
            </div>
          </>
        ) : null}
        {tab === "LOA" ? (
          <>
            <div className="container">
              <div>
                <h4 className="gridName">Annexure 1</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 2</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 3</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 4</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 5</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 6</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 7</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 8</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 9</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 10</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 11</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 12</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 13</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 14</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 15</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 16</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 17</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 18</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 19</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 20</h4>
                <TinyEditor />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
