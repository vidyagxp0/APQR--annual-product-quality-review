export const Stageheaders = ["Product Name", "SFG Code", "FG Code"];
export const Stagefields = ["productName", "sFGCode", "fGCode"];
export const SAPSheaders = [
  "Product Name",
  "Batch Code",
  "SFG Code",
  "Remarks",
];
export const SAPSfields = ["productName", "batchCode", "sFGCode", "remarks"];

export const rawMRSheaders = [
  "SI. No.",
  "Material Code",
  "Material Name",
  "Lot No./ A.R. No.",
  "Reason for Rejection",
  "Description",
];
export const rawMRSfields = [
  "materialCode",
  "materialName",
  "ARNo",
  "reasonOfRejection",
  "description",
];

export const packingMRSheaders = [
  "SI. No.",
  "Material Code",
  "Material Name",
  "Lot No./ A.R. No.",
  "Reason for Rejection",
  "Description",
];
export const packingMRSfields = [
  "materialCode",
  "materialName",
  "ARNo",
  "reasonOfRejection",
  "description",
];
export const reviewOfASLheaders = [
  "SI. No.",
  "Material Code",
  "Material Name",
  "Manufacturer / Supplier / Vendor",
  "Facility",
];
export const reviewOfASLfields = [
  "materialCode",
  "materialName",
  "manufacturer",
  "facility",
];
export const expiredRMDheaders = [
  "SI. No.",
  "Material Code",
  "Material Name",
  "Lot No./ A.R. No.",
  "Expiry Date",
];
export const expiredRMDfields = [
  "materialCode",
  "materialName",
  "ARNo",
  "expiryDate",
];

export const expiredPMDheaders = [
  "SI. No.",
  "Material Code",
  "Material Name",
  "Lot No./ A.R. No.",
  "Expiry Date",
];
export const expiredPMDfields = [
  "materialCode",
  "materialName",
  "ARNo",
  "expiryDate",
];

export const vendorQDORMEheaders = [
  "Material Name",
  "Material Code",
  "Manufacturer Name",
  "Qualification Status",
  "Remarks",
];
export const vendorQDORMEfields = [
  "materialName",
  "materialCode",
  "manufacturerName",
  "qualificationStatus",
  "remarks",
];
export const vendorQDOPPMheaders = [
  "Material Name",
  "Material Code",
  "Manufacture Name",
  "Qualification Status",
];
export const vendorQDOPPMfields = [
  "materialName",
  "materialCode",
  "manufacturerName",
  "qualificationStatus",
];
export const reviewODSTRheaders = [
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
];
export const reviewODSTRfields = [
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
];
export const vendorQDPOGheaders = [
  "Gas Name",
  "Gas Code",
  "Manufacturer Name",
  "Qualification Status",
];
export const vendorQDPOGfields = [
  "gasName",
  "gasCode",
  "manufacturerName",
  "qualificationStatus",
];

export const codeTCTDheaders = [
  "SI. No.",
  "Batch Number",
  "Existing code",
  "Existing market",
  "Proposed code",
  "Proposed Market",
  "Transfer quantity",
  "Ref. No.",
];
export const codeTCTDfields = [
  "batchNo",
  "existingCode",
  "existingMarket",
  "proposedCode",
  "proposedMarket",
  "transferQuality",
  "refNo",
];
export const reviewORCECheaders = [
  "SI. No.",
  "Packing batch number",
  "Manufacturing batch number",
  "Repacking issued number",
  "Repacking for",
  "QMS",
  "Reason for repacking",
];
export const reviewORCECfields = [
  "packingBatchNumber",
  "manufacturingBatchNumber",
  "repackingIssuedNumber",
  "repackingFor",
  "qMS",
  "reasonForRepacking",
];
export const capaDetailsheaders = [
  "AR No.",
  "CAPA Type",
  "Description of Issue",
  "Root Cause",
  "CAPA Verification",
  "File Attachment",
  "Remarks",
];
export const capaDetailsfields = [
  "ARNo",
  "capaType",
  "descriptionOfIssue",
  "rootCause",
  "capaVerification",
  "fileAttachment",
  "remarks",
];

