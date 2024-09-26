import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import { htmlToText } from "html-to-text";
import { getBase64Image } from "../../index.js";
import fs from "fs";

// Sample data to be passed to the template
const pqrData = {};

function htmlToPlainText(html) {
  // Convert HTML to plain text using html-to-text
  return htmlToText(html, {
    wordwrap: false, // Disable word wrapping to preserve code formatting
  });
}

const removeHtmlTags = (str) => {
  if (!str) return str;

  let cleanedStr = str.replace(/<[^>]+>/g, " ");
  cleanedStr = cleanedStr.replace(/^"(.*)"$/, "$1");

  return cleanedStr;
};

const cleanAuditTrailData = (auditTrail) => {
  return auditTrail.map((entry) => {
    // Clean previous_value and new_value
    const cleanPreviousValue = removeHtmlTags(entry.previous_value);
    const cleanNewValue = removeHtmlTags(entry.new_value);

    // Return a new object with cleaned values
    return {
      ...entry,
      previous_value: cleanPreviousValue,
      new_value: cleanNewValue,
    };
  });
};

const setapqrdata = (aPQRDataOBJ) => {
  const { aPQRData, gridDatas } = aPQRDataOBJ;
  let { tinyData } = aPQRData;

  const tinyDataPlainText = Object.fromEntries(
    Object.entries(tinyData).map(([key, html]) => [key, htmlToPlainText(html)])
  );
  tinyData = tinyDataPlainText;

  if (!aPQRDataOBJ || typeof aPQRDataOBJ !== "object") {
    console.error("Invalid data provided");
    return;
  }
  if (!aPQRData || typeof aPQRData !== "object") {
    console.error("Invalid data provided");
    return;
  }
  //Normal Datafields
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
  pqrData.totalNoValidationprocessedBatches =
    aPQRData?.totalProcessValidationBatches ?? "";
  pqrData.totalNoReprocessedBatches = aPQRData?.totalReprocessedBatches ?? "";

  //Grids
  pqrData.manufacturingStage = gridDatas?.manufacturingStage?.data ?? [];
  pqrData.manufacturingSAPS = gridDatas?.manufacturingSAPS?.data ?? [];
  pqrData.rawMRS = gridDatas?.rawMRS?.data ?? [];
  pqrData.packingMRS = gridDatas?.packingMRS?.data ?? [];
  pqrData.expiredRMD = gridDatas?.expiredRMD?.data ?? [];
  pqrData.expiredPMD = gridDatas?.expiredPMD?.data ?? [];
  pqrData.reviewOfASL = gridDatas?.reviewOfASL?.data ?? [];
  pqrData.vendorQDORME = gridDatas?.vendorQDORME?.data ?? [];
  pqrData.vendorQDOPPM = gridDatas?.vendorQDOPPM?.data ?? [];
  pqrData.vendorQDPOG = gridDatas?.vendorQDPOG?.data ?? [];
  pqrData.codeTCTD = gridDatas?.codeTCTD?.data ?? [];
  pqrData.reviewORCEC = gridDatas?.reviewORCEC?.data ?? [];
  pqrData.capaDetails = gridDatas?.capaDetails?.data ?? [];
  pqrData.deviationDetails = gridDatas?.deviationDetails?.data ?? [];
  pqrData.oosDetails = gridDatas?.oosDetails?.data ?? [];
  pqrData.ootResults = gridDatas?.ootResults?.data ?? [];
  pqrData.ooaResults = gridDatas?.ooaResults?.data ?? [];
  pqrData.oolResults = gridDatas?.oolResults?.data ?? [];
  pqrData.unitOperation1 = gridDatas?.bufferFSDPV?.data ?? [];
  pqrData.unitOperation2 = gridDatas?.manufacturingSD?.data ?? [];
  pqrData.unitOperation3 = gridDatas?.unitOperation3?.data ?? [];
  pqrData.unitOperation4 = gridDatas?.unitOperation4?.data ?? [];
  pqrData.unitOperation5 = gridDatas?.unitOperation5?.data ?? [];
  pqrData.unitOperation6 = gridDatas?.unitOperation6?.data ?? [];
  pqrData.unitOperation7 = gridDatas?.unitOperation7?.data ?? [];
  pqrData.unitOperation8 = gridDatas?.unitOperation8?.data ?? [];
  pqrData.unitOperation9 = gridDatas?.unitOperation9?.data ?? [];
  pqrData.unitOperation10 = gridDatas?.unitOperation10?.data ?? [];
  pqrData.reviewODSTR = gridDatas?.reviewODSTR?.data ?? [];
  pqrData.reviewODSTR2 = gridDatas?.reviewODSTR2?.data ?? [];
  pqrData.reviewODSTR3 = gridDatas?.reviewODSTR3?.data ?? [];
  pqrData.reviewODSTR4 = gridDatas?.reviewODSTR4?.data ?? [];
  pqrData.reviewODSTR5 = gridDatas?.reviewODSTR5?.data ?? [];
  pqrData.reviewODSTR6 = gridDatas?.reviewODSTR6?.data ?? [];
  pqrData.reviewODSTR7 = gridDatas?.reviewODSTR7?.data ?? [];
  pqrData.reviewODSTR8 = gridDatas?.reviewODSTR8?.data ?? [];
  pqrData.reviewODSTR9 = gridDatas?.reviewODSTR9?.data ?? [];
  pqrData.reviewODSTR10 = gridDatas?.reviewODSTR10?.data ?? [];
  pqrData.reviewODSTR11 = gridDatas?.reviewODSTR11?.data ?? [];
  pqrData.reviewODSTR12 = gridDatas?.reviewODSTR12?.data ?? [];
  pqrData.reviewODSTR13 = gridDatas?.reviewODSTR13?.data ?? [];
  pqrData.reviewODSTR14 = gridDatas?.reviewODSTR14?.data ?? [];
  pqrData.reviewODSTR15 = gridDatas?.reviewODSTR15?.data ?? [];
  pqrData.reviewORMETR = gridDatas?.reviewORMETR?.data ?? [];
  pqrData.reviewOPMTR = gridDatas?.reviewOPMTR?.data ?? [];
  pqrData.reviewODP = gridDatas?.reviewODP?.data ?? [];
  pqrData.reviewODP2 = gridDatas?.reviewODP2?.data ?? [];
  pqrData.reviewODP3 = gridDatas?.reviewODP3?.data ?? [];
  pqrData.reviewODP4 = gridDatas?.reviewODP4?.data ?? [];
  pqrData.reviewODP5 = gridDatas?.reviewODP5?.data ?? [];
  pqrData.reviewODP6 = gridDatas?.reviewODP6?.data ?? [];
  pqrData.reviewODP7 = gridDatas?.reviewODP7?.data ?? [];
  pqrData.reviewODP8 = gridDatas?.reviewODP8?.data ?? [];
  pqrData.reviewODP9 = gridDatas?.reviewODP9?.data ?? [];
  pqrData.reviewODP10 = gridDatas?.reviewODP10?.data ?? [];
  pqrData.reviewODPFPTR = gridDatas?.reviewODPFPTR?.data ?? [];
  pqrData.summaryOOSS = gridDatas?.summaryOOSS?.data ?? [];
  pqrData.stabilitySR = gridDatas?.stabilitySR?.data ?? [];
  pqrData.reviewOVIRS = gridDatas?.reviewOVIRS?.data ?? [];
  pqrData.hVACQStatus = gridDatas?.hVACQStatus?.data ?? [];
  pqrData.sanitizationASDOU = gridDatas?.sanitizationASDOU?.data ?? [];
  pqrData.compressedGas = gridDatas?.compressedGas?.data ?? [];
  pqrData.reviewOfCPD = gridDatas?.reviewOfCPD?.data ?? [];
  pqrData.previewRPD = gridDatas?.previewRPD?.data ?? [];
  pqrData.currentOOS = gridDatas?.currentOOS?.data ?? [];
  pqrData.previewOOS = gridDatas?.previewOOS?.data ?? [];
  pqrData.currentOOAC = gridDatas?.currentOOAC?.data ?? [];
  pqrData.previewOOAC = gridDatas?.previewOOAC?.data ?? [];
  pqrData.currentOOAL = gridDatas?.currentOOAL?.data ?? [];
  pqrData.previewOOAL = gridDatas?.previewOOAL?.data ?? [];
  pqrData.currentOOSA = gridDatas?.currentOOSA?.data ?? [];
  pqrData.previewOOSA = gridDatas?.previewOOSA?.data ?? [];
  pqrData.currentOOT = gridDatas?.currentOOT?.data ?? [];
  pqrData.previewOOT = gridDatas?.previewOOT?.data ?? [];
  pqrData.currentCC = gridDatas?.currentCC?.data ?? [];
  pqrData.previewCC = gridDatas?.previewCC?.data ?? [];
  pqrData.currentLabI = gridDatas?.currentLabI?.data ?? [];
  pqrData.previewLabI = gridDatas?.previewLabI?.data ?? [];
  pqrData.currentMC = gridDatas?.currentMC?.data ?? [];
  pqrData.previewMC = gridDatas?.previewMC?.data ?? [];
  pqrData.currentRPQRN = gridDatas?.currentRPQRN?.data ?? [];

  pqrData.dossierRR = gridDatas?.dossierRR?.data ?? [];
  pqrData.dossierRRNma = gridDatas?.dossierRRNma?.data ?? [];
  pqrData.yieldTOS1 = gridDatas?.yieldTOS1?.data ?? [];
  pqrData.yieldTOS2 = gridDatas?.yieldTOS2?.data ?? [];
  pqrData.yieldTOS3 = gridDatas?.yieldTOS3?.data ?? [];
  pqrData.yieldTOS4 = gridDatas?.yieldTOS4?.data ?? [];
  pqrData.yieldTOS5 = gridDatas?.yieldTOS5?.data ?? [];
  pqrData.trendingOCPPS1 = gridDatas?.trendingOCPPS1?.data ?? [];
  pqrData.trendingOCPPS2 = gridDatas?.trendingOCPPS2?.data ?? [];
  pqrData.trendingOCPPS3 = gridDatas?.trendingOCPPS3?.data ?? [];
  pqrData.trendingOCPPS4 = gridDatas?.trendingOCPPS4?.data ?? [];
  pqrData.trendingOIPIPS1 = gridDatas?.trendingOIPIPS1?.data ?? [];
  pqrData.trendingOIPIPS2 = gridDatas?.trendingOIPIPS2?.data ?? [];
  pqrData.trendingOIPIPS3 = gridDatas?.trendingOIPIPS3?.data ?? [];
  pqrData.trendingOIPIPS4 = gridDatas?.trendingOIPIPS4?.data ?? [];
  pqrData.trendingOIPIPS5 = gridDatas?.trendingOIPIPS5?.data ?? [];

  //Tiny
  pqrData.msaSummary = tinyData?.tiny1 ?? "";
  pqrData.msa2Summary = tinyData?.tiny2 ?? "";
  pqrData.rawMRSSummary = tinyData?.tiny3 ?? "";
  pqrData.packingMRSummary = tinyData?.tiny4 ?? "";
  pqrData.expiredRMDSummary = tinyData?.tiny5 ?? "";
  pqrData.expiredPMDSummary = tinyData?.tiny6 ?? "";
  pqrData.reviewOfASLSummary = tinyData?.tiny7 ?? "";
  pqrData.vendorQDORMESummary = tinyData?.tiny8 ?? "";
  pqrData.vendorQDOPPMSummary = tinyData?.tiny9 ?? "";
  pqrData.vendorQDPOGSummary = tinyData?.tiny10 ?? "";
  pqrData.processValidationBatchesDetails = tinyData?.tiny11 ?? "";
  pqrData.reprocessingDetails = tinyData?.tiny12 ?? "";
  pqrData.microbialExcursionDetails = tinyData?.tiny13 ?? "";
  pqrData.codeTCTDSummary = tinyData?.tiny14 ?? "";
  pqrData.reviewOFManuProcessSummary = tinyData?.tiny15 ?? "";
  pqrData.brpDetails = tinyData?.tiny16 ?? "";
  pqrData.batchRepackingDetails = tinyData?.tiny17 ?? "";
  pqrData.reviewORCECSummary = tinyData?.tiny18 ?? "";
  pqrData.capaDetailsSummary = tinyData?.tiny19 ?? "";
  pqrData.deviationDetailsSummary = tinyData?.tiny20 ?? "";
  pqrData.batchFailuresRejectionsSummary = tinyData?.tiny21 ?? "";
  pqrData.oosDetailsSummary = tinyData?.tiny22 ?? "";
  pqrData.ootResultsSummary = tinyData?.tiny23 ?? "";
  pqrData.ooaResultsSummary = tinyData?.tiny24 ?? "";
  pqrData.oolResultsSummary = tinyData?.tiny25 ?? "";
  pqrData.CPPRSSummary = tinyData?.tiny26 ?? "";
  pqrData.reviewODSTRSummary = tinyData?.tiny27 ?? "";
  pqrData.reviewORMETRSummary = tinyData?.tiny28 ?? "";
  pqrData.reviewOPMTRSummary = tinyData?.tiny29 ?? "";
  pqrData.reviewODPSummary = tinyData?.tiny30 ?? "";
  pqrData.reviewODPFPTRSummary = tinyData?.tiny31 ?? "";
  pqrData.summaryOOSSSummary = tinyData?.tiny32 ?? "";
  pqrData.stabilitySRSummary = tinyData?.tiny33 ?? "";
  pqrData.reviewOVIRSSummary = tinyData?.tiny34 ?? "";
  pqrData.reviewOAMVSummary = tinyData?.tiny35 ?? "";
  pqrData.reviewOCTLSummary = tinyData?.tiny36 ?? "";
  pqrData.reviewOEMTAWTRSummary = tinyData?.tiny37 ?? "";
  pqrData.reviewLRSummary = tinyData?.tiny38 ?? "";
  pqrData.pMDSummary = tinyData?.tiny39 ?? "";
  pqrData.qDSummary = tinyData?.tiny40 ?? "";
  pqrData.cDSummary = tinyData?.tiny41 ?? "";
  pqrData.hVACSummary = tinyData?.tiny42 ?? "";
  pqrData.sASDOUSummary = tinyData?.tiny43 ?? "";
  pqrData.engineeringSummary = tinyData?.tiny44 ?? "";

  ///qsr
  pqrData.devSummary = tinyData?.tiny45 ?? "";
  pqrData.oosSummary = tinyData?.tiny46 ?? "";
  pqrData.ooacSummary = tinyData?.tiny47 ?? "";
  pqrData.ooalSummary = tinyData?.tiny48 ?? "";
  pqrData.oosaSummary = tinyData?.tiny49 ?? "";
  pqrData.ootSummary = tinyData?.tiny50 ?? "";
  pqrData.ccSummary = tinyData?.tiny51 ?? "";
  pqrData.liSummary = tinyData?.tiny52 ?? "";
  pqrData.mcSummary = tinyData?.tiny53 ?? "";
  pqrData.prpqrn = tinyData?.tiny54 ?? "";
  pqrData.reviewOpr = tinyData?.tiny55 ?? "";
  pqrData.reviewOrp = tinyData?.tiny56 ?? "";
  pqrData.reviewOsd = tinyData?.tiny57 ?? "";
  pqrData.reviewOppqrr = tinyData?.tiny58 ?? "";
  pqrData.reviewOqa = tinyData?.tiny59 ?? "";
  pqrData.reviewOma = tinyData?.tiny60 ?? "";
  pqrData.reviewOov = tinyData?.tiny61 ?? "";

  pqrData.dosVarSummary = tinyData?.tiny62 ?? "";
  pqrData.dosnewmSummary = tinyData?.tiny63 ?? "";
  pqrData.recSummary = tinyData?.tiny64 ?? "";
  pqrData.decSummary = tinyData?.tiny65 ?? "";
  // last tab
  pqrData.annexure1 = tinyData?.tiny66 ?? "";
  pqrData.annexure2 = tinyData?.tiny67 ?? "";
  pqrData.annexure3 = tinyData?.tiny68 ?? "";
  pqrData.annexure4 = tinyData?.tiny69 ?? "";
  pqrData.annexure5 = tinyData?.tiny70 ?? "";
  pqrData.annexure6 = tinyData?.tiny71 ?? "";
  pqrData.annexure7 = tinyData?.tiny72 ?? "";
  pqrData.annexure8 = tinyData?.tiny73 ?? "";
  pqrData.annexure9 = tinyData?.tiny74 ?? "";
  pqrData.annexure10 = tinyData?.tiny75 ?? "";
  pqrData.annexure11 = tinyData?.tiny76 ?? "";
  pqrData.annexure12 = tinyData?.tiny77 ?? "";
  pqrData.annexure13 = tinyData?.tiny78 ?? "";
  pqrData.annexure14 = tinyData?.tiny79 ?? "";
  pqrData.annexure15 = tinyData?.tiny80 ?? "";
  pqrData.annexure16 = tinyData?.tiny81 ?? "";
  pqrData.annexure17 = tinyData?.tiny82 ?? "";
  pqrData.annexure18 = tinyData?.tiny83 ?? "";
  pqrData.annexure19 = tinyData?.tiny84 ?? "";
  pqrData.annexure20 = tinyData?.tiny85 ?? "";
};

