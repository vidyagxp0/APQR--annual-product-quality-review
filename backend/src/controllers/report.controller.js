import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sample data to be passed to the template
const pqrData = {
  pqrNo: "India/PCM/02/29/2002/0001/R1.0",
  productName: "Example Product",
  productCode:
    "700001494/700002002/700002589/700001530/700001809/700002194/700002627/70000262/700002573/70000546/70000287  700001494/700002002/700002589/700001530/700001809/700002194/700002627/70000262/700002573/70000546/70000287 70000287",
  genericName: "PEGylated Granulocyte Colony stimulating Factor (PEG GCSF) Injection- 6mg/0.6 mL",
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
      Sl_No: "1",
      PackingBatchNumber: "batch1",
      ManuBatchNumber: "code1",
      RepackingIssuedNumber: "market1",
      RepackingFor: "code2",
      QMS: "market2",
      ReasonForRepacking: "100",
    },
    {
      Sl_No: "1",
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
      AR_No: "1",
      CAPAType: "CAPA Type",
      DescriptionOfIssue: "Description of Issue",
      RootCause: "Root Cause",
      CAPAVerification: "CAPA Verification",
      FileAttachment: "File Attachment",
      Remarks: "Remarks",
    },
    {
      AR_No: "2",
      CAPAType: "CAPA Type",
      DescriptionOfIssue: "Description of Issue",
      RootCause: "Root Cause",
      CAPAVerification: "CAPA Verification",
      FileAttachment: "File Attachment",
      Remarks: "Remarks",
    },
    {
      AR_No: "3",
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
      AR_No: "1",
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
      AR_No: "1",
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
      AR_No: "1",
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
      AR_No: "1",
      TestNameofOOS: "Test Name of OOS",
      ResultsObtained: "Results Obtained",
      SpecificationLimit: "Specification Limit",
      DetailsOfObviousError: "Details of Obvious Error",
      FileAttachment: "File Attachment",
    },
    {
      AR_No: "1",
      TestNameofOOS: "Test Name of OOS",
      ResultsObtained: "Results Obtained",
      SpecificationLimit: "Specification Limit",
      DetailsOfObviousError: "Details of Obvious Error",
      FileAttachment: "File Attachment",
    },
    {
      AR_No: "1",
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
      AR_No: "1",
      TestNameofOOT: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
    {
      AR_No: "1",
      TestNameofOOT: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
    {
      AR_No: "1",
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
      AR_No: "1",
      TestNameofOOT: "Test Name of OOT",
      ResultsObtained: "Results Obtained",
      InitialIntervalDetails: "Initial Interval",
      PreviousInternalDetails: "Previous Interval",
      PercentDifference: "100%",
      TrendAlert: "Trend Alert",
    },
    {
      AR_No: "1",
      TestNameofOOT: "Test Name of OOT",
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
      AR_No: "1",
      TestNameofOOT: "Test Name of OOT",
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

// export const generateReport = async (req, res) => {
//   console.log("Generating PDF...");
//   let browser;
//   try {
//     browser = await puppeteer.launch({
//       headless: true,
//       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     });
//     const page = await browser.newPage();

//     // Define the path to your HTML file
//     const filePath = path.join(__dirname, "../public", "demoreport.html");
//     await page.goto(`file://${filePath}`, { waitUntil: "networkidle0", timeout: 60000 });

//     const pdfBuffer = await page.pdf({
//       format: "A4",
//       printBackground: true,
//     });

//     res.setHeader("Content-Disposition", "attachment; filename=APQR_Report.pdf");
//     res.setHeader("Content-Type", "application/pdf");
//     res.send(pdfBuffer);
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     res.status(500).send("Error generating PDF");
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
//   }
// };