import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import reportRouter from "./src/routes/report.route.js";
import apqrRouter from "./src/routes/apqr.route.js";
import helmet from "helmet";
import { connectToDB } from "./src/config/db.js";
import config from "./src/config/config.json" assert { type: "json" };
import fs from "fs/promises"; // Use fs/promises for ES module support

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        frameAncestors: ["*"],
      },
    },
  })
);

// Resolve __dirname using fileURLToPath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfsFolder = path.resolve(__dirname, "pdfs");

app.use("/pdfs", express.static(pdfsFolder));

// Set the views directory and view engine
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", apqrRouter);
app.use("/report", reportRouter);

// Helper function to get base64 encoded image
const getBase64Image = async (filePath) => {
  try {
    const image = await fs.readFile(filePath);
    return `data:image/png;base64,${image.toString("base64")}`;
  } catch (error) {
    console.error("Error reading image file:", error);
    throw error;
  }
};

const PORT = config.development.PORT || 4000;
app.listen(PORT, "0.0.0.0", async () => {
  try {
    await connectToDB();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (e) {
    console.log("Error in database connection", e);
  }
});

export { getBase64Image };
