import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Catalog from "./Catalog";
import KickerWithRail from "./pages/KickerWithRail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TwoStepLedge from "./pages/TwoStepLedge";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Products/KickerWithRail" element={<KickerWithRail />} />
          <Route path="/Products/TwoStepLedge" element={<TwoStepLedge />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
