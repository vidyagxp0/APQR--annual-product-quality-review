import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import APQR from "./pages/APQR";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<Dashboard />} />
        <Route path="/new-pqr" element={<APQR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
