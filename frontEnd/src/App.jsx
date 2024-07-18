import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import APQR from "./pages/APQR";
import Analytics from "./pages/Analytics";
import Notification from "./pages/Notification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/new-pqr" element={<APQR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
