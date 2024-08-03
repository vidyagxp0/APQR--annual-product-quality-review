import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import APQR from "./pages/APQR";
import Analytics from "./pages/Analytics";
import Notification from "./pages/Notification";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TinyEditor from "./Component/TinyEditor";
import ApqrPanel from "./pages/ApqrPanel";
import ESignatureModal from "./Component/ESignatureModal";
import DownloadReportButton from "./pages/temp/DownloadReportButton";
import HighchartsChart from "./Component/Chart/HighchartsChart";
import HistogramHighChart from "./pages/temp/HistogramHighChart";
import ProbabilityHighChart from "./pages/temp/ProbabilityHighChart";
import AdvancedAnalytics from "./Component/AdvancedAnalytics";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<AdvancedAnalytics />} />
        <Route path="/analytics2" element={<Analytics />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/new-pqr" element={<APQR />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/apqr-panel" element={<ApqrPanel />} />
        <Route path="/test" element={<TinyEditor />} />
        <Route path="/test2" element={<ESignatureModal />} />
        <Route path="/pdftest" element={<DownloadReportButton />} />
        {/* <Route path="/chart" element={<Analytics5/>}/> */}
        <Route path="/highchart" element={<HighchartsChart />} />
        <Route path="/histogram" element={<HistogramHighChart />} />
        <Route path="/probability" element={<ProbabilityHighChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
