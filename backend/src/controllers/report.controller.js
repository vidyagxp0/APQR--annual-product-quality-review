import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generatePdf = async (req, res) => {
  let browser;
  try {
    // Sample data to be passed to the template
    const sampleData = {
      name: "Example Product",
      batchNumber: "12345",
      manufacturingDate: new Date("2023-06-01"),
    };

    // Render the HTML with EJS
    const htmlContent = await new Promise((resolve, reject) => {
      req.app.render("report", { product: sampleData }, (err, html) => {
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

export { generatePdf };
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
