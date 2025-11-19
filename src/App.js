import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product/Products';
import ProductDetail from './Pages/Product/ProductDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
