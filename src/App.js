import './App.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "./Components/layout/Navbar.jsx";
import Footer from "./Components/layout/Footer";
import ScrollToTop from "./Components/common/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Products from "./Pages/Product/Products";
import ProductDetail from "./Pages/Product/ProductDetail";


function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* All products */}
          <Route path="/products" element={<Products />} />

          {/* Single product */}
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="*" element={<h2 style={{ padding: 20 }}>Page Not Found</h2>} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
