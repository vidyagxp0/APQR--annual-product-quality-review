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
