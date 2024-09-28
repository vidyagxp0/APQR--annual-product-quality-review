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
  "complies/doesNotComplies",
]

export const summaryOOSSheaders = [ 
      "SI. No.",
      "BatchNo.",
      "Type",
      "StorageCondition",
      "Testing Intervals Months completed",
     " Stability Protocol No."
]

export const summaryOOSSfields = [

  "batchNo",
  "type",
  "storageCondition",
  "testingInterval",
  "stabilityProtocolNo"
]

export const stabilitySRheaders=[
  "SI. No.",
  "Batch number",
  "Testing Intervals Months",
  "OOS Number"
]

export const stabilitySRfields=[
  "batchNo",
  "testingIntervalMonths",
  "OOSNumber"
]
export const hVACQStatusheaders=[
  "SI. No.",
  "Test Description",
  "Frequency",
  "Status"
]
export const hVACQStatusfields=[
  "testDescription",
  "frequency",
  "status"
]

export const setSanitizationASDOUheaders=[
  "SI. No.",
  "Equipment Name",
  "Frequency",
  "Status"
]
export const setSanitizationASDOUfields=[
  "equipmentName",
  "frequency",
  "status"
]
export const compressedGasheaders=[
  "SI. No.",
  "Compressed Gas",
  "Test",
  "Frequency",
  "Status"
]
export const compressedGasfields=[
  "compressedGas",
  "test",
  "frequency",
  "status"
]
export const reviewOfCPDheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const reviewOfCPDfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]
export const previewRPDheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const previewRPDfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]
export  const currentOOSheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const currentOOSfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]
export const  previewOOSheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const previewOOSfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]
export const currentOOACheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export  const currentOOACfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]

export const previewOOACheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const previewOOACfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]

export  const currentOOALheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const currentOOALfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]
export const previewOOALheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const previewOOALfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]
export const  currentOOSAheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export  const currentOOSAfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]
export const previewOOSAheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const previewOOSAfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]
export const currentOOTheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const currentOOTfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]
export const previewOOTheaders=[
  "SI. No.",
  "Date Of Initiation",
  "Record No",
  "Site/Division",
  "Departmen",
  "Initiator",
  "Short Description",
  "Batch No",
  "Due Date",
  "Current Status"
]
export const previewOOTfields=[
  "dateOfInitiation",
  "recordNo",
  "siteDivision",
  "department",
  "initiator",
  "shortDescription",
  "batchNo",
  "dueDate",
  "currentStatus"
]