export const chatPdf = async (req, res) => {
  const apqrId = req.params.id;
  let aPQRData;
  try {
    const aPQRDataRes = await fetch(
      `http://localhost:4000/get-apqr/${apqrId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    aPQRData = await aPQRDataRes.json();

    setapqrdata(aPQRData);
  } catch (error) {
    console.error("Error fetching APQR data:", error);
    return res.status(500).send("Error fetching APQR data");
  }
  let browser;
  try {
    const base64Logo = await getBase64Image("public/connexologo.jpg");
    const base64Logo2 = await getBase64Image("public/symbiotecLogo.png");

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
      req.app.render(
        "header",
        { base64Image: base64Logo, base64Logo2: base64Logo2, product: pqrData },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", { product: pqrData }, (err, html) => {
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

    const filePath = path.resolve("pdfs", `APQR_Report_${apqrId}.pdf`);
    fs.writeFileSync(filePath, pdfBuffer);

    res.status(200).json({ filename: `APQR_Report_${apqrId}.pdf` });
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF", error);
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
    const aPQRDataRes = await fetch(
      `http://localhost:4000/get-apqr/${apqrId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    aPQRData = await aPQRDataRes.json();

    setapqrdata(aPQRData);
  } catch (error) {
    console.error("Error fetching APQR data:", error);
    return res.status(500).send("Error fetching APQR data");
  }
  let browser;
  try {
    const base64Logo = await getBase64Image("public/connexologo.jpg");
    const base64Logo2 = await getBase64Image("public/symbiotecLogo.png");

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
      req.app.render(
        "header",
        { base64Image: base64Logo, base64Logo2: base64Logo2, product: pqrData },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", { product: pqrData }, (err, html) => {
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
      format: "A2",
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

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=APQR_Report.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return res.status(500).send("Error generating PDF", error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

export const viewReportByID = async (req, res) => {
  const apqrId = req.params.id;

  let aPQRData;
  try {
    const aPQRDataRes = await fetch(
      `http://localhost:4000/get-apqr/${apqrId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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

export const generateAuditPdfbyId = async (req, res) => {
  const apqrId = req.params.id;
  let browser;
  let aPQRData;

  try {
    const aPQRAuditRes = await fetch(
      `http://localhost:4000/get-apqr-audit-trail/${apqrId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const aPQRDataRes = await fetch(
      `http://localhost:4000/get-apqr/${apqrId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    aPQRData = await aPQRDataRes.json();
    setapqrdata(aPQRData);

    const base64Logo = await getBase64Image("public/connexoLogo.jpg");
    const base64Logo2 = await getBase64Image("public/symbiotecLogo.png");
    const auditData = await aPQRAuditRes.json();
    const auditTrail = auditData.auditTrail;

    if (!auditTrail || !auditTrail.length) {
      return res
        .status(404)
        .json({ error: true, message: "No audit trail data found" });
    }

    const cleanedData = cleanAuditTrailData(auditTrail); // Clean HTML tags

    // Render audit report content using EJS
    const htmlContent = await new Promise((resolve, reject) => {
      req.app.render(
        "auditReport",
        { auditTrail, cleanedData },
        (err, html) => {
          if (err) reject(err);
          resolve(html);
        }
      );
    });

    const headerHtml = await new Promise((resolve, reject) => {
      req.app.render(
        "header",
        { base64Image: base64Logo, base64Logo2: base64Logo2, product: pqrData },
        (err, html) => {
          if (err) return reject(err);
          resolve(html);
        }
      );
    });

    const footerHtml = await new Promise((resolve, reject) => {
      req.app.render("footer", { product: pqrData }, (err, html) => {
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
      format: "a3",
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

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=APQR_Report.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    return res
      .status(500)
      .json({ error: true, message: "Error generating PDF", error });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
