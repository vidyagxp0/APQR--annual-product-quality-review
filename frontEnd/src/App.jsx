import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import APQR from "./pages/APQR";
import Analytics from "./pages/Analytics";
import Notification from "./pages/Notification";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TinyEditor from "./Component/TinyEditor";
import ApqrPanel from "./pages/ApqrPanel";
import ESignatureModal from "./Component/ESignatureModal";
import DownloadReportButton from "./Component/DownloadReportButton";
import HighchartsLine from "./Component/Analytics/HighchartsLine";
import AdvancedAnalytics from "./pages/AdvancedAnalytics";
import Logs from "./pages/Logs";
import ViewReport from "./pages/ViewReport";
import NewAPQR from "./pages/NewAPQR/NewAPQR";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Panel */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* User */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/new-pqr" element={<APQR />} /> */}
        <Route path="/new-pqr" element={<NewAPQR />} />
        <Route path="/apqr-panel" element={<ApqrPanel />} />
        <Route path="/analytics" element={<AdvancedAnalytics />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/view-report" element={<ViewReport />} />

        {/* test */}
        <Route path="/analytics2" element={<Analytics />} />
        <Route path="/test" element={<TinyEditor />} />
        <Route path="/test2" element={<ESignatureModal />} />
        <Route path="/pdftest" element={<DownloadReportButton />} />
        <Route path="/highchart" element={<HighchartsLine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
