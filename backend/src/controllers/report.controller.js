import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import { APQR } from "../models/apqr.model.js";
import gridRef from "../models/gridRef.model.js";
import { log } from "console";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sample data to be passed to the template
const pqrData = {
  pqrNo: "India/PCM/02/29/2002/0001/R1.0",
  productName: "Example Product",
  initiator: "Gaurav Meena",
  productCode:
    "700001494/700002002/700002589/700001530/700001809/700002194/700002627/70000262/700002573/70000546/70000287  700001494/700002002/700002589/700001530/700001809/700002194/700002627/70000262/700002573/70000546/70000287 70000287",
  genericName: "PEGylated Granulocyte Colony stimulating Factor (PEG GCSF) Injection- 6mg/0.6 mL",
  dosageForm: "Injection",
  reviewStartDate: "2022-03-01",
  reviewEndDate: "2022-03-31",

  reviewPeriod: "APRIL 2021-MARCH 2022<",
  mfgLicNo: "KTK/28D/07/2006",
  ManuSiteGrid: [
    { productName: "product 1", sFGCode: "sgf1", fGCode: "fgcode1" },
    { productName: "product 2", sFGCode: "sgf2", fGCode: "fgcode2" },
    { productName: "product 3", sFGCode: "sfg3", fGCode: "fgcode3" },
  ],

  rawMatRejectionGrid: [
    {
      SI_No: "1",
      MaterialCode: "matcode1",
      MaterialName: "materialname1",
      LotNo_ArNo: "lotnoar1",
      ReasonForRejection: "reason1",
      Description: "desc1",
    },
    {
      SI_No: "2",
      MaterialCode: "matcode2",
      MaterialName: "materialname2",
      LotNo_ArNo: "lotnoar2",
      ReasonForRejection: "reason2",
      Description: "desc2",
    },
    {
      SI_No: "3",
      MaterialCode: "matcode3",
      MaterialName: "materialname3",
      LotNo_ArNo: "lotnoar3",
      ReasonForRejection: "reason3",
      Description: "desc3",
    },
  ],
  rawMatRejectionSummary: "Raw Materials Rejection Summary will be visible here",
  packagingMatRejectionGrid: [
    {
      SI_No: "1",
      MaterialCode: "matcode1",
      MaterialName: "materialname1",
      LotNo_ArNo: "lotnoar1",
      ReasonForRejection: "reason1",
      Description: "desc1",
    },
    {
      SI_No: "2",
      MaterialCode: "matcode2",
      MaterialName: "materialname2",
      LotNo_ArNo: "lotnoar2",
      ReasonForRejection: "reason2",
      Description: "desc2",
    },
    {
      SI_No: "3",
      MaterialCode: "matcode3",
      MaterialName: "materialname3",
      LotNo_ArNo: "lotnoar3",
      ReasonForRejection: "reason3",
      Description: "desc3",
    },
  ],
  packagingMatRejectionSummary: "Packaging Materials Rejection Summary will be visible here",

  expireRawMatGrid: [
    {
      SI_No: "1",
      MaterialCode: "matcode1",
      MaterialName: "materialname1",
      LotNo_ArNo: "lotnoar1",
      Description: "desc1",
    },
    {
      SI_No: "2",
      MaterialCode: "matcode2",
      MaterialName: "materialname2",
      LotNo_ArNo: "lotnoar2",
      Description: "desc2",
    },
    {
      SI_No: "3",
      MaterialCode: "matcode3",
      MaterialName: "materialname3",
      LotNo_ArNo: "lotnoar3",
      Description: "desc3",
    },
  ],
  expireRawMatSummary: "Expired Raw Materials Summary will be visible here",
  expirePackagingMatGrid: [
    {
      SI_No: "1",
      MaterialCode: "matcode1",
      MaterialName: "materialname1",
      LotNo_ArNo: "lotnoar1",
      Description: "desc1",
    },
    {
      SI_No: "2",
      MaterialCode: "matcode2",
      MaterialName: "materialname2",
      LotNo_ArNo: "lotnoar2",
      Description: "desc2",
    },
    {
      SI_No: "3",
      MaterialCode: "matcode3",
      MaterialName: "materialname3",
      LotNo_ArNo: "lotnoar3",
      Description: "desc3",
    },
  ],
  expirePackagingMatSummary: "Expired Packaging Materials Rejection Summary will be visible here",
  aslGrid: [
    {
      SI_No: "1",
      MaterialCode: "matcode1",
      MaterialName: "materialname1",
      Manufacturer_Supplier_Vendor: "vendor1",
      Facility: "facility1",
    },
    {
      SI_No: "2",
      MaterialCode: "matcode2",
      MaterialName: "materialname2",
      Manufacturer_Supplier_Vendor: "vendor1",
      Facility: "facility2",
    },
    {
      SI_No: "3",
      MaterialCode: "matcode3",
      MaterialName: "materialname3",
      Manufacturer_Supplier_Vendor: "vendor1",
      Facility: "facility3",
    },
  ],
  aslSummary: "Summary of Review of Approved Supplier List will be visible here",
  vqdGrid: [
    {
      MaterialName: "materialname1",
      MaterialCode: "matcode1",
      Manufacturer_Name: "vendor1",
      Qualification_Status: "Qualification Status 1",
      Remarks: "Remarks here",
    },
    {
      MaterialCode: "matcode2",
      MaterialName: "materialname2",
      Manufacturer_Name: "vendor1",
      Qualification_Status: "Qualification Status 1",
      Remarks: "Remarks here",
    },
    {
      MaterialCode: "matcode3",
      MaterialName: "materialname3",
      Manufacturer_Name: "vendor1",
      Qualification_Status: "Qualification Status 1",
      Remarks: "Remarks here",
    },
  ],
  vqdSummary:
    "Summary of Vendor Qualification Details of Raw Material Excipients will be visible here",
  vqdPPMGrid: [
    {
      MaterialName: "materialname1",
      MaterialCode: "matcode1",
      Manufacturer_Name: "vendor1",
      Qualification_Status: "Qualification Status 1",
    },
    {
      MaterialCode: "matcode2",
      MaterialName: "materialname2",
      Manufacturer_Name: "vendor1",
      Qualification_Status: "Qualification Status 1",
    },
    {
      MaterialCode: "matcode3",
      MaterialName: "materialname3",
      Manufacturer_Name: "vendor1",
      Qualification_Status: "Qualification Status 1",
      Remarks: "Remarks here",
    },
  ],
  vqdPPMSummary:
    "Summary of Vendor Qualification Details of Primary Packing Materials will be visible here",
  vqdPGGrid: [
    {
      GasName: "materialname1",
      GasCode: "matcode1",
      Manufacturer_Name: "vendor1",
      Qualification_Status: "Qualification Status 1",
    },
    {
      GasName: "matcode2",
      GasCode: "materialname2",
      Manufacturer_Name: "vendor1",
      Qualification_Status: "Qualification Status 1",
    },
    {
      GasName: "matcode3",
      GasCode: "materialname3",
      Manufacturer_Name: "vendor1",
      Qualification_Status: "Qualification Status 1",
    },
  ],
  vqdPGSummary: "Summary of Vendor Qualification Details of Process Gases will be visible here",

  // Tab 3
  productInfo: "Product Information",
  processFlow: "Process Flow",
  totalBatchesManu: "100",
  totalBatchesApproved: "80",
  totalNoValidationprocessedBatches: "70",
  totalNoReprocessedBatches: "60",
  processValidationBatchesDetails: "Batch Validation Details",
  reprocessingDetails: "Reprocessing Details",
  microbialExcursionDetails: "Microbial Excursion Details",
  codeToCodetransferDetails: [
    {
      Sl_No: "1",
      BatchNumber: "batch1",
      ExistingCode: "code1",
      ExistingMarket: "market1",
      ProposedCode: "code2",
      ProposedMarket: "market2",
      TransferQuantity: "100",
      RefNo: "ref1",
    },
    {
      Sl_No: "2",
      BatchNumber: "batch2",
      ExistingCode: "code2",
      ExistingMarket: "market2",
      ProposedCode: "code3",
      ProposedMarket: "market3",
      TransferQuantity: "200",
      RefNo: "ref2",
    },
    {
      Sl_No: "3",
      BatchNumber: "batch3",
      ExistingCode: "code3",
      ExistingMarket: "market3",
      ProposedCode: "code4",
      ProposedMarket: "market4",
      TransferQuantity: "300",
      RefNo: "ref3",
    },
  ],
  codeToCodetransferSummary: "Summary of Code To Code Transfer will be visible here",
  reviewOFManuProcessSummary:
    "Summary of Review of Manufacturing Process, Packing Process and relevant Validation Status Process will be visible here",
  brpDetails:
    "Batch reprocessing/reworking process Details Process and relevant Validation Status Process will be visible here",
  batchRepackingDetails:
    "Batch repacking process Details Process and relevant Validation Status Process will be visible here",
  reviewOfReprocessingGrid: [
    {
      Sl_No: "1",
      PackingBatchNumber: "batch1",
      ManuBatchNumber: "code1",
      RepackingIssuedNumber: "market1",
      RepackingFor: "code2",
      QMS: "market2",
      ReasonForRepacking: "100",
    },
    {
      Sl_No: "2",
      PackingBatchNumber: "batch1",
      ManuBatchNumber: "code1",
      RepackingIssuedNumber: "market1",
      RepackingFor: "code2",
      QMS: "market2",
      ReasonForRepacking: "100",
    },
    {
      Sl_No: "3",
      PackingBatchNumber: "batch1",
      ManuBatchNumber: "code1",
      RepackingIssuedNumber: "market1",
      RepackingFor: "code2",
      QMS: "market2",
      ReasonForRepacking: "100",
    },
  ],
  capaDetailsGrid: [
    {
      Ar_No: "1",
      CAPAType: "CAPA Type",
      DescriptionOfIssue: "Description of Issue",
      RootCause: "Root Cause",
      CAPAVerification: "CAPA Verification",
      FileAttachment: "File Attachment",
      Remarks: "Remarks",
    },
    {
      Ar_No: "2",
      CAPAType: "CAPA Type",
      DescriptionOfIssue: "Description of Issue",
      RootCause: "Root Cause",
      CAPAVerification: "CAPA Verification",
      FileAttachment: "File Attachment",
      Remarks: "Remarks",
    },
    {
      Ar_No: "3",
      CAPAType: "CAPA Type",
      DescriptionOfIssue: "Description of Issue",
      RootCause: "Root Cause",
      CAPAVerification: "CAPA Verification",
      FileAttachment: "File Attachment",
      Remarks: "Remarks",
    },
  ],
  capaDetailsSummary: "Summary of CAPA Details will be visible here",
  deviationDetailsGrid: [
    {
      Ar_No: "1",
      DeviationRelatedTo: "Deviation Related To",
      Description: "Description",
      RootCause: "Root Cause",
      DeviationObservedOn: "Deviation Observed On",
      DeviationObservedBy: "Deviation Observed By",
      ClassificationOfDeviation: "Classification of Deviation",
      FileAttachment: "File Attachment",
      Remarks: "Remarks",
      Status: "Status",
    },
    {
      Ar_No: "2",
      DeviationRelatedTo: "Deviation Related To",
      Description: "Description",
      RootCause: "Root Cause",
      DeviationObservedOn: "Deviation Observed On",
      DeviationObservedBy: "Deviation Observed By",
      ClassificationOfDeviation: "Classification of Deviation",
      FileAttachment: "File Attachment",
      Remarks: "Remarks",
      Status: "Status",
    },
    {
      Ar_No: "3",
      DeviationRelatedTo: "Deviation Related To",
      Description: "Description",
      RootCause: "Root Cause",
      DeviationObservedOn: "Deviation Observed On",
      DeviationObservedBy: "Deviation Observed By",
      ClassificationOfDeviation: "Classification of Deviation",
      FileAttachment: "File Attachment",
      Remarks: "Remarks",
      Status: "Status",
    },
  ],
  deviationDetailsSummary: "Summary of CAPA Details will be visible here",
  batchFailuresRejectionsSummary: "Summary of Batch Failures Rejections will be visible here",
  OosDetails: [
    {
      Ar_No: "1",
      TestNameofOOS: "Test Name of OOS",
      ResultsObtained: "Results Obtained",
      SpecificationLimit: "Specification Limit",
      DetailsOfObviousError: "Details of Obvious Error",
      FileAttachment: "File Attachment",
    },
    {
      Ar_No: "2",
      TestNameofOOS: "Test Name of OOS",
      ResultsObtained: "Results Obtained",
      SpecificationLimit: "Specification Limit",
      DetailsOfObviousError: "Details of Obvious Error",
      FileAttachment: "File Attachment",
    },
    {
      Ar_No: "3",
      TestNameofOOS: "Test Name of OOS",
      ResultsObtained: "Results Obtained",
      SpecificationLimit: "Specification Limit",
      DetailsOfObviousError: "Details of Obvious Error",
      FileAttachment: "File Attachment",
    },
  ],
  OosDetailsSummary: "Summary of OOS Details will be visible here",
  ootDetails: [
    {
      Ar_No: "1",
      TestNameofOOT: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
    {
      Ar_No: "2",
      TestNameofOOT: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
    {
      Ar_No: "3",
      TestNameofOOT: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
  ],
  ootDetailsSummary: "Summary of OOT Details will be visible here",
  ooaDetails: [
    {
      Ar_No: "1",
      TestNameofOOA: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
    {
      Ar_No: "2",
      TestNameofOOA: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
    {
      Ar_No: "3",
      TestNameofOOA: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
  ],
  ooaDetailsSummary: "Summary of OOA Details will be visible here",
  oolDetails: [
    {
      Ar_No: "1",
      TestNameofOOL: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
    {
      Ar_No: "2",
      TestNameofOOL: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
    {
      Ar_No: "3",
      TestNameofOOL: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
  ],
  oolDetailsSummary: "Summary of OOL Details will be visible here",
  unitOperation1: [
    {
      CriticalProcessParameters: "Critical Process Parameters",
      Codes: "Codes",
      AcceptanceCriteria: "Acceptance Criteria",
      Results: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      CriticalProcessParameters: "Critical Process Parameters",
      Codes: "Codes",
      AcceptanceCriteria: "Acceptance Criteria",
      Results: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    ,
    {
      CriticalProcessParameters: "Critical Process Parameters",
      Codes: "Codes",
      AcceptanceCriteria: "Acceptance Criteria",
      Results: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  msaSummary: "Summary of Manufacturing Site Address will be visible here",

  Ds1Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  Ds2Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  Ds3Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  Ds4Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  Ds5Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  Ds6Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  Ds7Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  Ds8Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  Ds9Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  Ds10Results: [
    {
      Sl_No: "1",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Testsparameter: "Codes",
      Specification_limit: "Acceptance Criteria",
      Obtained: {
        Minimum: "Minimum",
        Maximum: "Maximum",
      },
      CompliesNotComplies: "Complies Not Complies",
    },
  ],
  dstSummary: "Summary of Review of Drug Substance Test will be visible here",

  rpmSummary: "Summary of Review of Preventive Maintenance Details",
  qdSummary: "Summary of Qualification details",
  cdSummary: "Summary of Calibration Details",

  HqStatus: [
    {
      Sl_No: "1",
      TestsDescription: "TestsDescription",
      Frequency: "Frequency Criteria",
      Status: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      TestsDescription: "TestsDescription",
      Frequency: "Frequency Criteria",
      Status: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      TestsDescription: "TestsDescription",
      Frequency: "Frequency Criteria",
      Status: "Complies Not Complies",
    },
  ],
  hvqSummary: "Summary of HVAC Qualification Status will be visible here",

  ssd: [
    {
      Sl_No: "1",
      Equipment_Name: "Equipment Name",
      Frequency: "Frequency Criteria",
      Status: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      Equipment_Name: "Equipment Name",
      Frequency: "Frequency Criteria",
      Status: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      Equipment_Name: "Equipment Name",
      Frequency: "Frequency Criteria",
      Status: "Complies Not Complies",
    },
  ],
  ssdSummary: "Summary of Sanitization and Sterilization Details of Utilities will be visible here",
  cg: [
    {
      Sl_No: "1",
      CompressedGas: "CompressedGas",
      Test: "Test",
      Frequency: "Frequency Criteria",
      Status: "Complies Not Complies",
    },
    {
      Sl_No: "2",
      CompressedGas: "CompressedGas",
      Test: "Test",
      Frequency: "Frequency Criteria",
      Status: "Complies Not Complies",
    },
    {
      Sl_No: "3",
      CompressedGas: "CompressedGas",
      Test: "Test",
      Frequency: "Frequency Criteria",
      Status: "Complies Not Complies",
    },
  ],
  cgSummary: "Summary of Compressed Gas of Utilities will be visible here",
  eSummary: "Summary of Engineering will be visible here",

  rcpd: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  rppd: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  rdSummary: "Summary of Review of period Deviations will be visible here",
  crpo: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  prpo: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  oosSummary: "Summary of OOS will be visible here",
  ooac: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  pooac: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  ooacSummary: "Summary of Review of period Deviations will be visible here",
  ooal: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  pooal: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  ooalSummary: "Summary of Review of period Deviations will be visible here",
  oos: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  poos: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  oosaSummary: "Summary of Review of OOSA (Analytical) will be visible here",
  oot: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  poot: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  ootSummary: "Summary of Review of OOT (Analytical) will be visible here",
  cc: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  pcc: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  ccSummary: "Summary of Review of OOT (Analytical) will be visible here",
  li: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  pli: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  liSummary: "Summary of Review of Lab Incident will be visible here",
  rpc: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  prpc: [
    {
      S_No: "1",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "2",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
    {
      S_No: "3",
      Date_Of_Initiation: "01-09-24",
      Record_No: "201",
      Site_Division: "Site",
      Department: "Department",
      Initiator: "Initiator",
      Short_Description: "Short Description",
      Batch_No: "Batch No",
      Due_Date: "Due Date",
      Current_Status: "Current Status",
    },
  ],
  rpcSummary: "Summary of Review of Market Complaints will be visible here",

  qrNoti: [
    {
      Sl_No: "1",
      Batch_No: "Batch No.",
      Quality_Related_Notification: {
        No: "No.",
        Description: "Description",
        Impact: "Impact",
        Status: "Status",
      },
      CAPA: {
        Description_No: "Description No.",
        Status: "Status",
        EC: "EC",
      },
    },
    {
      Sl_No: "2",
      Batch_No: "Batch No.",
      Quality_Related_Notification: {
        No: "No.",
        Description: "Description",
        Impact: "Impact",
        Status: "Status",
      },
      CAPA: {
        Description_No: "Description No.",
        Status: "Status",
        EC: "EC",
      },
    },
    {
      Sl_No: "3",
      Batch_No: "Batch No.",
      Quality_Related_Notification: {
        No: "No.",
        Description: "Description",
        Impact: "Impact",
        Status: "Status",
      },
      CAPA: {
        Description_No: "Description No.",
        Status: "Status",
        EC: "EC",
      },
    },
  ],

  prerSummary:
    "Summary of previous Review Period Quality Related Notification will be visible here",
  revrSummary: "Summary of Review of Product Recalls will be visible here",
  revreSummary: "Summary of Review of Returned Products will be visible here",
  revsalSummary: "Summary of Review of Salvaged Drugs will be visible here",
  revPqrSummary: "Summary of Review of previous PQR recommendations will be visible here",
  revagrSummary: "Summary of Review of Quality Agreements will be visible here",
  revmSummary: "Summary of Review of Manufacturing Authorizations will be visible here",
  revovSummary: "Summary of Review of Open Validations will be visible here",

  dosVar: [
    {
      Sl_No: "1",
      Agency: "Agency",
      Notification_No: "Notification",
      Notification_Type: "Ring",
      Description: "Description",
    },
    {
      Sl_No: "2",
      Agency: "Agency",
      Notification_No: "Notification",
      Notification_Type: "Ring",
      Description: "Description",
    },
    {
      Sl_No: "3",
      Agency: "Agency",
      Notification_No: "Notification",
      Notification_Type: "Ring",
      Description: "Description",
    },
  ],
  dosVarSummary: "Summary of Review of Open Validations will be visible here",
  newm: [
    {
      Sl_No: "1",
      Country_Name: "india",
      Description_Of_Packing: "Description Of Packing",
      Date_of_Application: "01/02/24",
      Status_of_Application: "pending",
      Date_of_Authorization: "03/07/24",
      Remarks: "Remarks",
    },
    {
      Sl_No: "2",
      Country_Name: "india",
      Description_Of_Packing: "Description Of Packing",
      Date_of_Application: "01/02/24",
      Status_of_Application: "pending",
      Date_of_Authorization: "03/07/24",
      Remarks: "Remarks",
    },
    {
      Sl_No: "3",
      Country_Name: "india",
      Description_Of_Packing: "Description Of Packing",
      Date_of_Application: "01/02/24",
      Status_of_Application: "pending",
      Date_of_Authorization: "03/07/24",
      Remarks: "Remarks",
    },
  ],
  newmSummary: "Summary of Review of Open Validations will be visible here",
  recSummary: "Summary of Recommendations will be visible here",
  decSummary: "Summary of Recommendations will be visible here",

  A1Summary: "Summary of Annexure 1 will be visible here",
  A2Summary: "Summary of Annexure 2 will be visible here",
  A3Summary: "Summary of Annexure 3 will be visible here",
  A4Summary: "Summary of Annexure 4 will be visible here",
  A5Summary: "Summary of Annexure 5 will be visible here",
  A6Summary: "Summary of Annexure 6 will be visible here",
  A7Summary: "Summary of Annexure 7 will be visible here",
  A8Summary: "Summary of Annexure 8 will be visible here",
  A9Summary: "Summary of Annexure 9 will be visible here",
  A10Summary: "Summary of Annexure 10 will be visible here",
  A11Summary: "Summary of Annexure 11 will be visible here",
  A12Summary: "Summary of Annexure 12 will be visible here",
  A13Summary: "Summary of Annexure 13 will be visible here",
  A14Summary: "Summary of Annexure 14 will be visible here",
  A15Summary: "Summary of Annexure 15 will be visible here",
  A16Summary: "Summary of Annexure 16 will be visible here",
  A17Summary: "Summary of Annexure 17 will be visible here",
  A18Summary: "Summary of Annexure 18 will be visible here",
  A19Summary: "Summary of Annexure 19 will be visible here",
  A20Summary: "Summary of Annexure 20 will be visible here",
};

const setapqrdata = (aPQRData) => {
  if (!aPQRData || typeof aPQRData !== "object") {
    console.error("Invalid data provided");
    return;
  }
  pqrData.pqrNo = aPQRData?.pqrId ?? "";
  pqrData.initiator = aPQRData?.initiator ?? "";
  pqrData.productName = aPQRData?.productName ?? "";
  pqrData.productCode = aPQRData?.productCodes ?? "";
  pqrData.genericName = aPQRData?.genericName ?? "";
  pqrData.dosageForm = aPQRData?.dosageForm ?? "";
  pqrData.reviewStartDate = aPQRData?.reviewStartDate ?? "";
  pqrData.reviewEndDate = aPQRData?.reviewEndDate ?? "";
  pqrData.mfgLicNo = aPQRData?.mfgLicNo ?? "";
  pqrData.productInfo = aPQRData?.productDescription ?? "";
  pqrData.processFlow = aPQRData?.processFlow ?? "";
  pqrData.totalBatchesManu = aPQRData?.totalBatchesManufactured ?? "";
  pqrData.totalBatchesApproved = aPQRData?.totalBatchesApprovedReleased ?? "";
  pqrData.totalNoValidationprocessedBatches = aPQRData?.totalProcessValidationBatches ?? "";
  pqrData.totalNoReprocessedBatches = aPQRData?.totalReprocessedBatches ?? "";

  //Grids
  pqrData.ManuSiteGrid = aPQRData?.gridDatas?.manufacturingStage?.data ?? [];
  pqrData.rawMatRejectionGrid = aPQRData?.gridDatas?.rawMRS?.data ?? [];
  pqrData.packagingMatRejectionGrid = aPQRData?.gridDatas?.packingMRS?.data ?? [];
};

export const generatePdf = async (req, res) => {
  let browser;
  try {
    // Render the main HTML with EJS
    const htmlContent = await new Promise((resolve, reject) => {
      req.app.render("report", { product: pqrData }, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    // Render the header and footer with EJS
    const headerHtml = await new Promise((resolve, reject) => {
      req.app.render("header", { title: "Example Product Report" }, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", {}, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerHtml,
      footerTemplate: footerHtml,
      margin: {
        top: "160px",
        right: "50px",
        bottom: "50px",
        left: "50px",
      },
    });

    res.setHeader("Content-Disposition", "attachment; filename=APQR_Report.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

export const generatePdfbyId = async (req, res) => {
  const apqrId = req.params.id;
  let aPQRData;
  try {
    const aPQRDataRes = await fetch(`http://localhost:4000/get-apqr/${apqrId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    aPQRData = await aPQRDataRes.json();
    setapqrdata(aPQRData);
  } catch (error) {
    console.error("Error fetching APQR data:", error);
    return res.status(500).send("Error fetching APQR data");
  }
  let browser;
  try {
    if (!aPQRData) {
      return res.status(404).json({ error: true, message: "APQR not found" });
    }
    // Render the main HTML with EJS
    const htmlContent = await new Promise((resolve, reject) => {
      req.app.render("report", { product: pqrData }, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    // Render the header and footer with EJS
    const headerHtml = await new Promise((resolve, reject) => {
      req.app.render("header", { title: "Example Product Report" }, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", {}, (err, html) => {
        if (err) return reject(err);
        resolve(html);
      });
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerHtml,
      footerTemplate: footerHtml,
      margin: {
        top: "160px",
        right: "50px",
        bottom: "50px",
        left: "50px",
      },
    });

    res.setHeader("Content-Disposition", "attachment; filename=APQR_Report.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

export const viewReport = (req, res) => {
  try {
    req.app.render("report", { product: pqrData }, (err, html) => {
      if (err) {
        console.error("Error rendering HTML:", err);
        return res.status(500).send("Error rendering HTML");
      }
      res.send(html);
    });
  } catch (error) {
    console.error("Error viewing report:", error);
    res.status(500).send("Error viewing report");
  }
};

export const viewReportByID = async (req, res) => {
  const apqrId = req.params.id;

  let aPQRData;
  try {
    const aPQRDataRes = await fetch(`http://localhost:4000/get-apqr/${apqrId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    aPQRData = await aPQRDataRes.json();
    setapqrdata(aPQRData);
  } catch (error) {
    console.error("Error fetching APQR data:", error);
    return res.status(500).send("Error fetching APQR data");
  }
  try {
    req.app.render("report", { product: pqrData }, (err, html) => {
      if (err) {
        console.error("Error rendering HTML:", err);
        return res.status(500).send("Error rendering HTML");
      }
      res.send(html);
    });
  } catch (error) {
    console.error("Error viewing report:", error);
    res.status(500).send("Error viewing report");
  }
};