export const deviationDetailsheaders = [
  "AR No.",
  "Deviation Related To",
  "Description",
  "Root Cause",
  "Deviation Ovserved On",
  "Deviation Ovserved By",
  "Classification of Deviation",
  "file Attachment",
  "Remarks",
  "Status",
];
export const deviationDetailsfields = [
  "ARNo",
  "deviationRelatedTo",
  "description",
  "rootCause",
  "deviationObservedOn",
  "deviationObservedBy",
  "classificationOfDeviation",
  "fileAttachment",
  "remarks",
  "status",
];

export const oosDetailsheaders = [
  "AR No.",
  "Test Name Of OOS",
  "Results Obtained",
  "Specification Limit",
  "Details of Obvious error",
  "File Attachment",
];
export const oosDetailsfields = [
  "ARNo",
  "testNameOfOos",
  "resultsObtained",
  "specificationLimit",
  "detailsOfObviousError",
  "fileAttachment",
];
export const ootResultsheaders = [
  "AR No.",
  "Test Name Of OOT",
  "Result Obtained",
  "Initial Interval Details",
  "Previous Interval Details",
  "% Diffrence of Results",
  "Trend Limit",
];
export const ootResultsfields = [
  "ARNo",
  "testNameOfOot",
  "resultsObtained",
  "initialIntervalDetails",
  "previousIntervalDetails",
  "diffrenceOfResult",
  "trendLimit",
];
export const ooaResultsheaders = [
  "AR No.",
  "Test Name Of Alert",
  "Result Obtained",
  "Initial Interval Details",
  "Previous Interval Details",
  "% Diffrence of Results",
  "Trend Limit",
];
export const ooaResultsfields = [
  "testNameOfOoa",
  "resultsObtained",
  "initialIntervalDetails",
  "previousIntervalDetails",
  "diffrenceOfResult",
  "trendLimit",
];

export const reviewODSTR2headers = [
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
];
export const reviewODSTR2fields = [
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
];

export const reviewODSTR3fields = [
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
];

export const reviewODSTR3headers = [
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
];

export const reviewODSTR4headers = [
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
];
export const reviewODSTR4fields = [
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
];

export const reviewODSTR5headers = [
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
];
export const reviewODSTR5fields = [
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
];

export const reviewODSTR6headers = [
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
];
export const reviewODSTR6fields = [
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
];
export const reviewODSTR7fields = [
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
];
export const reviewODSTR7headers = [
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
];

export const reviewODSTR8headers = [
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
];
export const reviewODSTR8fields = [
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
];

export const reviewODSTR9headers=[
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
]
export const reviewODSTR9fields=[
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
]

export const reviewODSTR10headers=[
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
]
export const reviewODSTR10fields=[
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
]

export const reviewODSTR11headers=[
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
]
export const reviewODSTR11fields=[
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
]
export const reviewODSTR12headers=[
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
]
export const reviewODSTR12fields=[
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
]
export const reviewODSTR13headers=[
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
]
export const reviewODSTR13fields=[
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
]
export const reviewODSTR14headers=[
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
]
export const reviewODSTR14fields=[
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
]

export const reviewODSTR15headers=[
  "Batch No",
  "Tests parameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "Observed Value",
  "Complies/Does Not complies",
]
export const reviewODSTR15fields=[
  "batchNo",
  "testsParameter",
  "LSL",
  "USL",
  "LCL",
  "UCL",
  "observedValue",
  "compliesNotComplies",
]
export const summaryOOSSfields=[
  "SI. No.",
  "BatchNo",
  "Type",
  "StorageCondition",
  "TestingIntervalsMonthscompleted",
   "StabilityProtocolNo"
]
export const summaryOOSSheaders=[
  "SI. No.",
  "Batch No.",
  "Type",
  "Storage Condition",
  "Testing Intervals Months completed",
   "Stability Protocol No.",
]
