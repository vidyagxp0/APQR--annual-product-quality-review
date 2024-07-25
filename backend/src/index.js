import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import reportRouter from "./routes/report.route.js";

const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the "public" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/generate-pdf", reportRouter);

// app.get("/generate-pdf", async (req, res) => {

// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
