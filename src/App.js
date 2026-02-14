import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import "./style.css";


function App() {
  return (
    <Router>

      {/* 🔹 Top Company Header */}
      <div className="top-header">
        <div className="company-box">
          <img
            src="/images/logo.png"
            alt="Company Logo"
            className="company-logo"
          />
          <h2 className="company-name">Kembara Afiat</h2>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>

    </Router>
  );
}

export default App;
