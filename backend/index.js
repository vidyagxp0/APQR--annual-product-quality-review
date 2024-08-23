import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import reportRouter from "./src/routes/report.route.js";
import apqrRouter from "./src/routes/apqr.route.js";
import helmet from "helmet";
import { connectToDB } from "./src/config/db.js";

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);
// Serve static files from the "public" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

//Routes
app.use("/", apqrRouter);
app.use("/report", reportRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", async () => {
  try {
    await connectToDB();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (e) {
    console.log("Error in database connection", e);
  }
});
