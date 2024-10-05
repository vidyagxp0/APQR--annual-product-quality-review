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

export const oolResultsheaders = [
  "AR No.",
  "Test Name Of OOT",
  "Result Obtained",
  "Initial Interval Details",
  "Previous Interval Details",
  "% Diffrence of Results",
  "Trend Limit",
];
export const oolResultsfields = [
  "ARNo",
  "testNameOfOot",
  "resultsObtained",
  "initialIntervalDetails",
  "previousIntervalDetails",
  "diffrenceOfResult",
  "trendLimit",
];




export const bufferFSDPVheaders = [
  { label: "Critical Process Parameters", rowSpan: 2 },
  { label: "Codes", rowSpan: 2 },
  { label: "Acceptance Criteria", rowSpan: 2 },
  { 
    label: "Results", 
    colSpan: 2,  
    children: [
      { label: "Minimum" }, 
      { label: "Maximum" }
    ]
  },
  { label: "Complies / Does not comply", rowSpan: 2 }
];

// export const bufferFSDPVfields = [
//   {name:"criticalProcessParameter"},
//   {name:"codes"},
//   {name:"acceptanceCriteria"},
//   {name: "results.minimum"},
//   {name: "results.maximum"},
//   {name:"compliesNotComplies"}, 
// ]





export const bufferFSDPVfields = [
    { name: "criticalProcessParameter" },
    { name: "codes" },
    { name: "acceptanceCriteria" },
    { name: "resultminimum" }, // Minimum result field
    { name: "resultmaximum" }, // Maximum result field
    { name: "compliesNotComplies" },
  ];

  export const manufacturingSDheaders = [
    {label: "Critical Process Parameters", rowSpan: 2},
    {label: "Codes", rowSpan: 2},
    {label: "Acceptance Criteria", rowSpan: 2},
    { 
      label: "Results", 
      colSpan: 2,  
      children: [
        { label: "Minimum" }, 
        { label: "Maximum" }
      ]
    },
    {label: "Complies / Does not comply", rowSpan: 2}
  ];
  export const manufacturingSDfields = [
    {name:"criticalProcessParameter"},
    {name:"codes"},
    {name:"acceptanceCriteria"},
    {name: "resultminimum"},
    {name: "resultmaximum"},
    {name:"compliesNotComplies"},
  ]